import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
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
    SelectOn.decorators = [
        { type: Directive, args: [{
                    selector: '[selectOn]'
                },] }
    ];
    SelectOn.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SelectOn.propDecorators = {
        selectOn: [{ type: Input }],
        selectOnDelay: [{ type: Input }],
        selectThen: [{ type: Output }]
    };
    return SelectOn;
}());
export { SelectOn };
//# sourceMappingURL=SelectOn.directive.js.map