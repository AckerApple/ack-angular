import { TemplateRef, ViewChild, Component } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
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
        { type: Component, args: [{
                    selector: 'ack-fixed-element',
                    template: '<ng-template #content><ng-content></ng-content></ng-template>'
                },] }
    ];
    AckFixedElement.ctorParameters = function () { return [
        { type: AckApp }
    ]; };
    AckFixedElement.propDecorators = {
        content: [{ type: ViewChild, args: ['content',] }]
    };
    return AckFixedElement;
}());
export { AckFixedElement };
//# sourceMappingURL=AckFixedElement.component.js.map