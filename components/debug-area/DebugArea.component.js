import { Output, EventEmitter, TemplateRef, Input, ContentChildren, ContentChild, Directive, Component, QueryList } from "@angular/core";
import { string as template } from "./debug-area.template";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../directives/VarDirective.directive";
import * as i3 from "../AbsoluteOverflowX.component";
var _c0 = ["rowTitle"];
function DebugArea_div_0_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("\u00A0( ", (item_r3.value == null ? null : item_r3.value.length) || 0, " )");
} }
function DebugArea_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵlistener("click", function DebugArea_div_0_a_1_Template_a_click_0_listener() { var restoredCtx = i0.ɵɵrestoreView(_r7); var item_r3 = restoredCtx.$implicit; var ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.debugItem = ctx_r6.debugItem === item_r3 ? null : item_r3; });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, DebugArea_div_0_a_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r3 = ctx.$implicit;
    var ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", item_r3 === ctx_r2.debugItem ? "bg-positive text-white" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r3.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r3.type === "array");
} }
function DebugArea_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, DebugArea_div_0_a_1_Template, 3, 3, "a", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.DebugItems);
} }
function DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_ng_container_11_1_ng_template_0_Template(rf, ctx) { }
function DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_ng_container_11_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_ng_container_11_1_ng_template_0_Template, 0, 0, "ng-template");
} }
var _c1 = function (a0) { return { index: a0 }; };
function DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_ng_container_11_1_Template, 1, 0, undefined, 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ii_r14 = i0.ɵɵnextContext(2).index;
    var ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r16.debugItem.rowTitle)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ii_r14));
} }
function DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ii_r14 = i0.ɵɵnextContext(2).index;
    var ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("Result ", ii_r14, " of ", ctx_r18.debugItem.value.length, " ");
} }
function DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_absolute_overflow_x_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "absolute-overflow-x", 19);
    i0.ɵɵelementStart(1, "pre");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "json");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var data_r13 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, data_r13));
} }
function DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    var _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "textarea", 20);
    i0.ɵɵlistener("change", function DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_ng_container_15_Template_textarea_change_1_listener($event) { i0.ɵɵrestoreView(_r27); var ctx_r26 = i0.ɵɵnextContext(5); return ctx_r26.dataString = $event.target.value; });
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "json");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 21);
    i0.ɵɵelementStart(5, "a", 22);
    i0.ɵɵlistener("click", function DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_ng_container_15_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r27); var ctx_r29 = i0.ɵɵnextContext(2); var data_r13 = ctx_r29.$implicit; var ii_r14 = ctx_r29.index; var ctx_r28 = i0.ɵɵnextContext(3); ctx_r28.updateDataByJsonString(data_r13, ctx_r28.dataString, ctx_r28.debugItem); return (ctx_r28.editsMap[ii_r14] = false); });
    i0.ɵɵtext(6, "save");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r30 = i0.ɵɵnextContext(2);
    var ii_r14 = ctx_r30.index;
    var data_r13 = ctx_r30.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", "editsMap" + ii_r14);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, data_r13));
} }
function DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelementStart(2, "a", 13);
    i0.ɵɵlistener("click", function DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r32); var ii_r14 = i0.ɵɵnextContext().index; i0.ɵɵnextContext(); var _r11 = i0.ɵɵreference(2); var ctx_r31 = i0.ɵɵnextContext(2); return _r11.var.view = ii_r14 === 0 ? ctx_r31.debugItem.value.length - 1 : ii_r14 - 1; });
    i0.ɵɵtext(3, "<");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 14);
    i0.ɵɵlistener("click", function DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r32); var ii_r14 = i0.ɵɵnextContext().index; var ctx_r34 = i0.ɵɵnextContext(3); return (ctx_r34.editsMap[ii_r14] = !ctx_r34.editsMap[ii_r14]); });
    i0.ɵɵtext(5, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 14);
    i0.ɵɵlistener("click", function DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r32); var ctx_r36 = i0.ɵɵnextContext(4); return ctx_r36.debugItem.type = null; });
    i0.ɵɵtext(7, "all");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 15);
    i0.ɵɵlistener("click", function DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_Template_a_click_8_listener() { i0.ɵɵrestoreView(_r32); var ii_r14 = i0.ɵɵnextContext().index; i0.ɵɵnextContext(); var _r11 = i0.ɵɵreference(2); var ctx_r37 = i0.ɵɵnextContext(2); return _r11.var.view = ii_r14 === ctx_r37.debugItem.value.length - 1 ? 0 : ii_r14 + 1; });
    i0.ɵɵtext(9, ">");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtemplate(11, DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_ng_container_11_Template, 2, 4, "ng-container", 6);
    i0.ɵɵtemplate(12, DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_ng_template_12_Template, 2, 2, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_absolute_overflow_x_14_Template, 4, 3, "absolute-overflow-x", 17);
    i0.ɵɵtemplate(15, DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_ng_container_15_Template, 7, 4, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r17 = i0.ɵɵreference(13);
    var ii_r14 = i0.ɵɵnextContext().index;
    var ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", ctx_r15.debugItem.rowTitle)("ngIfElse", _r17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r15.editsMap[ii_r14]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.editsMap[ii_r14]);
} }
function DebugArea_ng_container_1_ng_container_3_pre_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre", 11);
    i0.ɵɵtemplate(1, DebugArea_ng_container_1_ng_container_3_pre_3_ng_container_1_Template, 16, 4, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ii_r14 = ctx.index;
    i0.ɵɵnextContext();
    var _r11 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r11.var.view == ii_r14);
} }
var _c2 = function () { return { view: 0 }; };
function DebugArea_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 8, 9);
    i0.ɵɵtemplate(3, DebugArea_ng_container_1_ng_container_3_pre_3_Template, 2, 1, "pre", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("var", i0.ɵɵpureFunction0(2, _c2));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r8.debugItem.value);
} }
function DebugArea_ng_container_1_ng_template_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    var _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "textarea", 28);
    i0.ɵɵlistener("change", function DebugArea_ng_container_1_ng_template_4_ng_container_5_Template_textarea_change_1_listener($event) { i0.ɵɵrestoreView(_r44); var ctx_r43 = i0.ɵɵnextContext(3); return ctx_r43.apply(ctx_r43.debugItem.value, $event.target.value, ctx_r43.debugItem); });
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "json");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r40 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r40.debugItem.value));
} }
function DebugArea_ng_container_1_ng_template_4_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "absolute-overflow-x");
    i0.ɵɵelementStart(1, "pre", 29);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "json");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r42 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r42.debugItem.value));
} }
function DebugArea_ng_container_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    var _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵelementStart(2, "div", 25);
    i0.ɵɵelementStart(3, "i", 26);
    i0.ɵɵlistener("click", function DebugArea_ng_container_1_ng_template_4_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r46); var ctx_r45 = i0.ɵɵnextContext(2); return ctx_r45.edit = !ctx_r45.edit; });
    i0.ɵɵtext(4, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, DebugArea_ng_container_1_ng_template_4_ng_container_5_Template, 4, 3, "ng-container", 6);
    i0.ɵɵtemplate(6, DebugArea_ng_container_1_ng_template_4_ng_template_6_Template, 4, 3, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    var _r41 = i0.ɵɵreference(7);
    var ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("text-calm", ctx_r10.edit);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r10.edit)("ngIfElse", _r41);
} }
function DebugArea_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, DebugArea_ng_container_1_ng_container_3_Template, 4, 3, "ng-container", 6);
    i0.ɵɵtemplate(4, DebugArea_ng_container_1_ng_template_4_Template, 8, 4, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r9 = i0.ɵɵreference(5);
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.debugItem.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.debugItem.type === "array")("ngIfElse", _r9);
} }
var DebugItem = /** @class */ (function () {
    function DebugItem() {
        this.save = new EventEmitter();
    }
    DebugItem.ɵfac = function DebugItem_Factory(t) { return new (t || DebugItem)(); };
    DebugItem.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DebugItem, selectors: [["debug-item"]], contentQueries: function DebugItem_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rowTitle = _t.first);
        } }, inputs: { name: "name", value: "value", type: "type" }, outputs: { save: "save" } });
    return DebugItem;
}());
export { DebugItem };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DebugItem, [{
        type: Directive,
        args: [{
                selector: "debug-item"
            }]
    }], null, { name: [{
            type: Input
        }], value: [{
            type: Input
        }], type: [{
            type: Input
        }], rowTitle: [{
            type: ContentChild,
            args: ["rowTitle"]
        }], save: [{
            type: Output
        }] }); })();
var DebugArea = /** @class */ (function () {
    function DebugArea() {
        this.editsMap = {}; //map of debug edits
    }
    DebugArea.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.DebugItems.length === 1) {
            Promise.resolve().then(function () { return _this.debugItem = _this.DebugItems.first; });
        }
    };
    //update data from debug area
    DebugArea.prototype.updateDataByJsonString = function (item, string, debugItem) {
        try {
            var json = JSON.parse(string);
            for (var x in item)
                delete item[x];
            Object.assign(item, json);
            //this.arrayChange.emit(this.array)
            debugItem.save.emit(item);
        }
        catch (e) {
            console.error('invalid json string');
        }
    };
    DebugArea.prototype.apply = function (item, json, debugItem) {
        var ob = JSON.parse(json);
        Object.assign(item, ob);
        debugItem.save.emit(item);
    };
    DebugArea.ɵfac = function DebugArea_Factory(t) { return new (t || DebugArea)(); };
    DebugArea.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DebugArea, selectors: [["debug-area"]], contentQueries: function DebugArea_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, DebugItem, 4);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.DebugItems = _t);
        } }, decls: 2, vars: 2, consts: [["class", "child-pad-h-xs flex-wrap text-center", 4, "ngIf"], [4, "ngIf"], [1, "child-pad-h-xs", "flex-wrap", "text-center"], ["class", "cursor-pointer border border-grey-3x radius-5 flex-1", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "cursor-pointer", "border", "border-grey-3x", "radius-5", "flex-1", 3, "ngClass", "click"], [1, "margin-bottom-0"], [4, "ngIf", "ngIfElse"], ["regdebug", ""], [3, "var"], ["loop", "var"], ["class", "bg-grey-3x margin-0 sample-code", 4, "ngFor", "ngForOf"], [1, "bg-grey-3x", "margin-0", "sample-code"], [1, "flex-valign-center", "child-pad-xs", 2, "padding", ".4em", "float", "right"], [1, "fas", "fa-caret-square-left", "hover-bg-energized", 3, "click"], [2, "color", "blue", 3, "click"], [1, "fas", "fa-caret-square-right", "hover-bg-energized", 3, "click"], ["defaultRowLabel", ""], ["style", "font-size:0.8em;", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [2, "font-size", "0.8em"], [2, "width", "100%", "height", "300px", 3, "name", "change"], [2, "text-align", "center"], [2, "color", "blue", "padding-top", ".4em", 3, "click"], [1, "pos-rel"], [1, "pos-abs", "right-0", "z-index-10"], [1, "pad-xxs"], [1, "fas", "fa-pencil-alt", "hover-text-energized", 3, "click"], ["readMode", ""], ["rows", "30", "wrap", "off", 1, "width-full", 3, "change"], [1, "code-sample"]], template: function DebugArea_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DebugArea_div_0_Template, 2, 1, "div", 0);
            i0.ɵɵtemplate(1, DebugArea_ng_container_1_Template, 6, 3, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.DebugItems.length > 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.debugItem);
        } }, directives: [i1.NgIf, i1.NgForOf, i1.NgClass, i2.VarDirective, i1.NgTemplateOutlet, i3.AbsoluteOverflowX], pipes: [i1.JsonPipe], encapsulation: 2 });
    return DebugArea;
}());
export { DebugArea };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DebugArea, [{
        type: Component,
        args: [{
                selector: "debug-area",
                template: template
            }]
    }], null, { DebugItems: [{
            type: ContentChildren,
            args: [DebugItem]
        }] }); })();
export var debugDeclarations = [
    DebugItem, DebugArea
];
//# sourceMappingURL=DebugArea.component.js.map