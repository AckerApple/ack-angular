"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var prefx_1 = require("../prefx");
var ack_modal_pug_1 = require("./templates/ack-modal.pug");
var AckModal = (function () {
    function AckModal(element) {
        var _this = this;
        this.element = element;
        this.showModelMode = false;
        this.close = new core_1.EventEmitter();
        this.allowClose = true;
        this.backgroundColorChange = new core_1.EventEmitter();
        this.refChange = new core_1.EventEmitter();
        this.showModelChange = new core_1.EventEmitter();
        setTimeout(function () { return _this.clickListenForClose(); }, 400);
    }
    AckModal.prototype.clickListenForClose = function () {
        var _this = this;
        this.element.nativeElement.addEventListener('click', function (event) {
            if (!_this.allowClose)
                return false;
            var eTar = event.srcElement || event.toElement || event.target;
            var isDirectChild = eTar == _this.element.nativeElement.children[0] || eTar == _this.element.nativeElement.children[0].children[0];
            if (isDirectChild) {
                _this.fireClose();
            }
            return true;
        });
    };
    AckModal.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.refChange.emit(_this);
            if (_this.showModelChange.observers.length) {
                _this.showModelMode = true;
                _this.showModel = _this.showModel ? true : false;
                _this.showModelChange.emit(_this.showModel);
            }
            _this.backgroundColor = _this.backgroundColor || 'rgba(255,255,255,0.95)';
            _this.backgroundColorChange.emit(_this.backgroundColor);
        }, 0);
    };
    AckModal.prototype.fireClose = function () {
        this.showModelChange.emit(this.showModel = false);
        this.close.emit(this);
    };
    AckModal.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-modal',
                    template: ack_modal_pug_1.string,
                    animations: prefx_1.fxArray
                },] },
    ];
    AckModal.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    AckModal.propDecorators = {
        "close": [{ type: core_1.Output },],
        "wrapStyle": [{ type: core_1.Input },],
        "wrapCellStyle": [{ type: core_1.Input },],
        "allowClose": [{ type: core_1.Input },],
        "backgroundColor": [{ type: core_1.Input },],
        "backgroundColorChange": [{ type: core_1.Output },],
        "ref": [{ type: core_1.Input },],
        "refChange": [{ type: core_1.Output },],
        "showModel": [{ type: core_1.Input },],
        "showModelChange": [{ type: core_1.Output },],
    };
    return AckModal;
}());
exports.AckModal = AckModal;
