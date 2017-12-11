"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SelectOn = (function () {
    function SelectOn(element) {
        this.element = element;
        this.selectOnDelay = 0;
        this.selectThen = new core_1.EventEmitter();
    }
    SelectOn.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.selectOn && changes.selectOn.currentValue) {
            setTimeout(function () {
                _this.element.nativeElement.select();
                _this.selectThen.emit();
            }, this.selectOnDelay);
        }
    };
    SelectOn.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[selectOn]'
                },] },
    ];
    SelectOn.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    SelectOn.propDecorators = {
        "selectOn": [{ type: core_1.Input },],
        "selectOnDelay": [{ type: core_1.Input },],
        "selectThen": [{ type: core_1.Output },],
    };
    return SelectOn;
}());
exports.SelectOn = SelectOn;
