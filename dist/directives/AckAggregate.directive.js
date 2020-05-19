import { __decorate, __metadata } from "tslib";
import { EventEmitter, Output, Input, Directive } from "@angular/core";
let AckAggregate = class AckAggregate {
    constructor() {
        this.outputChange = new EventEmitter();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], AckAggregate.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], AckAggregate.prototype, "keys", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AckAggregate.prototype, "output", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AckAggregate.prototype, "outputChange", void 0);
AckAggregate = __decorate([
    Directive({
        selector: 'ack-aggregate'
    })
], AckAggregate);
export { AckAggregate };
