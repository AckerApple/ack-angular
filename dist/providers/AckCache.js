"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const AckOffline_1 = require("./AckOffline");
let AckCache = class AckCache extends AckOffline_1.AckOffline {
    constructor() {
        super(...arguments);
        this.prefix = "offline-cache";
    }
    validate(data, config) {
        const exists = data !== null && typeof data.cache !== "undefined";
        return exists && !this.hasExpired(data._timestamp, data.expires || config.expires);
    }
    optionsKillCache(options) {
        return options.maxAge == null && options.expires == null ? false : true;
    }
    hasMaxAged(stamp, maxAge) {
        const diff = Date.now() - maxAge;
        const expired = stamp <= diff;
        return maxAge && expired ? true : false;
    }
    hasExpired(_stamp, expires) {
        const expired = Date.now() >= new Date(expires).getTime();
        return expires && expired ? true : false;
    }
    param(name, options = {}) {
        options.param = options.param || [];
        return this.getCache(name, options);
    }
    paramCache(name, options) {
        return this.param(name, options);
    }
    paramSave(name, options) {
        return this.paramCache(name, options)
            .then(items => this.setCache(name, items));
    }
    paramSaveCache(name, options) {
        return this.paramSave(name, options);
    }
    cacheToReturn(name, data, options) {
        if (data.cache == null && data._timestamp == null) {
            return Promise.resolve(data);
        }
        const expires = data.expires || options.expires;
        const maxAge = data.maxAge || options.maxAge;
        if (options.allowExpired || (!expires && !maxAge)) {
            return Promise.resolve(data.cache);
        }
        const expired = expires && this.hasExpired(data._timestamp, expires);
        const isMaxed = maxAge && this.hasMaxAged(data._timestamp, maxAge);
        if (expired || isMaxed) {
            return this.selfDestructData(name, data)
                .then(() => {
                if (options.param)
                    return Promise.resolve(options.param);
            });
        }
        return Promise.resolve(data['cache']);
    }
    selfDestructData(name, data) {
        if (this.dataDestructReady(data))
            return this.clear(name);
        return Promise.resolve();
    }
    dataDestructReady(data) {
        const isMemMaxed = data['maxAge'] && this.hasMaxAged(data['_timestamp'], data['maxAge']);
        const isMemExpired = data['expires'] && this.hasExpired(data['_timestamp'], data['expires']);
        return isMemMaxed || isMemExpired;
    }
    get(name, options = { expires: null }) {
        return super.get(name)
            .then(data => {
            if (data) {
                return this.cacheToReturn(name, data, options);
            }
            if (options.param)
                return options.param;
            return;
        });
    }
    getCache(name, options) {
        return this.get(name, options);
    }
    dataOptionsCache(allCache, options = {}, cache) {
        const newOptions = {};
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
    }
    set(name, cache, options = {}) {
        options.name = options.name || name;
        return super.get(name)
            .then(allCache => this.dataOptionsCache(allCache, options, cache))
            .then(data => super.set(name, data));
    }
    setCache(name, cache, options) {
        return this.set(name, cache, options);
    }
};
AckCache = __decorate([
    core_1.Injectable()
], AckCache);
exports.AckCache = AckCache;
