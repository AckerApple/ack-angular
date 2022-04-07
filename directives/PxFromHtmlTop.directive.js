import { Directive, ElementRef, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
var PxFromHtmlTop = /** @class */ (function () {
    function PxFromHtmlTop(ElementRef) {
        var _this = this;
        this.ElementRef = ElementRef;
        this.numberChange = new EventEmitter();
        this.onScroll = function () {
            _this.setter();
            _this.emit();
        };
        window.addEventListener("resize", this.onScroll);
        window.addEventListener("scroll", this.onScroll);
    }
    PxFromHtmlTop.prototype.emit = function () {
        this.numberChange.emit(this.number);
    };
    PxFromHtmlTop.prototype.ngOnChanges = function () {
        var _this = this;
        Promise.resolve().then(function () {
            _this.setter();
            _this.emit();
        });
        this.delayFire(250);
        this.delayFire(750);
        this.delayFire(1500);
    };
    PxFromHtmlTop.prototype.setter = function () {
        var top = this.ElementRef.nativeElement.getBoundingClientRect().top;
        this.number = top; // || 0
        //this.number = getOffset( this.ElementRef.nativeElement ).top
    };
    PxFromHtmlTop.prototype.ngAfterViewInit = function () {
        this.delayFire();
        this.delayFire(200);
    };
    PxFromHtmlTop.prototype.delayFire = function (num) {
        var _this = this;
        if (num === void 0) { num = 0; }
        setTimeout(function () {
            _this.setter();
            _this.emit();
        }, num);
    };
    PxFromHtmlTop.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("resize", this.onScroll);
    };
    PxFromHtmlTop.ɵfac = function PxFromHtmlTop_Factory(t) { return new (t || PxFromHtmlTop)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PxFromHtmlTop.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PxFromHtmlTop, selectors: [["", "pxFromHtmlTop", ""]], inputs: { number: ["pxFromHtmlTop", "number"], watch: "watch" }, outputs: { numberChange: "pxFromHtmlTopChange" }, exportAs: ["PxFromHtmlTop"], features: [i0.ɵɵNgOnChangesFeature] });
    return PxFromHtmlTop;
}());
export { PxFromHtmlTop };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PxFromHtmlTop, [{
        type: Directive,
        args: [{
                selector: "[pxFromHtmlTop]",
                exportAs: "PxFromHtmlTop"
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { number: [{
            type: Input,
            args: ["pxFromHtmlTop"]
        }], numberChange: [{
            type: Output,
            args: ["pxFromHtmlTopChange"]
        }], watch: [{
            type: Input
        }] }); })();
//# sourceMappingURL=PxFromHtmlTop.directive.js.map