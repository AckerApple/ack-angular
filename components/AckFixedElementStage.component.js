import { ElementRef, Component } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import { string } from "./templates/ack-fixed-element-stage.pug";
import * as i0 from "@angular/core";
import * as i1 from "../providers/AckApp.provider";
import * as i2 from "@angular/common";
import * as i3 from "./AckModalLayout.component";
function AckFixedElementStage_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AckFixedElementStage_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckFixedElementStage_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var fixedElm_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", fixedElm_r3.content);
} }
function AckFixedElementStage_ng_container_1_h3_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var prompt_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(prompt_r5.title);
} }
function AckFixedElementStage_ng_container_1_a_9_Template(rf, ctx) { if (rf & 1) {
    var _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵlistener("click", function AckFixedElementStage_ng_container_1_a_9_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r12); var prompt_r5 = i0.ɵɵnextContext().$implicit; return prompt_r5.emitter.emit(false); });
    i0.ɵɵtext(1, "Cancel");
    i0.ɵɵelementEnd();
} }
var _c0 = function (a0) { return { "font-weight": a0 }; };
function AckFixedElementStage_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ack-modal-layout", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtemplate(3, AckFixedElementStage_ng_container_1_h3_3_Template, 2, 1, "h3", 4);
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "br");
    i0.ɵɵelement(7, "br");
    i0.ɵɵelementStart(8, "div", 6);
    i0.ɵɵtemplate(9, AckFixedElementStage_ng_container_1_a_9_Template, 2, 0, "a", 7);
    i0.ɵɵelementStart(10, "a", 8);
    i0.ɵɵlistener("click", function AckFixedElementStage_ng_container_1_Template_a_click_10_listener() { var restoredCtx = i0.ɵɵrestoreView(_r14); var prompt_r5 = restoredCtx.$implicit; return prompt_r5.emitter.emit(true); });
    i0.ɵɵtext(11, "OK");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var prompt_r5 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("allowClose", 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", prompt_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(prompt_r5.message);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", prompt_r5.type == "confirm");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c0, prompt_r5.type == "confirm" ? "bold" : null));
} }
function AckFixedElementStage_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) { }
function AckFixedElementStage_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckFixedElementStage_ng_container_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r15.layout);
} }
function AckFixedElementStage_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckFixedElementStage_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r15.isModelMode || item_r15.showModel);
} }
var AckFixedElementStage = /** @class */ (function () {
    function AckFixedElementStage(AckApp, ElementRef) {
        this.AckApp = AckApp;
        this.ElementRef = ElementRef;
        AckApp.fixedElementStage = ElementRef;
    }
    AckFixedElementStage.ɵfac = function AckFixedElementStage_Factory(t) { return new (t || AckFixedElementStage)(i0.ɵɵdirectiveInject(i1.AckApp), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    AckFixedElementStage.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AckFixedElementStage, selectors: [["ack-fixed-element-stage"]], decls: 3, vars: 3, consts: [[4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet"], ["zIndex", "99", 3, "allowClose"], [2, "text-align", "left", "max-width", "900px", "border", "1px solid #DDD", "border-radius", "5px", "margin", "1em", "padding", "1em", "background-color", "white"], ["style", "margin-top:0;", 4, "ngIf"], [2, "padding-right", "1em"], [2, "text-align", "right"], ["style", "text-align:center;display:inline-block;min-width:75px;border-radius:3px;border:1px solid #AAA;padding:0 .5em;margin-right:.5em;", 3, "click", 4, "ngIf"], [2, "text-align", "center", "display", "inline-block", "min-width", "75px", "border-radius", "3px", "border", "1px solid #AAA", "padding", "0 .5em", 3, "ngStyle", "click"], [2, "margin-top", "0"], [2, "text-align", "center", "display", "inline-block", "min-width", "75px", "border-radius", "3px", "border", "1px solid #AAA", "padding", "0 .5em", "margin-right", ".5em", 3, "click"], [4, "ngIf"], [3, "ngTemplateOutlet"]], template: function AckFixedElementStage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AckFixedElementStage_ng_container_0_Template, 2, 1, "ng-container", 0);
            i0.ɵɵtemplate(1, AckFixedElementStage_ng_container_1_Template, 12, 7, "ng-container", 0);
            i0.ɵɵtemplate(2, AckFixedElementStage_ng_container_2_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.AckApp.fixedElms);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.AckApp.prompts.prompts);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.AckApp.modals);
        } }, directives: [i2.NgForOf, i2.NgTemplateOutlet, i3.AckModalLayout, i2.NgIf, i2.NgStyle], encapsulation: 2 });
    return AckFixedElementStage;
}());
export { AckFixedElementStage };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AckFixedElementStage, [{
        type: Component,
        args: [{
                selector: 'ack-fixed-element-stage',
                template: string
            }]
    }], function () { return [{ type: i1.AckApp }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=AckFixedElementStage.component.js.map