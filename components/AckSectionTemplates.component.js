import { Directive, TemplateRef, ContentChild } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
import * as i0 from "@angular/core";
import * as i1 from "../providers/AckSections.provider";
var _c0 = ["sectionHeader"];
var _c1 = ["sectionFooter"];
var _c2 = ["sectionLeftBody"];
var _c3 = ["sectionRightBody"];
var AckSectionTemplates = /** @class */ (function () {
    function AckSectionTemplates(SectionProvider) {
        this.SectionProvider = SectionProvider;
    }
    AckSectionTemplates.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            _this.check();
            _this.inited = true;
        });
    };
    AckSectionTemplates.prototype.ngOnChanges = function () {
        if (this.inited) {
            this.check();
        }
    };
    AckSectionTemplates.prototype.check = function () {
        if (this.pushed)
            return;
        if (this.header) {
            this.SectionProvider.headerTemplates.unshift(this.header);
        }
        if (this.footer) {
            this.SectionProvider.footerTemplates.unshift(this.footer);
        }
        if (this.leftBody) {
            this.SectionProvider.leftBodyTemplates.unshift(this.leftBody);
        }
        if (this.rightBody) {
            this.SectionProvider.rightBodyTemplates.unshift(this.rightBody);
        }
        this.pushed = true;
    };
    AckSectionTemplates.prototype.ngOnDestroy = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.unregister(); });
    };
    AckSectionTemplates.prototype.unregister = function () {
        this.pushed = false;
        this.SectionProvider.unregisterHeaderTemplate(this.header);
        this.SectionProvider.unregisterFooterTemplate(this.footer);
        this.SectionProvider.unregisterTemplate(this.leftBody);
        this.SectionProvider.unregisterTemplate(this.rightBody);
    };
    AckSectionTemplates.ɵfac = function AckSectionTemplates_Factory(t) { return new (t || AckSectionTemplates)(i0.ɵɵdirectiveInject(i1.SectionProvider)); };
    AckSectionTemplates.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AckSectionTemplates, selectors: [["ack-section-templates"]], contentQueries: function AckSectionTemplates_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5);
            i0.ɵɵcontentQuery(dirIndex, _c1, 5);
            i0.ɵɵcontentQuery(dirIndex, _c2, 5);
            i0.ɵɵcontentQuery(dirIndex, _c3, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.header = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.footer = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.leftBody = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rightBody = _t.first);
        } }, features: [i0.ɵɵNgOnChangesFeature] });
    return AckSectionTemplates;
}());
export { AckSectionTemplates };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AckSectionTemplates, [{
        type: Directive,
        args: [{
                selector: "ack-section-templates"
            }]
    }], function () { return [{ type: i1.SectionProvider }]; }, { header: [{
            type: ContentChild,
            args: ['sectionHeader']
        }], footer: [{
            type: ContentChild,
            args: ['sectionFooter']
        }], leftBody: [{
            type: ContentChild,
            args: ['sectionLeftBody']
        }], rightBody: [{
            type: ContentChild,
            args: ['sectionRightBody']
        }] }); })();
//# sourceMappingURL=AckSectionTemplates.component.js.map