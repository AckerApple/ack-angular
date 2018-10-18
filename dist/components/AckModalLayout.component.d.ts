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
    isModelMode: boolean;
    showModel: boolean;
    showModelChange: EventEmitter<boolean>;
    constructor(element: ElementRef, AckApp: AckApp);
    clickListenForClose(): void;
    ngOnInit(): void;
    fireClose(): void;
}
