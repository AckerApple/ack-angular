"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusOn = void 0;
var core_1 = require("@angular/core");
var FocusOn = /** @class */ (function () {
    function FocusOn(element) {
        this.element = element;
        this.focusOnDelay = 0;
        this.focusThen = new core_1.EventEmitter();
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
        { type: core_1.Directive, args: [{
                    selector: '[focusOn]'
                },] }
    ];
    FocusOn.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    FocusOn.propDecorators = {
        focusOn: [{ type: core_1.Input }],
        focusOnDelay: [{ type: core_1.Input }],
        focusThen: [{ type: core_1.Output }]
    };
    return FocusOn;
}());
exports.FocusOn = FocusOn;
//# sourceMappingURL=FocusOn.directive.js.map