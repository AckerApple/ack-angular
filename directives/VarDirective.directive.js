"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VarDirective = (function () {
    function VarDirective() {
        this.changed = new core_1.EventEmitter();
    }
    VarDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.var) {
            setTimeout(function () { return _this.changed.emit(_this.var); }, 0);
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
