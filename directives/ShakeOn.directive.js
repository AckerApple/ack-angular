"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShakeOn = void 0;
var FxOn_directive_1 = require("./FxOn.directive");
var core_1 = require("@angular/core");
/** runs shake instructions when condition returns a truthy value */
var ShakeOn = /** @class */ (function () {
    function ShakeOn(element) {
        this.element = element;
        this.shakeConstant = false;
        this.shakeThen = new core_1.EventEmitter();
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
                    FxOn_directive_1.removeClass(this.element.nativeElement, pv);
                }
                this.applyType();
            }
            else {
                this.removeType();
            }
        }
    };
    ShakeOn.prototype.onFalse = function () {
        FxOn_directive_1.removeClass(this.element.nativeElement, 'shake-constant');
        this.removeType();
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
    };
    ShakeOn.prototype.removeType = function () {
        FxOn_directive_1.removeClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    };
    ShakeOn.prototype.applyType = function () {
        FxOn_directive_1.addClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    };
    ShakeOn.prototype.onTrue = function () {
        var _this = this;
        FxOn_directive_1.addClass(this.element.nativeElement, 'shake-constant');
        this.applyType();
        if (!this.shakeConstant) {
            this.timeout = setTimeout(function () {
                //$scope.shakeOnController.shakeOn = false
                _this.onFalse();
                _this.shakeThen.emit(_this);
            }, this.shakeForMs);
        }
    };
    ShakeOn.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[shakeOn]",
                    exportAs: "ShakeOn"
                },] }
    ];
    ShakeOn.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    ShakeOn.propDecorators = {
        shakeConstant: [{ type: core_1.Input }],
        shakeOn: [{ type: core_1.Input }],
        shakeForMs: [{ type: core_1.Input }],
        shakeType: [{ type: core_1.Input }],
        shakeThen: [{ type: core_1.Output }]
    };
    return ShakeOn;
}());
exports.ShakeOn = ShakeOn;
//# sourceMappingURL=ShakeOn.directive.js.map