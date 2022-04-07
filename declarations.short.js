import { Component, Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["*"];
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
    EnterKey.ɵfac = function EnterKey_Factory(t) { return new (t || EnterKey)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    EnterKey.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: EnterKey, selectors: [["", "enterKey", ""]], outputs: { enterKey: "enterKey" } });
    return EnterKey;
}());
export { EnterKey };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EnterKey, [{
        type: Directive,
        args: [{ selector: '[enterKey]' }]
    }], function () { return [{ type: i0.ElementRef }]; }, { enterKey: [{
            type: Output
        }] }); })();
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
    EscapeKey.ɵfac = function EscapeKey_Factory(t) { return new (t || EscapeKey)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    EscapeKey.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: EscapeKey, selectors: [["", "escapeKey", ""]], outputs: { escapeKey: "escapeKey" } });
    return EscapeKey;
}());
export { EscapeKey };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EscapeKey, [{
        type: Directive,
        args: [{ selector: '[escapeKey]' }]
    }], function () { return [{ type: i0.ElementRef }]; }, { escapeKey: [{
            type: Output
        }] }); })();
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
    PreventBackKey.ɵfac = function PreventBackKey_Factory(t) { return new (t || PreventBackKey)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PreventBackKey.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PreventBackKey, selectors: [["", "preventBackKey", ""]], outputs: { preventBackKey: "preventBackKey" } });
    return PreventBackKey;
}());
export { PreventBackKey };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PreventBackKey, [{
        type: Directive,
        args: [{ selector: '[preventBackKey]' }]
    }], function () { return [{ type: i0.ElementRef }]; }, { preventBackKey: [{
            type: Output
        }] }); })();
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
    PreventEnterKey.ɵfac = function PreventEnterKey_Factory(t) { return new (t || PreventEnterKey)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PreventEnterKey.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PreventEnterKey, selectors: [["", "preventEnterKey", ""]], outputs: { preventEnterKey: "preventEnterKey" } });
    return PreventEnterKey;
}());
export { PreventEnterKey };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PreventEnterKey, [{
        type: Directive,
        args: [{ selector: '[preventEnterKey]' }]
    }], function () { return [{ type: i0.ElementRef }]; }, { preventEnterKey: [{
            type: Output
        }] }); })();
var InputHint = /** @class */ (function () {
    function InputHint() {
        this.hintStyle = { 'font-size': '75%', 'color': '#BBB' };
    }
    InputHint.ɵfac = function InputHint_Factory(t) { return new (t || InputHint)(); };
    InputHint.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputHint, selectors: [["input-hint"]], inputs: { hintStyle: "hintStyle" }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[2, "position", "relative", 3, "ngStyle"], [2, "position", "absolute", "top", "0", "width", "100%"]], template: function InputHint_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", ctx.hintStyle);
        } }, directives: [i1.NgStyle], encapsulation: 2 });
    return InputHint;
}());
export { InputHint };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputHint, [{
        type: Component,
        args: [{
                selector: 'input-hint',
                template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
            }]
    }], null, { hintStyle: [{
            type: Input
        }] }); })();
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
    FormChanged.ɵfac = function FormChanged_Factory(t) { return new (t || FormChanged)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    FormChanged.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FormChanged, selectors: [["", "formChanged", ""]], outputs: { formChanged: "formChanged" } });
    return FormChanged;
}());
export { FormChanged };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormChanged, [{
        type: Directive,
        args: [{
                selector: '[formChanged]' //Also try : (formAlter) directive that watches the form "input" event
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { formChanged: [{
            type: Output
        }] }); })();
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
    FormAlter.ɵfac = function FormAlter_Factory(t) { return new (t || FormAlter)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    FormAlter.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FormAlter, selectors: [["", "formAlter", ""]], outputs: { formAlter: "formAlter" } });
    return FormAlter;
}());
export { FormAlter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormAlter, [{
        type: Directive,
        args: [{
                selector: '[formAlter]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { formAlter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=declarations.short.js.map