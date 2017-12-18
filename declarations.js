"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckModal_component_1 = require("./components/AckModal.component");
var AckModalLayout_component_1 = require("./components/AckModalLayout.component");
var AckCloseIcon_component_1 = require("./components/AckCloseIcon.component");
var AckArray_directive_1 = require("./AckArray.directive");
var AckOptions_component_1 = require("./components/AckOptions.component");
var AckOptionsModal_component_1 = require("./components/AckOptionsModal.component");
var AbsoluteOverflowX_component_1 = require("./components/AbsoluteOverflowX.component");
var ErrorWell_component_1 = require("./components/ErrorWell.component");
var ReaderHeaderBody_component_1 = require("./components/ReaderHeaderBody.component");
var AckFixedElementStage_component_1 = require("./components/AckFixedElementStage.component");
var ShakeOn_directive_1 = require("./directives/ShakeOn.directive");
var FocusOn_directive_1 = require("./directives/FocusOn.directive");
var Init_directive_1 = require("./directives/Init.directive");
var SelectOn_directive_1 = require("./directives/SelectOn.directive");
var InnerHtmlModel_directive_1 = require("./directives/InnerHtmlModel.directive");
var ElementSizeModel_directive_1 = require("./directives/ElementSizeModel.directive");
var ScreenScrollHeightDiff_directive_1 = require("./directives/ScreenScrollHeightDiff.directive");
var ScreenScroll_directive_1 = require("./directives/ScreenScroll.directive");
var ScreenScrollModelY_directive_1 = require("./directives/ScreenScrollModelY.directive");
var ScreenWidthModel_directive_1 = require("./directives/ScreenWidthModel.directive");
var ScreenHeightModel_directive_1 = require("./directives/ScreenHeightModel.directive");
var HtmlWidthModel_directive_1 = require("./directives/HtmlWidthModel.directive");
var HtmlHeightModel_directive_1 = require("./directives/HtmlHeightModel.directive");
var StatusOnlineModel_directive_1 = require("./directives/StatusOnlineModel.directive");
var StatusOfflineModel_directive_1 = require("./directives/StatusOfflineModel.directive");
var VarDirective = (function () {
    function VarDirective() {
    }
    VarDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[var]',
                    exportAs: 'var'
                },] },
    ];
    VarDirective.ctorParameters = function () { return []; };
    VarDirective.propDecorators = {
        "var": [{ type: core_1.Input },],
    };
    return VarDirective;
}());
exports.VarDirective = VarDirective;
var EnterKey = (function () {
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
        { type: core_1.Directive, args: [{ selector: '[enterKey]' },] },
    ];
    EnterKey.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    EnterKey.propDecorators = {
        "enterKey": [{ type: core_1.Output },],
    };
    return EnterKey;
}());
exports.EnterKey = EnterKey;
var EscapeKey = (function () {
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
        { type: core_1.Directive, args: [{ selector: '[escapeKey]' },] },
    ];
    EscapeKey.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    EscapeKey.propDecorators = {
        "escapeKey": [{ type: core_1.Output },],
    };
    return EscapeKey;
}());
exports.EscapeKey = EscapeKey;
var PreventBackKey = (function () {
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
        { type: core_1.Directive, args: [{ selector: '[preventBackKey]' },] },
    ];
    PreventBackKey.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    PreventBackKey.propDecorators = {
        "preventBackKey": [{ type: core_1.Output },],
    };
    return PreventBackKey;
}());
exports.PreventBackKey = PreventBackKey;
var PreventEnterKey = (function () {
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
        { type: core_1.Directive, args: [{ selector: '[preventEnterKey]' },] },
    ];
    PreventEnterKey.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    PreventEnterKey.propDecorators = {
        "preventEnterKey": [{ type: core_1.Output },],
    };
    return PreventEnterKey;
}());
exports.PreventEnterKey = PreventEnterKey;
var InputHint = (function () {
    function InputHint() {
        this.hintStyle = { 'font-size': '75%', 'color': '#BBB' };
    }
    InputHint.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'input-hint',
                    template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
                },] },
    ];
    InputHint.ctorParameters = function () { return []; };
    InputHint.propDecorators = {
        "hintStyle": [{ type: core_1.Input },],
    };
    return InputHint;
}());
exports.InputHint = InputHint;
var FormChanged = (function () {
    function FormChanged(element) {
        this.element = element;
        this.formChanged = new core_1.EventEmitter();
        this.onChange = function (event) {
            this.formChanged.emit(event);
        }.bind(this);
        element.nativeElement.addEventListener('change', this.onChange);
    }
    FormChanged.prototype.ngOnDestroy = function () {
        this.element.nativeElement.removeEventListener('change', this.onChange);
    };
    FormChanged.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[formChanged]'
                },] },
    ];
    FormChanged.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    FormChanged.propDecorators = {
        "formChanged": [{ type: core_1.Output },],
    };
    return FormChanged;
}());
exports.FormChanged = FormChanged;
var FormAlter = (function () {
    function FormAlter(element) {
        this.element = element;
        this.formAlter = new core_1.EventEmitter();
        this.onChange = function (event) {
            this.formAlter.emit(event);
        }.bind(this);
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
                },] },
    ];
    FormAlter.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    FormAlter.propDecorators = {
        "formAlter": [{ type: core_1.Output },],
    };
    return FormAlter;
}());
exports.FormAlter = FormAlter;
exports.declarations = [
    Init_directive_1.Init,
    SelectOn_directive_1.SelectOn,
    FocusOn_directive_1.FocusOn,
    VarDirective,
    InnerHtmlModel_directive_1.InnerHtmlModel,
    FormAlter,
    FormChanged,
    EnterKey,
    EscapeKey,
    PreventBackKey,
    PreventEnterKey,
    ScreenScrollModelY_directive_1.ScreenScrollModelY,
    ScreenWidthModel_directive_1.ScreenWidthModel,
    ScreenHeightModel_directive_1.ScreenHeightModel,
    ScreenScroll_directive_1.ScreenScroll,
    ScreenScrollHeightDiff_directive_1.ScreenScrollHeightDiff,
    HtmlWidthModel_directive_1.HtmlWidthModel,
    HtmlHeightModel_directive_1.HtmlHeightModel,
    ShakeOn_directive_1.ShakeOn,
    StatusOnlineModel_directive_1.StatusOnlineModel,
    StatusOfflineModel_directive_1.StatusOfflineModel,
    ElementSizeModel_directive_1.ElementSizeModel,
    ElementSizeModel_directive_1.ElementWidthModel,
    ElementSizeModel_directive_1.ElementHeightModel,
    AckCloseIcon_component_1.AckCloseIcon,
    ReaderHeaderBody_component_1.ReaderHeaderBody,
    ReaderHeaderBody_component_1.ReaderHeader,
    ReaderHeaderBody_component_1.ReaderBody,
    ErrorWell_component_1.ErrorWell,
    AbsoluteOverflowX_component_1.AbsoluteOverflowX,
    InputHint,
    AckOptions_component_1.AckOptions,
    AckOptionsModal_component_1.AckOptionsModal,
    AckModal_component_1.AckModal,
    AckModalLayout_component_1.AckModalLayout,
    AckArray_directive_1.AckArray,
    AckFixedElementStage_component_1.AckFixedElementStage
];
