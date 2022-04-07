import { Component, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import { animations } from "ack-angular-fx";
import * as i0 from "@angular/core";
import * as i1 from "../providers/AckApp.provider";
import * as i2 from "@angular/common";
import * as i3 from "./AckCloseIcon.component";
function AckModalLayout_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "ack-close-icon", 4);
    i0.ɵɵlistener("click", function AckModalLayout_div_0_div_7_Template_ack_close_icon_click_2_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(2); return ctx_r2.fireClose(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var _c0 = function (a0) { return { "background-color": a0 }; };
function AckModalLayout_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "table", 3);
    i0.ɵɵelementStart(3, "tr");
    i0.ɵɵelementStart(4, "td", 4);
    i0.ɵɵlistener("click", function AckModalLayout_div_0_Template_td_click_4_listener() { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.allowClose ? ctx_r4.fireClose() : 0; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "tr");
    i0.ɵɵelementStart(6, "td", 5);
    i0.ɵɵtemplate(7, AckModalLayout_div_0_div_7_Template, 3, 0, "div", 6);
    i0.ɵɵprojection(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "tr");
    i0.ɵɵelementStart(10, "td", 4);
    i0.ɵɵlistener("click", function AckModalLayout_div_0_Template_td_click_10_listener() { i0.ɵɵrestoreView(_r5); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.allowClose ? ctx_r6.fireClose() : 0; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("z-index", ctx_r0.zIndex || 20);
    i0.ɵɵproperty("@fadeInOutUp", 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c0, ctx_r0.backgroundColor || "rgba(0,0,0,.7)"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r0.wrapStyle);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngStyle", ctx_r0.wrapCellStyle);
    i0.ɵɵattribute("valign", ctx_r0.valign);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.allowClose);
} }
var _c1 = ["*"];
// import { string } from "./templates/ack-modal-layout.pug"
var AckModalLayout = /** @class */ (function () {
    //@Input() template:ElementRef<any>
    function AckModalLayout(element, AckApp) {
        var _this = this;
        this.element = element;
        this.AckApp = AckApp;
        this.zIndex = 20;
        this.close = new EventEmitter();
        this.allowClose = true;
        this.valign = 'top';
        this.isModelMode = false;
        this.showModel = true; // when using, do not allow to be undefined
        this.showModelChange = new EventEmitter();
        //after possible double click, close on outside content click
        setTimeout(function () { return _this.clickListenForClose(); }, 400);
    }
    AckModalLayout.prototype.clickListenForClose = function () {
        var _this = this;
        this.element.nativeElement.addEventListener('click', function (event) {
            if (!_this.allowClose)
                return false;
            var eTar = event.srcElement || event.toElement || event.target;
            var isDirectChild = eTar == _this.element.nativeElement.children[0] || eTar == _this.element.nativeElement.children[0].children[0];
            if (isDirectChild) {
                _this.fireClose();
            }
            return true;
        });
    };
    AckModalLayout.prototype.ngOnInit = function () {
        var _this = this;
        return Promise.resolve().then(function () {
            if (_this.showModel !== undefined && _this.showModelChange.observers.length) {
                _this.isModelMode = true;
            }
        });
    };
    AckModalLayout.prototype.fireClose = function () {
        this.showModelChange.emit(this.showModel = false);
        this.close.emit(this);
    };
    AckModalLayout.ɵfac = function AckModalLayout_Factory(t) { return new (t || AckModalLayout)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.AckApp)); };
    AckModalLayout.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AckModalLayout, selectors: [["ack-modal-layout"]], inputs: { zIndex: "zIndex", allowClose: "allowClose", wrapStyle: "wrapStyle", wrapCellStyle: "wrapCellStyle", backgroundColor: "backgroundColor", valign: "valign", isModelMode: "isModelMode", showModel: "showModel" }, outputs: { close: "close", showModelChange: "showModelChange" }, ngContentSelectors: _c1, decls: 1, vars: 1, consts: [["style", "\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n  ", 3, "z-index", 4, "ngIf"], [2, "position", "fixed", "top", "0", "left", "0", "height", "100%", "width", "100%", "overflow", "auto"], [2, "height", "100%", "width", "100%", "padding", "20px", "display", "inline-table", 3, "ngStyle"], ["border", "0", "align", "center", "cellpadding", "0", "cellspacing", "0", 2, "height", "100%", "margin", "auto", 3, "ngStyle"], [3, "click"], [3, "ngStyle"], ["style", "position: relative", 4, "ngIf"], [2, "position", "relative"], [2, "position", "absolute", "bottom", "-17px", "right", "-16px", "border", "1px solid #ddd", "border-radius", "50%", "z-index", "20"]], template: function AckModalLayout_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, AckModalLayout_div_0_Template, 11, 10, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showModel || !ctx.isModelMode);
        } }, directives: [i2.NgIf, i2.NgStyle, i3.AckCloseIcon], encapsulation: 2, data: { animation: animations } });
    return AckModalLayout;
}());
export { AckModalLayout };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AckModalLayout, [{
        type: Component,
        args: [{
                selector: 'ack-modal-layout',
                // template:string,
                templateUrl: './ack-modal-layout.component.html',
                animations: animations
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.AckApp }]; }, { zIndex: [{
            type: Input
        }], close: [{
            type: Output
        }], allowClose: [{
            type: Input
        }], wrapStyle: [{
            type: Input
        }], wrapCellStyle: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }], valign: [{
            type: Input
        }], isModelMode: [{
            type: Input
        }], showModel: [{
            type: Input
        }], showModelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=AckModalLayout.component.js.map