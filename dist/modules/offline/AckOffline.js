import * as localForage from "localforage";
import { Injectable } from '@angular/core';
export class AckOffline {
    constructor() {
        this.prefix = "offline";
    }
    set(name, data) {
        if (data && data.constructor == Object)
            data.offlineSavedAt = new Date().toString();
        if (data && data.constructor == Object)
            data.offlineCreatedAt = data.offlineCreatedAt || new Date().toString();
        return localForage.setItem(this.prefix + '-' + name, data);
    }
    get(name) {
        return localForage.getItem(this.prefix + '-' + name);
    }
    remove(name) {
        return localForage.removeItem(this.prefix + '-' + name);
    }
    clear(name) { return this.remove(name); }
    clearAll() {
        return this.promiseNameArray().then((keys) => keys.forEach(name => this.remove(name)));
    }
    promiseNameArray() {
        let keys = [];
        return localForage.iterate((_, k) => {
            if (k.startsWith(this.prefix)) {
                keys.push(k.substring(this.prefix.length + 1, k.length));
            }
        })
            .then(() => keys);
    }
}
AckOffline.decorators = [
    { type: Injectable }
];
