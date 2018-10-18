"use strict";
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
    AckModal.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ack-modal",
                    template: ack_modal_pug_1.string,
                    exportAs: "AckModal"
                },] },
    ];
    AckModal.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: AckApp_provider_1.AckApp }
    ]; };
    AckModal.propDecorators = {
        body: [{ type: core_1.ContentChild, args: ['body',] }],
        layout: [{ type: core_1.ViewChild, args: ['placeholder',] }],
        inline: [{ type: core_1.Input }],
        isModelMode: [{ type: core_1.Input }],
        allowClose: [{ type: core_1.Input }],
        zIndex: [{ type: core_1.Input }],
        wrapStyle: [{ type: core_1.Input }],
        wrapCellStyle: [{ type: core_1.Input }],
        backgroundColor: [{ type: core_1.Input }],
        showModel: [{ type: core_1.Input }],
        showModelChange: [{ type: core_1.Output }],
        close: [{ type: core_1.Output }]
    };
    return AckModal;
}());
exports.AckModal = AckModal;
