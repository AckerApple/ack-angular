import { EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class AckModalLayout {
    element: ElementRef;
    zIndex: number | string;
    close: EventEmitter<AckModalLayout>;
    allowClose: boolean | number;
    wrapStyle: any;
    wrapCellStyle: any;
    backgroundColor: any;
    valign: 'top' | 'center' | 'bottom';
    isModelMode: boolean | number;
    showModel: boolean;
    showModelChange: EventEmitter<boolean>;
    constructor(element: ElementRef);
    clickListenForClose(): void;
    ngOnInit(): Promise<void>;
    fireClose(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AckModalLayout, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AckModalLayout, "ack-modal-layout", never, { "zIndex": "zIndex"; "allowClose": "allowClose"; "wrapStyle": "wrapStyle"; "wrapCellStyle": "wrapCellStyle"; "backgroundColor": "backgroundColor"; "valign": "valign"; "isModelMode": "isModelMode"; "showModel": "showModel"; }, { "close": "close"; "showModelChange": "showModelChange"; }, never, ["*"], false>;
}
