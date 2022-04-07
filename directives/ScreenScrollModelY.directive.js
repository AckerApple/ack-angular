import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
var ScreenScrollModelY = /** @class */ (function () {
    function ScreenScrollModelY() {
        var _this = this;
        this.screenScrollModelYChange = new EventEmitter();
        this.onScroll = function () {
            _this.screenScrollModelY = window['pageYOffset'];
            _this.screenScrollModelYChange.emit(_this.screenScrollModelY);
        };
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ScreenScrollModelY.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.onScroll(); }); //two way bind often needs init override
    };
    ScreenScrollModelY.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.onScroll);
    };
    ScreenScrollModelY.ɵfac = function ScreenScrollModelY_Factory(t) { return new (t || ScreenScrollModelY)(); };
    ScreenScrollModelY.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ScreenScrollModelY, selectors: [["", "screenScrollModelY", ""]], inputs: { screenScrollModelY: "screenScrollModelY" }, outputs: { screenScrollModelYChange: "screenScrollModelYChange" }, exportAs: ["ScreenScrollModelY"] });
    return ScreenScrollModelY;
}());
export { ScreenScrollModelY };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScreenScrollModelY, [{
        type: Directive,
        args: [{
                selector: '[screenScrollModelY]',
                exportAs: 'ScreenScrollModelY'
            }]
    }], function () { return []; }, { screenScrollModelY: [{
            type: Input
        }], screenScrollModelYChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=ScreenScrollModelY.directive.js.map