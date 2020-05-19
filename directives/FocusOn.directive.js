import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
let FocusOn = class FocusOn {
    constructor(element) {
        this.element = element;
        this.focusOnDelay = 0;
        this.focusThen = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.focusOn && changes.focusOn.currentValue) {
            if (this.focusOnDelay === 0) {
                Promise.resolve().then(() => this.update());
            }
            else {
                setTimeout(() => this.update(), this.focusOnDelay);
            }
        }
    }
    update() {
        this.element.nativeElement.focus();
        this.focusThen.emit();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], FocusOn.prototype, "focusOn", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FocusOn.prototype, "focusOnDelay", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FocusOn.prototype, "focusThen", void 0);
FocusOn = __decorate([
    Directive({
        selector: '[focusOn]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], FocusOn);
export { FocusOn };
