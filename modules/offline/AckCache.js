"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckOffline_1 = require("./AckOffline");
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
    AckCache.prototype.hasExpired = function (_stamp, expires) {
        var expired = Date.now() >= new Date(expires).getTime();
        return expires && expired ? true : false;
    };
    AckCache.prototype.param = function (name, options) {
        if (options === void 0) { options = {}; }
        options.param = options.param || [];
        return this.getCache(name, options);
    };
    AckCache.prototype.paramCache = function (name, options) {
        return this.param(name, options);
    };
    AckCache.prototype.paramSave = function (name, options) {
        var _this = this;
        return this.paramCache(name, options)
            .then(function (items) { return _this.setCache(name, items); });
    };
    AckCache.prototype.paramSaveCache = function (name, options) {
        return this.paramSave(name, options);
    };
    AckCache.prototype.cacheToReturn = function (name, data, options) {
        if (data.cache == null && data._timestamp == null) {
            return Promise.resolve(data);
        }
        var expires = data.expires || options.expires;
        var maxAge = data.maxAge || options.maxAge;
        if (options.allowExpired || (!expires && !maxAge)) {
            return Promise.resolve(data.cache);
        }
        var expired = expires && this.hasExpired(data._timestamp, expires);
        var isMaxed = maxAge && this.hasMaxAged(data._timestamp, maxAge);
        if (expired || isMaxed) {
            return this.selfDestructData(name, data)
                .then(function () {
                if (options.param)
                    return Promise.resolve(options.param);
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
        if (options === void 0) { options = { expires: null }; }
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
    AckCache.prototype.getCache = function (name, options) {
        return this.get(name, options);
    };
    AckCache.prototype.dataOptionsCache = function (allCache, options, cache) {
        if (options === void 0) { options = {}; }
        var newOptions = {};
        newOptions._timestamp = Date.now();
        if (options.expires)
            newOptions.expires = options.expires;
        if (options.maxAge)
            newOptions.maxAge = options.maxAge;
        allCache = allCache && allCache.constructor != String ? allCache : {};
        Object.assign(allCache, newOptions);
        if (cache && cache.constructor == String) {
            allCache.cache = cache;
        }
        else if (allCache.cache && allCache.cache.constructor != String) {
            Object.assign(allCache.cache, cache);
        }
        else {
            allCache.cache = cache;
        }
        return allCache;
    };
    AckCache.prototype.set = function (name, cache, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        options.name = options.name || name;
        return _super.prototype.get.call(this, name)
            .then(function (allCache) { return _this.dataOptionsCache(allCache, options, cache); })
            .then(function (data) { return _super.prototype.set.call(_this, name, data); });
    };
    AckCache.prototype.setCache = function (name, cache, options) {
        return this.set(name, cache, options);
    };
    AckCache = __decorate([
        core_1.Injectable()
    ], AckCache);
    return AckCache;
}(AckOffline_1.AckOffline));
exports.AckCache = AckCache;
