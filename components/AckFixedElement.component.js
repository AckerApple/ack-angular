"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckFixedElement = void 0;
var core_1 = require("@angular/core");
var AckApp_provider_1 = require("../providers/AckApp.provider");
var AckFixedElement = /** @class */ (function () {
    function AckFixedElement(AckApp) {
        this.AckApp = AckApp;
        this.AckApp.fixedElms.push(this);
    }
    AckFixedElement.prototype.ngOnDestroy = function () {
        for (var x = this.AckApp.fixedElms.length - 1; x >= 0; --x) {
            var iClass = this.AckApp.fixedElms[x];
            if (iClass === this) {
                this.AckApp.fixedElms.splice(x, 1);
                break;
            }
        }
    };
    AckFixedElement.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-fixed-element',
                    template: '<ng-template #content><ng-content></ng-content></ng-template>'
                },] }
    ];
    AckFixedElement.ctorParameters = function () { return [
        { type: AckApp_provider_1.AckApp }
    ]; };
    AckFixedElement.propDecorators = {
        content: [{ type: core_1.ViewChild, args: ['content',] }]
    };
    return AckFixedElement;
}());
exports.AckFixedElement = AckFixedElement;
//# sourceMappingURL=AckFixedElement.component.js.map