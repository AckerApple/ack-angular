"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VarDirective = (function () {
    function VarDirective() {
    }
    VarDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[var]',
                    exportAs: 'var'
                },] },
    ];
    VarDirective.propDecorators = {
        var: [{ type: core_1.Input }]
    };
    return VarDirective;
}());
exports.VarDirective = VarDirective;
