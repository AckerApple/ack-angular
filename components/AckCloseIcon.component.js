import { Component } from "@angular/core";
import * as i0 from "@angular/core";
var template = '<div style="display:inline-block;cursor:pointer;border:3px solid white;border-radius:50%;background-color:#666;color:white;text-align:center;font-family:Arial">' +
    '<div style="font-weight:bold;line-height:22px;font-size:23px;height:25px;width:25px">x</div>' +
    '</div>';
var AckCloseIcon = /** @class */ (function () {
    function AckCloseIcon() {
    }
    AckCloseIcon.ɵfac = function AckCloseIcon_Factory(t) { return new (t || AckCloseIcon)(); };
    AckCloseIcon.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AckCloseIcon, selectors: [["ack-close-icon"]], decls: 3, vars: 0, consts: [[2, "display", "inline-block", "cursor", "pointer", "border", "3px solid white", "border-radius", "50%", "background-color", "#666", "color", "white", "text-align", "center", "font-family", "Arial"], [2, "font-weight", "bold", "line-height", "22px", "font-size", "23px", "height", "25px", "width", "25px"]], template: function AckCloseIcon_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtext(2, "x");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return AckCloseIcon;
}());
export { AckCloseIcon };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AckCloseIcon, [{
        type: Component,
        args: [{
                selector: 'ack-close-icon',
                template: template
            }]
    }], null, null); })();
//# sourceMappingURL=AckCloseIcon.component.js.map