"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var absolute_overflow_x_pug_1 = require("./templates/absolute-overflow-x.pug");
var AbsoluteOverflowX = /** @class */ (function () {
    function AbsoluteOverflowX() {
        this.active = true;
    }
    AbsoluteOverflowX.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'absolute-overflow-x',
                    template: absolute_overflow_x_pug_1.string
                },] },
    ];
    /** @nocollapse */
    AbsoluteOverflowX.ctorParameters = function () { return []; };
    AbsoluteOverflowX.propDecorators = {
        'scrollBars': [{ type: core_1.Input },],
        'wrapClass': [{ type: core_1.Input },],
        'active': [{ type: core_1.Input },],
    };
    return AbsoluteOverflowX;
}());
exports.AbsoluteOverflowX = AbsoluteOverflowX;
