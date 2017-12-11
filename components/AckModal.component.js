"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckApp_1 = require("../providers/AckApp");
var ack_modal_pug_1 = require("./templates/ack-modal.pug");
var AckModal = (function () {
    function AckModal(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.allowClose = true;
        this.showModelChange = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
    }
    AckModal.prototype.ngOnInit = function () {
        if (this.AckApp.fixedElementStage) {
            this.AckApp.registerModal(this);
        }
        else if (!this.AckApp.warnedFixElements) {
            this.AckApp.warnedFixElements = true;
            console.warn('Please put the element tag <ack-fixed-element-stage> inside your app so <ack-modal> renders properly amongst other elements');
        }
    };
    AckModal.prototype.ngOnDestroy = function () {
        this.AckApp.unregisterModal(this);
    };
    AckModal.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-modal',
                    template: ack_modal_pug_1.string
                },] },
    ];
    AckModal.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: AckApp_1.AckApp, },
    ]; };
    AckModal.propDecorators = {
        "layout": [{ type: core_1.ViewChild, args: [core_1.TemplateRef,] },],
        "isModelMode": [{ type: core_1.Input },],
        "wrapStyle": [{ type: core_1.Input },],
        "wrapCellStyle": [{ type: core_1.Input },],
        "allowClose": [{ type: core_1.Input },],
        "backgroundColor": [{ type: core_1.Input },],
        "showModel": [{ type: core_1.Input },],
        "showModelChange": [{ type: core_1.Output },],
        "close": [{ type: core_1.Output },],
    };
    return AckModal;
}());
exports.AckModal = AckModal;
