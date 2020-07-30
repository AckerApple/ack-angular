import { ContentChild, Component, Input, Output, EventEmitter, ElementRef, TemplateRef, ViewChild, } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import { string } from "./templates/ack-modal.pug";
export class AckModal {
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
}
AckModal.decorators = [
    { type: Component, args: [{
                selector: "ack-modal",
                template: string
            },] }
];
AckModal.ctorParameters = () => [
    { type: ElementRef },
    { type: AckApp }
];
AckModal.propDecorators = {
    body: [{ type: ContentChild, args: ['body',] }],
    layout: [{ type: ViewChild, args: ['placeholder',] }],
    inline: [{ type: Input }],
    isModelMode: [{ type: Input }],
    allowClose: [{ type: Input }],
    zIndex: [{ type: Input }],
    wrapStyle: [{ type: Input }],
    wrapCellStyle: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    showModel: [{ type: Input }],
    showModelChange: [{ type: Output }],
    close: [{ type: Output }]
};
