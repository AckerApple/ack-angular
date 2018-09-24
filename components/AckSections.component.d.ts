import { ElementRef, TemplateRef } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
export declare class AckSections {
    SectionProvider: SectionProvider;
    ElementRef: ElementRef;
    mode: "calculate" | "clone";
    zIndex: number;
    table: TemplateRef<any>;
    headerWrap: TemplateRef<any>;
    bodyCell: TemplateRef<any>;
    leftBodyWrap: TemplateRef<any>;
    rightBodyWrap: TemplateRef<any>;
    htmlHeightModel: number;
    constructor(SectionProvider: SectionProvider, ElementRef: ElementRef);
}
