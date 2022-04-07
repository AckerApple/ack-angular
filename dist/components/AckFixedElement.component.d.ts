import { TemplateRef, ElementRef } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import * as i0 from "@angular/core";
export declare class AckFixedElement {
    AckApp: AckApp;
    content: TemplateRef<ElementRef>;
    constructor(AckApp: AckApp);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AckFixedElement, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AckFixedElement, "ack-fixed-element", never, {}, {}, never, ["*"]>;
}
