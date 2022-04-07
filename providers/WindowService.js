import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
function getWindow() { return window; }
var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "nativeElement", {
        get: function () { return getWindow(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "nativeWindow", {
        //deprecated
        get: function () { return getWindow(); },
        enumerable: false,
        configurable: true
    });
    WindowService.ɵfac = function WindowService_Factory(t) { return new (t || WindowService)(); };
    WindowService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WindowService, factory: WindowService.ɵfac });
    return WindowService;
}());
export { WindowService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WindowService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=WindowService.js.map