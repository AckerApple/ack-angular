"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckApp_provider_1 = require("../providers/AckApp.provider");
var ack_app_pug_1 = require("./templates/ack-app.pug");
var AckApp = (function () {
    function AckApp(AckApp, ElementRef) {
        this.AckApp = AckApp;
        this.ElementRef = ElementRef;
        AckApp.Component = this;
        ElementRef.nativeElement.style.height = '100%';
        ElementRef.nativeElement.style.display = 'block';
    }
    AckApp.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-app',
                    template: ack_app_pug_1.string
                },] },
    ];
    AckApp.ctorParameters = function () { return [
        { type: AckApp_provider_1.AckApp, },
        { type: core_1.ElementRef, },
    ]; };
    AckApp.propDecorators = {
        "mode": [{ type: core_1.Input },],
        "header": [{ type: core_1.ContentChild, args: ["header",] },],
        "footer": [{ type: core_1.ContentChild, args: ["footer",] },],
    };
    return AckApp;
}());
exports.AckApp = AckApp;
