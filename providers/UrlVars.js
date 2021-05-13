import { Injectable } from '@angular/core';
import { WindowService } from "./WindowService";
var UrlVars = /** @class */ (function () {
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
    /** case in-sensative variable fetch */
    UrlVars.prototype.get = function (name, param) {
        if (!name)
            return;
        if (this.vars && this.vars[name] != null) //try exact match first
            return this.vars[name];
        //case insensative search
        var lcase = name.toLowerCase();
        for (var key in this.vars) {
            if (lcase == key.toLowerCase())
                return this.vars[key];
        }
        return param;
    };
    UrlVars.decorators = [
        { type: Injectable }
    ];
    UrlVars.ctorParameters = function () { return [
        { type: WindowService }
    ]; };
    return UrlVars;
}());
export { UrlVars };
//# sourceMappingURL=UrlVars.js.map