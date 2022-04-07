import { EventEmitter, ElementRef } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import * as i0 from "@angular/core";
export declare class AckModalLayout {
    element: ElementRef;
    AckApp: AckApp;
    zIndex: number;
    close: EventEmitter<AckModalLayout>;
    allowClose: boolean;
    wrapStyle: any;
    wrapCellStyle: any;
    backgroundColor: any;
    valign: 'top' | 'center' | 'bottom';
    isModelMode: boolean;
    showModel: boolean;
    showModelChange: EventEmitter<boolean>;
    constructor(element: ElementRef, AckApp: AckApp);
    clickListenForClose(): void;
    ngOnInit(): Promise<void>;
    fireClose(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AckModalLayout, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AckModalLayout, "ack-modal-layout", never, { "zIndex": "zIndex"; "allowClose": "allowClose"; "wrapStyle": "wrapStyle"; "wrapCellStyle": "wrapCellStyle"; "backgroundColor": "backgroundColor"; "valign": "valign"; "isModelMode": "isModelMode"; "showModel": "showModel"; }, { "close": "close"; "showModelChange": "showModelChange"; }, never, ["*"]>;
}
