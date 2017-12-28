"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AckCache_1 = require("./AckCache");
var AckQue_1 = require("./AckQue");
function TimeOutError(message) {
    Error["captureStackTrace"](this, this.constructor);
    this.name = this.constructor.name;
    this.status = 504;
    this.code = "gateway_timeout";
    this.message = message || "The server did not respond in a timely manner";
}
exports.TimeOutError = TimeOutError;
TimeOutError.prototype = Object.create(Error.prototype);
var AckApi = (function () {
    function AckApi(HttpClient) {
        this.HttpClient = HttpClient;
        this.response = new core_1.EventEmitter();
        this.AuthError = new core_1.EventEmitter();
        this.ApiError = new core_1.EventEmitter();
        this.AckCache = new AckCache_1.AckCache();
        this.AckQue = new AckQue_1.AckQue();
        this.config = {
            baseUrl: '',
            $http: {
                method: 'GET',
                headers: {},
                timeout: 6500
            }
        };
        this.paramConfig();
    }
    AckApi.prototype.paramConfig = function () { };
    AckApi.prototype.registerHandler = function (name, handler, options) {
        var _this = this;
        options = options || { maxTry: 50 };
        handler = handler || (function (config) { return _this.request(config); });
        this.AckQue.registerHandler(name, handler);
        return this;
    };
    AckApi.prototype.getQue = function (name) {
        return this.AckQue.get(name);
    };
    AckApi.prototype.getCache = function (name) {
        return this.AckCache.get(name);
    };
    AckApi.prototype.processQue = function (name) {
        var _this = this;
        this.AckQue.paramHandler(name, function (config) { return _this._fetch(config); });
        return this.AckQue.processQue(name);
    };
    AckApi.prototype.clearQue = function (name) {
        return this.AckQue.clear(name);
    };
    AckApi.prototype.clearCache = function (name) {
        return this.AckCache.clear(name);
    };
    AckApi.prototype.request = function (config) {
        var defaults = __assign({}, this.config.$http);
        defaults.headers = __assign({}, this.config.$http.headers);
        var request = Object.assign(defaults, (config || {}));
        request.url = this.config.baseUrl + request.url;
        if (request.offlineModel) {
            return this.requestOfflineModel(request);
        }
        return this._fetch(request);
    };
    AckApi.prototype.getCacheByNamedRequest = function (request) {
        var _this = this;
        var offlineModel = request.offlineModel;
        return this.AckCache.get(offlineModel.name)
            .then(function (routes) {
            routes = routes || {};
            var cacheName = _this.getSotageNameByRequest(request);
            return routes[cacheName];
        })
            .then(function (cache) { return _this.processCacheGet(cache, request); });
    };
    AckApi.prototype.getSotageNameByRequest = function (request) {
        if (request.params) {
            var paramKeys = Object.keys(request.params);
            if (!paramKeys.length)
                return request.url;
            var url_1 = request.url + (request.url.search(/\?/) >= 0 ? '&' : '?');
            paramKeys.sort().forEach(function (name) { return url_1 += name + '=' + request.params[name] + '&'; });
            return url_1.substring(0, url_1.length - 1);
        }
        return request.url;
    };
    AckApi.prototype.requestOfflineModel = function (request) {
        var _this = this;
        var offlineModel = request.offlineModel;
        if (offlineModel && offlineModel.constructor == String) {
            request.offlineModel = offlineModel = { name: request.offlineModel };
        }
        if (request.method === "GET") {
            return this.getCacheByNamedRequest(request);
        }
        this.AckQue.paramHandler(offlineModel.name, function (config) { return _this._fetch(config); });
        return this._fetch(request)
            .catch(function (e) { return _this.postRequestFail(e, request); });
    };
    AckApi.prototype.processCacheGet = function (cache, cfg) {
        var _this = this;
        if (cache == null)
            return this._fetch(cfg);
        var offlineModel = cfg.offlineModel;
        return this.AckCache.cacheToReturn(offlineModel.name, cache, offlineModel)
            .then(function (rtn) {
            var willExpire = rtn && _this.AckCache.optionsKillCache(offlineModel);
            if (!willExpire) {
                console.log('AckApi fetched cache that will never expire. Set offlineModel.expires=0 or offlineModel.maxAge=0 to avoid this message', rtn);
            }
            if (rtn != null) {
                return rtn;
            }
            return _this._fetch(cfg);
        });
    };
    AckApi.prototype.postRequestFail = function (e, request) {
        var saveWorthy = e.status == 0 || e.status == -1 || e.status == 503;
        if (!saveWorthy)
            return Promise.reject(e);
        request.sendFailMeta = request.sendFailMeta || {};
        request.sendFailMeta.offlineId = Date.now();
        request.sendFailMeta.lastAttempt = new Date();
        request.sendFailMeta.attempts = request.sendFailMeta.attempts == null ? 1 : ++request.sendFailMeta.attempts;
        request.sendFailMeta.maxTry = request.sendFailMeta.maxTry || 50;
        var tryAgainLater = request.sendFailMeta.maxTry && request.sendFailMeta.attempts <= request.sendFailMeta.maxTry;
        e.sendFailMeta = request.sendFailMeta;
        if (tryAgainLater) {
            var requestSave = Object.assign({}, request);
            delete requestSave.offlineModel;
            var offlineModel = request.offlineModel;
            return this.AckQue.set(offlineModel.name, requestSave)
                .then(function () { return Promise.reject(e); });
        }
        return Promise.reject(e);
    };
    AckApi.prototype._fetch = function (cfg) {
        var _this = this;
        upgradeConfig(cfg);
        var request = new http_1.Request(cfg);
        return new Promise(function (resolve, reject) {
            var resolved = false;
            var req = _this.HttpClient.request(request)
                .subscribe(function (res) {
                resolved = true;
                resolve(res);
            }, function (err) {
                resolved = true;
                reject(err);
            });
            if (cfg.timeout) {
                setTimeout(function () {
                    if (resolved)
                        return;
                    req.unsubscribe();
                    var timeoutError = new TimeOutError('Request timed out. Server did NOT respond timely enough');
                    timeoutError.timeout = cfg.timeout;
                    reject(timeoutError);
                }, cfg.timeout);
            }
        })
            .then(function (response) { return _this.processFetchByConfig(response, cfg); })
            .catch(function (e) { return _this.httpFailByConfig(e, cfg); });
    };
    AckApi.prototype.processFetchByConfig = function (response, request) {
        this.response.emit(response);
        var data = response['_body'];
        var isJson = data && response.headers.get('Content-Type') == 'application/json';
        if (isJson && !response['data']) {
            try {
                response['data'] = JSON.parse(data);
            }
            catch (e) { }
        }
        var isDataMode = !request.promise || request.promise == 'data';
        var output = isDataMode ? (response['data'] || data) : response;
        if (request.method === "GET" && request.offlineModel) {
            return this.requestResponseToCache(request, output)
                .then(function () { return output; });
        }
        return Promise.resolve(output);
    };
    AckApi.prototype.httpFailByConfig = function (e, cfg) {
        var isReduceData = cfg.catch == null || cfg.catch == 'data';
        var isCatchData = isReduceData && e.data && e.data.error;
        if (isCatchData) {
            var newError = new Error();
            Object.assign(newError, e.data.error);
            e = newError;
        }
        if (e.status == 401) {
            this.AuthError.emit(e);
        }
        else {
            this.ApiError.emit(e);
        }
        return Promise.reject(e);
    };
    AckApi.prototype.requestResponseToCache = function (request, output) {
        var _this = this;
        var cachename = request.offlineModel.name || request.offlineModel;
        return this.AckCache.get(cachename)
            .then(function (routes) {
            routes = routes || {};
            var cacheName = _this.getSotageNameByRequest(request);
            routes[cacheName] = { cache: output };
            _this.AckCache.dataOptionsCache(routes[request.url], request.offlineModel, output);
            return routes;
        })
            .then(function (routes) { return _this.AckCache.set(cachename, routes); });
    };
    AckApi.prototype.get = function (path, config) {
        var cfg = Object.assign({}, config);
        cfg.method = "GET";
        cfg.url = path;
        return this.request(cfg);
    };
    AckApi.prototype.post = function (path, data, config) {
        var cfg = Object.assign({}, config);
        cfg.method = "POST";
        cfg.body = data;
        cfg.url = path;
        return this.request(cfg);
    };
    AckApi.prototype.delete = function (path, config) {
        var cfg = Object.assign({}, config);
        cfg.method = "DELETE";
        cfg.url = path;
        return this.request(cfg);
    };
    AckApi.prototype.put = function (path, data, config) {
        var cfg = Object.assign({}, config);
        cfg.method = "PUT";
        cfg.body = data;
        cfg.url = path;
        return this.request(cfg);
    };
    AckApi.decorators = [
        { type: core_1.Injectable },
    ];
    AckApi.ctorParameters = function () { return [
        { type: http_1.Http, },
    ]; };
    return AckApi;
}());
exports.AckApi = AckApi;
function upgradeConfig(cfg) {
    cfg.method = cfg.method || 'GET';
    cfg.reportProgress = cfg.reportProgress || false;
    if (cfg.params) {
        for (var key in cfg.params) {
            if (cfg.params[key] == null) {
                cfg.params[key] = '';
            }
        }
    }
    return cfg;
}
