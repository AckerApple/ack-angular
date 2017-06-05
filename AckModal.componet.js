"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ack_modal_pug_1 = require("./templates/ack-modal.pug");
var AckModal = (function () {
    function AckModal(element) {
        var _this = this;
        this.element = element;
        this.onClose = new core_1.EventEmitter();
        this.allowClose = true;
        this.backgroundColorChange = new core_1.EventEmitter();
        this.refChange = new core_1.EventEmitter();
        //after possible double click, close on outside content click
        setTimeout(function () { return _this.clickListenForClose(); }, 400);
        element.nativeElement.style.position = 'fixed';
        element.nativeElement.style.top = 0;
        element.nativeElement.style.left = 0;
        element.nativeElement.style.zIndex = 20;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.width = '100%';
        element.nativeElement.style.overflow = 'auto';
        element.nativeElement.style.display = 'block';
    }
    AckModal.prototype.clickListenForClose = function () {
        var _this = this;
        this.element.nativeElement.addEventListener('click', function (event) {
            if (!_this.allowClose)
                return false;
            var eTar = event.srcElement || event.toElement || event.target;
            if (eTar == _this.element.nativeElement.children[0]) {
                _this.close();
            }
        });
    };
    AckModal.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.ref = Object.assign(_this, _this.ref);
            _this.refChange.emit(_this.ref);
            _this.backgroundColor = _this.backgroundColor || 'rgba(255,255,255,0.95)';
            _this.backgroundColorChange.emit(_this.backgroundColor);
        }, 0);
    };
    AckModal.prototype.close = function () {
        this.onClose.emit(this);
    };
    return AckModal;
}());
AckModal.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ack-modal',
                template: ack_modal_pug_1.string
            },] },
];
/** @nocollapse */
AckModal.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
AckModal.propDecorators = {
    'onClose': [{ type: core_1.Output },],
    'wrapStyle': [{ type: core_1.Input },],
    'allowClose': [{ type: core_1.Input },],
    'backgroundColor': [{ type: core_1.Input },],
    'backgroundColorChange': [{ type: core_1.Output },],
    'ref': [{ type: core_1.Input },],
    'refChange': [{ type: core_1.Output },],
};
exports.AckModal = AckModal;
//# sourceMappingURL=AckModal.componet.js.map