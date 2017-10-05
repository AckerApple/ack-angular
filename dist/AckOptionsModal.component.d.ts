import { EventEmitter, ElementRef } from "@angular/core";
import { AckOptions } from "./AckOptions.component";
export declare class AckOptionsModal extends AckOptions {
    element: ElementRef;
    ackModal: any;
    ackOptions: any;
    allowClose: boolean;
    onClose: EventEmitter<{}>;
    wrapStyle: any;
    wrapCellStyle: any;
    backgroundColor: any;
    backgroundColorChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
}
