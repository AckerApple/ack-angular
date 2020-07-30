import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AckOptions } from "./AckOptions.component";
import { string as ackOptionsModal } from "./templates/ack-options-modal.pug";
export class AckOptionsModal extends AckOptions {
    constructor() {
        super(...arguments);
        this.allowClose = true;
        this.close = new EventEmitter();
        this.backgroundColorChange = new EventEmitter();
        this.showModel = true;
        this.showModelChange = new EventEmitter();
    }
    fireModelChange(model) {
        if (!this.multiple)
            this.close.emit();
        this.modelChange.emit(model);
    }
}
AckOptionsModal.decorators = [
    { type: Component, args: [{
                selector: 'ack-options-modal',
                template: ackOptionsModal
            },] }
];
AckOptionsModal.propDecorators = {
    allowClose: [{ type: Input }],
    wrapStyle: [{ type: Input }],
    wrapCellStyle: [{ type: Input }],
    close: [{ type: Output }],
    backgroundColor: [{ type: Input }],
    backgroundColorChange: [{ type: Output }],
    showModel: [{ type: Input }],
    showModelChange: [{ type: Output }]
};
