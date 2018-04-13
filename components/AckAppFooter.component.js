"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckApp_provider_1 = require("../providers/AckApp.provider");
var AckAppFooter = (function () {
    function AckAppFooter(AckApp) {
        this.AckApp = AckApp;
    }
    AckAppFooter.prototype.ngAfterViewInit = function () {
        this.check();
        this.inited = true;
    };
    AckAppFooter.prototype.ngOnChanges = function (changes) {
        if (this.inited) {
            this.check();
        }
    };
    AckAppFooter.prototype.check = function () {
        if (this.pushed)
            return;
        this.AckApp.appFooterTemplates.unshift(this);
        this.pushed = true;
    };
    AckAppFooter.prototype.ngOnDestroy = function () {
        this.unregister();
    };
    AckAppFooter.prototype.unregister = function () {
        this.pushed = false;
        this.AckApp.unregisterAppFooterTemplate(this);
    };
    AckAppFooter.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ack-app-footer",
                    template: "<ng-template #content><ng-content></ng-content></ng-template>"
                },] },
    ];
    AckAppFooter.ctorParameters = function () { return [
        { type: AckApp_provider_1.AckApp, },
    ]; };
    AckAppFooter.propDecorators = {
        "content": [{ type: core_1.ViewChild, args: ['content',] },],
    };
    return AckAppFooter;
}());
exports.AckAppFooter = AckAppFooter;
