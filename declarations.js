"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const AckSections_component_1 = require("./components/AckSections.component");
const AckSectionTemplates_component_1 = require("./components/AckSectionTemplates.component");
const AckModal_component_1 = require("./components/AckModal.component");
const AckModalLayout_component_1 = require("./components/AckModalLayout.component");
const AckCloseIcon_component_1 = require("./components/AckCloseIcon.component");
const AckOptions_component_1 = require("./components/AckOptions.component");
const AckOptionsModal_component_1 = require("./components/AckOptionsModal.component");
const AbsoluteOverflowX_component_1 = require("./components/AbsoluteOverflowX.component");
const ErrorWell_component_1 = require("./components/ErrorWell.component");
const AckFixedElementStage_component_1 = require("./components/AckFixedElementStage.component");
const ReaderHeaderBody_component_1 = require("./components/ReaderHeaderBody.component");
const AckArray_directive_1 = require("./directives/AckArray.directive");
const AckAggregate_directive_1 = require("./directives/AckAggregate.directive");
const ScrollPastFixed_component_1 = require("./components/ScrollPastFixed.component");
const ShakeOn_directive_1 = require("./directives/ShakeOn.directive");
const FxOn_directive_1 = require("./directives/FxOn.directive");
const FocusOn_directive_1 = require("./directives/FocusOn.directive");
const Init_directive_1 = require("./directives/Init.directive");
const SelectOn_directive_1 = require("./directives/SelectOn.directive");
const InnerHtmlModel_directive_1 = require("./directives/InnerHtmlModel.directive");
const ReplaceModel_directive_1 = require("./directives/ReplaceModel.directive");
const ElementSizeModel_directive_1 = require("./directives/ElementSizeModel.directive");
const ScreenScrollHeightDiff_directive_1 = require("./directives/ScreenScrollHeightDiff.directive");
const ScreenScroll_directive_1 = require("./directives/ScreenScroll.directive");
const PxFromHtmlTop_directive_1 = require("./directives/PxFromHtmlTop.directive");
const ScreenScrollModelY_directive_1 = require("./directives/ScreenScrollModelY.directive");
const ScreenWidthModel_directive_1 = require("./directives/ScreenWidthModel.directive");
const ScreenHeightModel_directive_1 = require("./directives/ScreenHeightModel.directive");
const HtmlWidthModel_directive_1 = require("./directives/HtmlWidthModel.directive");
const HtmlHeightModel_directive_1 = require("./directives/HtmlHeightModel.directive");
const StatusOnlineModel_directive_1 = require("./directives/StatusOnlineModel.directive");
const StatusOfflineModel_directive_1 = require("./directives/StatusOfflineModel.directive");
const VarDirective_directive_1 = require("./directives/VarDirective.directive");
let EnterKey = class EnterKey {
    constructor(element) {
        this.element = element;
        this.enterKey = new core_1.EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) >= 0;
            if (yesNo) {
                this.enterKey.emit(event);
            }
        });
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EnterKey.prototype, "enterKey", void 0);
EnterKey = __decorate([
    core_1.Directive({ selector: '[enterKey]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], EnterKey);
exports.EnterKey = EnterKey;
let EscapeKey = class EscapeKey {
    constructor(element) {
        this.element = element;
        this.escapeKey = new core_1.EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            const code = event.which || event.keyCode;
            if (code == 27) {
                this.escapeKey.emit(event);
            }
        });
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EscapeKey.prototype, "escapeKey", void 0);
EscapeKey = __decorate([
    core_1.Directive({ selector: '[escapeKey]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], EscapeKey);
exports.EscapeKey = EscapeKey;
let PreventBackKey = class PreventBackKey {
    constructor(element) {
        this.element = element;
        this.preventBackKey = new core_1.EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            var yesNo = [8].indexOf(event.which || event.keyCode) < 0;
            if (!yesNo) {
                this.preventBackKey.emit(event);
                if (event.preventDefault) {
                    event.preventDefault();
                }
            }
            return yesNo;
        });
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PreventBackKey.prototype, "preventBackKey", void 0);
PreventBackKey = __decorate([
    core_1.Directive({ selector: '[preventBackKey]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], PreventBackKey);
exports.PreventBackKey = PreventBackKey;
let PreventEnterKey = class PreventEnterKey {
    constructor(element) {
        this.element = element;
        this.preventEnterKey = new core_1.EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) < 0;
            if (!yesNo) {
                this.preventEnterKey.emit(event);
                if (event.preventDefault) {
                    event.preventDefault();
                }
            }
            return yesNo;
        });
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PreventEnterKey.prototype, "preventEnterKey", void 0);
PreventEnterKey = __decorate([
    core_1.Directive({ selector: '[preventEnterKey]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], PreventEnterKey);
exports.PreventEnterKey = PreventEnterKey;
let InputHint = class InputHint {
    constructor() {
        this.hintStyle = { 'font-size': '75%', 'color': '#BBB' };
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputHint.prototype, "hintStyle", void 0);
InputHint = __decorate([
    core_1.Component({
        selector: 'input-hint',
        template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
    })
], InputHint);
exports.InputHint = InputHint;
let FormChanged = class FormChanged {
    constructor(element) {
        this.element = element;
        this.formChanged = new core_1.EventEmitter();
        this.onChange = (event) => {
            this.formChanged.emit(event);
        };
        element.nativeElement.addEventListener('change', this.onChange);
    }
    ngOnDestroy() {
        this.element.nativeElement.removeEventListener('change', this.onChange);
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FormChanged.prototype, "formChanged", void 0);
FormChanged = __decorate([
    core_1.Directive({
        selector: '[formChanged]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FormChanged);
exports.FormChanged = FormChanged;
let FormAlter = class FormAlter {
    constructor(element) {
        this.element = element;
        this.formAlter = new core_1.EventEmitter();
        this.onChange = (event) => {
            this.formAlter.emit(event);
        };
        element.nativeElement.addEventListener('input', this.onChange);
        element.nativeElement.addEventListener('change', this.onChange);
    }
    ngOnDestroy() {
        this.element.nativeElement.removeEventListener('change', this.onChange);
        this.element.nativeElement.removeEventListener('input', this.onChange);
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FormAlter.prototype, "formAlter", void 0);
FormAlter = __decorate([
    core_1.Directive({
        selector: '[formAlter]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FormAlter);
exports.FormAlter = FormAlter;
exports.screenDirectives = [
    ScreenScrollModelY_directive_1.ScreenScrollModelY,
    ScreenWidthModel_directive_1.ScreenWidthModel,
    ScreenHeightModel_directive_1.ScreenHeightModel,
    ScreenScroll_directive_1.ScreenScroll,
    ScrollPastFixed_component_1.ScrollPastFixed,
    ScreenScrollHeightDiff_directive_1.ScreenScrollHeightDiff,
    PxFromHtmlTop_directive_1.PxFromHtmlTop
];
exports.declarations = [
    Init_directive_1.Init,
    SelectOn_directive_1.SelectOn,
    FocusOn_directive_1.FocusOn,
    VarDirective_directive_1.VarDirective,
    InnerHtmlModel_directive_1.InnerHtmlModel,
    ReplaceModel_directive_1.ReplaceModel,
    FormAlter,
    FormChanged,
    EnterKey,
    EscapeKey,
    PreventBackKey,
    PreventEnterKey,
    ...exports.screenDirectives,
    HtmlWidthModel_directive_1.HtmlWidthModel,
    HtmlHeightModel_directive_1.HtmlHeightModel,
    ShakeOn_directive_1.ShakeOn,
    FxOn_directive_1.FxOn,
    StatusOnlineModel_directive_1.StatusOnlineModel,
    StatusOfflineModel_directive_1.StatusOfflineModel,
    ElementSizeModel_directive_1.ElementSizeModel,
    ElementSizeModel_directive_1.ElementWidthModel,
    ElementSizeModel_directive_1.ElementHeightModel,
    InputHint,
    ErrorWell_component_1.ErrorWell,
    AbsoluteOverflowX_component_1.AbsoluteOverflowX,
    ReaderHeaderBody_component_1.ReaderHeaderBody,
    ReaderHeaderBody_component_1.ReaderHeader,
    ReaderHeaderBody_component_1.ReaderBody,
    AckCloseIcon_component_1.AckCloseIcon,
    AckSections_component_1.AckSections,
    AckSectionTemplates_component_1.AckSectionTemplates,
    AckOptions_component_1.AckOptions,
    AckOptionsModal_component_1.AckOptionsModal,
    AckModal_component_1.AckModal,
    AckModalLayout_component_1.AckModalLayout,
    AckArray_directive_1.AckArray,
    AckAggregate_directive_1.AckAggregate,
    AckFixedElementStage_component_1.AckFixedElementStage
];
