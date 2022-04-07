import { Component, Directive, ElementRef, TemplateRef, ContentChild } from "@angular/core";
import { string as readerHeaderBody } from "./templates/reader-header-body.pug";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["reader-header"];
function ReaderHeaderBody_tr_4_2_ng_template_0_Template(rf, ctx) { }
function ReaderHeaderBody_tr_4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ReaderHeaderBody_tr_4_2_ng_template_0_Template, 0, 0, "ng-template");
} }
function ReaderHeaderBody_tr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtemplate(2, ReaderHeaderBody_tr_4_2_Template, 1, 0, undefined, 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.readerHeader);
} }
var _c1 = ["*"];
//easy to use common full page templater
var ReaderHeaderBody = /** @class */ (function () {
    function ReaderHeaderBody() {
    }
    ReaderHeaderBody.ɵfac = function ReaderHeaderBody_Factory(t) { return new (t || ReaderHeaderBody)(); };
    ReaderHeaderBody.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReaderHeaderBody, selectors: [["reader-header-body"]], contentQueries: function ReaderHeaderBody_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.readerHeader = _t.first);
        } }, ngContentSelectors: _c1, decls: 8, vars: 1, consts: [[2, "text-align", "center", "height", "100%"], [2, "display", "inline-block", "width", "100%", "height", "100%", "max-width", "1000px"], [2, "width", "100%", "height", "100%"], ["cellpadding", "0", "cellspacing", "0", 2, "width", "100%", "height", "100%"], [4, "ngIf"], [2, "height", "100%"], [4, "ngTemplateOutlet"]], template: function ReaderHeaderBody_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "table", 3);
            i0.ɵɵtemplate(4, ReaderHeaderBody_tr_4_Template, 3, 1, "tr", 4);
            i0.ɵɵelementStart(5, "tr");
            i0.ɵɵelementStart(6, "td", 5);
            i0.ɵɵprojection(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.readerHeader);
        } }, directives: [i1.NgIf, i1.NgTemplateOutlet], encapsulation: 2 });
    return ReaderHeaderBody;
}());
export { ReaderHeaderBody };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReaderHeaderBody, [{
        type: Component,
        args: [{
                selector: 'reader-header-body',
                template: readerHeaderBody
            }]
    }], null, { readerHeader: [{
            type: ContentChild,
            args: ['reader-header']
        }] }); })();
var ReaderHeader = /** @class */ (function () {
    function ReaderHeader() {
    }
    ReaderHeader.ɵfac = function ReaderHeader_Factory(t) { return new (t || ReaderHeader)(); };
    ReaderHeader.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ReaderHeader, selectors: [["reader-header"]] });
    return ReaderHeader;
}());
export { ReaderHeader };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReaderHeader, [{
        type: Directive,
        args: [{
                selector: 'reader-header'
            }]
    }], null, null); })();
var ReaderBody = /** @class */ (function () {
    function ReaderBody(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
    ReaderBody.ɵfac = function ReaderBody_Factory(t) { return new (t || ReaderBody)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ReaderBody.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ReaderBody, selectors: [["reader-body"]], contentQueries: function ReaderBody_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.readerHeader = _t.first);
        } } });
    return ReaderBody;
}());
export { ReaderBody };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReaderBody, [{
        type: Directive,
        args: [{
                selector: "reader-body"
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { readerHeader: [{
            type: ContentChild,
            args: ['reader-header']
        }] }); })();
//# sourceMappingURL=ReaderHeaderBody.component.js.map