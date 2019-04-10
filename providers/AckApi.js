"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const AckCache_1 = require("./AckCache");
const AckQue_1 = require("./AckQue");
function TimeOutError(message) {
    Error["captureStackTrace"](this, this.constructor);
    this.name = this.constructor.name;
    this.status = 504;
    this.code = "gateway_timeout";
    this.message = message || "Could not connect to server or server did not respond in a timely manner. Please check internet connection and then try again.";
}
exports.TimeOutError = TimeOutError;
TimeOutError.prototype = Object.create(Error.prototype);
let AckApi = class AckApi {
    constructor(HttpClient) {
        this.HttpClient = HttpClient;
        this.response = new core_1.EventEmitter();
        this.Request = new core_1.EventEmitter();
        this.AuthError = new core_1.EventEmitter();
        this.ApiError = new core_1.EventEmitter();
        this.AckCache = new AckCache_1.AckCache();
        this.AckQue = new AckQue_1.AckQue();
        this.config = {
            baseUrl: "",
            $http: {
                method: "GET",
                headers: {},
                timeout: 6500
            }
        };
        this.paramConfig();
    }
    paramConfig() { }
    registerHandler(name, handler, options) {
        options = options || { maxTry: 50 };
        handler = handler || (config => this.request(config));
        this.AckQue.registerHandler(name, handler);
        return this;
    }
    getQue(name) {
        return this.AckQue.get(name);
    }
    getCache(name) {
        return this.AckCache.get(name);
    }
    processQue(name) {
        this.AckQue.paramHandler(name, config => this._fetch(config));
        return this.AckQue.processQue(name);
    }
    clearQue(name) {
        return this.AckQue.clear(name);
    }
    clearCache(name) {
        return this.AckCache.clear(name);
    }
    request(config) {
        const defaults = Object.assign({}, this.config.$http);
        defaults.headers = Object.assign({}, this.config.$http.headers);
        const request = Object.assign(defaults, (config || {}));
        request.url = this.config.baseUrl + request.url;
        if (request.offlineModel) {
            return this.requestOfflineModel(request);
        }
        return this._fetch(request);
    }
    getCacheByNamedRequest(request) {
        const offlineModel = request.offlineModel;
        return this.AckCache.get(offlineModel.name, offlineModel)
            .then(routes => {
            routes = routes || {};
            const cacheName = this.getStorageNameByRequest(request);
            return routes[cacheName];
        })
            .then(cache => this.processCacheGet(cache, request));
    }
    getStorageNameByRequest(request) {
        if (request.params) {
            const paramKeys = Object.keys(request.params);
            if (!paramKeys.length)
                return request.url;
            let url = request.url + (request.url.search(/\?/) >= 0 ? "&" : "?");
            paramKeys.sort().forEach(name => url += name + "=" + request.params[name] + "&");
            return url.substring(0, url.length - 1);
        }
        return request.url;
    }
    requestOfflineModel(request) {
        let offlineModel = request.offlineModel;
        if (offlineModel && offlineModel.constructor == String) {
            request.offlineModel = offlineModel = { name: request.offlineModel };
        }
        if (request.method === "GET") {
            return this.getCacheByNamedRequest(request);
        }
        this.AckQue.paramHandler(offlineModel.name, config => this._fetch(config));
        return this._fetch(request)
            .catch(e => this.postRequestFail(e, request));
    }
    processCacheGet(cache, cfg) {
        if (cache == null)
            return this._fetch(cfg);
        const offlineModel = cfg.offlineModel;
        return this.AckCache.cacheToReturn(offlineModel.name, cache, offlineModel)
            .then(rtn => {
            const willExpire = this.AckCache.optionsKillCache(offlineModel);
            if (rtn && !willExpire) {
                console.log("AckApi fetched cache that will never expire. Set offlineModel.expires=0 or offlineModel.maxAge=0 to avoid this message", rtn);
            }
            if (rtn != null) {
                return rtn;
            }
            return this._fetch(cfg);
        });
    }
    postRequestFail(e, request) {
        const saveWorthy = e.status == 0 || e.status == -1 || e.status == 503;
        if (!saveWorthy)
            return Promise.reject(e);
        request.sendFailMeta = request.sendFailMeta || {};
        request.sendFailMeta.offlineId = Date.now();
        request.sendFailMeta.lastAttempt = new Date();
        request.sendFailMeta.attempts = request.sendFailMeta.attempts == null ? 1 : ++request.sendFailMeta.attempts;
        request.sendFailMeta.maxTry = request.sendFailMeta.maxTry || 50;
        const tryAgainLater = request.sendFailMeta.maxTry && request.sendFailMeta.attempts <= request.sendFailMeta.maxTry;
        e.sendFailMeta = request.sendFailMeta;
        if (tryAgainLater) {
            const requestSave = Object.assign({}, request);
            delete requestSave.offlineModel;
            const offlineModel = request.offlineModel;
            return this.AckQue.set(offlineModel.name, requestSave)
                .then(() => Promise.reject(e));
        }
        return Promise.reject(e);
    }
    _fetch(cfg) {
        upgradeConfig(cfg);
        const cfgPlus = Object.assign({}, cfg);
        if (cfg.params) {
            cfgPlus.params = new http_1.HttpParams({
                fromObject: cfg.params
            });
        }
        if (cfg.headers) {
            cfgPlus.headers = new http_1.HttpHeaders(cfg.headers);
        }
        const request = new http_1.HttpRequest(cfg.method, cfg.url, cfg.body, cfgPlus);
        const promise = (resolve, reject) => {
            let resolved = false;
            this.Request.emit(request);
            const req = this.HttpClient.request(request)
                .subscribe(event => {
                if (event.type === http_1.HttpEventType.Response) {
                    resolved = true;
                    resolve(event);
                }
            }, err => {
                resolved = true;
                reject(err);
            });
            if (cfg.timeout) {
                setTimeout(() => {
                    if (resolved)
                        return;
                    req.unsubscribe();
                    const timeoutError = new TimeOutError();
                    Object.assign(timeoutError, request);
                    timeoutError.timeout = cfg.timeout;
                    reject(timeoutError);
                }, cfg.timeout);
            }
        };
        return new Promise(promise)
            .then((response) => this.processFetchByConfig(response, cfg))
            .catch(e => this.httpFailByConfig(e, cfg));
    }
    processFetchByConfig(response, request) {
        this.response.emit(response);
        const data = response.body || response["_body"];
        const isJson = data && response.headers.get("Content-Type") == "application/json";
        if (isJson && !response["data"]) {
            try {
                response["data"] = JSON.parse(data);
            }
            catch (e) { }
        }
        response["data"] = data;
        const isDataMode = !request.promise || request.promise == "data";
        const output = isDataMode ? data : response;
        const isCacheReponse = request.method === "GET" && request.offlineModel;
        if (isCacheReponse) {
            return this.requestResponseToCache(request, output)
                .then(() => output);
        }
        return Promise.resolve(output);
    }
    httpFailByConfig(e, cfg) {
        const isReduceData = cfg.catch == null || cfg.catch == "data";
        const data = e["data"];
        const isCatchData = isReduceData && data && data.error;
        if (isCatchData) {
            const newError = new Error();
            Object.assign(newError, e["data"].error);
            e = newError;
        }
        e["method"] = e["method"] || cfg.method;
        if (e["status"] == 401) {
            this.AuthError.emit(e);
        }
        else {
            this.ApiError.emit(e);
        }
        return Promise.reject(e);
    }
    requestResponseToCache(request, output) {
        const cachename = request.offlineModel.name || request.offlineModel;
        return this.AckCache.get(cachename)
            .then(routes => {
            routes = routes || {};
            const cacheName = this.getStorageNameByRequest(request);
            routes[cacheName] = { cache: output };
            this.AckCache.dataOptionsCache(routes[request.url], request.offlineModel, output);
            return routes;
        })
            .then(routes => this.AckCache.set(cachename, routes));
    }
    get(path, config) {
        const cfg = Object.assign({}, config);
        cfg.method = "GET";
        cfg.url = path;
        return this.request(cfg);
    }
    post(path, data, config) {
        const cfg = Object.assign({}, config);
        cfg.method = "POST";
        cfg.body = data;
        cfg.url = path;
        return this.request(cfg);
    }
    delete(path, config) {
        const cfg = Object.assign({}, config);
        cfg.method = "DELETE";
        cfg.url = path;
        return this.request(cfg);
    }
    put(path, data, config) {
        const cfg = Object.assign({}, config);
        cfg.method = "PUT";
        cfg.body = data;
        cfg.url = path;
        return this.request(cfg);
    }
};
AckApi = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], AckApi);
exports.AckApi = AckApi;
function upgradeConfig(cfg) {
    cfg.method = cfg.method || "GET";
    cfg.reportProgress = cfg.reportProgress || false;
    if (cfg.params) {
        for (let key in cfg.params) {
            if (cfg.params[key] == null) {
                cfg.params[key] = "";
            }
        }
    }
    return cfg;
}
