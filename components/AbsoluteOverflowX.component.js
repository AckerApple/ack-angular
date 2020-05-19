import { __decorate, __metadata } from "tslib";
import { ElementRef, Component, Input } from "@angular/core";
import { string } from "./templates/absolute-overflow-x.pug";
let AbsoluteOverflowX = class AbsoluteOverflowX {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
        this.active = true;
        this.overflow = 'auto';
    }
    ngOnInit() {
        this.checkDisplay();
    }
    ngOnChanges(changes) {
        if (changes.active) {
            this.checkDisplay();
        }
    }
    ngAfterViewInit() {
        this.ElementRef.nativeElement.style.display = 'block';
    }
    checkDisplay() {
        this.ElementRef.nativeElement.style.position = this.active ? 'relative' : 'static';
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], AbsoluteOverflowX.prototype, "scrollBars", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AbsoluteOverflowX.prototype, "wrapClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AbsoluteOverflowX.prototype, "active", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AbsoluteOverflowX.prototype, "overflow", void 0);
AbsoluteOverflowX = __decorate([
    Component({
        selector: 'absolute-overflow-x',
        template: string
    }),
    __metadata("design:paramtypes", [ElementRef])
], AbsoluteOverflowX);
export { AbsoluteOverflowX };
