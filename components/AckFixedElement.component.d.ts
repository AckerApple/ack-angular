import { TemplateRef, ElementRef } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
export declare class AckFixedElement {
    AckApp: AckApp;
    content: TemplateRef<ElementRef>;
    constructor(AckApp: AckApp);
}
