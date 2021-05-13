import { Injectable } from '@angular/core';
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
    WindowService.decorators = [
        { type: Injectable }
    ];
    return WindowService;
}());
export { WindowService };
//# sourceMappingURL=WindowService.js.map