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
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AckOptions } from "./AckOptions.component";
import { string as ackOptionsModal } from "./templates/ack-options-modal.pug";
var AckOptionsModal = /** @class */ (function (_super) {
    __extends(AckOptionsModal, _super);
    function AckOptionsModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //one way binds
        _this.allowClose = true;
        //one way expressions
        _this.close = new EventEmitter();
        _this.backgroundColorChange = new EventEmitter();
        _this.showModel = true;
        _this.showModelChange = new EventEmitter();
        return _this;
    }
    AckOptionsModal.prototype.fireModelChange = function (model) {
        if (!this.multiple)
            this.close.emit();
        this.modelChange.emit(model);
    };
    AckOptionsModal.decorators = [
        { type: Component, args: [{
                    selector: 'ack-options-modal',
                    template: ackOptionsModal
                },] }
    ];
    AckOptionsModal.propDecorators = {
        allowClose: [{ type: Input }],
        wrapStyle: [{ type: Input }],
        wrapCellStyle: [{ type: Input }],
        close: [{ type: Output }],
        backgroundColor: [{ type: Input }],
        backgroundColorChange: [{ type: Output }],
        showModel: [{ type: Input }],
        showModelChange: [{ type: Output }]
    };
    return AckOptionsModal;
}(AckOptions));
export { AckOptionsModal };
//# sourceMappingURL=AckOptionsModal.component.js.map