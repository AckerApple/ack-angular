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
        return _this;
    }
    AckOptionsModal.prototype.ngAfterViewInit = function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
        this.ElementRef.nativeElement.style.position = 'fixed';
        this.ElementRef.nativeElement.style.top = 0;
        this.ElementRef.nativeElement.style.left = 0;
        this.ElementRef.nativeElement.style.zIndex = 20;
        this.ElementRef.nativeElement.style.height = '100%';
        this.ElementRef.nativeElement.style.width = '100%';
        this.ElementRef.nativeElement.style.overflow = 'auto';
        this.ElementRef.nativeElement.style.display = 'block';
        setTimeout(function () { return _this.subscribeModelChange(); }, 0);
    };
    AckOptionsModal.prototype.subscribeModelChange = function () {
        var _this = this;
        this.ackOptions.modelChange.subscribe(function (model) {
            if (model && !_this.multiple && _this.ackModal) {
                _this.ackModal.close();
            }
            _this.modelChange.emit(_this.model);
        });
    };
    AckOptionsModal.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-options-modal',
                    template: ack_options_modal_pug_1.string
                },] },
    ];
    AckOptionsModal.ctorParameters = function () { return []; };
    AckOptionsModal.propDecorators = {
        'allowClose': [{ type: core_1.Input },],
        'close': [{ type: core_1.Output },],
        'wrapStyle': [{ type: core_1.Input },],
        'wrapCellStyle': [{ type: core_1.Input },],
        'backgroundColor': [{ type: core_1.Input },],
        'backgroundColorChange': [{ type: core_1.Output },],
    };
    return AckOptionsModal;
}(AckOptions_component_1.AckOptions));
exports.AckOptionsModal = AckOptionsModal;
