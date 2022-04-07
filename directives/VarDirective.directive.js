import { Directive, Input, EventEmitter, Output } from "@angular/core";
import * as i0 from "@angular/core";
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
    VarDirective.ɵfac = function VarDirective_Factory(t) { return new (t || VarDirective)(); };
    VarDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: VarDirective, selectors: [["", "var", ""]], inputs: { var: "var" }, outputs: { changed: "changed" }, exportAs: ["var"], features: [i0.ɵɵNgOnChangesFeature] });
    return VarDirective;
}());
export { VarDirective };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VarDirective, [{
        type: Directive,
        args: [{
                selector: "[var]",
                exportAs: "var"
            }]
    }], null, { var: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=VarDirective.directive.js.map