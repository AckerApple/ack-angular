import { EventEmitter } from "@angular/core";
import { AckOptions } from "./AckOptions.component";
export declare class AckOptionsModal extends AckOptions {
    ackOptions: AckOptions;
    allowClose: boolean;
    wrapStyle: any;
    wrapCellStyle: any;
    close: EventEmitter<any>;
    backgroundColor: any;
    backgroundColorChange: EventEmitter<any>;
    showModel: boolean;
    showModelChange: EventEmitter<boolean>;
    fireModelChange(model: any): void;
}
