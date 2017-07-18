"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/toPromise");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AckCache_1 = require("./AckCache");
var AckQue_1 = require("./AckQue");
/** Http util with offline config for request failures */
var AckApi = (function () {
    function AckApi(http) {
        this.http = http;
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
    }
    /** START HERE. Handlers must be registered before sending requests
      @options{maxTry:50}
    */
    AckApi.prototype.registerHandler = function (name, handler, options) {
        var _this = this;
        options = options || { maxTry: 50 };
        handler = handler || (function (config) {
            return _this.request(config);
        });
        this.AckQue.registerHandler(name, handler);
        return this;
    };
    AckApi.prototype.getQue = function (name) {
        return this.AckQue.get(name);
    };
    AckApi.prototype.getCache = function (name) {
        return this.AckCache.get(name);
    };
    /** when back online, run this function */
    AckApi.prototype.processQue = function (name) {
        var _this = this;
        this.AckQue.paramHandler(name, function (config) { return _this._fetch(config); });
        return this.AckQue.processQue(name);
    };
    /** clears POST/PUT/PATCH/DELETE que */
    AckApi.prototype.clearQue = function (name) {
        return this.AckQue.clear(name);
        //.then( ()=>this.AckCache.clear(name) )
    };
    /** clears GET cache */
    AckApi.prototype.clearCache = function (name) {
        return this.AckCache.clear(name);
    };
    /** method all request transactions tunnel thru to instead try for cache first
      @config - {
        url:string
        method:string - GET,POST,DELETE,PUT
        queModel:{
          name, maxTry:50, expires||maxAge, allowExpired
        }
      }
  
      HINT: @config.queModel, when defined:
        - POST/PUT/PATCH requests goto que if they fail.
        - GET responses are cached with optional expires or maxAge option
    */
    AckApi.prototype.request = function (config) {
        var defaults = {
            method: 'GET',
            //url:this.config.baseUrl+config.url,
            headers: {},
            timeout: 6500 //4000//8000
        };
        var request = Object.assign(defaults, (config || {}));
        request.url = this.config.baseUrl + request.url;
        Object.assign(request.headers, this.config.$http.headers); //enforced config/defaults
        //has cache instructions?
        if (request.queModel) {
            return this.requestQueModel(request);
        }
        return this._fetch(request);
    };
    AckApi.prototype.getCacheByNamedRequest = function (request) {
        var _this = this;
        return this.AckCache.get(request.queModel.name)
            .then(function (routes) {
            routes = routes || {};
            return routes[request.url];
        })
            .then(function (cache) { return _this.processCacheGet(cache, request); });
    };
    AckApi.prototype.requestQueModel = function (request) {
        var _this = this;
        if (request.queModel && request.queModel.constructor == String) {
            request.queModel = { name: request.queModel };
        }
        if (request.method === "GET") {
            return this.getCacheByNamedRequest(request);
        }
        this.AckQue.paramHandler(request.queModel.name, function (config) { return _this._fetch(config); });
        //request is a PUT, POST, PATCH, or DELETE
        return this._fetch(request)
            .catch(function (e) { return _this.postRequestFail(e, request); });
    };
    AckApi.prototype.processCacheGet = function (cache, cfg) {
        var _this = this;
        if (cache == null)
            return this._fetch(cfg);
        return this.AckCache.cacheToReturn(cfg.queModel.name, cache, cfg.queModel)
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
            delete requestSave.queModel; //only used for GET method
            return this.AckQue.set(request.queModel.name, requestSave)
                .then(function () { return Promise.reject(e); });
        }
        return Promise.reject(e);
    };
    /** master method for sending requests and caching responses using $http requests
      @cfg{
        catch:'data'//typically only error data is returned, but if catch!='data' then entire response is returned for a caught error
        promise:'data'//typically only data is returned, but if promise!='data' then entire response is returned
        headers:{}//when sending a file 'Content-Type':undefined so that no content-type header is sent
      }
    */
    AckApi.prototype._fetch = function (cfg) {
        var _this = this;
        upgradeConfig(cfg);
        var request = new http_1.Request(cfg); //cfg
        return this.http.request(request)
            .toPromise()
            .then(function (response) { return _this.processFetchByConfig(response, cfg); })
            .catch(function (e) { return _this.httpFailByConfig(e, cfg); });
    };
    AckApi.prototype.processFetchByConfig = function (response, request) {
        var data = response['_body']; //response['data'] || 
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
        return output;
    };
    AckApi.prototype.httpFailByConfig = function (e, cfg) {
        var isReduceData = cfg.catch == null || cfg.catch == 'data';
        var isCatchData = isReduceData && e.data && e.data.error;
        //find JSON error object and reduce to
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
    /**
      @path:url
      @config:{
        params:{}//url parameters
      }
    */
    AckApi.prototype.get = function (path, config) {
        var cfg = Object.assign({}, config);
        cfg.method = "GET";
        cfg.url = path;
        return this.request(cfg);
    };
    AckApi.prototype.post = function (path, data, config) {
        var cfg = Object.assign({}, config);
        cfg.method = "POST";
        //cfg.data = data
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
        //cfg.data = data
        cfg.body = data;
        cfg.url = path;
        return this.request(cfg);
    };
    /** all process ques with be run with navigator.onLine */
    /*monitorOnlineStatus(){
      const onOnline = ()=>{
        this.AckQue.processAllQues()
      }
  
      window.addEventListener("online", onOnline)
    }*/
    AckApi.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AckApi.ctorParameters = function () { return [
        { type: http_1.Http, },
    ]; };
    return AckApi;
}());
exports.AckApi = AckApi;
/** prevent angular1 from assuming the header to send is application/json */
function upgradeConfig(cfg) {
    cfg.method = cfg.method || 'GET';
    var isFormData = cfg.data && FormData && cfg.data.constructor == FormData;
    if (isFormData) {
        var preventAutoContentType = !cfg.headers || Object.keys(cfg.headers).filter(function (h) { return h.search(/content-type/i) < 0; });
        if (preventAutoContentType) {
            cfg.headers['Content-Type'] = undefined; //'multipart/form-data;'
        }
    }
    return cfg;
}
//# sourceMappingURL=AckApi.js.map