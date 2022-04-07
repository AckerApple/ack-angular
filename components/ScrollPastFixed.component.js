import { ViewChild, TemplateRef, ElementRef, Component } from "@angular/core";
import { string } from "./templates/scroll-past-fixed.pug";
import * as i0 from "@angular/core";
var _c0 = ["template"];
var _c1 = ["*"];
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
    ScrollPastFixed.ɵfac = function ScrollPastFixed_Factory(t) { return new (t || ScrollPastFixed)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ScrollPastFixed.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScrollPastFixed, selectors: [["scroll-past-fixed"]], viewQuery: function ScrollPastFixed_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
        } }, ngContentSelectors: _c1, decls: 3, vars: 4, consts: [[2, "width", "100%", "top", "0", "z-index", "1"]], template: function ScrollPastFixed_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "div");
        } if (rf & 2) {
            i0.ɵɵstyleProp("position", ctx.currentPosition);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("height", ctx.fillHeight, "px");
        } }, encapsulation: 2 });
    return ScrollPastFixed;
}());
export { ScrollPastFixed };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScrollPastFixed, [{
        type: Component,
        args: [{
                selector: 'scroll-past-fixed',
                template: string
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { template: [{
            type: ViewChild,
            args: ['template']
        }] }); })();
export function getDistanceFromTop(element) {
    var yPos = 0;
    while (element) {
        yPos += (element.offsetTop);
        element = element.offsetParent;
    }
    return yPos;
}
//# sourceMappingURL=ScrollPastFixed.component.js.map