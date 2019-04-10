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
var core_1 = require("@angular/core");
var AckApp_provider_1 = require("../providers/AckApp.provider");
var ack_modal_pug_1 = require("./templates/ack-modal.pug");
var AckModal = (function () {
    function AckModal(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.allowClose = true;
        this.zIndex = 20;
        this.showModelChange = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
    }
    AckModal.prototype.ngOnInit = function () {
        this.determineStage();
    };
    AckModal.prototype.determineStage = function () {
        if (this.inline)
            return;
        if (this.AckApp.fixedElementStage) {
            this.AckApp.registerModal(this);
        }
        else if (!this.AckApp.warnedFixElements) {
            this.AckApp.warnedFixElements = true;
            console.warn('Please put the element tag <ack-fixed-element-stage> inside your app so <ack-modal> renders properly amongst other elements. OR set <ack-modal inline="true">');
        }
    };
    AckModal.prototype.ngOnDestroy = function () {
        this.AckApp.unregisterModal(this);
    };
    __decorate([
        core_1.ContentChild('body'),
        __metadata("design:type", core_1.TemplateRef)
    ], AckModal.prototype, "body", void 0);
    __decorate([
        core_1.ViewChild('placeholder'),
        __metadata("design:type", core_1.ElementRef)
    ], AckModal.prototype, "layout", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AckModal.prototype, "inline", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AckModal.prototype, "isModelMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AckModal.prototype, "allowClose", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AckModal.prototype, "zIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AckModal.prototype, "wrapStyle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AckModal.prototype, "wrapCellStyle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AckModal.prototype, "backgroundColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AckModal.prototype, "showModel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AckModal.prototype, "showModelChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AckModal.prototype, "close", void 0);
    AckModal = __decorate([
        core_1.Component({
            selector: "ack-modal",
            template: ack_modal_pug_1.string
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            AckApp_provider_1.AckApp])
    ], AckModal);
    return AckModal;
}());
exports.AckModal = AckModal;
