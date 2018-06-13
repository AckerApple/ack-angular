"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckAggregate = (function () {
    function AckAggregate() {
        this.outputChange = new core_1.EventEmitter();
    }
    AckAggregate.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ack-aggregate'
                },] },
    ];
    AckAggregate.propDecorators = {
        "type": [{ type: core_1.Input },],
        "keys": [{ type: core_1.Input },],
        "output": [{ type: core_1.Input },],
        "outputChange": [{ type: core_1.Output },],
    };
    return AckAggregate;
}());
exports.AckAggregate = AckAggregate;
