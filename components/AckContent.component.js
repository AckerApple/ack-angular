"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ack_content_pug_1 = require("./templates/ack-content.pug");
var AckContent = (function () {
    function AckContent() {
        this.outputChange = new core_1.EventEmitter();
    }
    AckContent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log('x', _this.template);
            _this.outputChange.emit(_this.output = _this.template);
        }, 0);
    };
    AckContent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-content',
                    template: ack_content_pug_1.string
                },] },
    ];
    AckContent.ctorParameters = function () { return []; };
    AckContent.propDecorators = {
        "output": [{ type: core_1.Input },],
        "outputChange": [{ type: core_1.Output },],
        "template": [{ type: core_1.Input },],
        "outChild": [{ type: core_1.ViewChild, args: ['out',] },],
    };
    return AckContent;
}());
exports.AckContent = AckContent;
