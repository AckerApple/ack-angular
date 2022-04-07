import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
var ScreenScrollHeightDiff = /** @class */ (function () {
    function ScreenScrollHeightDiff() {
        var _this = this;
        this.screenScrollHeightDiffChange = new EventEmitter();
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
    ScreenScrollHeightDiff.ɵfac = function ScreenScrollHeightDiff_Factory(t) { return new (t || ScreenScrollHeightDiff)(); };
    ScreenScrollHeightDiff.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ScreenScrollHeightDiff, selectors: [["", "screenScrollHeightDiff", ""]], inputs: { screenScrollHeightDiff: "screenScrollHeightDiff" }, outputs: { screenScrollHeightDiffChange: "screenScrollHeightDiffChange" } });
    return ScreenScrollHeightDiff;
}());
export { ScreenScrollHeightDiff };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScreenScrollHeightDiff, [{
        type: Directive,
        args: [{
                selector: '[screenScrollHeightDiff]'
            }]
    }], function () { return []; }, { screenScrollHeightDiff: [{
            type: Input
        }], screenScrollHeightDiffChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=ScreenScrollHeightDiff.directive.js.map