import { __decorate, __metadata } from "tslib";
import { ElementRef, Component } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import { string } from "./templates/ack-fixed-element-stage.pug";
let AckFixedElementStage = class AckFixedElementStage {
    constructor(AckApp, ElementRef) {
        this.AckApp = AckApp;
        this.ElementRef = ElementRef;
        AckApp.fixedElementStage = ElementRef;
    }
};
AckFixedElementStage = __decorate([
    Component({
        selector: 'ack-fixed-element-stage',
        template: string
    }),
    __metadata("design:paramtypes", [AckApp,
        ElementRef])
], AckFixedElementStage);
export { AckFixedElementStage };
