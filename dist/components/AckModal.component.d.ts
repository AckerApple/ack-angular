import { EventEmitter, ElementRef, TemplateRef } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<AckModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AckModal, "ack-modal", never, { "inline": "inline"; "isModelMode": "isModelMode"; "zIndex": "zIndex"; "valign": "valign"; "wrapStyle": "wrapStyle"; "wrapCellStyle": "wrapCellStyle"; "backgroundColor": "backgroundColor"; "allowClose": "allowClose"; "showModel": "showModel"; }, { "showModelChange": "showModelChange"; "close": "close"; }, ["body"], ["*"]>;
}
