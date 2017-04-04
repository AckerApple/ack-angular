"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckOffline_1 = require("./AckOffline");
/** Cache logic that provides timestamping and timingout using AckOffline as storage */
var AckCache = (function (_super) {
    __extends(AckCache, _super);
    function AckCache() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AckCache.prototype.validate = function (data, config) {
        var exists = data !== null && typeof data.cache !== "undefined";
        return exists && !this.hasExpired(data._timestamp, data.expires || config.expires);
    };
    AckCache.prototype.hasMaxAged = function (stamp, maxAge) {
        var diff = Date.now() - maxAge;
        var expired = stamp <= diff;
        return maxAge && expired ? true : false;
    };
    AckCache.prototype.hasExpired = function (stamp, expires) {
        var expired = Date.now() >= new Date(expires).getTime();
        return expires && expired ? true : false;
    };
    AckCache.prototype.param = function (name, options) {
        options = options || {};
        options.param = options.param || [];
        return this.getCache(name, options);
    };
    /** aka param */
    AckCache.prototype.paramCache = function (name, options) {
        return this.param(name, options);
    };
    AckCache.prototype.paramSave = function (name, options) {
        var _this = this;
        return this.paramCache(name, options)
            .then(function (items) { return _this.setCache(name, items); });
    };
    /** aka paramSave */
    AckCache.prototype.paramSaveCache = function (name, options) {
        return this.paramSave(name, options);
    };
    /**
      @options{
        expires:Date||number - Exact date of expiration
        maxAge:number -
      }
    */
    AckCache.prototype.cacheToReturn = function (name, data, options) {
        if (data['cache'] == null && data['_timestamp'] == null) {
            return Promise.resolve(data); //bad data catch
        }
        var expires = data['expires'] || options.expires;
        var maxAge = data['maxAge'] || options.maxAge;
        if (options.allowExpired || (!expires && !maxAge)) {
            return Promise.resolve(data['cache']);
        }
        var expired = expires && this.hasExpired(data['_timestamp'], expires);
        var isMaxed = maxAge && this.hasMaxAged(data['_timestamp'], maxAge);
        if (expired || isMaxed) {
            return this.selfDestructData(name, data)
                .then(function () {
                if (options.param)
                    return Promise.resolve(options.param);
                var err = new Error('Cache expired for ' + name);
                err['code'] = 401;
                return Promise.reject(err);
            });
        }
        return Promise.resolve(data['cache']);
    };
    AckCache.prototype.selfDestructData = function (name, data) {
        if (this.dataDestructReady(data))
            return this.clear(name);
        return Promise.resolve();
    };
    AckCache.prototype.dataDestructReady = function (data) {
        var isMemMaxed = data['maxAge'] && this.hasMaxAged(data['_timestamp'], data['maxAge']);
        var isMemExpired = data['expires'] && this.hasExpired(data['_timestamp'], data['expires']);
        return isMemMaxed || isMemExpired;
    };
    AckCache.prototype.get = function (name, options) {
        var _this = this;
        options = options || { expires: null };
        return _super.prototype.get.call(this, name)
            .then(function (data) {
            /*
                  if( this.validate(data, options) ){
            console.log('data was valid')
                    return data['cache']
                  }
            */
            if (data) {
                return _this.cacheToReturn(name, data, options);
            }
            if (options.param)
                return options.param;
            /*
                  var err = new Error('No valid cache found for '+name)
                  err['code'] = 404
            
                  return new Promise((res,rej)=>{
                    rej(err)
                  })
            */
            return Promise.resolve();
        });
    };
    /** aka get */
    AckCache.prototype.getCache = function (name, options) {
        return this.get(name, options);
    };
    AckCache.prototype.set = function (name, cache, options) {
        var _this = this;
        options = options || {};
        var newOptions = Object.assign({}, options);
        newOptions._timestamp = Date.now();
        return _super.prototype.get.call(this, name)
            .then(function (data) {
            data = data && data.constructor != String ? data : {};
            Object.assign(data, newOptions);
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
            .then(function (data) { return _super.prototype.set.call(_this, name, data); });
    };
    /** aka set */
    AckCache.prototype.setCache = function (name, cache, options) {
        return this.set(name, options);
    };
    return AckCache;
}(AckOffline_1.AckOffline));
AckCache.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
AckCache.ctorParameters = function () { return []; };
exports.AckCache = AckCache;
//# sourceMappingURL=AckCache.js.map