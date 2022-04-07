import { Directive, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
var InitDirective = /** @class */ (function () {
    function InitDirective() {
        this.init = new EventEmitter();
    }
    InitDirective.prototype.ngOnInit = function () {
        this.init.emit();
    };
    InitDirective.ɵfac = function InitDirective_Factory(t) { return new (t || InitDirective)(); };
    InitDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: InitDirective, selectors: [["", "init", ""]], outputs: { init: "init" } });
    return InitDirective;
}());
export { InitDirective };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InitDirective, [{
        type: Directive,
        args: [{
                selector: '[init]'
            }]
    }], null, { init: [{
            type: Output
        }] }); })();
//# sourceMappingURL=Init.directive.js.map