import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
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
    FocusOn.decorators = [
        { type: Directive, args: [{
                    selector: '[focusOn]'
                },] }
    ];
    FocusOn.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FocusOn.propDecorators = {
        focusOn: [{ type: Input }],
        focusOnDelay: [{ type: Input }],
        focusThen: [{ type: Output }]
    };
    return FocusOn;
}());
export { FocusOn };
//# sourceMappingURL=FocusOn.directive.js.map