import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
var FocusOn = /** @class */ (function () {
    function FocusOn(element) {
        this.element = element;
        this.focusOnDelay = 0;
        this.focusThen = new EventEmitter();
    }
    FocusOn.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.focusOn && changes.focusOn.currentValue) {
            if (this.focusOnDelay === 0) {
                Promise.resolve().then(function () { return _this.update(); });
            }
            else {
                setTimeout(function () { return _this.update(); }, this.focusOnDelay);
            }
        }
    };
    FocusOn.prototype.update = function () {
        this.element.nativeElement.focus();
        this.focusThen.emit();
    };
    FocusOn.ɵfac = function FocusOn_Factory(t) { return new (t || FocusOn)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    FocusOn.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FocusOn, selectors: [["", "focusOn", ""]], inputs: { focusOn: "focusOn", focusOnDelay: "focusOnDelay" }, outputs: { focusThen: "focusThen" }, features: [i0.ɵɵNgOnChangesFeature] });
    return FocusOn;
}());
export { FocusOn };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FocusOn, [{
        type: Directive,
        args: [{
                selector: '[focusOn]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { focusOn: [{
            type: Input
        }], focusOnDelay: [{
            type: Input
        }], focusThen: [{
            type: Output
        }] }); })();
//# sourceMappingURL=FocusOn.directive.js.map