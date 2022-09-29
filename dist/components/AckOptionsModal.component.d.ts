import { EventEmitter } from "@angular/core";
import { AckOptions } from "./AckOptions.component";
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<AckOptionsModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AckOptionsModal, "ack-options-modal", never, { "allowClose": "allowClose"; "wrapStyle": "wrapStyle"; "wrapCellStyle": "wrapCellStyle"; "backgroundColor": "backgroundColor"; "showModel": "showModel"; }, { "close": "close"; "backgroundColorChange": "backgroundColorChange"; "showModelChange": "showModelChange"; }, never, ["*"], false>;
}
