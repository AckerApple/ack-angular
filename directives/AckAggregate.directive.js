import { EventEmitter, Output, Input, Directive } from "@angular/core";
var AckAggregate = /** @class */ (function () {
    function AckAggregate() {
        this.outputChange = new EventEmitter();
    }
    AckAggregate.decorators = [
        { type: Directive, args: [{
                    selector: 'ack-aggregate'
                },] }
    ];
    AckAggregate.propDecorators = {
        type: [{ type: Input }],
        keys: [{ type: Input }],
        output: [{ type: Input }],
        outputChange: [{ type: Output }]
    };
    return AckAggregate;
}());
export { AckAggregate };
//# sourceMappingURL=AckAggregate.directive.js.map