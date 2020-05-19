import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
let SelectOn = class SelectOn {
    constructor(element) {
        this.element = element;
        this.selectOnDelay = 0;
        this.selectThen = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.selectOn && changes.selectOn.currentValue) {
            if (this.selectOnDelay === 0) {
                Promise.resolve().then(() => this.update());
            }
            setTimeout(() => this.update(), this.selectOnDelay);
        }
    }
    update() {
        this.element.nativeElement.select();
        this.selectThen.emit();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectOn.prototype, "selectOn", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectOn.prototype, "selectOnDelay", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SelectOn.prototype, "selectThen", void 0);
SelectOn = __decorate([
    Directive({
        selector: '[selectOn]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], SelectOn);
export { SelectOn };
