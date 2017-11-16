"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AckCache_1 = require("./AckCache");
var AckQue_1 = require("./AckQue");
function TimeOutError(message) {
    Error["captureStackTrace"](this, this.constructor);
    this.name = this.constructor.name;
    this.status = 401;
    this.code = "credentials_required";
    this.message = message || "No authorization token was found";
}
exports.TimeOutError = TimeOutError;
TimeOutError.prototype = Object.create(Error.prototype);
var AckApi = (function () {
    function AckApi(HttpClient) {
        this.HttpClient = HttpClient;
        this.response = new core_1.EventEmitter();
        this.AuthError = new core_1.EventEmitter();
        this.ApiError = new core_1.EventEmitter();
        this.config = {
            method: 'GET',
            baseUrl: '',
            $http: {
                headers: {}
            }
        };
        this.AckCache = new AckCache_1.AckCache();
        this.AckQue = new AckQue_1.AckQue();
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
        var defaults = {
            method: 'GET',
            headers: {},
            timeout: 6500
        };
        var request = Object.assign(defaults, (config || {}));
        request.url = this.config.baseUrl + request.url;
        Object.assign(request.headers, this.config.$http.headers);
        if (request.queModel) {
            return this.requestQueModel(request);
        }
        return this._fetch(request);
    };
    AckApi.prototype.getCacheByNamedRequest = function (request) {
        var _this = this;
        var queModel = request.queModel;
        return this.AckCache.get(queModel.name)
            .then(function (routes) {
            routes = routes || {};
            return routes[request.url];
        })
            .then(function (cache) { return _this.processCacheGet(cache, request); });
    };
    AckApi.prototype.requestQueModel = function (request) {
        var _this = this;
        var queModel = request.queModel;
        if (queModel && queModel.constructor == String) {
            request.queModel = queModel = { name: request.queModel };
        }
        if (request.method === "GET") {
            return this.getCacheByNamedRequest(request);
        }
        this.AckQue.paramHandler(queModel.name, function (config) { return _this._fetch(config); });
        return this._fetch(request)
            .catch(function (e) { return _this.postRequestFail(e, request); });
    };
    AckApi.prototype.processCacheGet = function (cache, cfg) {
        var _this = this;
        if (cache == null)
            return this._fetch(cfg);
        var queModel = cfg.queModel;
        return this.AckCache.cacheToReturn(queModel.name, cache, queModel)
            .then(function (rtn) {
            var willExpire = rtn && _this.AckCache.optionsKillCache(cfg.queModel);
            if (!willExpire) {
                console.log('AckApi fetched cache that will never expire. Set queModel.expires=0 or queModel.maxAge=0 to avoid this message');
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
        request.offlineMeta = request.offlineMeta || {};
        request.offlineMeta.offlineId = Date.now();
        request.offlineMeta.lastAttempt = new Date();
        request.offlineMeta.attempts = request.offlineMeta.attempts == null ? 1 : ++request.offlineMeta.attempts;
        request.offlineMeta.maxTry = request.offlineMeta.maxTry || 50;
        var tryAgainLater = request.offlineMeta.maxTry && request.offlineMeta.attempts <= request.offlineMeta.maxTry;
        e.offlineMeta = request.offlineMeta;
        if (tryAgainLater) {
            var requestSave = Object.assign({}, request);
            delete requestSave.queModel;
            var queModel = request.queModel;
            return this.AckQue.set(queModel.name, requestSave)
                .then(function () { return Promise.reject(e); });
        }
        return Promise.reject(e);
    };
    AckApi.prototype._fetch = function (cfg) {
        var _this = this;
        upgradeConfig(cfg);
        var request = new http_1.Request(cfg);
        return new Promise(function (resolve, reject) {
            var req = _this.HttpClient.request(request).subscribe(function (res) { return resolve(res); });
            if (cfg.timeout) {
                setTimeout(function () {
                    req.unsubscribe();
                    var timeoutError = new TimeOutError('Request timed out. Server did NOT respond timely enough');
                    timeoutError.timeout = cfg.timeout;
                    reject(timeoutError);
                }, cfg.timeout);
            }
        });
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
        if (request.method === "GET" && request.queModel) {
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
        var cachename = request.queModel.name || request.queModel;
        return this.AckCache.get(cachename)
            .then(function (routes) {
            routes = routes || {};
            routes[request.url] = { cache: output };
            _this.AckCache.dataOptionsCache(routes[request.url], request.queModel, output);
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
    var isFormData = cfg.data && FormData && cfg.data.constructor == FormData;
    if (isFormData) {
        var preventAutoContentType = !cfg.headers || Object.keys(cfg.headers).filter(function (h) { return h.search(/content-type/i) < 0; });
        if (preventAutoContentType) {
            cfg.headers['Content-Type'] = undefined;
        }
    }
    if (cfg.params) {
        for (var key in cfg.params) {
            if (cfg.params[key] == null) {
                cfg.params[key] = '';
            }
        }
    }
    return cfg;
}
