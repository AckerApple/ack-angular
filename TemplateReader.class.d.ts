import { TemplateRef } from '@angular/core';
export interface types {
    [index: string]: string;
}
export interface templates {
    [index: string]: TemplateRef<any>;
}
export interface options {
    types?: types;
    lastTemplateName?: string;
}
export declare class TemplateReader {
    types: types;
    templates: templates;
    lastTemplateName: string;
    constructor(options?: options);
    readTemplates(templateRefs: TemplateRef<any>[]): void;
    afterReadTemplates(templateRefs: TemplateRef<any>[]): void;
    applyReferences(refs: any, row: TemplateRef<any>): boolean;
}
