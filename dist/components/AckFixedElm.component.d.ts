import { ElementRef, TemplateRef } from "@angular/core";
import { AckApp } from "../providers/AckApp";
export declare class AckFixedElm {
    element: ElementRef;
    AckApp: AckApp;
    body: TemplateRef<any>;
    layout: ElementRef;
    inline: boolean;
    align: 'top' | 'bottom' | 'right' | 'left' | string;
    constructor(element: ElementRef, AckApp: AckApp);
    ngOnChanges(changes: any): void;
    determineStage(): void;
    ngOnDestroy(): void;
}
