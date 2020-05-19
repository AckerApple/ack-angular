import { __decorate, __metadata } from "tslib";
import { addClass, removeClass } from "./FxOn.directive";
import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
let ShakeOn = class ShakeOn {
    constructor(element) {
        this.element = element;
        this.shakeConstant = false;
        this.shakeThen = new EventEmitter();
        this.shakeTypes = [
            'shake-slow', 'shake-hard', 'shake-little', 'shake-horizontal',
            'shake-vertical', 'shake-rotate', 'shake-opacity', 'shake-crazy',
            'shake-chunk'
        ];
    }
    ngOnInit() {
        Promise.resolve().then(() => this.update());
    }
    update() {
        this.shakeForMs = this.shakeForMs || 2000;
        this.shakeType = this.shakeType || 'shake-slow';
    }
    ngOnChanges(changes) {
        if (changes.shakeOn && changes.shakeOn.currentValue != null && changes.shakeOn.currentValue != changes.shakeOn.previousValue) {
            if (changes.shakeOn.currentValue) {
                this.onTrue();
            }
            else {
                this.onFalse();
            }
        }
        if (changes.shakeType && changes.shakeType.currentValue != changes.shakeType.previousValue) {
            if (this.shakeOn) {
                const pv = changes.shakeType.previousValue;
                if (pv) {
                    removeClass(this.element.nativeElement, pv);
                }
                this.applyType();
            }
            else {
                this.removeType();
            }
        }
    }
    onFalse() {
        removeClass(this.element.nativeElement, 'shake-constant');
        this.removeType();
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
    }
    removeType() {
        removeClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    }
    applyType() {
        addClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    }
    onTrue() {
        addClass(this.element.nativeElement, 'shake-constant');
        this.applyType();
        if (!this.shakeConstant) {
            this.timeout = setTimeout(() => {
                this.onFalse();
                this.shakeThen.emit(this);
            }, this.shakeForMs);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ShakeOn.prototype, "shakeConstant", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ShakeOn.prototype, "shakeOn", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ShakeOn.prototype, "shakeForMs", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ShakeOn.prototype, "shakeType", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ShakeOn.prototype, "shakeThen", void 0);
ShakeOn = __decorate([
    Directive({
        selector: "[shakeOn]",
        exportAs: "ShakeOn"
    }),
    __metadata("design:paramtypes", [ElementRef])
], ShakeOn);
export { ShakeOn };
