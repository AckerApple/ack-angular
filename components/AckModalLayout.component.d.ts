import { EventEmitter, ElementRef } from "@angular/core";
import { AckApp } from "../providers/AckApp";
export declare class AckModalLayout {
    element: ElementRef;
    AckApp: AckApp;
    close: EventEmitter<AckModalLayout>;
    wrapStyle: any;
    wrapCellStyle: any;
    allowClose: boolean;
    backgroundColor: any;
    isModelMode: boolean;
    showModel: boolean;
    showModelChange: EventEmitter<boolean>;
    constructor(element: ElementRef, AckApp: AckApp);
    clickListenForClose(): void;
    ngOnInit(): void;
    fireClose(): void;
}
