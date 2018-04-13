"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckApp_provider_1 = require("../providers/AckApp.provider");
var AckAppTemplates = (function () {
    function AckAppTemplates(AckApp) {
        this.AckApp = AckApp;
    }
    AckAppTemplates.prototype.ngAfterViewInit = function () {
        this.check();
        this.inited = true;
    };
    AckAppTemplates.prototype.ngOnChanges = function (changes) {
        if (this.inited) {
            this.check();
        }
    };
    AckAppTemplates.prototype.check = function () {
        if (this.pushed)
            return;
        this.AckApp.appHeaderTemplates.unshift(this.header);
        this.AckApp.appFooterTemplates.unshift(this.footer);
        this.pushed = true;
    };
    AckAppTemplates.prototype.ngOnDestroy = function () {
        this.unregister();
    };
    AckAppTemplates.prototype.unregister = function () {
        this.pushed = false;
        this.AckApp.unregisterAppHeaderTemplate(this.header);
        this.AckApp.unregisterAppFooterTemplate(this.footer);
    };
    AckAppTemplates.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "ack-app-templates"
                },] },
    ];
    AckAppTemplates.ctorParameters = function () { return [
        { type: AckApp_provider_1.AckApp, },
    ]; };
    AckAppTemplates.propDecorators = {
        "header": [{ type: core_1.ContentChild, args: ['header',] },],
        "footer": [{ type: core_1.ContentChild, args: ['footer',] },],
    };
    return AckAppTemplates;
}());
exports.AckAppTemplates = AckAppTemplates;
