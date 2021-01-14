import { EventEmitter, Output, Input, Directive } from "@angular/core";
export class AckAggregate {
    constructor() {
        this.outputChange = new EventEmitter();
    }
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
