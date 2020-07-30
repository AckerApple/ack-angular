import { Component } from "@angular/core";
const template = '<div style="display:inline-block;cursor:pointer;border:3px solid white;border-radius:50%;background-color:#666;color:white;text-align:center;font-family:Arial">' +
    '<div style="font-weight:bold;line-height:22px;font-size:23px;height:25px;width:25px">x</div>' +
    '</div>';
export class AckCloseIcon {
}
AckCloseIcon.decorators = [
    { type: Component, args: [{
                selector: 'ack-close-icon',
                template: template
            },] }
];
