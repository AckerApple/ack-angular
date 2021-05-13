import { Directive, Input, EventEmitter, Output } from "@angular/core";
var VarDirective = /** @class */ (function () {
    function VarDirective() {
        this.changed = new EventEmitter();
    }
    VarDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.var) {
            Promise.resolve().then(function () { return _this.changed.emit(_this.var); });
        }
    };
    VarDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[var]",
                    exportAs: "var"
                },] }
    ];
    VarDirective.propDecorators = {
        var: [{ type: Input }],
        changed: [{ type: Output }]
    };
    return VarDirective;
}());
export { VarDirective };
//# sourceMappingURL=VarDirective.directive.js.map