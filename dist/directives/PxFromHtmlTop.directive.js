import { Directive, ElementRef, Input, Output, EventEmitter } from "@angular/core";
export class PxFromHtmlTop {
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
}
PxFromHtmlTop.decorators = [
    { type: Directive, args: [{
                selector: "[pxFromHtmlTop]",
                exportAs: "PxFromHtmlTop"
            },] }
];
PxFromHtmlTop.ctorParameters = () => [
    { type: ElementRef }
];
PxFromHtmlTop.propDecorators = {
    number: [{ type: Input, args: ["pxFromHtmlTop",] }],
    numberChange: [{ type: Output, args: ["pxFromHtmlTopChange",] }],
    watch: [{ type: Input }]
};
