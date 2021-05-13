"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsoluteOverflowX = void 0;
var core_1 = require("@angular/core");
var absolute_overflow_x_pug_1 = require("./templates/absolute-overflow-x.pug");
var AbsoluteOverflowX = /** @class */ (function () {
    function AbsoluteOverflowX(ElementRef) {
        this.ElementRef = ElementRef;
        this.active = true;
        this.overflow = 'auto';
    }
    AbsoluteOverflowX.prototype.ngOnInit = function () {
        this.checkDisplay();
    };
    AbsoluteOverflowX.prototype.ngOnChanges = function (changes) {
        if (changes.active) {
            this.checkDisplay();
        }
    };
    AbsoluteOverflowX.prototype.ngAfterViewInit = function () {
        this.ElementRef.nativeElement.style.display = 'block';
    };
    AbsoluteOverflowX.prototype.checkDisplay = function () {
        this.ElementRef.nativeElement.style.position = this.active ? 'relative' : 'static';
    };
    AbsoluteOverflowX.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'absolute-overflow-x',
                    template: absolute_overflow_x_pug_1.string
                },] }
    ];
    AbsoluteOverflowX.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    AbsoluteOverflowX.propDecorators = {
        scrollBars: [{ type: core_1.Input }],
        wrapClass: [{ type: core_1.Input }],
        active: [{ type: core_1.Input }],
        overflow: [{ type: core_1.Input }]
    };
    return AbsoluteOverflowX;
}());
exports.AbsoluteOverflowX = AbsoluteOverflowX;
//# sourceMappingURL=AbsoluteOverflowX.component.js.map