import { EventEmitter, ElementRef, TemplateRef } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
export declare class AckModal {
    element: ElementRef;
    AckApp: AckApp;
    body: TemplateRef<any>;
    layout: ElementRef;
    inline: boolean;
    isModelMode: boolean;
    allowClose: boolean;
    zIndex: number;
    wrapStyle: any;
    wrapCellStyle: any;
    backgroundColor: string;
    showModel: boolean;
    showModelChange: EventEmitter<boolean>;
    close: EventEmitter<any>;
    constructor(element: ElementRef, AckApp: AckApp);
    ngOnInit(): void;
    determineStage(): void;
    ngOnDestroy(): void;
}
