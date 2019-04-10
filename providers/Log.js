"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Log = (function () {
    function Log() {
        this.log = [];
        this.maxLog = 80;
    }
    Log.prototype.add = function (e, toConsole) {
        var ob = this.paramAudit(e, toConsole);
        this.log.unshift(ob);
        if (this.maxLog) {
            while (this.log.length > this.maxLog) {
                this.log.pop();
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
    Log = __decorate([
        core_1.Injectable()
    ], Log);
    return Log;
}());
exports.Log = Log;
function getDateTimeString() {
    return (function (d) { return (('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2) + '/' + d.getFullYear()); })(new Date()) + ' ' + (function (d) { var h = d.getHours(), t = 'AM', m = d.getMinutes(); var mn = m < 10 ? '0' + m : m; h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h; return ('0' + h).slice(-2) + ':' + ('0' + mn).slice(-2) + ' ' + t; })(new Date());
}
