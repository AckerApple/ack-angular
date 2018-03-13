"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckApp_1 = require("../providers/AckApp");
var ack_angular_fx_1 = require("ack-angular-fx");
var ack_modal_layout_pug_1 = require("./templates/ack-modal-layout.pug");
var AckModalLayout = (function () {
    function AckModalLayout(element, AckApp) {
        var _this = this;
        this.element = element;
        this.AckApp = AckApp;
        this.close = new core_1.EventEmitter();
        this.allowClose = true;
        this.isModelMode = false;
        this.showModel = true;
        this.showModelChange = new core_1.EventEmitter();
        setTimeout(function () { return _this.clickListenForClose(); }, 400);
    }
    AckModalLayout.prototype.clickListenForClose = function () {
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
    AckModalLayout.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.isModelMode || (_this.isModelMode == null && _this.showModelChange.observers.length)) {
                _this.isModelMode = true;
            }
            _this.backgroundColor = _this.backgroundColor || 'rgba(255,255,255,0.95)';
        }, 0);
    };
    AckModalLayout.prototype.fireClose = function () {
        this.showModelChange.emit(this.showModel = false);
        this.close.emit(this);
    };
    AckModalLayout.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-modal-layout',
                    template: ack_modal_layout_pug_1.string,
                    animations: ack_angular_fx_1.fxArray
                },] },
    ];
    AckModalLayout.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: AckApp_1.AckApp, },
    ]; };
    AckModalLayout.propDecorators = {
        "close": [{ type: core_1.Output },],
        "wrapStyle": [{ type: core_1.Input },],
        "wrapCellStyle": [{ type: core_1.Input },],
        "allowClose": [{ type: core_1.Input },],
        "backgroundColor": [{ type: core_1.Input },],
        "isModelMode": [{ type: core_1.Input },],
        "showModel": [{ type: core_1.Input },],
        "showModelChange": [{ type: core_1.Output },],
    };
    return AckModalLayout;
}());
exports.AckModalLayout = AckModalLayout;
