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
    /* omitted ack-modal inputs
    @Input() private ref
    @Output() public refChange = new EventEmitter()
    */
    function AckOptionsModal(element) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.allowClose = true;
        _this.onClose = new core_1.EventEmitter();
        _this.backgroundColorChange = new core_1.EventEmitter();
        element.nativeElement.style.position = 'fixed';
        element.nativeElement.style.top = 0;
        element.nativeElement.style.left = 0;
        element.nativeElement.style.zIndex = 20;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.width = '100%';
        element.nativeElement.style.overflow = 'auto';
        element.nativeElement.style.display = 'block';
        return _this;
    }
    AckOptionsModal.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.ackOptions.modelChange.subscribe(function (model) {
                if (model && !_this.multiple && _this.ackModal) {
                    _this.ackModal.close();
                }
                _this.modelChange.emit(_this.model);
            });
        }, 0);
    };
    AckOptionsModal.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-options-modal',
                    template: ack_options_modal_pug_1.string
                },] },
    ];
    /** @nocollapse */
    AckOptionsModal.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    AckOptionsModal.propDecorators = {
        'allowClose': [{ type: core_1.Input },],
        'onClose': [{ type: core_1.Output },],
        'wrapStyle': [{ type: core_1.Input },],
        'wrapCellStyle': [{ type: core_1.Input },],
        'backgroundColor': [{ type: core_1.Input },],
        'backgroundColorChange': [{ type: core_1.Output },],
    };
    return AckOptionsModal;
}(AckOptions_component_1.AckOptions));
exports.AckOptionsModal = AckOptionsModal;
//# sourceMappingURL=AckOptionsModal.component.js.map