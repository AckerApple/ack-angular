import { 
//hasClass,
addClass, removeClass } from "./FxOn.directive";
import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
/** runs shake instructions when condition returns a truthy value */
var ShakeOn = /** @class */ (function () {
    function ShakeOn(element) {
        this.element = element;
        this.shakeConstant = false;
        this.shakeThen = new EventEmitter();
        //an array to be used in #ShakeOn refs for fx selectable options (see examples)
        this.shakeTypes = [
            'shake-slow', 'shake-hard', 'shake-little', 'shake-horizontal',
            'shake-vertical', 'shake-rotate', 'shake-opacity', 'shake-crazy',
            'shake-chunk'
        ];
    }
    ShakeOn.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.update(); });
    };
    ShakeOn.prototype.update = function () {
        this.shakeForMs = this.shakeForMs || 2000;
        this.shakeType = this.shakeType || 'shake-slow';
    };
    ShakeOn.prototype.ngOnChanges = function (changes) {
        if (changes.shakeOn && changes.shakeOn.currentValue != null && changes.shakeOn.currentValue != changes.shakeOn.previousValue) {
            if (changes.shakeOn.currentValue) {
                this.onTrue();
            }
            else {
                this.onFalse();
            }
        }
        if (changes.shakeType && changes.shakeType.currentValue != changes.shakeType.previousValue) {
            if (this.shakeOn) {
                var pv = changes.shakeType.previousValue;
                if (pv) {
                    removeClass(this.element.nativeElement, pv);
                }
                this.applyType();
            }
            else {
                this.removeType();
            }
        }
    };
    ShakeOn.prototype.onFalse = function () {
        removeClass(this.element.nativeElement, 'shake-constant');
        this.removeType();
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
    };
    ShakeOn.prototype.removeType = function () {
        removeClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    };
    ShakeOn.prototype.applyType = function () {
        addClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    };
    ShakeOn.prototype.onTrue = function () {
        var _this = this;
        addClass(this.element.nativeElement, 'shake-constant');
        this.applyType();
        if (!this.shakeConstant) {
            this.timeout = setTimeout(function () {
                //$scope.shakeOnController.shakeOn = false
                _this.onFalse();
                _this.shakeThen.emit(_this);
            }, this.shakeForMs);
        }
    };
    ShakeOn.ɵfac = function ShakeOn_Factory(t) { return new (t || ShakeOn)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ShakeOn.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ShakeOn, selectors: [["", "shakeOn", ""]], inputs: { shakeConstant: "shakeConstant", shakeOn: "shakeOn", shakeForMs: "shakeForMs", shakeType: "shakeType" }, outputs: { shakeThen: "shakeThen" }, exportAs: ["ShakeOn"], features: [i0.ɵɵNgOnChangesFeature] });
    return ShakeOn;
}());
export { ShakeOn };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShakeOn, [{
        type: Directive,
        args: [{
                selector: "[shakeOn]",
                exportAs: "ShakeOn"
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { shakeConstant: [{
            type: Input
        }], shakeOn: [{
            type: Input
        }], shakeForMs: [{
            type: Input
        }], shakeType: [{
            type: Input
        }], shakeThen: [{
            type: Output
        }] }); })();
//# sourceMappingURL=ShakeOn.directive.js.map