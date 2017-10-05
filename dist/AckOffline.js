"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import localForage from "localforage/dist/localforage.js"
var localForage = require("localforage");
var core_1 = require("@angular/core");
/** Offline storage provided by localforage */
var AckOffline = /** @class */ (function () {
    function AckOffline() {
        this.prefix = "offline";
    }
    /** save to browser offline memory with datetime stamps offlineSavedAt and offlineCreatedAt */
    AckOffline.prototype.set = function (name, data) {
        if (data && data.constructor == Object)
            data.offlineSavedAt = new Date().toString();
        if (data && data.constructor == Object)
            data.offlineCreatedAt = data.offlineCreatedAt || new Date().toString();
        return localForage.setItem(this.prefix + '-' + name, data);
    };
    AckOffline.prototype.get = function (name) {
        return localForage.getItem(this.prefix + '-' + name);
    };
    AckOffline.prototype.remove = function (name) {
        return localForage.removeItem(this.prefix + '-' + name);
    };
    /** aka of remove */
    AckOffline.prototype.clear = function (name) { return this.remove(name); };
    AckOffline.prototype.clearAll = function () {
        var _this = this;
        return this.promiseNameArray().then(function (keys) { return keys.forEach(function (name) { return _this.remove(name); }); });
    };
    /** returns string array of all key names used for browser storage */
    AckOffline.prototype.promiseNameArray = function () {
        var _this = this;
        var keys = [];
        return localForage.iterate(function (_, k) {
            if (k.startsWith(_this.prefix)) {
                keys.push(k.substring(_this.prefix.length + 1, k.length));
            }
        })
            .then(function () { return keys; });
    };
    AckOffline.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AckOffline.ctorParameters = function () { return []; };
    return AckOffline;
}());
exports.AckOffline = AckOffline;
