import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AckOptions } from "./AckOptions.component";
import { string as ackOptionsModal } from "./templates/ack-options-modal.pug";
let AckOptionsModal = class AckOptionsModal extends AckOptions {
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
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AckOptionsModal.prototype, "allowClose", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AckOptionsModal.prototype, "wrapStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AckOptionsModal.prototype, "wrapCellStyle", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AckOptionsModal.prototype, "close", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AckOptionsModal.prototype, "backgroundColor", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AckOptionsModal.prototype, "backgroundColorChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AckOptionsModal.prototype, "showModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AckOptionsModal.prototype, "showModelChange", void 0);
AckOptionsModal = __decorate([
    Component({
        selector: 'ack-options-modal',
        template: ackOptionsModal
    })
], AckOptionsModal);
export { AckOptionsModal };
