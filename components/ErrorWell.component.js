import { EventEmitter, Output, Input, ContentChild, Component, TemplateRef } from "@angular/core";
import { animations } from "ack-angular-fx";
import { string as errorWell } from "./templates/error-well.pug";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./AckCloseIcon.component";
import * as i3 from "./AbsoluteOverflowX.component";
import * as i4 from "../pipes";
var _c0 = ["titleFooter"];
function ErrorWell_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵlistener("click", function ErrorWell_div_0_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); var ctx_r3 = i0.ɵɵnextContext(2); ctx_r3.close.emit(); return ctx_r3.errorClose = ctx_r3.error; });
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelement(2, "ack-close-icon");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ErrorWell_div_0_div_2_a_5_Template(rf, ctx) { if (rf & 1) {
    var _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 11);
    i0.ɵɵlistener("click", function ErrorWell_div_0_div_2_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r9); var ctx_r8 = i0.ɵɵnextContext(3); return ctx_r8.moreDetails = !ctx_r8.moreDetails; });
    i0.ɵɵtext(1, "details");
    i0.ɵɵelementEnd();
} }
function ErrorWell_div_0_div_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ErrorWell_div_0_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "absolute-overflow-x", 12);
    i0.ɵɵelementStart(2, "pre", 13);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "json");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("@fadeInOutUp", 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 2, ctx_r7.error));
} }
function ErrorWell_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵelementStart(3, "div", 8);
    i0.ɵɵlistener("click", function ErrorWell_div_0_div_2_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r11); var ctx_r10 = i0.ɵɵnextContext(2); return !ctx_r10.allowDetails || (ctx_r10.moreDetails = !ctx_r10.moreDetails); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, ErrorWell_div_0_div_2_a_5_Template, 2, 0, "a", 9);
    i0.ɵɵpipe(6, "typeof");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ErrorWell_div_0_div_2_ng_container_7_Template, 1, 0, "ng-container", 10);
    i0.ɵɵtemplate(8, ErrorWell_div_0_div_2_div_8_Template, 5, 4, "div", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@fadeInOutUp", 1)("ngClass", ctx_r2.cssClasses);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("cursor-pointer", ctx_r2.allowDetails);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.getErrorMessage(ctx_r2.error));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.allowDetails && ctx_r2.error && i0.ɵɵpipeBind1(6, 8, ctx_r2.error) != "string");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.titleFooter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.moreDetails);
} }
function ErrorWell_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ErrorWell_div_0_div_1_Template, 3, 0, "div", 1);
    i0.ɵɵtemplate(2, ErrorWell_div_0_div_2_Template, 9, 10, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@fadeInOutUp", 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.error && ctx_r0.closable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.error != null && ctx_r0.errorClose != ctx_r0.error);
} }
var ErrorWell = /** @class */ (function () {
    function ErrorWell() {
        this.message = 'Unexpected Error Occured';
        this.closable = true;
        this.allowDetails = true;
        this.close = new EventEmitter();
    }
    ErrorWell.prototype.ngOnInit = function () {
        this.cssClasses = this.cssClasses || 'bg-danger border border-danger text-danger';
    };
    ErrorWell.prototype.getErrorMessage = function (error) {
        if (!error)
            return this.message;
        if (typeof error == 'string')
            return error;
        return error.message || error["statusText"] || this.message;
    };
    ErrorWell.ɵfac = function ErrorWell_Factory(t) { return new (t || ErrorWell)(); };
    ErrorWell.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ErrorWell, selectors: [["error-well"]], contentQueries: function ErrorWell_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.titleFooter = _t.first);
        } }, inputs: { moreDetails: "moreDetails", message: "message", error: "error", cssClasses: "cssClasses", closable: "closable", allowDetails: "allowDetails" }, outputs: { close: "close" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["style", "position:relative", 3, "click", 4, "ngIf"], ["class", "pad-xxs", 3, "ngClass", 4, "ngIf"], [2, "position", "relative", 3, "click"], [2, "position", "absolute", "bottom", "-17px", "right", "-16px", "border", "1px solid #DDD", "border-radius", "50%", "z-index", "20"], [1, "pad-xxs", 3, "ngClass"], [1, "flex-valign-center", "flex-wrap", "child-margin-xxs"], [1, "flex-1"], [1, "strong", "text-3x", "margin-0", 3, "click"], ["class", "text-blue underline text-xs", 3, "click", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "text-blue", "underline", "text-xs", 3, "click"], [1, "text-sm"], [1, "margin-0", "pad-xs"]], template: function ErrorWell_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ErrorWell_div_0_Template, 3, 3, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.error != null && ctx.errorClose != ctx.error);
        } }, directives: [i1.NgIf, i2.AckCloseIcon, i1.NgClass, i1.NgTemplateOutlet, i3.AbsoluteOverflowX], pipes: [i4.TypeofPipe, i1.JsonPipe], encapsulation: 2, data: { animation: animations } });
    return ErrorWell;
}());
export { ErrorWell };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ErrorWell, [{
        type: Component,
        args: [{
                selector: 'error-well',
                template: errorWell,
                animations: animations
            }]
    }], null, { moreDetails: [{
            type: Input
        }], message: [{
            type: Input
        }], error: [{
            type: Input
        }], cssClasses: [{
            type: Input
        }], closable: [{
            type: Input
        }], allowDetails: [{
            type: Input
        }], close: [{
            type: Output
        }], titleFooter: [{
            type: ContentChild,
            args: ["titleFooter"]
        }] }); })();
//# sourceMappingURL=ErrorWell.component.js.map