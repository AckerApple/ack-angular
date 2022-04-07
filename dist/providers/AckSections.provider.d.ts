import { TemplateRef, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class SectionProvider {
    headerTemplates: TemplateRef<ElementRef>[];
    footerTemplates: TemplateRef<ElementRef>[];
    leftBodyTemplates: TemplateRef<ElementRef>[];
    rightBodyTemplates: TemplateRef<ElementRef>[];
    unregisterHeaderTemplate(item: TemplateRef<ElementRef>): void;
    unregisterFooterTemplate(item: TemplateRef<ElementRef>): void;
    unregisterTemplateFrom(item: TemplateRef<ElementRef>, templates: TemplateRef<ElementRef>[]): void;
    unregisterTemplate(item: TemplateRef<ElementRef>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SectionProvider, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SectionProvider>;
}
