import { EventEmitter, ElementRef } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
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
}
