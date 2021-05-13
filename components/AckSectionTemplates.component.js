import { Directive, TemplateRef, ContentChild } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
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
    AckSectionTemplates.decorators = [
        { type: Directive, args: [{
                    selector: "ack-section-templates"
                },] }
    ];
    AckSectionTemplates.ctorParameters = function () { return [
        { type: SectionProvider }
    ]; };
    AckSectionTemplates.propDecorators = {
        header: [{ type: ContentChild, args: ['sectionHeader',] }],
        footer: [{ type: ContentChild, args: ['sectionFooter',] }],
        leftBody: [{ type: ContentChild, args: ['sectionLeftBody',] }],
        rightBody: [{ type: ContentChild, args: ['sectionRightBody',] }]
    };
    return AckSectionTemplates;
}());
export { AckSectionTemplates };
//# sourceMappingURL=AckSectionTemplates.component.js.map