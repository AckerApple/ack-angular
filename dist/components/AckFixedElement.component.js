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
var AckFixedElement = (function () {
    function AckFixedElement(AckApp) {
        this.AckApp = AckApp;
        this.AckApp.fixedElms.push(this);
    }
    __decorate([
        core_1.ViewChild('content'),
        __metadata("design:type", core_1.TemplateRef)
    ], AckFixedElement.prototype, "content", void 0);
    AckFixedElement = __decorate([
        core_1.Component({
            selector: 'ack-fixed-element',
            template: '<ng-template #content><ng-content></ng-content></ng-template>'
        }),
        __metadata("design:paramtypes", [AckApp_provider_1.AckApp])
    ], AckFixedElement);
    return AckFixedElement;
}());
exports.AckFixedElement = AckFixedElement;
