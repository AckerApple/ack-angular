import { EventEmitter, ElementRef, TemplateRef } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
export declare class AckSections {
    SectionProvider: SectionProvider;
    ElementRef: ElementRef;
    mode: "calculate" | "clone";
    zIndex: number;
    headerHeight: number;
    headerHeightChange: EventEmitter<number>;
    footerHeight: number;
    footerHeightChange: EventEmitter<number>;
    header: TemplateRef<any>;
    footer: TemplateRef<any>;
    constructor(SectionProvider: SectionProvider, ElementRef: ElementRef);
}
