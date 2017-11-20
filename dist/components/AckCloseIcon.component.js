"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var template = '<div style="display:inline-block;cursor:pointer;border:3px solid white;border-radius:50%;background-color:black;color:white;text-align:center;font-family:Arial"><div style="line-height:22px;font-size:23px;height:25px;width:25px">x</div></div>';
var AckCloseIcon = (function () {
    function AckCloseIcon() {
    }
    AckCloseIcon.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-close-icon',
                    template: template
                },] },
    ];
    AckCloseIcon.ctorParameters = function () { return []; };
    return AckCloseIcon;
}());
exports.AckCloseIcon = AckCloseIcon;
