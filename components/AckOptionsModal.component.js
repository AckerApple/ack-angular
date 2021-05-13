"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckOptionsModal = void 0;
var core_1 = require("@angular/core");
var AckOptions_component_1 = require("./AckOptions.component");
var ack_options_modal_pug_1 = require("./templates/ack-options-modal.pug");
var AckOptionsModal = /** @class */ (function (_super) {
    __extends(AckOptionsModal, _super);
    function AckOptionsModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //one way binds
        _this.allowClose = true;
        //one way expressions
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
                },] }
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
//# sourceMappingURL=AckOptionsModal.component.js.map