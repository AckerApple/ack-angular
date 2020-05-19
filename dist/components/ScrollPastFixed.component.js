import { __decorate, __metadata } from "tslib";
import { ViewChild, TemplateRef, ElementRef, Component } from "@angular/core";
import { string } from "./templates/scroll-past-fixed.pug";
let ScrollPastFixed = class ScrollPastFixed {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
    }
    getReadElement() {
        const children = this.ElementRef.nativeElement.children;
        return children[children.length - 2];
    }
    init() {
        this.onScroll = () => this.check();
        window.addEventListener("scroll", this.onScroll);
        this.onScroll();
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => this.init());
    }
    check() {
        const scrollPos = window['pageYOffset'];
        if (this.placeholder && this.placeholder <= scrollPos) {
            return;
        }
        const elm = this.getReadElement();
        const offsetTop = this.placeholder || getDistanceFromTop(elm);
        if (offsetTop <= scrollPos) {
            this.currentPosition = 'fixed';
            this.placeholder = offsetTop;
            this.fillHeight = elm.offsetHeight;
        }
        else {
            delete this.fillHeight;
            delete this.placeholder;
            delete this.currentPosition;
        }
    }
};
__decorate([
    ViewChild('template'),
    __metadata("design:type", TemplateRef)
], ScrollPastFixed.prototype, "template", void 0);
ScrollPastFixed = __decorate([
    Component({
        selector: 'scroll-past-fixed',
        template: string
    }),
    __metadata("design:paramtypes", [ElementRef])
], ScrollPastFixed);
export { ScrollPastFixed };
export function getDistanceFromTop(element) {
    let yPos = 0;
    while (element) {
        yPos += (element.offsetTop);
        element = element.offsetParent;
    }
    return yPos;
}
