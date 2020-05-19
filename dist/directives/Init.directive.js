import { __decorate, __metadata } from "tslib";
import { Directive, Output, EventEmitter } from "@angular/core";
let Init = class Init {
    constructor() {
        this.init = new EventEmitter();
    }
    ngOnInit() {
        this.init.emit();
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], Init.prototype, "init", void 0);
Init = __decorate([
    Directive({
        selector: '[init]'
    })
], Init);
export { Init };
