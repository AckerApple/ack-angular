import { Injectable } from "@angular/core";
export class SectionProvider {
    constructor() {
        this.headerTemplates = [];
        this.footerTemplates = [];
        this.leftBodyTemplates = [];
        this.rightBodyTemplates = [];
    }
    unregisterHeaderTemplate(item) {
        this.unregisterTemplateFrom(item, this.headerTemplates);
    }
    unregisterFooterTemplate(item) {
        this.unregisterTemplateFrom(item, this.footerTemplates);
    }
    unregisterTemplateFrom(item, templates) {
        for (let x = templates.length - 1; x >= 0; --x) {
            if (templates[x] === item) {
                templates.splice(x, 1);
                break;
            }
        }
    }
    unregisterTemplate(item) {
        this.unregisterTemplateFrom(item, this.headerTemplates);
        this.unregisterTemplateFrom(item, this.footerTemplates);
        this.unregisterTemplateFrom(item, this.leftBodyTemplates);
        this.unregisterTemplateFrom(item, this.rightBodyTemplates);
    }
}
SectionProvider.decorators = [
    { type: Injectable }
];
