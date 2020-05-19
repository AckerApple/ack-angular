import { __decorate, __metadata } from "tslib";
import { Directive, TemplateRef, ContentChild } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
let AckSectionTemplates = class AckSectionTemplates {
    constructor(SectionProvider) {
        this.SectionProvider = SectionProvider;
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => {
            this.check();
            this.inited = true;
        });
    }
    ngOnChanges() {
        if (this.inited) {
            this.check();
        }
    }
    check() {
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
    }
    ngOnDestroy() {
        Promise.resolve().then(() => this.unregister());
    }
    unregister() {
        this.pushed = false;
        this.SectionProvider.unregisterHeaderTemplate(this.header);
        this.SectionProvider.unregisterFooterTemplate(this.footer);
        this.SectionProvider.unregisterTemplate(this.leftBody);
        this.SectionProvider.unregisterTemplate(this.rightBody);
    }
};
__decorate([
    ContentChild('sectionHeader'),
    __metadata("design:type", TemplateRef)
], AckSectionTemplates.prototype, "header", void 0);
__decorate([
    ContentChild('sectionFooter'),
    __metadata("design:type", TemplateRef)
], AckSectionTemplates.prototype, "footer", void 0);
__decorate([
    ContentChild('sectionLeftBody'),
    __metadata("design:type", TemplateRef)
], AckSectionTemplates.prototype, "leftBody", void 0);
__decorate([
    ContentChild('sectionRightBody'),
    __metadata("design:type", TemplateRef)
], AckSectionTemplates.prototype, "rightBody", void 0);
AckSectionTemplates = __decorate([
    Directive({
        selector: "ack-section-templates"
    }),
    __metadata("design:paramtypes", [SectionProvider])
], AckSectionTemplates);
export { AckSectionTemplates };
