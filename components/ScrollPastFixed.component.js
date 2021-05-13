import { ViewChild, TemplateRef, ElementRef, Component } from "@angular/core";
import { string } from "./templates/scroll-past-fixed.pug";
var ScrollPastFixed = /** @class */ (function () {
    function ScrollPastFixed(ElementRef) {
        this.ElementRef = ElementRef;
    }
    ScrollPastFixed.prototype.getReadElement = function () {
        var children = this.ElementRef.nativeElement.children;
        return children[children.length - 2];
    };
    ScrollPastFixed.prototype.init = function () {
        var _this = this;
        this.onScroll = function () { return _this.check(); };
        window.addEventListener("scroll", this.onScroll);
        this.onScroll();
    };
    ScrollPastFixed.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.init(); }); //prevent Expression has changed after it was checked error
    };
    ScrollPastFixed.prototype.check = function () {
        var scrollPos = window['pageYOffset'];
        if (this.placeholder && this.placeholder <= scrollPos) {
            return;
        }
        var elm = this.getReadElement();
        var offsetTop = this.placeholder || getDistanceFromTop(elm);
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
    };
    ScrollPastFixed.decorators = [
        { type: Component, args: [{
                    selector: 'scroll-past-fixed',
                    template: string
                },] }
    ];
    ScrollPastFixed.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ScrollPastFixed.propDecorators = {
        template: [{ type: ViewChild, args: ['template',] }]
    };
    return ScrollPastFixed;
}());
export { ScrollPastFixed };
export function getDistanceFromTop(element) {
    var yPos = 0;
    while (element) {
        yPos += (element.offsetTop);
        element = element.offsetParent;
    }
    return yPos;
}
//# sourceMappingURL=ScrollPastFixed.component.js.map