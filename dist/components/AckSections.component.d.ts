import { ElementRef, TemplateRef } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
import * as i0 from "@angular/core";
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
    headerHeight: number;
    leftBodyWidth: number;
    footerHeight: number;
    rightBodyWidth: number;
    constructor(SectionProvider: SectionProvider, ElementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<AckSections, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AckSections, "ack-sections", never, { "mode": "mode"; "zIndex": "zIndex"; }, {}, ["table", "headerWrap", "bodyCell", "leftBodyWrap", "rightBodyWrap"], ["*"]>;
}
