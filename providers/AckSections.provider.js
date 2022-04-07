import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
var SectionProvider = /** @class */ (function () {
    function SectionProvider() {
        //appTemplates:AckSectionTemplates[] = []
        this.headerTemplates = [];
        this.footerTemplates = [];
        this.leftBodyTemplates = [];
        this.rightBodyTemplates = [];
    }
    SectionProvider.prototype.unregisterHeaderTemplate = function (item) {
        this.unregisterTemplateFrom(item, this.headerTemplates);
    };
    SectionProvider.prototype.unregisterFooterTemplate = function (item) {
        this.unregisterTemplateFrom(item, this.footerTemplates);
    };
    SectionProvider.prototype.unregisterTemplateFrom = function (item, templates) {
        for (var x = templates.length - 1; x >= 0; --x) {
            if (templates[x] === item) {
                templates.splice(x, 1);
                break;
            }
        }
    };
    SectionProvider.prototype.unregisterTemplate = function (item) {
        this.unregisterTemplateFrom(item, this.headerTemplates);
        this.unregisterTemplateFrom(item, this.footerTemplates);
        this.unregisterTemplateFrom(item, this.leftBodyTemplates);
        this.unregisterTemplateFrom(item, this.rightBodyTemplates);
    };
    SectionProvider.ɵfac = function SectionProvider_Factory(t) { return new (t || SectionProvider)(); };
    SectionProvider.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SectionProvider, factory: SectionProvider.ɵfac });
    return SectionProvider;
}());
export { SectionProvider };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SectionProvider, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=AckSections.provider.js.map