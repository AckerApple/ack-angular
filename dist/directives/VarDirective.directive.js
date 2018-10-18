"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VarDirective = (function () {
    function VarDirective() {
        this.changed = new core_1.EventEmitter();
    }
    VarDirective.prototype.ngOnChanges = function (changes) {
        if (changes.var) {
            this.changed.emit(this.var);
        }
    };
    VarDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[var]',
                    exportAs: 'var'
                },] },
    ];
    VarDirective.propDecorators = {
        var: [{ type: core_1.Input }],
        changed: [{ type: core_1.Output }]
    };
    return VarDirective;
}());
exports.VarDirective = VarDirective;
