import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
var SelectOn = /** @class */ (function () {
    function SelectOn(element) {
        this.element = element;
        this.selectOnDelay = 0;
        this.selectThen = new EventEmitter();
    }
    SelectOn.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.selectOn && changes.selectOn.currentValue) {
            if (this.selectOnDelay === 0) {
                Promise.resolve().then(function () { return _this.update(); });
            }
            setTimeout(function () { return _this.update(); }, this.selectOnDelay);
        }
    };
    SelectOn.prototype.update = function () {
        this.element.nativeElement.select();
        this.selectThen.emit();
    };
    SelectOn.ɵfac = function SelectOn_Factory(t) { return new (t || SelectOn)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    SelectOn.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SelectOn, selectors: [["", "selectOn", ""]], inputs: { selectOn: "selectOn", selectOnDelay: "selectOnDelay" }, outputs: { selectThen: "selectThen" }, features: [i0.ɵɵNgOnChangesFeature] });
    return SelectOn;
}());
export { SelectOn };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectOn, [{
        type: Directive,
        args: [{
                selector: '[selectOn]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { selectOn: [{
            type: Input
        }], selectOnDelay: [{
            type: Input
        }], selectThen: [{
            type: Output
        }] }); })();
//# sourceMappingURL=SelectOn.directive.js.map