import { __decorate, __metadata } from "tslib";
import { Directive, Input, EventEmitter, Output } from "@angular/core";
let VarDirective = class VarDirective {
    constructor() {
        this.changed = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.var) {
            Promise.resolve().then(() => this.changed.emit(this.var));
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], VarDirective.prototype, "var", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], VarDirective.prototype, "changed", void 0);
VarDirective = __decorate([
    Directive({
        selector: "[var]",
        exportAs: "var"
    })
], VarDirective);
export { VarDirective };
