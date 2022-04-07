import { Injectable } from '@angular/core';
import { WindowService } from "./WindowService";
import * as i0 from "@angular/core";
import * as i1 from "./WindowService";
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
    UrlVars.ɵfac = function UrlVars_Factory(t) { return new (t || UrlVars)(i0.ɵɵinject(i1.WindowService)); };
    UrlVars.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UrlVars, factory: UrlVars.ɵfac });
    return UrlVars;
}());
export { UrlVars };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UrlVars, [{
        type: Injectable
    }], function () { return [{ type: i1.WindowService }]; }, null); })();
//# sourceMappingURL=UrlVars.js.map