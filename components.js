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
var AckModal_component_1 = require("./components/AckModal.component");
var AckCloseIcon_component_1 = require("./components/AckCloseIcon.component");
var AckArray_directive_1 = require("./AckArray.directive");
var AckOptions_component_1 = require("./components/AckOptions.component");
var AckOptionsModal_component_1 = require("./components/AckOptionsModal.component");
var AbsoluteOverflowX_component_1 = require("./components/AbsoluteOverflowX.component");
var AbsoluteOverflowX_component_2 = require("./components/AbsoluteOverflowX.component");
exports.AbsoluteOverflowX = AbsoluteOverflowX_component_2.AbsoluteOverflowX;
var ShakeOn_directive_1 = require("./ShakeOn.directive");
var ShakeOn_directive_2 = require("./ShakeOn.directive");
exports.ShakeOn = ShakeOn_directive_2.ShakeOn;
var ErrorWell_component_1 = require("./components/ErrorWell.component");
var ErrorWell_component_2 = require("./components/ErrorWell.component");
exports.ErrorWell = ErrorWell_component_2.ErrorWell;
var ReaderHeaderBody_component_1 = require("./components/ReaderHeaderBody.component");
var FocusOn = (function () {
    function FocusOn(element) {
        this.element = element;
        this.focusOnDelay = 0;
        this.focusThen = new core_1.EventEmitter();
    }
    FocusOn.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.focusOn && changes.focusOn.currentValue) {
            setTimeout(function () {
                _this.element.nativeElement.focus();
                _this.focusThen.emit();
            }, this.focusOnDelay);
        }
    };
    FocusOn.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[focusOn]'
                },] },
    ];
    FocusOn.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    FocusOn.propDecorators = {
        'focusOn': [{ type: core_1.Input },],
        'focusOnDelay': [{ type: core_1.Input },],
        'focusThen': [{ type: core_1.Output },],
    };
    return FocusOn;
}());
exports.FocusOn = FocusOn;
var SelectOn = (function () {
    function SelectOn(element) {
        this.element = element;
        this.selectOnDelay = 0;
        this.selectThen = new core_1.EventEmitter();
    }
    SelectOn.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.selectOn && changes.selectOn.currentValue) {
            setTimeout(function () {
                _this.element.nativeElement.select();
                _this.selectThen.emit();
            }, this.selectOnDelay);
        }
    };
    SelectOn.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[selectOn]'
                },] },
    ];
    SelectOn.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    SelectOn.propDecorators = {
        'selectOn': [{ type: core_1.Input },],
        'selectOnDelay': [{ type: core_1.Input },],
        'selectThen': [{ type: core_1.Output },],
    };
    return SelectOn;
}());
exports.SelectOn = SelectOn;
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
        'var': [{ type: core_1.Input },],
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
        'enterKey': [{ type: core_1.Output },],
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
        'escapeKey': [{ type: core_1.Output },],
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
        'preventBackKey': [{ type: core_1.Output },],
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
        'preventEnterKey': [{ type: core_1.Output },],
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
        'hintStyle': [{ type: core_1.Input },],
    };
    return InputHint;
}());
exports.InputHint = InputHint;
var StatusOnlineModel = (function () {
    function StatusOnlineModel() {
        var _this = this;
        this.statusOnlineModelChange = new core_1.EventEmitter();
        this.onChange = function () {
            this.statusOnlineModel = navigator.onLine;
            this.statusOnlineModelChange.emit(this.statusOnlineModel);
        }.bind(this);
        window.addEventListener("online", this.onChange);
        window.addEventListener("offline", this.onChange);
        setTimeout(function () { return _this.onChange(); }, 0);
    }
    StatusOnlineModel.prototype.ngOnDestroy = function () {
        window.removeEventListener("online", this.onChange);
        window.removeEventListener("offline", this.onChange);
    };
    StatusOnlineModel.decorators = [
        { type: core_1.Directive, args: [{ selector: '[statusOnlineModel]' },] },
    ];
    StatusOnlineModel.ctorParameters = function () { return []; };
    StatusOnlineModel.propDecorators = {
        'statusOnlineModel': [{ type: core_1.Input },],
        'statusOnlineModelChange': [{ type: core_1.Output },],
    };
    return StatusOnlineModel;
}());
exports.StatusOnlineModel = StatusOnlineModel;
var StatusOfflineModel = (function () {
    function StatusOfflineModel() {
        var _this = this;
        this.statusOfflineModelChange = new core_1.EventEmitter();
        this.onChange = function () {
            this.statusOfflineModel = !navigator.onLine;
            this.statusOfflineModelChange.emit(this.statusOfflineModel);
        }.bind(this);
        window.addEventListener("offline", this.onChange);
        window.addEventListener("online", this.onChange);
        setTimeout(function () { return _this.onChange(); }, 0);
    }
    StatusOfflineModel.prototype.ngOnDestroy = function () {
        window.removeEventListener("offline", this.onChange);
        window.removeEventListener("online", this.onChange);
    };
    StatusOfflineModel.decorators = [
        { type: core_1.Directive, args: [{ selector: '[statusOfflineModel]' },] },
    ];
    StatusOfflineModel.ctorParameters = function () { return []; };
    StatusOfflineModel.propDecorators = {
        'statusOfflineModel': [{ type: core_1.Input },],
        'statusOfflineModelChange': [{ type: core_1.Output },],
    };
    return StatusOfflineModel;
}());
exports.StatusOfflineModel = StatusOfflineModel;
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
        'formChanged': [{ type: core_1.Output },],
    };
    return FormChanged;
}());
exports.FormChanged = FormChanged;
var OnFormAlter = (function () {
    function OnFormAlter(element) {
        this.element = element;
        this.onFormAlter = new core_1.EventEmitter();
        this.onChange = function (event) {
            this.onFormAlter.emit(event);
        }.bind(this);
        element.nativeElement.addEventListener('input', this.onChange);
        element.nativeElement.addEventListener('change', this.onChange);
    }
    OnFormAlter.prototype.ngOnDestroy = function () {
        this.element.nativeElement.removeEventListener('change', this.onChange);
        this.element.nativeElement.removeEventListener('input', this.onChange);
    };
    OnFormAlter.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[onFormAlter]'
                },] },
    ];
    OnFormAlter.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    OnFormAlter.propDecorators = {
        'onFormAlter': [{ type: core_1.Output },],
    };
    return OnFormAlter;
}());
exports.OnFormAlter = OnFormAlter;
var InnerHtmlModel = (function () {
    function InnerHtmlModel(element) {
        var _this = this;
        this.element = element;
        this.innerHtmlModelChange = new core_1.EventEmitter();
        this.observer = new MutationObserver(function () { return _this.setModel(); });
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
    }
    InnerHtmlModel.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () { return _this.setModel(); }, 0);
    };
    InnerHtmlModel.prototype.setModel = function () {
        this.innerHtmlModel = this.element.nativeElement.innerHTML;
        this.innerHtmlModelChange.emit(this.innerHtmlModel);
    };
    InnerHtmlModel.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
    };
    InnerHtmlModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[innerHtmlModel]'
                },] },
    ];
    InnerHtmlModel.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    InnerHtmlModel.propDecorators = {
        'innerHtmlModel': [{ type: core_1.Input },],
        'innerHtmlModelChange': [{ type: core_1.Output },],
    };
    return InnerHtmlModel;
}());
exports.InnerHtmlModel = InnerHtmlModel;
var ElementSizeModel = (function () {
    function ElementSizeModel(element) {
        var _this = this;
        this.element = element;
        this.elementSizeModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            this.setModel();
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.setModel(); }, 0);
        this.observer = new MutationObserver(function () {
            _this.setModel();
        });
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
    }
    ElementSizeModel.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.setModel(); }, 800);
    };
    ElementSizeModel.prototype.setModel = function () {
        var _this = this;
        this.elementSizeModel = this.elementSizeModel || {};
        this.inChange = true;
        this.elementSizeModel.width = this.element.nativeElement.offsetWidth;
        this.elementSizeModel.height = this.element.nativeElement.offsetHeight;
        this.elementSizeModelChange.emit(this.elementSizeModel);
        setTimeout(function () { return _this.inChange = false; }, 0);
    };
    ElementSizeModel.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.inChange) {
                _this.setModel();
            }
        }, 0);
    };
    ElementSizeModel.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
        window.removeEventListener('resize', this.onResize);
    };
    ElementSizeModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[elementSizeModel]'
                },] },
    ];
    ElementSizeModel.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    ElementSizeModel.propDecorators = {
        'elementSizeModel': [{ type: core_1.Input },],
        'elementSizeModelChange': [{ type: core_1.Output },],
    };
    return ElementSizeModel;
}());
exports.ElementSizeModel = ElementSizeModel;
var ElementHeightModel = (function (_super) {
    __extends(ElementHeightModel, _super);
    function ElementHeightModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elementHeightModelChange = new core_1.EventEmitter();
        return _this;
    }
    ElementHeightModel.prototype.setModel = function () {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        this.elementHeightModelChange.emit(this.elementHeightModel);
    };
    ElementHeightModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[elementHeightModel]'
                },] },
    ];
    ElementHeightModel.ctorParameters = function () { return []; };
    ElementHeightModel.propDecorators = {
        'elementHeightModel': [{ type: core_1.Input },],
        'elementHeightModelChange': [{ type: core_1.Output },],
    };
    return ElementHeightModel;
}(ElementSizeModel));
exports.ElementHeightModel = ElementHeightModel;
var ElementWidthModel = (function (_super) {
    __extends(ElementWidthModel, _super);
    function ElementWidthModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elementWidthModelChange = new core_1.EventEmitter();
        return _this;
    }
    ElementWidthModel.prototype.setModel = function () {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    };
    ElementWidthModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[elementWidthModel]'
                },] },
    ];
    ElementWidthModel.ctorParameters = function () { return []; };
    ElementWidthModel.propDecorators = {
        'elementWidthModel': [{ type: core_1.Input },],
        'elementWidthModelChange': [{ type: core_1.Output },],
    };
    return ElementWidthModel;
}(ElementSizeModel));
exports.ElementWidthModel = ElementWidthModel;
var ScreenScrollHeightDiff = (function () {
    function ScreenScrollHeightDiff() {
        this.screenScrollHeightDiffChange = new core_1.EventEmitter();
        this.on = function () {
            this.apply();
        }.bind(this);
        window.addEventListener("scroll", this.on);
        window.addEventListener("resize", this.on);
    }
    ScreenScrollHeightDiff.prototype.apply = function () {
        this.screenScrollHeightDiff = document.body.scrollHeight - window.innerHeight;
        if (this.screenScrollHeightDiff < 0)
            this.screenScrollHeightDiff = 0;
        this.screenScrollHeightDiffChange.emit(this.screenScrollHeightDiff);
    };
    ScreenScrollHeightDiff.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.on);
        window.removeEventListener("resize", this.on);
    };
    ScreenScrollHeightDiff.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenScrollHeightDiff]'
                },] },
    ];
    ScreenScrollHeightDiff.ctorParameters = function () { return []; };
    ScreenScrollHeightDiff.propDecorators = {
        'screenScrollHeightDiff': [{ type: core_1.Input },],
        'screenScrollHeightDiffChange': [{ type: core_1.Output },],
    };
    return ScreenScrollHeightDiff;
}());
exports.ScreenScrollHeightDiff = ScreenScrollHeightDiff;
var ScreenScroll = (function () {
    function ScreenScroll() {
        this.screenScroll = new core_1.EventEmitter();
        this.onScroll = function () {
            this.screenScroll.emit({ x: window['pageXOffset'], y: window['pageYOffset'] });
        }.bind(this);
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ScreenScroll.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onScroll(); }, 0);
    };
    ScreenScroll.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.onScroll);
    };
    ScreenScroll.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenScroll]'
                },] },
    ];
    ScreenScroll.ctorParameters = function () { return []; };
    ScreenScroll.propDecorators = {
        'screenScroll': [{ type: core_1.Output },],
    };
    return ScreenScroll;
}());
exports.ScreenScroll = ScreenScroll;
var ScreenScrollModelY = (function () {
    function ScreenScrollModelY() {
        this.screenScrollModelYChange = new core_1.EventEmitter();
        this.onScroll = function () {
            this.screenScrollModelY = window['pageYOffset'];
            this.screenScrollModelYChange.emit(this.screenScrollModelY);
        }.bind(this);
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ScreenScrollModelY.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onScroll(); }, 0);
    };
    ScreenScrollModelY.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.onScroll);
    };
    ScreenScrollModelY.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenScrollModelY]'
                },] },
    ];
    ScreenScrollModelY.ctorParameters = function () { return []; };
    ScreenScrollModelY.propDecorators = {
        'screenScrollModelY': [{ type: core_1.Input },],
        'screenScrollModelYChange': [{ type: core_1.Output },],
    };
    return ScreenScrollModelY;
}());
exports.ScreenScrollModelY = ScreenScrollModelY;
var ScreenWidthModel = (function () {
    function ScreenWidthModel() {
        var _this = this;
        this.screenWidthModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            if (this.screenWidthModel !== window.innerWidth) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.setModel(); }, 0);
    }
    ScreenWidthModel.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onResize(); }, 0);
    };
    ScreenWidthModel.prototype.setModel = function () {
        this.screenWidthModel = window.innerWidth;
        this.screenWidthModelChange.emit(this.screenWidthModel);
    };
    ScreenWidthModel.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResize);
    };
    ScreenWidthModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenWidthModel]'
                },] },
    ];
    ScreenWidthModel.ctorParameters = function () { return []; };
    ScreenWidthModel.propDecorators = {
        'screenWidthModel': [{ type: core_1.Input },],
        'screenWidthModelChange': [{ type: core_1.Output },],
    };
    return ScreenWidthModel;
}());
exports.ScreenWidthModel = ScreenWidthModel;
var ScreenHeightModel = (function () {
    function ScreenHeightModel() {
        var _this = this;
        this.screenHeightModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            if (this.screenHeightModel !== window.innerHeight) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.onResize(); }, 0);
    }
    ScreenHeightModel.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onResize(); }, 0);
    };
    ScreenHeightModel.prototype.setModel = function () {
        this.screenHeightModel = window.innerHeight;
        this.screenHeightModelChange.emit(this.screenHeightModel);
    };
    ScreenHeightModel.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResize);
    };
    ScreenHeightModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenHeightModel]'
                },] },
    ];
    ScreenHeightModel.ctorParameters = function () { return []; };
    ScreenHeightModel.propDecorators = {
        'screenHeightModel': [{ type: core_1.Input },],
        'screenHeightModelChange': [{ type: core_1.Output },],
    };
    return ScreenHeightModel;
}());
exports.ScreenHeightModel = ScreenHeightModel;
var HtmlWidthModel = (function () {
    function HtmlWidthModel() {
        var _this = this;
        this.htmlWidthModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            if (this.htmlWidthModel !== window.document.documentElement.clientWidth) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.setModel(); }, 0);
    }
    HtmlWidthModel.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onResize(); }, 0);
    };
    HtmlWidthModel.prototype.setModel = function () {
        this.htmlWidthModel = window.document.documentElement.clientWidth;
        this.htmlWidthModelChange.emit(this.htmlWidthModel);
    };
    HtmlWidthModel.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResize);
    };
    HtmlWidthModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[htmlWidthModel]'
                },] },
    ];
    HtmlWidthModel.ctorParameters = function () { return []; };
    HtmlWidthModel.propDecorators = {
        'htmlWidthModel': [{ type: core_1.Input },],
        'htmlWidthModelChange': [{ type: core_1.Output },],
    };
    return HtmlWidthModel;
}());
exports.HtmlWidthModel = HtmlWidthModel;
var HtmlHeightModel = (function () {
    function HtmlHeightModel() {
        var _this = this;
        this.htmlHeightModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            if (this.htmlHeightModel !== window.document.documentElement.clientHeight) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.onResize(); }, 0);
    }
    HtmlHeightModel.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onResize(); }, 0);
    };
    HtmlHeightModel.prototype.setModel = function () {
        this.htmlHeightModel = window.document.documentElement.clientHeight;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    };
    HtmlHeightModel.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResize);
    };
    HtmlHeightModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[htmlHeightModel]'
                },] },
    ];
    HtmlHeightModel.ctorParameters = function () { return []; };
    HtmlHeightModel.propDecorators = {
        'htmlHeightModel': [{ type: core_1.Input },],
        'htmlHeightModelChange': [{ type: core_1.Output },],
    };
    return HtmlHeightModel;
}());
exports.HtmlHeightModel = HtmlHeightModel;
exports.declarations = [
    SelectOn,
    FocusOn,
    VarDirective,
    InnerHtmlModel,
    OnFormAlter,
    FormChanged,
    EnterKey,
    EscapeKey,
    PreventBackKey,
    PreventEnterKey,
    ScreenScrollModelY,
    ScreenWidthModel,
    ScreenHeightModel,
    ScreenScroll,
    ScreenScrollHeightDiff,
    HtmlWidthModel,
    HtmlHeightModel,
    ShakeOn_directive_1.ShakeOn,
    StatusOnlineModel,
    StatusOfflineModel,
    ElementSizeModel,
    ElementWidthModel,
    ElementHeightModel,
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
    AckArray_directive_1.AckArray
];
