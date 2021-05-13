import { ContentChild, 
//Directive,
Component, Input, Output, EventEmitter, ElementRef, TemplateRef, ViewChild, } from "@angular/core";
//import { AckModalLayout } from "./AckModalLayout.component"
import { AckApp } from "../providers/AckApp.provider";
import { string } from "./templates/ack-modal.pug";
var AckModal = /** @class */ (function () {
    function AckModal(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.allowClose = true;
        this.zIndex = 20;
        this.showModelChange = new EventEmitter();
        //one way expression binds
        this.close = new EventEmitter();
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
    AckModal.decorators = [
        { type: Component, args: [{
                    selector: "ack-modal",
                    template: string
                    //,exportAs:"AckModal"
                    //,animations:animations
                },] }
    ];
    AckModal.ctorParameters = function () { return [
        { type: ElementRef },
        { type: AckApp }
    ]; };
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
    return AckModal;
}());
export { AckModal };
//# sourceMappingURL=AckModal.component.js.map