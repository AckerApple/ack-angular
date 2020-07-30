import { Directive, TemplateRef, ContentChild } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
export class AckSectionTemplates {
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
}
AckSectionTemplates.decorators = [
    { type: Directive, args: [{
                selector: "ack-section-templates"
            },] }
];
AckSectionTemplates.ctorParameters = () => [
    { type: SectionProvider }
];
AckSectionTemplates.propDecorators = {
    header: [{ type: ContentChild, args: ['sectionHeader',] }],
    footer: [{ type: ContentChild, args: ['sectionFooter',] }],
    leftBody: [{ type: ContentChild, args: ['sectionLeftBody',] }],
    rightBody: [{ type: ContentChild, args: ['sectionRightBody',] }]
};
