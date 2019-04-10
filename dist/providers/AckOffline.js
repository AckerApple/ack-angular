"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const localForage = require("localforage");
const core_1 = require("@angular/core");
let AckOffline = class AckOffline {
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
};
AckOffline = __decorate([
    core_1.Injectable()
], AckOffline);
exports.AckOffline = AckOffline;
