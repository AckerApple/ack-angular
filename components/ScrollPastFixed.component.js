"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const scroll_past_fixed_pug_1 = require("./templates/scroll-past-fixed.pug");
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
    core_1.ViewChild('template'),
    __metadata("design:type", core_1.TemplateRef)
], ScrollPastFixed.prototype, "template", void 0);
ScrollPastFixed = __decorate([
    core_1.Component({
        selector: 'scroll-past-fixed',
        template: scroll_past_fixed_pug_1.string
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ScrollPastFixed);
exports.ScrollPastFixed = ScrollPastFixed;
function getDistanceFromTop(element) {
    let yPos = 0;
    while (element) {
        yPos += (element.offsetTop);
        element = element.offsetParent;
    }
    return yPos;
}
exports.getDistanceFromTop = getDistanceFromTop;
