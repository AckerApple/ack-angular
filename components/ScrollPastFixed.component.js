"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var scroll_past_fixed_pug_1 = require("./templates/scroll-past-fixed.pug");
var ScrollPastFixed = (function () {
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
        setTimeout(function () { return _this.init(); }, 0);
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
            this.fillHeight = null;
            delete this.placeholder;
            this.currentPosition = null;
        }
    };
    ScrollPastFixed.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'scroll-past-fixed',
                    template: scroll_past_fixed_pug_1.string
                },] },
    ];
    ScrollPastFixed.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    ScrollPastFixed.propDecorators = {
        "template": [{ type: core_1.ViewChild, args: ['template',] },],
    };
    return ScrollPastFixed;
}());
exports.ScrollPastFixed = ScrollPastFixed;
function getDistanceFromTop(element) {
    var yPos = 0;
    while (element) {
        yPos += (element.offsetTop);
        element = element.offsetParent;
    }
    return yPos;
}
exports.getDistanceFromTop = getDistanceFromTop;
