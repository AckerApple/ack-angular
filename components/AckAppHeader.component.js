"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckApp_provider_1 = require("../providers/AckApp.provider");
var AckAppHeader = (function () {
    function AckAppHeader(AckApp) {
        this.AckApp = AckApp;
    }
    AckAppHeader.prototype.ngAfterViewInit = function () {
        this.check();
        this.inited = true;
    };
    AckAppHeader.prototype.ngOnChanges = function (changes) {
        if (this.inited) {
            this.check();
        }
    };
    AckAppHeader.prototype.check = function () {
        if (this.pushed)
            return;
        this.AckApp.appHeaderTemplates.unshift(this);
        this.pushed = true;
    };
    AckAppHeader.prototype.ngOnDestroy = function () {
        this.unregister();
    };
    AckAppHeader.prototype.unregister = function () {
        this.pushed = false;
        this.AckApp.unregisterAppHeaderTemplate(this);
    };
    AckAppHeader.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ack-app-header",
                    template: "<ng-container *ngIf=\"1==0\"><ng-template #content><ng-content></ng-content></ng-template></ng-container>"
                },] },
    ];
    AckAppHeader.ctorParameters = function () { return [
        { type: AckApp_provider_1.AckApp, },
    ]; };
    AckAppHeader.propDecorators = {
        "content": [{ type: core_1.ViewChild, args: ['content',] },],
    };
    return AckAppHeader;
}());
exports.AckAppHeader = AckAppHeader;
