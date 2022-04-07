import { TemplateRef, ViewChild, Component } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import * as i0 from "@angular/core";
import * as i1 from "../providers/AckApp.provider";
var _c0 = ["content"];
function AckFixedElement_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
var _c1 = ["*"];
var AckFixedElement = /** @class */ (function () {
    function AckFixedElement(AckApp) {
        this.AckApp = AckApp;
        this.AckApp.fixedElms.push(this);
    }
    AckFixedElement.prototype.ngOnDestroy = function () {
        for (var x = this.AckApp.fixedElms.length - 1; x >= 0; --x) {
            var iClass = this.AckApp.fixedElms[x];
            if (iClass === this) {
                this.AckApp.fixedElms.splice(x, 1);
                break;
            }
        }
    };
    AckFixedElement.ɵfac = function AckFixedElement_Factory(t) { return new (t || AckFixedElement)(i0.ɵɵdirectiveInject(i1.AckApp)); };
    AckFixedElement.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AckFixedElement, selectors: [["ack-fixed-element"]], viewQuery: function AckFixedElement_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["content", ""]], template: function AckFixedElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, AckFixedElement_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return AckFixedElement;
}());
export { AckFixedElement };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AckFixedElement, [{
        type: Component,
        args: [{
                selector: 'ack-fixed-element',
                template: '<ng-template #content><ng-content></ng-content></ng-template>'
            }]
    }], function () { return [{ type: i1.AckApp }]; }, { content: [{
            type: ViewChild,
            args: ['content']
        }] }); })();
//# sourceMappingURL=AckFixedElement.component.js.map