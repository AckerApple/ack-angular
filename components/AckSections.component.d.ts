import { ElementRef, TemplateRef } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
export declare class AckSections {
    SectionProvider: SectionProvider;
    ElementRef: ElementRef;
    mode: "calculate" | "clone";
    zIndex: number;
    header: TemplateRef<any>;
    footer: TemplateRef<any>;
    leftBody: TemplateRef<any>;
    rightBody: TemplateRef<any>;
    htmlHeightModel: number;
    constructor(SectionProvider: SectionProvider, ElementRef: ElementRef);
}
