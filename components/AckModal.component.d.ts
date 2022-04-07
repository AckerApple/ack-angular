import { EventEmitter, ElementRef, TemplateRef } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
export declare class AckModal {
    element: ElementRef;
    AckApp: AckApp;
    body: TemplateRef<any>;
    layout: ElementRef;
    inline?: boolean;
    isModelMode?: boolean;
    zIndex: number;
    valign: 'top' | 'center' | 'bottom';
    wrapStyle: any;
    wrapCellStyle: any;
    backgroundColor?: string;
    allowClose: boolean;
    showModel?: boolean;
    showModelChange: EventEmitter<boolean>;
    close: EventEmitter<any>;
    constructor(element: ElementRef, AckApp: AckApp);
    determineStage(): void;
    ngOnDestroy(): void;
}
