import { ElementRef, Component } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import { string } from "./templates/ack-fixed-element-stage.pug";
export class AckFixedElementStage {
    constructor(AckApp, ElementRef) {
        this.AckApp = AckApp;
        this.ElementRef = ElementRef;
        AckApp.fixedElementStage = ElementRef;
    }
}
AckFixedElementStage.decorators = [
    { type: Component, args: [{
                selector: 'ack-fixed-element-stage',
                template: string
            },] }
];
AckFixedElementStage.ctorParameters = () => [
    { type: AckApp },
    { type: ElementRef }
];
