import { ElementRef, TemplateRef } from "@angular/core";
import { AckApp as AckAppProvider } from "../providers/AckApp.provider";
export declare class AckApp {
    AckApp: AckAppProvider;
    ElementRef: ElementRef;
    mode: "calculate" | "clone";
    header: TemplateRef<any>;
    footer: TemplateRef<any>;
    constructor(AckApp: AckAppProvider, ElementRef: ElementRef);
}
