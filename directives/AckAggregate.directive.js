import { EventEmitter, Output, Input, Directive } from "@angular/core";
import * as i0 from "@angular/core";
var AckAggregate = /** @class */ (function () {
    function AckAggregate() {
        this.outputChange = new EventEmitter();
    }
    AckAggregate.ɵfac = function AckAggregate_Factory(t) { return new (t || AckAggregate)(); };
    AckAggregate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AckAggregate, selectors: [["ack-aggregate"]], inputs: { type: "type", keys: "keys", output: "output" }, outputs: { outputChange: "outputChange" } });
    return AckAggregate;
}());
export { AckAggregate };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AckAggregate, [{
        type: Directive,
        args: [{
                selector: 'ack-aggregate'
            }]
    }], null, { type: [{
            type: Input
        }], keys: [{
            type: Input
        }], output: [{
            type: Input
        }], outputChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=AckAggregate.directive.js.map