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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefix = "offline-cache";
        return _this;
    }
    AckCache.prototype.validate = function (data, config) {
        var exists = data !== null && typeof data.cache !== "undefined";
        return exists && !this.hasExpired(data._timestamp, data.expires || config.expires);
    };
    AckCache.prototype.optionsKillCache = function (options) {
        return options.maxAge == null && options.expires == null ? false : true;
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
                /*const err = new Error('Cache expired for '+name)
                err['code'] = 401
                return Promise.reject( err )*/
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
            if (data) {
                return _this.cacheToReturn(name, data, options);
            }
            if (options.param)
                return options.param;
            return;
        });
    };
    /** aka get */
    AckCache.prototype.getCache = function (name, options) {
        return this.get(name, options);
    };
    /** paste cache over cache, leave all else alone */
    AckCache.prototype.dataOptionsCache = function (allCache, options, cache) {
        options = options || {};
        var newOptions = {};
        newOptions['_timestamp'] = Date.now();
        if (options.expires)
            newOptions['expires'] = options.expires;
        if (options.maxAge)
            newOptions['maxAge'] = options.maxAge;
        allCache = allCache && allCache.constructor != String ? allCache : {};
        Object.assign(allCache, newOptions);
        if (cache && cache.constructor == String) {
            allCache['cache'] = cache;
        }
        else if (allCache['cache'] && allCache['cache'].constructor != String) {
            Object.assign(allCache['cache'], cache);
        }
        else {
            allCache['cache'] = cache;
        }
        return allCache;
    };
    AckCache.prototype.set = function (name, cache, options) {
        var _this = this;
        options = options || {};
        return _super.prototype.get.call(this, name)
            .then(function (allCache) { return _this.dataOptionsCache(allCache, options, cache); })
            .then(function (data) { return _super.prototype.set.call(_this, name, data); });
    };
    /** aka set */
    AckCache.prototype.setCache = function (name, cache, options) {
        return this.set(name, options);
    };
    AckCache.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AckCache.ctorParameters = function () { return []; };
    return AckCache;
}(AckOffline_1.AckOffline));
exports.AckCache = AckCache;
//# sourceMappingURL=AckCache.js.map