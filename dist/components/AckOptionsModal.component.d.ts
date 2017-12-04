import { EventEmitter } from "@angular/core";
import { AckOptions } from "./AckOptions.component";
export declare class AckOptionsModal extends AckOptions {
    ackModal: any;
    ackOptions: any;
    allowClose: boolean;
    close: EventEmitter<{}>;
    wrapStyle: any;
    wrapCellStyle: any;
    backgroundColor: any;
    backgroundColorChange: EventEmitter<{}>;
    ngAfterViewInit(): void;
    subscribeModelChange(): void;
}
