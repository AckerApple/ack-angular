"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const AckOptions_component_1 = require("./AckOptions.component");
const ack_options_modal_pug_1 = require("./templates/ack-options-modal.pug");
let AckOptionsModal = class AckOptionsModal extends AckOptions_component_1.AckOptions {
    constructor() {
        super(...arguments);
        this.allowClose = true;
        this.close = new core_1.EventEmitter();
        this.backgroundColorChange = new core_1.EventEmitter();
        this.showModel = true;
        this.showModelChange = new core_1.EventEmitter();
    }
    fireModelChange(model) {
        if (!this.multiple)
            this.close.emit();
        this.modelChange.emit(model);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckOptionsModal.prototype, "allowClose", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckOptionsModal.prototype, "wrapStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckOptionsModal.prototype, "wrapCellStyle", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AckOptionsModal.prototype, "close", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AckOptionsModal.prototype, "backgroundColor", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AckOptionsModal.prototype, "backgroundColorChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AckOptionsModal.prototype, "showModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AckOptionsModal.prototype, "showModelChange", void 0);
AckOptionsModal = __decorate([
    core_1.Component({
        selector: 'ack-options-modal',
        template: ack_options_modal_pug_1.string
    })
], AckOptionsModal);
exports.AckOptionsModal = AckOptionsModal;
