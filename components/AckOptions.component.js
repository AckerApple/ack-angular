import { array } from "../pipes.class";
import { ElementRef, ContentChildren, TemplateRef, Component, Input, Output, EventEmitter } from "@angular/core";
import { TemplateReader } from "../TemplateReader.class";
import { string as ackOptions } from "./templates/ack-options.pug";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pipes";
function AckOptions_div_1_1_ng_template_0_Template(rf, ctx) { }
var _c0 = function (a0) { return { item: a0 }; };
function AckOptions_div_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckOptions_div_1_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    var item_r1 = i0.ɵɵnextContext().$implicit;
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.TemplateReader.templates.selected)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, item_r1));
} }
function AckOptions_div_1_2_ng_template_0_Template(rf, ctx) { }
var _c1 = function (a0, a1) { return { item: a0, selected: a1 }; };
function AckOptions_div_1_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckOptions_div_1_2_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    var item_r1 = i0.ɵɵnextContext().$implicit;
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.TemplateReader.templates.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c1, item_r1, ctx_r3.isItemSelected(item_r1)));
} }
function AckOptions_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1);
} }
function AckOptions_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function AckOptions_div_1_Template_div_click_0_listener() { var restoredCtx = i0.ɵɵrestoreView(_r11); var item_r1 = restoredCtx.$implicit; var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.selectItem(item_r1); });
    i0.ɵɵtemplate(1, AckOptions_div_1_1_Template, 1, 4, undefined, 3);
    i0.ɵɵtemplate(2, AckOptions_div_1_2_Template, 1, 5, undefined, 3);
    i0.ɵɵtemplate(3, AckOptions_div_1_span_3_Template, 2, 1, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.getItemClass(item_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.TemplateReader.templates.selected && ctx_r0.isItemSelected(item_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.TemplateReader.templates.templateRef && (!ctx_r0.TemplateReader.templates.selected || !ctx_r0.isItemSelected(item_r1)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.TemplateReader.templates.templateRef);
} }
var _c2 = function (a0) { return { "border-grey-6x border-top": a0 }; };
var AckOptions = /** @class */ (function () {
    function AckOptions(ElementRef) {
        this.ElementRef = ElementRef;
        this.array = [];
        this.stylize = true;
        this.TemplateReader = new TemplateReader({
            lastTemplateName: "templateRef",
            types: {
                option: "templateRef",
                selected: "selected"
            }
        });
        this.modelChange = new EventEmitter();
    }
    AckOptions.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            if (_this.inputTemplateRefs) {
                _this.TemplateReader.readTemplates(_this.inputTemplateRefs);
            }
            if (_this.templateRefs) {
                _this.TemplateReader.readTemplates(_this.templateRefs);
            }
        });
    };
    AckOptions.prototype.selectItem = function (item) {
        var value = this.getArrayItemValue(item);
        var isArrayMode = this.multiple || this.modelAsArray;
        if (isArrayMode) {
            var modelIndex = this.modelIndex(item);
            if (modelIndex >= 0) {
                this.model.splice(modelIndex, 1);
            }
            else {
                this.model.push(this.getArrayItemModel(item));
            }
            if (this.max) {
                while (this.model.length > this.max) {
                    this.model.shift();
                }
            }
        }
        else {
            if (this.toggleable && this.model == value) {
                delete this.model;
            }
            else {
                this.model = this.getArrayItemModel(item);
            }
        }
        this.emitChange();
    };
    AckOptions.prototype.emitChange = function () {
        this.modelChange.emit(this.model);
        var form = getParentByTagName(this.ElementRef.nativeElement, 'form');
        if (form)
            this.fireFormEvents(form);
    };
    AckOptions.prototype.fireFormEvents = function (form) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent("input", true, true);
        form.dispatchEvent(event);
        event = document.createEvent("HTMLEvents");
        event.initEvent("change", true, true);
        form.dispatchEvent(event);
    };
    AckOptions.prototype.getArrayItemModel = function (item) {
        if (this.arrayToModelKey != null) {
            if (this.arrayToModelKey == '') {
                return item;
            }
            var split = this.arrayToModelKey.split('.');
            var scope = item;
            while (split.length) {
                if (scope == null)
                    return null;
                var key = split.shift();
                scope = scope[key];
            }
            return scope;
        }
        return this.getArrayItemValue(item);
    };
    AckOptions.prototype.getArrayItemValue = function (item) {
        if (!this.arrayKey)
            return item;
        var items = this.arrayKey.split('.');
        var scope = item;
        while (items.length) {
            if (scope == null)
                return null;
            var firstItem = items.shift();
            scope = scope[firstItem];
        }
        return scope;
    };
    AckOptions.prototype.getModelValueToArrayItem = function (modelValue) {
        if (!this.modelKey)
            return modelValue;
        var items = this.modelKey.split('.');
        var scope = modelValue;
        while (items.length) {
            if (scope == null)
                return null;
            var firstItem = items.shift();
            scope = scope[firstItem];
        }
        return scope;
    };
    AckOptions.prototype.modelIndex = function (item) {
        this.model = array(this.model);
        for (var i = this.model.length - 1; i >= 0; --i) {
            var value = this.getArrayItemValue(item);
            var modelValue = this.getModelValueToArrayItem(this.model[i]);
            if (value == modelValue)
                return i;
        }
        return -1;
    };
    AckOptions.prototype.isItemSelected = function (item) {
        return this.modelIndex(item) >= 0;
    };
    AckOptions.prototype.getItemClass = function (item) {
        var selected = this.isItemSelected(item);
        var string = '';
        if (this.stylize) {
            string += 'cursor-pointer pad-h pad-v-sm border-grey-6x border-bottom ';
        }
        if (this.stylize && selected) {
            string += 'bg-warning ';
        }
        if (this.stylize && !selected) {
            string += 'hover-bg-grey-5x ';
        }
        return string;
    };
    AckOptions.ɵfac = function AckOptions_Factory(t) { return new (t || AckOptions)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    AckOptions.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AckOptions, selectors: [["ack-options"]], contentQueries: function AckOptions_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TemplateRef, 4);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRefs = _t);
        } }, inputs: { array: "array", stylize: "stylize", multiple: "multiple", modelAsArray: "modelAsArray", max: "max", toggleable: "toggleable", inputTemplateRefs: "inputTemplateRefs", model: "model", arrayKey: "arrayKey", modelKey: "modelKey", arrayToModelKey: "arrayToModelKey" }, outputs: { modelChange: "modelChange" }, decls: 3, vars: 6, consts: [[3, "ngClass"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function AckOptions_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
            i0.ɵɵtemplate(1, AckOptions_div_1_Template, 4, 4, "div", 1);
            i0.ɵɵpipe(2, "array");
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, ctx.stylize));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 2, ctx.array));
        } }, directives: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet], pipes: [i2.ForceArray], encapsulation: 2 });
    return AckOptions;
}());
export { AckOptions };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AckOptions, [{
        type: Component,
        args: [{
                selector: "ack-options",
                template: ackOptions
                //,exportAs:"AckOptions"
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { array: [{
            type: Input
        }], stylize: [{
            type: Input
        }], multiple: [{
            type: Input
        }], modelAsArray: [{
            type: Input
        }], max: [{
            type: Input
        }], toggleable: [{
            type: Input
        }], templateRefs: [{
            type: ContentChildren,
            args: [TemplateRef]
        }], inputTemplateRefs: [{
            type: Input
        }], model: [{
            type: Input
        }], modelChange: [{
            type: Output
        }], arrayKey: [{
            type: Input
        }], modelKey: [{
            type: Input
        }], arrayToModelKey: [{
            type: Input
        }] }); })();
export function getParentByTagName(node, tagname) {
    var parent;
    if (node === null || tagname === '')
        return;
    parent = node.parentNode;
    tagname = tagname.toUpperCase();
    while (parent && parent.tagName !== "HTML") {
        if (parent.tagName === tagname) {
            return parent;
        }
        parent = parent.parentNode;
    }
    return;
}
//# sourceMappingURL=AckOptions.component.js.map