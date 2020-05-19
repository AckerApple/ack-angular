import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AckOffline } from './AckOffline';
let AckCache = class AckCache extends AckOffline {
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
    Injectable()
], AckCache);
export { AckCache };
