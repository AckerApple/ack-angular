"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ErrorLog = (function () {
    function ErrorLog() {
        this.log = [];
        this.maxLog = 30;
    }
    ErrorLog.prototype.monitorWindow = function (win) {
        var _this = this;
        win = win || window;
        var callback = function (evt) { return _this.add(evt, false); };
        win.addEventListener('error', callback);
    };
    ErrorLog.prototype.reject = function (err) {
        var e = this.add(err);
        return Promise.reject(e);
    };
    ErrorLog.prototype.rejector = function () {
        var _this = this;
        return function (err) { return _this.reject(err); };
    };
    ErrorLog.prototype.add = function (e, toConsole) {
        var ob = this.paramAudit(e, toConsole);
        this.log.unshift(ob);
        if (this.maxLog) {
            while (this.log.length > this.maxLog) {
                this.log.pop();
            }
        }
        return logObToErrorObject(ob);
    };
    ErrorLog.prototype.paramAudit = function (e, toConsole) {
        if (e.constructor == String) {
            e = new Error(e);
        }
        if (toConsole == null || toConsole)
            console.error(e);
        var err = this.objectifyError(e);
        err['datetime'] = err['datetime'] || getDateTimeString();
        if (!e.message && e.status == -1) {
            e.message = "Cannot connect to server";
            e.details = e.details || "Connection to internet maybe down. Also possible CORS needs be to enabled at remote server.";
        }
        return err;
    };
    ErrorLog.prototype.objectifyError = function (err) {
        var keys = Object.getOwnPropertyNames(err);
        keys.push.apply(keys, Object.keys(err));
        var recErr = {};
        keys.forEach(function (v) { return recErr[v] = err[v]; });
        var knownKeys = ["stack", "message", "name", "arguments", "type"];
        knownKeys.forEach(function (key) {
            if (typeof err[key] != 'undefined') {
                recErr[key] = err[key];
            }
        });
        var body = err.body || err._body;
        if (body && !err.data && err.headers) {
            var contentType = err.headers.get('content-type');
            if (contentType && contentType.toLowerCase() == 'application/json') {
                try {
                    recErr.data = JSON.parse(body);
                }
                catch (e) { }
            }
        }
        return recErr;
    };
    ErrorLog.prototype.rethrow = function (err) {
        var e = this.add(err);
        throw e;
    };
    ErrorLog = __decorate([
        core_1.Injectable()
    ], ErrorLog);
    return ErrorLog;
}());
exports.ErrorLog = ErrorLog;
function getErrorMessage(err) {
    return err.message || err.statusText || err.name || 'Unexpected Error Occured';
}
function getResponseMessage(res) {
    if (res.data && res.data.error && res.data.error.message) {
        return res.data.error.message;
    }
    return getErrorMessage(res);
}
function logObToErrorObject(log) {
    var e = new Error(getResponseMessage(log));
    Object.keys(log).forEach(function (v) { return e[v] = log[v]; });
    return e;
}
function getDateTimeString() {
    return (function (d) { return (('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2) + '/' + d.getFullYear()); })(new Date()) + ' ' + (function (d) { var h = d.getHours(), t = 'AM', m = d.getMinutes(); var mn = m < 10 ? '0' + m : m; h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h; return ('0' + h).slice(-2) + ':' + ('0' + mn).slice(-2) + ' ' + t; })(new Date());
}
