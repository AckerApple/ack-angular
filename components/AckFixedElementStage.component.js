"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckFixedElementStage = void 0;
var core_1 = require("@angular/core");
var AckApp_provider_1 = require("../providers/AckApp.provider");
var ack_fixed_element_stage_pug_1 = require("./templates/ack-fixed-element-stage.pug");
var AckFixedElementStage = /** @class */ (function () {
    function AckFixedElementStage(AckApp, ElementRef) {
        this.AckApp = AckApp;
        this.ElementRef = ElementRef;
        AckApp.fixedElementStage = ElementRef;
    }
    AckFixedElementStage.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-fixed-element-stage',
                    template: ack_fixed_element_stage_pug_1.string
                },] }
    ];
    AckFixedElementStage.ctorParameters = function () { return [
        { type: AckApp_provider_1.AckApp },
        { type: core_1.ElementRef }
    ]; };
    return AckFixedElementStage;
}());
exports.AckFixedElementStage = AckFixedElementStage;
//# sourceMappingURL=AckFixedElementStage.component.js.map