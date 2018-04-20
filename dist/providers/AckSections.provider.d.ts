import { TemplateRef } from "@angular/core";
export declare class SectionProvider {
    headerTemplates: TemplateRef<any>[];
    footerTemplates: TemplateRef<any>[];
    unregisterHeaderTemplate(item: TemplateRef<any>): void;
    unregisterFooterTemplate(item: TemplateRef<any>): void;
}
