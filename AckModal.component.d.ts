import { EventEmitter, ElementRef } from "@angular/core";
export declare class AckModal {
    element: ElementRef;
    showModelMode: boolean;
    onClose: EventEmitter<{}>;
    wrapStyle: any;
    wrapCellStyle: any;
    allowClose: boolean;
    backgroundColor: any;
    backgroundColorChange: EventEmitter<{}>;
    ref: any;
    refChange: EventEmitter<{}>;
    showModel: any;
    showModelChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    clickListenForClose(): void;
    ngOnInit(): void;
    close(): void;
}
