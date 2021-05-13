"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormAlter = exports.FormChanged = exports.InputHint = exports.PreventEnterKey = exports.PreventBackKey = exports.EscapeKey = exports.EnterKey = void 0;
var core_1 = require("@angular/core");
var EnterKey = /** @class */ (function () {
    function EnterKey(element) {
        var _this = this;
        this.element = element;
        this.enterKey = new core_1.EventEmitter();
        element.nativeElement.addEventListener('keydown', function (event) {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) >= 0;
            if (yesNo) {
                _this.enterKey.emit(event);
            }
        });
    }
    EnterKey.decorators = [
        { type: core_1.Directive, args: [{ selector: '[enterKey]' },] }
    ];
    EnterKey.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    EnterKey.propDecorators = {
        enterKey: [{ type: core_1.Output }]
    };
    return EnterKey;
}());
exports.EnterKey = EnterKey;
var EscapeKey = /** @class */ (function () {
    function EscapeKey(element) {
        var _this = this;
        this.element = element;
        this.escapeKey = new core_1.EventEmitter();
        element.nativeElement.addEventListener('keydown', function (event) {
            var code = event.which || event.keyCode;
            if (code == 27) {
                _this.escapeKey.emit(event);
            }
        });
    }
    EscapeKey.decorators = [
        { type: core_1.Directive, args: [{ selector: '[escapeKey]' },] }
    ];
    EscapeKey.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    EscapeKey.propDecorators = {
        escapeKey: [{ type: core_1.Output }]
    };
    return EscapeKey;
}());
exports.EscapeKey = EscapeKey;
/** Disallow keyboard access to the backspace key */
var PreventBackKey = /** @class */ (function () {
    function PreventBackKey(element) {
        var _this = this;
        this.element = element;
        this.preventBackKey = new core_1.EventEmitter();
        element.nativeElement.addEventListener('keydown', function (event) {
            var yesNo = [8].indexOf(event.which || event.keyCode) < 0;
            if (!yesNo) {
                _this.preventBackKey.emit(event);
                if (event.preventDefault) {
                    event.preventDefault();
                }
            }
            return yesNo;
        });
    }
    PreventBackKey.decorators = [
        { type: core_1.Directive, args: [{ selector: '[preventBackKey]' },] }
    ];
    PreventBackKey.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    PreventBackKey.propDecorators = {
        preventBackKey: [{ type: core_1.Output }]
    };
    return PreventBackKey;
}());
exports.PreventBackKey = PreventBackKey;
/** Disallow keyboard access to the enter keys */
var PreventEnterKey = /** @class */ (function () {
    function PreventEnterKey(element) {
        var _this = this;
        this.element = element;
        this.preventEnterKey = new core_1.EventEmitter();
        element.nativeElement.addEventListener('keydown', function (event) {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) < 0;
            if (!yesNo) {
                _this.preventEnterKey.emit(event);
                if (event.preventDefault) {
                    event.preventDefault();
                }
            }
            return yesNo;
        });
    }
    PreventEnterKey.decorators = [
        { type: core_1.Directive, args: [{ selector: '[preventEnterKey]' },] }
    ];
    PreventEnterKey.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    PreventEnterKey.propDecorators = {
        preventEnterKey: [{ type: core_1.Output }]
    };
    return PreventEnterKey;
}());
exports.PreventEnterKey = PreventEnterKey;
var InputHint = /** @class */ (function () {
    function InputHint() {
        this.hintStyle = { 'font-size': '75%', 'color': '#BBB' };
    }
    InputHint.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'input-hint',
                    template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
                },] }
    ];
    InputHint.propDecorators = {
        hintStyle: [{ type: core_1.Input }]
    };
    return InputHint;
}());
exports.InputHint = InputHint;
/** adds form element onchange listener via addEventListener('change') that calls formChanged scope argument */
var FormChanged = /** @class */ (function () {
    function FormChanged(element) {
        var _this = this;
        this.element = element;
        this.formChanged = new core_1.EventEmitter();
        this.onChange = function (event) {
            _this.formChanged.emit(event);
        };
        element.nativeElement.addEventListener('change', this.onChange);
    }
    FormChanged.prototype.ngOnDestroy = function () {
        this.element.nativeElement.removeEventListener('change', this.onChange);
    };
    FormChanged.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[formChanged]' //Also try : (formAlter) directive that watches the form "input" event
                },] }
    ];
    FormChanged.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    FormChanged.propDecorators = {
        formChanged: [{ type: core_1.Output }]
    };
    return FormChanged;
}());
exports.FormChanged = FormChanged;
/** when ever change or input form event triggered, bindings are called */
var FormAlter = /** @class */ (function () {
    function FormAlter(element) {
        var _this = this;
        this.element = element;
        this.formAlter = new core_1.EventEmitter();
        this.onChange = function (event) {
            _this.formAlter.emit(event);
        };
        element.nativeElement.addEventListener('input', this.onChange);
        element.nativeElement.addEventListener('change', this.onChange);
    }
    FormAlter.prototype.ngOnDestroy = function () {
        this.element.nativeElement.removeEventListener('change', this.onChange);
        this.element.nativeElement.removeEventListener('input', this.onChange);
    };
    FormAlter.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[formAlter]'
                },] }
    ];
    FormAlter.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    FormAlter.propDecorators = {
        formAlter: [{ type: core_1.Output }]
    };
    return FormAlter;
}());
exports.FormAlter = FormAlter;
//# sourceMappingURL=declarations.short.js.map