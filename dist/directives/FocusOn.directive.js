"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FocusOn = (function () {
    function FocusOn(element) {
        this.element = element;
        this.focusOnDelay = 0;
        this.focusThen = new core_1.EventEmitter();
    }
    FocusOn.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.focusOn && changes.focusOn.currentValue) {
            setTimeout(function () {
                _this.element.nativeElement.focus();
                _this.focusThen.emit();
            }, this.focusOnDelay);
        }
    };
    FocusOn.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[focusOn]'
                },] },
    ];
    FocusOn.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    FocusOn.propDecorators = {
        "focusOn": [{ type: core_1.Input },],
        "focusOnDelay": [{ type: core_1.Input },],
        "focusThen": [{ type: core_1.Output },],
    };
    return FocusOn;
}());
exports.FocusOn = FocusOn;
