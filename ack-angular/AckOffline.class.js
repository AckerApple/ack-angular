"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import localForage from "localforage/dist/localforage.js"
var localforage_1 = require("localforage");
//import localForage from "./localforage-build"
//import localForage from "./localforage-build"
var supportsNav = typeof (navigator) != 'undefined';
var AckOffline = (function () {
    function AckOffline() {
        this.prefix = "offline";
        this.handlers = [];
    }
    AckOffline.prototype.remove = function (name) {
        return localforage_1.default.removeItem(this.prefix + '-' + name);
    };
    AckOffline.prototype.get = function (name) {
        return localforage_1.default.getItem(this.prefix + '-' + name);
    };
    AckOffline.prototype.set = function (name, data) {
        return localforage_1.default.setItem(this.prefix + '-' + name, data);
    };
    AckOffline.prototype.validate = function (data, config) {
        var exists = data !== null && typeof data.cache !== "undefined";
        return exists && !this.expired(data._timestamp, config.expires);
    };
    AckOffline.prototype.expired = function (stamp, expires) {
        var diff = Date.now() - expires;
        var expired = stamp <= diff;
        return expires && expired ? true : false;
    };
    /**
      Creates que handler. Returns self. Most likely, use newQueModel
      @options - {
        handler : dataArray=> - overrides $http posting for que processing
        onData : data=> - callback fired everytime data is retrieved
        expires: Number - how many milisecs can a saved transmission live in cache
      }
    */
    /*newQueModel(name,options={}){
      options.name = name
      this.addQueModel(name, options)
      return new QueModel(this, options)
    }*/
    /**
      Creates que handler. Returns self. Most likely, use newQueModel
      @options - {
        handler : dataArray=> - overrides $http posting for que processing
        onData : data=> - callback fired everytime data is retrieved
      }
    */
    /*addQueModel(name,options={}){
      return this.registerQueueHandler(name, trans=>{
        let prom = this.$http(trans)
  
        if(options.onData){
          prom = prom.then(response=>{
            if(response.data){
              options.onData(response.data)
            }
          })
        }
  
        return prom.catch(e=>this.ErrorHandler.record(e))
      })
    }*/
    AckOffline.prototype.paramCache = function (name, options) {
        options = options || {};
        options.param = options.param || [];
        return this.getCache(name, options);
    };
    AckOffline.prototype.paramSaveCache = function (name, options) {
        var _this = this;
        return this.paramCache(name, options)
            .then(function (items) { return _this.setCache(name, items); });
    };
    AckOffline.prototype.getCache = function (name, options) {
        var _this = this;
        options = options || {};
        return this.get(name)
            .then(function (data) {
            if (_this.validate(data, options)) {
                return data['cache'];
            }
            if (data) {
                if (data['cache'] == null && data['_timestamp'] == null) {
                    return data;
                }
                if (!options.expires) {
                    return data['cache'];
                }
                var isCheckExpired = data && data['_timestamp'] && options.allowExpired;
                var expired = data && data['_timestamp'] && _this.expired(data['_timestamp'], options.expires);
                var isAllowExpired = isCheckExpired && expired;
                if (isAllowExpired) {
                    return data['cache'];
                }
                if (expired) {
                    var err_1 = new Error('Cache expired for ' + name);
                    err_1['code'] = 401;
                }
            }
            if (options.param)
                return options.param;
            var err = new Error('No valid cache found for ' + name);
            err['code'] = 404;
            return new Promise(function (res, rej) {
                rej(err);
            });
        });
    };
    AckOffline.prototype.setCache = function (name, cache) {
        var _this = this;
        var newCache = {
            _timestamp: Date.now() //,cache: response.data
        };
        return this.get(name)
            .then(function (data) {
            data = data && data.constructor != String ? data : {};
            Object.assign(data, newCache);
            if (cache && cache.constructor == String) {
                data['cache'] = cache;
            }
            else if (data['cache'] && data['cache'].constructor != String) {
                Object.assign(data['cache'], cache);
            }
            else {
                data['cache'] = cache;
            }
            return data;
        }) //paste cache over cache, leave all else alone
            .then(function (data) { return _this.set(name, data); });
    };
    AckOffline.prototype.cacheResponse = function (name, response) {
        return this.setCache(name, response.data);
    };
    AckOffline.prototype.getQueue = function (name) {
        return this.get(name)
            .then(function (data) { return data && data['queue'] ? data['queue'] : []; });
    };
    AckOffline.prototype.setQueue = function (name, queue) {
        var _this = this;
        return this.get(name)
            .then(function (data) { return Object.assign({}, data, { queue: queue }); })
            .then(function (data) { return _this.set(name, data); });
    };
    AckOffline.prototype.clearQueue = function (name) {
        var _this = this;
        return this.get(name)
            .then(function (data) {
            data['queue'] = [];
            _this.set(name, data);
        });
    };
    /** post/put que */
    AckOffline.prototype.enqueue = function (name, queueData) {
        var _this = this;
        if (supportsNav && navigator.onLine) {
            var handler = this.handlers.find(function (handler) { return handler.name === name; });
            if (handler)
                return handler(queueData);
        }
        return this.get(name)
            .then(function (data) {
            data = data || {};
            data['queue'] = data['queue'] || [];
            if (queueData.forEach) {
                queueData.forEach(function (x) {
                    data['queue'].push(x);
                });
            }
            else {
                data['queue'].push(queueData);
            }
            return _this.set(name, data);
        });
    };
    AckOffline.prototype.registerQueueHandler = function (name, handler) {
        //handler = handler || this.getQueHandler.bind(this)
        this.handlers.push({ name: name, handler: handler });
        return this;
    };
    AckOffline.prototype.processQueues = function () {
        var _this = this;
        var x = this.handlers.length - 1, promises = [];
        var _loop_1 = function () {
            var hand = this_1.handlers[x];
            var prom = this_1.getQueue(hand.name)
                .then(function (queue) { return queue.forEach(function (x) { return hand.handler(x); }); })
                .then(function () { return _this.clearQueue(hand.name); });
            promises.push(prom);
        };
        var this_1 = this;
        for (; x >= 0; --x) {
            _loop_1();
        }
        return Promise.all(promises);
    };
    return AckOffline;
}());
exports.AckOffline = AckOffline;
//AckOffline.$inject = ["$http"]
/**
  @config {expires, allowExpired, name}
*/
/*
class QueModel{
  constructor(AckOffline, config){
    this.AckOffline = AckOffline
    this.config = config
  }

  mergeConfig(config){
    Object.assign(config, this.config)
    this.config = config
    return this
  }

  get(){
    return this.AckOffline.get(this.config.name)
  }

  set(data){
    return this.AckOffline.set(this.config.name, data)
  }
}*/ 
//# sourceMappingURL=AckOffline.class.js.map