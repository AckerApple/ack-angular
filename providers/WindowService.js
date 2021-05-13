"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowService = void 0;
var core_1 = require("@angular/core");
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
        { type: core_1.Injectable }
    ];
    return WindowService;
}());
exports.WindowService = WindowService;
//# sourceMappingURL=WindowService.js.map