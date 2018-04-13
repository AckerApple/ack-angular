"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckApp_1 = require("../providers/AckApp");
var ack_fixed_elm_pug_1 = require("./templates/ack-fixed-elm.pug");
var AckFixedElm = (function () {
    function AckFixedElm(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
    }
    AckFixedElm.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.AckApp.unregisterFixedElm(this, this.align);
            this.determineStage();
        }
    };
    AckFixedElm.prototype.determineStage = function () {
        if (this.inline)
            return;
        if (this.AckApp.fixedElementStage) {
            this.AckApp.registerFixedElm(this);
        }
        else if (!this.AckApp.warnedFixElements) {
            this.AckApp.warnedFixElements = true;
            console.warn('Please put the element tag <ack-fixed-element-stage> inside your app so <ack-modal> renders properly amongst other elements. OR set <ack-fixed-elm [inline]="false">');
        }
    };
    AckFixedElm.prototype.ngOnDestroy = function () {
        this.AckApp.unregisterFixedElm(this);
    };
    AckFixedElm.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-fixed-elm',
                    template: ack_fixed_elm_pug_1.string
                },] },
    ];
    AckFixedElm.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: AckApp_1.AckApp, },
    ]; };
    AckFixedElm.propDecorators = {
        "body": [{ type: core_1.ContentChild, args: ['body',] },],
        "layout": [{ type: core_1.ViewChild, args: ['placeholder',] },],
        "inline": [{ type: core_1.Input },],
        "align": [{ type: core_1.Input },],
    };
    return AckFixedElm;
}());
exports.AckFixedElm = AckFixedElm;
