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
var ack_fixed_element_stage_pug_1 = require("./templates/ack-fixed-element-stage.pug");
var AckFixedElementStage = (function () {
    function AckFixedElementStage(AckApp, ElementRef) {
        this.AckApp = AckApp;
        this.ElementRef = ElementRef;
        AckApp.fixedElementStage = ElementRef;
    }
    AckFixedElementStage = __decorate([
        core_1.Component({
            selector: 'ack-fixed-element-stage',
            template: ack_fixed_element_stage_pug_1.string
        }),
        __metadata("design:paramtypes", [AckApp_provider_1.AckApp, core_1.ElementRef])
    ], AckFixedElementStage);
    return AckFixedElementStage;
}());
exports.AckFixedElementStage = AckFixedElementStage;
