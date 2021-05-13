import { Component, Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
var EnterKey = /** @class */ (function () {
    function EnterKey(element) {
        var _this = this;
        this.element = element;
        this.enterKey = new EventEmitter();
        element.nativeElement.addEventListener('keydown', function (event) {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) >= 0;
            if (yesNo) {
                _this.enterKey.emit(event);
            }
        });
    }
    EnterKey.decorators = [
        { type: Directive, args: [{ selector: '[enterKey]' },] }
    ];
    EnterKey.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    EnterKey.propDecorators = {
        enterKey: [{ type: Output }]
    };
    return EnterKey;
}());
export { EnterKey };
var EscapeKey = /** @class */ (function () {
    function EscapeKey(element) {
        var _this = this;
        this.element = element;
        this.escapeKey = new EventEmitter();
        element.nativeElement.addEventListener('keydown', function (event) {
            var code = event.which || event.keyCode;
            if (code == 27) {
                _this.escapeKey.emit(event);
            }
        });
    }
    EscapeKey.decorators = [
        { type: Directive, args: [{ selector: '[escapeKey]' },] }
    ];
    EscapeKey.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    EscapeKey.propDecorators = {
        escapeKey: [{ type: Output }]
    };
    return EscapeKey;
}());
export { EscapeKey };
/** Disallow keyboard access to the backspace key */
var PreventBackKey = /** @class */ (function () {
    function PreventBackKey(element) {
        var _this = this;
        this.element = element;
        this.preventBackKey = new EventEmitter();
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
        { type: Directive, args: [{ selector: '[preventBackKey]' },] }
    ];
    PreventBackKey.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    PreventBackKey.propDecorators = {
        preventBackKey: [{ type: Output }]
    };
    return PreventBackKey;
}());
export { PreventBackKey };
/** Disallow keyboard access to the enter keys */
var PreventEnterKey = /** @class */ (function () {
    function PreventEnterKey(element) {
        var _this = this;
        this.element = element;
        this.preventEnterKey = new EventEmitter();
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
        { type: Directive, args: [{ selector: '[preventEnterKey]' },] }
    ];
    PreventEnterKey.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    PreventEnterKey.propDecorators = {
        preventEnterKey: [{ type: Output }]
    };
    return PreventEnterKey;
}());
export { PreventEnterKey };
var InputHint = /** @class */ (function () {
    function InputHint() {
        this.hintStyle = { 'font-size': '75%', 'color': '#BBB' };
    }
    InputHint.decorators = [
        { type: Component, args: [{
                    selector: 'input-hint',
                    template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
                },] }
    ];
    InputHint.propDecorators = {
        hintStyle: [{ type: Input }]
    };
    return InputHint;
}());
export { InputHint };
/** adds form element onchange listener via addEventListener('change') that calls formChanged scope argument */
var FormChanged = /** @class */ (function () {
    function FormChanged(element) {
        var _this = this;
        this.element = element;
        this.formChanged = new EventEmitter();
        this.onChange = function (event) {
            _this.formChanged.emit(event);
        };
        element.nativeElement.addEventListener('change', this.onChange);
    }
    FormChanged.prototype.ngOnDestroy = function () {
        this.element.nativeElement.removeEventListener('change', this.onChange);
    };
    FormChanged.decorators = [
        { type: Directive, args: [{
                    selector: '[formChanged]' //Also try : (formAlter) directive that watches the form "input" event
                },] }
    ];
    FormChanged.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FormChanged.propDecorators = {
        formChanged: [{ type: Output }]
    };
    return FormChanged;
}());
export { FormChanged };
/** when ever change or input form event triggered, bindings are called */
var FormAlter = /** @class */ (function () {
    function FormAlter(element) {
        var _this = this;
        this.element = element;
        this.formAlter = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: '[formAlter]'
                },] }
    ];
    FormAlter.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FormAlter.propDecorators = {
        formAlter: [{ type: Output }]
    };
    return FormAlter;
}());
export { FormAlter };
//# sourceMappingURL=declarations.short.js.map