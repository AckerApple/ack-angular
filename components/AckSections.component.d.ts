import { ElementRef, TemplateRef } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
export declare class AckSections {
    SectionProvider: SectionProvider;
    ElementRef: ElementRef;
    mode: "calculate" | "clone";
    header: TemplateRef<any>;
    footer: TemplateRef<any>;
    constructor(SectionProvider: SectionProvider, ElementRef: ElementRef);
}
