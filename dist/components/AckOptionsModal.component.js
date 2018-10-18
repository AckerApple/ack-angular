"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckOptions_component_1 = require("./AckOptions.component");
var ack_options_modal_pug_1 = require("./templates/ack-options-modal.pug");
var AckOptionsModal = (function (_super) {
    __extends(AckOptionsModal, _super);
    function AckOptionsModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allowClose = true;
        _this.close = new core_1.EventEmitter();
        _this.backgroundColorChange = new core_1.EventEmitter();
        _this.showModel = true;
        _this.showModelChange = new core_1.EventEmitter();
        return _this;
    }
    AckOptionsModal.prototype.fireModelChange = function (model) {
        if (!this.multiple)
            this.close.emit();
        this.modelChange.emit(model);
    };
    AckOptionsModal.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-options-modal',
                    template: ack_options_modal_pug_1.string
                },] },
    ];
    AckOptionsModal.propDecorators = {
        allowClose: [{ type: core_1.Input }],
        wrapStyle: [{ type: core_1.Input }],
        wrapCellStyle: [{ type: core_1.Input }],
        close: [{ type: core_1.Output }],
        backgroundColor: [{ type: core_1.Input }],
        backgroundColorChange: [{ type: core_1.Output }],
        showModel: [{ type: core_1.Input }],
        showModelChange: [{ type: core_1.Output }]
    };
    return AckOptionsModal;
}(AckOptions_component_1.AckOptions));
exports.AckOptionsModal = AckOptionsModal;
