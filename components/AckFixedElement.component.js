import { __decorate, __metadata } from "tslib";
import { TemplateRef, ViewChild, Component } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
let AckFixedElement = class AckFixedElement {
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
};
__decorate([
    ViewChild('content'),
    __metadata("design:type", TemplateRef)
], AckFixedElement.prototype, "content", void 0);
AckFixedElement = __decorate([
    Component({
        selector: 'ack-fixed-element',
        template: '<ng-template #content><ng-content></ng-content></ng-template>'
    }),
    __metadata("design:paramtypes", [AckApp])
], AckFixedElement);
export { AckFixedElement };
