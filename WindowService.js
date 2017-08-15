"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
function getWindow() { return window; }
var WindowService = (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "nativeElement", {
        get: function () { return getWindow(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "nativeWindow", {
        //deprecated
        get: function () { return getWindow(); },
        enumerable: true,
        configurable: true
    });
    WindowService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    WindowService.ctorParameters = function () { return []; };
    return WindowService;
}());
exports.WindowService = WindowService;
//# sourceMappingURL=WindowService.js.map