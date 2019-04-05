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
var ack_angular_fx_1 = require("ack-angular-fx");
var ack_modal_layout_pug_1 = require("./templates/ack-modal-layout.pug");
var AckModalLayout = (function () {
    function AckModalLayout(element, AckApp) {
        var _this = this;
        this.element = element;
        this.AckApp = AckApp;
        this.zIndex = 20;
        this.close = new core_1.EventEmitter();
        this.allowClose = true;
        this.isModelMode = false;
        this.showModel = true;
        this.showModelChange = new core_1.EventEmitter();
        setTimeout(function () { return _this.clickListenForClose(); }, 400);
    }
    AckModalLayout.prototype.clickListenForClose = function () {
        var _this = this;
        this.element.nativeElement.addEventListener('click', function (event) {
            if (!_this.allowClose)
                return false;
            var eTar = event.srcElement || event.toElement || event.target;
            var isDirectChild = eTar == _this.element.nativeElement.children[0] || eTar == _this.element.nativeElement.children[0].children[0];
            if (isDirectChild) {
                _this.fireClose();
            }
            return true;
        });
    };
    AckModalLayout.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            if (_this.isModelMode || (_this.isModelMode == null && _this.showModelChange.observers.length)) {
                _this.isModelMode = true;
            }
        });
    };
    AckModalLayout.prototype.fireClose = function () {
        this.showModelChange.emit(this.showModel = false);
        this.close.emit(this);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AckModalLayout.prototype, "zIndex", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AckModalLayout.prototype, "close", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AckModalLayout.prototype, "allowClose", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AckModalLayout.prototype, "wrapStyle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AckModalLayout.prototype, "wrapCellStyle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AckModalLayout.prototype, "backgroundColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AckModalLayout.prototype, "isModelMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AckModalLayout.prototype, "showModel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AckModalLayout.prototype, "showModelChange", void 0);
    AckModalLayout = __decorate([
        core_1.Component({
            selector: 'ack-modal-layout',
            template: ack_modal_layout_pug_1.string,
            animations: ack_angular_fx_1.animations
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            AckApp_provider_1.AckApp])
    ], AckModalLayout);
    return AckModalLayout;
}());
exports.AckModalLayout = AckModalLayout;
