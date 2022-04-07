import { ContentChild, Component, Input, ElementRef, TemplateRef } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
import { string } from "./templates/ack-sections.pug";
import * as i0 from "@angular/core";
import * as i1 from "../providers/AckSections.provider";
import * as i2 from "../directives/HtmlHeightModel.directive";
import * as i3 from "@angular/common";
import * as i4 from "../directives/ElementSizeModel.directive";
var _c0 = ["table"];
var _c1 = ["headerWrap"];
var _c2 = ["bodyCell"];
var _c3 = ["leftBodyWrap"];
var _c4 = ["rightBodyWrap"];
function AckSections_ng_container_1_div_1_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_container_1_div_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_container_1_div_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
var _c5 = function (a0) { return { outlet: a0 }; };
function AckSections_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("elementHeightModelChange", function AckSections_ng_container_1_div_1_Template_div_elementHeightModelChange_0_listener($event) { i0.ɵɵrestoreView(_r14); var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.headerHeight = $event; });
    i0.ɵɵtemplate(1, AckSections_ng_container_1_div_1_1_Template, 1, 0, undefined, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r8 = i0.ɵɵreference(3);
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("z-index", ctx_r7.zIndex);
    i0.ɵɵproperty("elementHeightModel", ctx_r7.headerHeight)("elementSizeModelWatch", ctx_r7.SectionProvider.headerTemplates.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.headerWrap || _r8)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c5, _r8));
} }
function AckSections_ng_container_1_ng_template_2_ng_container_0_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_container_1_ng_template_2_ng_container_0_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_container_1_ng_template_2_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_container_1_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckSections_ng_container_1_ng_template_2_ng_container_0_1_Template, 1, 0, undefined, 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r16 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r16);
} }
function AckSections_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_container_1_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 9);
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngForOf", ctx_r9.SectionProvider.headerTemplates);
} }
function AckSections_ng_container_1_div_4_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_container_1_div_4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_container_1_div_4_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, AckSections_ng_container_1_div_4_1_Template, 1, 0, undefined, 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r8 = i0.ɵɵreference(3);
    var ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("z-index", ctx_r10.zIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
function AckSections_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckSections_ng_container_1_div_1_Template, 2, 8, "div", 5);
    i0.ɵɵtemplate(2, AckSections_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, AckSections_ng_container_1_div_4_Template, 2, 3, "div", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.mode === "calculate");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.mode || ctx_r0.mode === "clone");
} }
function AckSections_2_ng_template_0_Template(rf, ctx) { }
function AckSections_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_2_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_3_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 12);
    i0.ɵɵtemplate(1, AckSections_ng_template_3_1_Template, 1, 0, undefined, 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r4 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
function AckSections_ng_template_5_tr_0_ng_container_2_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_5_tr_0_ng_container_2_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_tr_0_ng_container_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_5_tr_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_tr_0_ng_container_2_ng_container_1_1_Template, 1, 0, undefined, 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r35 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r35);
} }
function AckSections_ng_template_5_tr_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_tr_0_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r33.SectionProvider.headerTemplates);
} }
function AckSections_ng_template_5_tr_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td", 17);
    i0.ɵɵtemplate(2, AckSections_ng_template_5_tr_0_ng_container_2_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("height", ctx_r24.headerHeight, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r24.mode || ctx_r24.mode === "clone");
} }
function AckSections_ng_template_5_td_2_ng_template_1_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_5_td_2_ng_template_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_td_2_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_5_td_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_td_2_ng_template_1_1_Template, 1, 0, undefined, 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r40 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r40);
} }
function AckSections_ng_template_5_td_2_ng_template_3_ng_container_0_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_5_td_2_ng_template_3_ng_container_0_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_td_2_ng_template_3_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_5_td_2_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_td_2_ng_template_3_ng_container_0_1_Template, 1, 0, undefined, 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r48 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r48);
} }
function AckSections_ng_template_5_td_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_td_2_ng_template_3_ng_container_0_Template, 2, 1, "ng-container", 9);
} if (rf & 2) {
    var ctx_r41 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngForOf", ctx_r41.SectionProvider.leftBodyTemplates);
} }
function AckSections_ng_template_5_td_2_div_5_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_5_td_2_div_5_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_td_2_div_5_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_5_td_2_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵlistener("elementWidthModelChange", function AckSections_ng_template_5_td_2_div_5_Template_div_elementWidthModelChange_0_listener($event) { i0.ɵɵrestoreView(_r54); var ctx_r53 = i0.ɵɵnextContext(3); return ctx_r53.leftBodyWidth = $event; });
    i0.ɵɵtemplate(1, AckSections_ng_template_5_td_2_div_5_1_Template, 1, 0, undefined, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r38 = i0.ɵɵreference(2);
    var _r40 = i0.ɵɵreference(4);
    var ctx_r42 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("z-index", ctx_r42.zIndex - 1)("height", ctx_r42.htmlHeightModel - (ctx_r42.SectionProvider.headerTemplates.length ? ctx_r42.headerHeight : 0) - (ctx_r42.SectionProvider.footerTemplates.length ? ctx_r42.footerHeight : 0), "px");
    i0.ɵɵproperty("elementWidthModel", ctx_r42.leftBodyWidth)("elementSizeModelWatch", ctx_r42.SectionProvider.leftBodyTemplates.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r42.leftBodyWrap || _r38)("ngTemplateOutletContext", i0.ɵɵpureFunction1(8, _c5, _r40));
} }
function AckSections_ng_template_5_td_2_div_6_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_5_td_2_div_6_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_td_2_div_6_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_5_td_2_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_td_2_div_6_1_Template, 1, 0, undefined, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r38 = i0.ɵɵreference(2);
    var _r40 = i0.ɵɵreference(4);
    var ctx_r43 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("z-index", ctx_r43.zIndex - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r43.leftBodyWrap || _r38)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c5, _r40));
} }
function AckSections_ng_template_5_td_2_ng_container_7_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_5_td_2_ng_container_7_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_td_2_ng_container_7_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_5_td_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_td_2_ng_container_7_1_Template, 1, 0, undefined, 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r38 = i0.ɵɵreference(2);
    var _r40 = i0.ɵɵreference(4);
    var ctx_r44 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r44.leftBodyWrap || _r38)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c5, _r40));
} }
function AckSections_ng_template_5_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_td_2_ng_template_1_Template, 2, 1, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, AckSections_ng_template_5_td_2_ng_template_3_Template, 1, 1, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(5, AckSections_ng_template_5_td_2_div_5_Template, 2, 10, "div", 21);
    i0.ɵɵtemplate(6, AckSections_ng_template_5_td_2_div_6_Template, 2, 6, "div", 22);
    i0.ɵɵtemplate(7, AckSections_ng_template_5_td_2_ng_container_7_Template, 2, 4, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", ctx_r25.leftBodyWidth, "px");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r25.mode === "calculate");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r25.mode || ctx_r25.mode === "clone");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r25.mode || ctx_r25.mode === "clone");
} }
function AckSections_ng_template_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AckSections_ng_template_5_ng_template_4_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_5_ng_template_4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_ng_template_4_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 26);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_ng_template_4_1_Template, 1, 0, undefined, 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r29 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r29);
} }
function AckSections_ng_template_5_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function AckSections_ng_template_5_td_8_ng_template_1_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_5_td_8_ng_template_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_td_8_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_5_td_8_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_td_8_ng_template_1_1_Template, 1, 0, undefined, 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r63 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r63);
} }
function AckSections_ng_template_5_td_8_ng_template_3_ng_container_0_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_5_td_8_ng_template_3_ng_container_0_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_td_8_ng_template_3_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_5_td_8_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_td_8_ng_template_3_ng_container_0_1_Template, 1, 0, undefined, 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r71 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r71);
} }
function AckSections_ng_template_5_td_8_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_td_8_ng_template_3_ng_container_0_Template, 2, 1, "ng-container", 9);
} if (rf & 2) {
    var ctx_r64 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngForOf", ctx_r64.SectionProvider.rightBodyTemplates);
} }
function AckSections_ng_template_5_td_8_div_5_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_5_td_8_div_5_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_td_8_div_5_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_5_td_8_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵlistener("elementWidthModelChange", function AckSections_ng_template_5_td_8_div_5_Template_div_elementWidthModelChange_0_listener($event) { i0.ɵɵrestoreView(_r77); var ctx_r76 = i0.ɵɵnextContext(3); return ctx_r76.rightBodyWidth = $event; });
    i0.ɵɵtemplate(1, AckSections_ng_template_5_td_8_div_5_1_Template, 1, 0, undefined, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r61 = i0.ɵɵreference(2);
    var _r63 = i0.ɵɵreference(4);
    var ctx_r65 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("z-index", ctx_r65.zIndex - 1)("height", ctx_r65.htmlHeightModel - (ctx_r65.SectionProvider.headerTemplates.length ? ctx_r65.headerHeight : 0) - (ctx_r65.SectionProvider.footerTemplates.length ? ctx_r65.footerHeight : 0), "px");
    i0.ɵɵproperty("elementWidthModel", ctx_r65.rightBodyWidth)("elementSizeModelWatch", ctx_r65.SectionProvider.rightBodyTemplates.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r65.rightBodyWrap || _r61)("ngTemplateOutletContext", i0.ɵɵpureFunction1(8, _c5, _r63));
} }
function AckSections_ng_template_5_td_8_div_6_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_5_td_8_div_6_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_td_8_div_6_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_5_td_8_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_td_8_div_6_1_Template, 1, 0, undefined, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r61 = i0.ɵɵreference(2);
    var _r63 = i0.ɵɵreference(4);
    var ctx_r66 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("z-index", ctx_r66.zIndex - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r66.rightBodyWrap || _r61)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c5, _r63));
} }
function AckSections_ng_template_5_td_8_ng_container_7_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_5_td_8_ng_container_7_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_td_8_ng_container_7_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_5_td_8_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_td_8_ng_container_7_1_Template, 1, 0, undefined, 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r61 = i0.ɵɵreference(2);
    var _r63 = i0.ɵɵreference(4);
    var ctx_r67 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r67.rightBodyWrap || _r61)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c5, _r63));
} }
function AckSections_ng_template_5_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 27);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_td_8_ng_template_1_Template, 2, 1, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, AckSections_ng_template_5_td_8_ng_template_3_Template, 1, 1, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(5, AckSections_ng_template_5_td_8_div_5_Template, 2, 10, "div", 21);
    i0.ɵɵtemplate(6, AckSections_ng_template_5_td_8_div_6_Template, 2, 6, "div", 30);
    i0.ɵɵtemplate(7, AckSections_ng_template_5_td_8_ng_container_7_Template, 2, 4, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("min-width", ctx_r31.rightBodyWidth, "px");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r31.mode === "calculate");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r31.mode || ctx_r31.mode === "clone");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r31.mode || ctx_r31.mode === "clone");
} }
function AckSections_ng_template_5_tr_9_div_2_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_template_5_tr_9_div_2_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_tr_9_div_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_template_5_tr_9_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_tr_9_div_2_ng_container_1_1_Template, 1, 0, undefined, 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r84 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r84);
} }
function AckSections_ng_template_5_tr_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵtemplate(1, AckSections_ng_template_5_tr_9_div_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r82 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r82.SectionProvider.footerTemplates);
} }
function AckSections_ng_template_5_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td", 32);
    i0.ɵɵtemplate(2, AckSections_ng_template_5_tr_9_div_2_Template, 2, 1, "div", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("height", ctx_r32.footerHeight, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r32.mode || ctx_r32.mode === "clone");
} }
function AckSections_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_template_5_tr_0_Template, 3, 3, "tr", 1);
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵtemplate(2, AckSections_ng_template_5_td_2_Template, 8, 5, "td", 13);
    i0.ɵɵtemplate(3, AckSections_ng_template_5_ng_container_3_Template, 1, 0, "ng-container", 2);
    i0.ɵɵtemplate(4, AckSections_ng_template_5_ng_template_4_Template, 2, 1, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(6, AckSections_ng_template_5_ng_template_6_Template, 1, 0, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(8, AckSections_ng_template_5_td_8_Template, 8, 5, "td", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, AckSections_ng_template_5_tr_9_Template, 3, 3, "tr", 1);
} if (rf & 2) {
    var _r27 = i0.ɵɵreference(5);
    var _r29 = i0.ɵɵreference(7);
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r5.SectionProvider.headerTemplates.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.SectionProvider.leftBodyTemplates.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r5.bodyCell || _r27)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c5, _r29));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r5.SectionProvider.rightBodyTemplates.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.SectionProvider.footerTemplates.length);
} }
function AckSections_ng_container_7_div_1_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_container_7_div_1_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_container_7_div_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_container_7_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckSections_ng_container_7_div_1_ng_container_1_1_Template, 1, 0, undefined, 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r90 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r90);
} }
function AckSections_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r94 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵlistener("elementHeightModelChange", function AckSections_ng_container_7_div_1_Template_div_elementHeightModelChange_0_listener($event) { i0.ɵɵrestoreView(_r94); var ctx_r93 = i0.ɵɵnextContext(2); return ctx_r93.footerHeight = $event; });
    i0.ɵɵtemplate(1, AckSections_ng_container_7_div_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r87 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("z-index", ctx_r87.zIndex);
    i0.ɵɵproperty("elementHeightModel", ctx_r87.footerHeight)("elementSizeModelWatch", ctx_r87.SectionProvider.footerTemplates.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r87.SectionProvider.footerTemplates);
} }
function AckSections_ng_container_7_div_2_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function AckSections_ng_container_7_div_2_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckSections_ng_container_7_div_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function AckSections_ng_container_7_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckSections_ng_container_7_div_2_ng_container_1_1_Template, 1, 0, undefined, 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r96 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r96);
} }
function AckSections_ng_container_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵtemplate(1, AckSections_ng_container_7_div_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r88 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("z-index", ctx_r88.zIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r88.SectionProvider.footerTemplates);
} }
function AckSections_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AckSections_ng_container_7_div_1_Template, 2, 5, "div", 35);
    i0.ɵɵtemplate(2, AckSections_ng_container_7_div_2_Template, 2, 3, "div", 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.mode === "calculate");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.mode || ctx_r6.mode === "clone");
} }
var _c6 = ["*"];
var AckSections = /** @class */ (function () {
    function AckSections(SectionProvider, ElementRef) {
        this.SectionProvider = SectionProvider;
        this.ElementRef = ElementRef;
        //clone is more performant in most cases but things duplicate like requests and timers may result
        this.mode = "calculate";
        this.zIndex = 19;
        var elmStyle = ElementRef.nativeElement.style;
        elmStyle.height = "100%";
        elmStyle.display = "block";
    }
    AckSections.ɵfac = function AckSections_Factory(t) { return new (t || AckSections)(i0.ɵɵdirectiveInject(i1.SectionProvider), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    AckSections.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AckSections, selectors: [["ack-sections"]], contentQueries: function AckSections_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5);
            i0.ɵɵcontentQuery(dirIndex, _c1, 5);
            i0.ɵɵcontentQuery(dirIndex, _c2, 5);
            i0.ɵɵcontentQuery(dirIndex, _c3, 5);
            i0.ɵɵcontentQuery(dirIndex, _c4, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerWrap = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bodyCell = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.leftBodyWrap = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rightBodyWrap = _t.first);
        } }, inputs: { mode: "mode", zIndex: "zIndex" }, features: [i0.ɵɵProvidersFeature([SectionProvider]
            //,exportAs:"AckSections"
            )], ngContentSelectors: _c6, decls: 8, vars: 7, consts: [[3, "htmlHeightModel", "htmlHeightModelChange"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultTableTag", ""], ["tableRows", ""], ["style", "position:fixed;top:0;width:100%", 3, "z-index", "elementHeightModel", "elementSizeModelWatch", "elementHeightModelChange", 4, "ngIf"], ["headerContent", ""], ["style", "position:fixed;top:0;width:100%", 3, "z-index", 4, "ngIf"], [2, "position", "fixed", "top", "0", "width", "100%", 3, "elementHeightModel", "elementSizeModelWatch", "elementHeightModelChange"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet"], [2, "position", "fixed", "top", "0", "width", "100%"], ["cellPadding", "0", "cellSpacing", "0", "border", "0", 2, "height", "100%", "width", "100%", "border-collapse", "collapse"], ["valign", "top", "align", "right", 3, "min-width", 4, "ngIf"], ["defaultBodyCell", ""], ["body", ""], ["valign", "top", "align", "left", 3, "min-width", 4, "ngIf"], ["colspan", "3", 2, "visibility", "hidden"], ["valign", "top", "align", "right"], ["defaultLeftBodyWrap", ""], ["leftBodyContent", ""], ["style", "position:fixed;", 3, "z-index", "height", "elementWidthModel", "elementSizeModelWatch", "elementWidthModelChange", 4, "ngIf"], ["style", "position:fixed;top:0;", 3, "z-index", 4, "ngIf"], [2, "overflow", "auto", "height", "100%"], [2, "position", "fixed", 3, "elementWidthModel", "elementSizeModelWatch", "elementWidthModelChange"], [2, "position", "fixed", "top", "0"], ["valign", "top", 2, "height", "100%"], ["valign", "top", "align", "left"], ["defaultRightBodyWrap", ""], ["rightBodyContent", ""], ["style", "position:fixed;top:0;overflow:auto;", 3, "z-index", 4, "ngIf"], [2, "position", "fixed", "top", "0", "overflow", "auto"], ["colspan", "3"], ["style", "visibility:hidden", 4, "ngIf"], [2, "visibility", "hidden"], ["style", "position:fixed;bottom:0;width:100%", 3, "z-index", "elementHeightModel", "elementSizeModelWatch", "elementHeightModelChange", 4, "ngIf"], ["style", "position:fixed;bottom:0;width:100%", 3, "z-index", 4, "ngIf"], [2, "position", "fixed", "bottom", "0", "width", "100%", 3, "elementHeightModel", "elementSizeModelWatch", "elementHeightModelChange"], [2, "position", "fixed", "bottom", "0", "width", "100%"]], template: function AckSections_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵlistener("htmlHeightModelChange", function AckSections_Template_ng_container_htmlHeightModelChange_0_listener($event) { return ctx.htmlHeightModel = $event; });
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(1, AckSections_ng_container_1_Template, 5, 2, "ng-container", 1);
            i0.ɵɵtemplate(2, AckSections_2_Template, 1, 0, undefined, 2);
            i0.ɵɵtemplate(3, AckSections_ng_template_3_Template, 2, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, AckSections_ng_template_5_Template, 10, 8, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(7, AckSections_ng_container_7_Template, 3, 2, "ng-container", 1);
        } if (rf & 2) {
            var _r2 = i0.ɵɵreference(4);
            var _r4 = i0.ɵɵreference(6);
            i0.ɵɵproperty("htmlHeightModel", ctx.htmlHeightModel);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.SectionProvider.headerTemplates.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.table || _r2)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c5, _r4));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.SectionProvider.footerTemplates.length);
        } }, directives: [i2.HtmlHeightModel, i3.NgIf, i3.NgTemplateOutlet, i4.ElementHeightModel, i3.NgForOf, i4.ElementWidthModel], encapsulation: 2 });
    return AckSections;
}());
export { AckSections };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AckSections, [{
        type: Component,
        args: [{
                selector: 'ack-sections',
                template: string,
                providers: [SectionProvider]
                //,exportAs:"AckSections"
            }]
    }], function () { return [{ type: i1.SectionProvider }, { type: i0.ElementRef }]; }, { mode: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], table: [{
            type: ContentChild,
            args: ["table"]
        }], headerWrap: [{
            type: ContentChild,
            args: ["headerWrap"]
        }], bodyCell: [{
            type: ContentChild,
            args: ["bodyCell"]
        }], leftBodyWrap: [{
            type: ContentChild,
            args: ["leftBodyWrap"]
        }], rightBodyWrap: [{
            type: ContentChild,
            args: ["rightBodyWrap"]
        }] }); })();
//# sourceMappingURL=AckSections.component.js.map