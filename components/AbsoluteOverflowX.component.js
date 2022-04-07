import { ElementRef, Component, Input } from "@angular/core";
import { string } from "./templates/absolute-overflow-x.pug";
import * as i0 from "@angular/core";
import * as i1 from "../directives/ElementSizeModel.directive";
import * as i2 from "@angular/common";
function AbsoluteOverflowX_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r0.elementHeightModel, "px");
} }
var _c0 = function (a0) { return { overflow: a0, position: "absolute", width: "100%" }; };
var _c1 = function () { return {}; };
var _c2 = ["*"];
var AbsoluteOverflowX = /** @class */ (function () {
    function AbsoluteOverflowX(ElementRef) {
        this.ElementRef = ElementRef;
        this.active = true;
        this.overflow = 'auto';
    }
    AbsoluteOverflowX.prototype.ngOnInit = function () {
        this.checkDisplay();
    };
    AbsoluteOverflowX.prototype.ngOnChanges = function (changes) {
        if (changes.active) {
            this.checkDisplay();
        }
    };
    AbsoluteOverflowX.prototype.ngAfterViewInit = function () {
        this.ElementRef.nativeElement.style.display = 'block';
    };
    AbsoluteOverflowX.prototype.checkDisplay = function () {
        this.ElementRef.nativeElement.style.position = this.active ? 'relative' : 'static';
    };
    AbsoluteOverflowX.ɵfac = function AbsoluteOverflowX_Factory(t) { return new (t || AbsoluteOverflowX)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    AbsoluteOverflowX.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbsoluteOverflowX, selectors: [["absolute-overflow-x"]], inputs: { scrollBars: "scrollBars", wrapClass: "wrapClass", active: "active", overflow: "overflow" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 3, vars: 9, consts: [[3, "elementHeightModel", "ngClass", "ngStyle", "elementHeightModelChange"], ["style", "visibility:hidden;overflow:hidden;width:100%", 3, "height", 4, "ngIf"], [2, "visibility", "hidden", "overflow", "hidden", "width", "100%"]], template: function AbsoluteOverflowX_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("elementHeightModelChange", function AbsoluteOverflowX_Template_div_elementHeightModelChange_0_listener($event) { return ctx.elementHeightModel = $event; });
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, AbsoluteOverflowX_div_2_Template, 2, 2, "div", 1);
        } if (rf & 2) {
            i0.ɵɵclassProp("no-scroll-bars", ctx.active && !ctx.scrollBars && ctx.scrollBars != null);
            i0.ɵɵproperty("elementHeightModel", ctx.elementHeightModel)("ngClass", ctx.wrapClass)("ngStyle", ctx.active ? i0.ɵɵpureFunction1(6, _c0, ctx.overflow) : i0.ɵɵpureFunction0(8, _c1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.elementHeightModel && ctx.active);
        } }, directives: [i1.ElementHeightModel, i2.NgClass, i2.NgStyle, i2.NgIf], encapsulation: 2 });
    return AbsoluteOverflowX;
}());
export { AbsoluteOverflowX };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbsoluteOverflowX, [{
        type: Component,
        args: [{
                selector: 'absolute-overflow-x',
                template: string
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { scrollBars: [{
            type: Input
        }], wrapClass: [{
            type: Input
        }], active: [{
            type: Input
        }], overflow: [{
            type: Input
        }] }); })();
//# sourceMappingURL=AbsoluteOverflowX.component.js.map