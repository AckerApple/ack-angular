import { __decorate, __metadata } from "tslib";
import { ContentChild, Component, Input, Output, EventEmitter, ElementRef, TemplateRef, ViewChild, } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import { string } from "./templates/ack-modal.pug";
let AckModal = class AckModal {
    constructor(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.allowClose = true;
        this.zIndex = 20;
        this.showModelChange = new EventEmitter();
        this.close = new EventEmitter();
    }
    ngOnInit() {
        this.determineStage();
    }
    determineStage() {
        if (this.inline)
            return;
        if (this.AckApp.fixedElementStage) {
            this.AckApp.registerModal(this);
        }
        else if (!this.AckApp.warnedFixElements) {
            this.AckApp.warnedFixElements = true;
            console.warn('Please put the element tag <ack-fixed-element-stage> inside your app so <ack-modal> renders properly amongst other elements. OR set <ack-modal inline="true">');
        }
    }
    ngOnDestroy() {
        this.AckApp.unregisterModal(this);
    }
};
__decorate([
    ContentChild('body'),
    __metadata("design:type", TemplateRef)
], AckModal.prototype, "body", void 0);
__decorate([
    ViewChild('placeholder'),
    __metadata("design:type", ElementRef)
], AckModal.prototype, "layout", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AckModal.prototype, "inline", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AckModal.prototype, "isModelMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AckModal.prototype, "allowClose", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AckModal.prototype, "zIndex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AckModal.prototype, "wrapStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AckModal.prototype, "wrapCellStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AckModal.prototype, "backgroundColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AckModal.prototype, "showModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AckModal.prototype, "showModelChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AckModal.prototype, "close", void 0);
AckModal = __decorate([
    Component({
        selector: "ack-modal",
        template: string
    }),
    __metadata("design:paramtypes", [ElementRef,
        AckApp])
], AckModal);
export { AckModal };
