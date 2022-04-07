import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var Log = /** @class */ (function () {
    function Log() {
        this.log = [];
        this.maxLog = 80;
    }
    Log.prototype.add = function (e, toConsole) {
        var ob = this.paramAudit(e, toConsole);
        this.log.unshift(ob);
        if (this.maxLog) {
            while (this.log.length > this.maxLog) {
                this.log.pop(); //remove last
            }
        }
        return e;
    };
    Log.prototype.paramAudit = function (e, toConsole) {
        switch (e.constructor) {
            case String:
            case Boolean:
            case Number: {
                e = { message: e };
            }
        }
        if (toConsole == null || toConsole)
            console.log(e);
        e['datetime'] = e['datetime'] || getDateTimeString();
        return e;
    };
    Log.ɵfac = function Log_Factory(t) { return new (t || Log)(); };
    Log.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: Log, factory: Log.ɵfac });
    return Log;
}());
export { Log };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Log, [{
        type: Injectable
    }], null, null); })();
function getDateTimeString() {
    return (function (d) { return (('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2) + '/' + d.getFullYear()); })(new Date()) + ' ' + (function (d) { var h = d.getHours(), t = 'AM', m = d.getMinutes(); var mn = m < 10 ? '0' + m : m; h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h; return ('0' + h).slice(-2) + ':' + ('0' + mn).slice(-2) + ' ' + t; })(new Date());
}
//# sourceMappingURL=Log.js.map