import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, Output, EventEmitter } from "@angular/core";
let PxFromHtmlTop = class PxFromHtmlTop {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
        this.numberChange = new EventEmitter();
        this.onScroll = () => {
            this.setter();
            this.emit();
        };
        window.addEventListener("resize", this.onScroll);
        window.addEventListener("scroll", this.onScroll);
    }
    emit() {
        this.numberChange.emit(this.number);
    }
    ngOnChanges() {
        Promise.resolve().then(() => {
            this.setter();
            this.emit();
        });
        this.delayFire(250);
        this.delayFire(750);
        this.delayFire(1500);
    }
    setter() {
        const top = this.ElementRef.nativeElement.getBoundingClientRect().top;
        this.number = top;
    }
    ngAfterViewInit() {
        this.delayFire();
        this.delayFire(200);
    }
    delayFire(num = 0) {
        setTimeout(() => {
            this.setter();
            this.emit();
        }, num);
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("resize", this.onScroll);
    }
};
__decorate([
    Input("pxFromHtmlTop"),
    __metadata("design:type", Number)
], PxFromHtmlTop.prototype, "number", void 0);
__decorate([
    Output("pxFromHtmlTopChange"),
    __metadata("design:type", EventEmitter)
], PxFromHtmlTop.prototype, "numberChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PxFromHtmlTop.prototype, "watch", void 0);
PxFromHtmlTop = __decorate([
    Directive({
        selector: "[pxFromHtmlTop]",
        exportAs: "PxFromHtmlTop"
    }),
    __metadata("design:paramtypes", [ElementRef])
], PxFromHtmlTop);
export { PxFromHtmlTop };
