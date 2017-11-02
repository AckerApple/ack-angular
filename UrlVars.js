"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WindowService_1 = require("./WindowService");
var UrlVars = (function () {
    function UrlVars(WindowService) {
        this.WindowService = WindowService;
        this.vars = this.parse();
    }
    UrlVars.prototype.parse = function () {
        var regex = /[?&]([^=#]+)(=([^&#]*))?/g, url = this.WindowService.nativeWindow.location.href, params = {}, match;
        while (match = regex.exec(url)) {
            params[match[1]] = match[2] == null ? true : match[3];
        }
        return params;
    };
    UrlVars.prototype.get = function (name, param) {
        if (!name)
            return;
        if (this.vars && this.vars[name] != null)
            return this.vars[name];
        var lcase = name.toLowerCase();
        for (var key in this.vars) {
            if (lcase == key.toLowerCase())
                return this.vars[key];
        }
        return param;
    };
    return UrlVars;
}());
exports.UrlVars = UrlVars;
