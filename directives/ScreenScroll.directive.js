import { Directive, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
var ScreenScroll = /** @class */ (function () {
    function ScreenScroll() {
        var _this = this;
        this.screenScroll = new EventEmitter();
        this.onScroll = function () {
            return _this.screenScroll.emit({ x: window['pageXOffset'], y: window['pageYOffset'] });
        };
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ScreenScroll.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.onScroll(); }); //two way bind often needs init override
    };
    ScreenScroll.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.onScroll);
    };
    ScreenScroll.ɵfac = function ScreenScroll_Factory(t) { return new (t || ScreenScroll)(); };
    ScreenScroll.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ScreenScroll, selectors: [["", "screenScroll", ""]], outputs: { screenScroll: "screenScroll" } });
    return ScreenScroll;
}());
export { ScreenScroll };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScreenScroll, [{
        type: Directive,
        args: [{
                selector: '[screenScroll]'
            }]
    }], function () { return []; }, { screenScroll: [{
            type: Output
        }] }); })();
//# sourceMappingURL=ScreenScroll.directive.js.map