import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import { animations } from "ack-angular-fx";
import { string } from "./templates/ack-modal-layout.pug";
let AckModalLayout = class AckModalLayout {
    constructor(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.zIndex = 20;
        this.close = new EventEmitter();
        this.allowClose = true;
        this.isModelMode = false;
        this.showModel = true;
        this.showModelChange = new EventEmitter();
        setTimeout(() => this.clickListenForClose(), 400);
    }
    clickListenForClose() {
        this.element.nativeElement.addEventListener('click', event => {
            if (!this.allowClose)
                return false;
            const eTar = event.srcElement || event.toElement || event.target;
            const isDirectChild = eTar == this.element.nativeElement.children[0] || eTar == this.element.nativeElement.children[0].children[0];
            if (isDirectChild) {
                this.fireClose();
            }
            return true;
        });
    }
    ngOnInit() {
        Promise.resolve().then(() => {
            if (this.isModelMode || (this.isModelMode == null && this.showModelChange.observers.length)) {
                this.isModelMode = true;
            }
        });
    }
    fireClose() {
        this.showModelChange.emit(this.showModel = false);
        this.close.emit(this);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], AckModalLayout.prototype, "zIndex", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AckModalLayout.prototype, "close", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AckModalLayout.prototype, "allowClose", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AckModalLayout.prototype, "wrapStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AckModalLayout.prototype, "wrapCellStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AckModalLayout.prototype, "backgroundColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AckModalLayout.prototype, "isModelMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AckModalLayout.prototype, "showModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AckModalLayout.prototype, "showModelChange", void 0);
AckModalLayout = __decorate([
    Component({
        selector: 'ack-modal-layout',
        template: string,
        animations: animations
    }),
    __metadata("design:paramtypes", [ElementRef,
        AckApp])
], AckModalLayout);
export { AckModalLayout };
