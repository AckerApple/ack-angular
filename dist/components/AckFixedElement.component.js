import { TemplateRef, ViewChild, Component } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
export class AckFixedElement {
    constructor(AckApp) {
        this.AckApp = AckApp;
        this.AckApp.fixedElms.push(this);
    }
    ngOnDestroy() {
        for (let x = this.AckApp.fixedElms.length - 1; x >= 0; --x) {
            const iClass = this.AckApp.fixedElms[x];
            if (iClass === this) {
                this.AckApp.fixedElms.splice(x, 1);
                break;
            }
        }
    }
}
AckFixedElement.decorators = [
    { type: Component, args: [{
                selector: 'ack-fixed-element',
                template: '<ng-template #content><ng-content></ng-content></ng-template>'
            },] }
];
AckFixedElement.ctorParameters = () => [
    { type: AckApp }
];
AckFixedElement.propDecorators = {
    content: [{ type: ViewChild, args: ['content',] }]
};
