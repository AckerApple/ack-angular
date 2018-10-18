"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ScreenScrollHeightDiff = (function () {
    function ScreenScrollHeightDiff() {
        var _this = this;
        this.screenScrollHeightDiffChange = new core_1.EventEmitter();
        this.on = function () {
            _this.apply();
        };
        window.addEventListener("scroll", this.on);
        window.addEventListener("resize", this.on);
    }
    ScreenScrollHeightDiff.prototype.apply = function () {
        this.screenScrollHeightDiff = document.body.scrollHeight - window.innerHeight;
        if (this.screenScrollHeightDiff < 0)
            this.screenScrollHeightDiff = 0;
        this.screenScrollHeightDiffChange.emit(this.screenScrollHeightDiff);
    };
    ScreenScrollHeightDiff.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.on);
        window.removeEventListener("resize", this.on);
    };
    ScreenScrollHeightDiff.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenScrollHeightDiff]'
                },] },
    ];
    ScreenScrollHeightDiff.ctorParameters = function () { return []; };
    ScreenScrollHeightDiff.propDecorators = {
        screenScrollHeightDiff: [{ type: core_1.Input }],
        screenScrollHeightDiffChange: [{ type: core_1.Output }]
    };
    return ScreenScrollHeightDiff;
}());
exports.ScreenScrollHeightDiff = ScreenScrollHeightDiff;
