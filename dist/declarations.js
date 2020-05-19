import { __decorate, __metadata } from "tslib";
import { Component, Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import { AckSections } from "./components/AckSections.component";
import { AckSectionTemplates } from "./components/AckSectionTemplates.component";
import { AckModal } from "./components/AckModal.component";
import { AckModalLayout } from "./components/AckModalLayout.component";
import { AckFixedElementStage } from "./components/AckFixedElementStage.component";
import { AckFixedElement } from "./components/AckFixedElement.component";
import { AckCloseIcon } from "./components/AckCloseIcon.component";
import { AckOptions } from "./components/AckOptions.component";
import { AckOptionsModal } from "./components/AckOptionsModal.component";
import { AbsoluteOverflowX } from "./components/AbsoluteOverflowX.component";
import { ErrorWell } from "./components/ErrorWell.component";
import { ReaderHeaderBody, ReaderHeader, ReaderBody } from "./components/ReaderHeaderBody.component";
import { declarations as debugDecs } from "./components/debug-area/DebugArea.component";
import { AckArray } from "./directives/AckArray.directive";
import { AckAggregate } from "./directives/AckAggregate.directive";
import { ScrollPastFixed } from "./components/ScrollPastFixed.component";
import { ShakeOn } from "./directives/ShakeOn.directive";
import { FxOn } from "./directives/FxOn.directive";
import { FocusOn } from "./directives/FocusOn.directive";
import { Init } from "./directives/Init.directive";
import { SelectOn } from "./directives/SelectOn.directive";
import { InnerHtmlModel } from "./directives/InnerHtmlModel.directive";
import { ReplaceModel } from "./directives/ReplaceModel.directive";
import { ElementSizeModel, ElementHeightModel, ElementWidthModel } from "./directives/ElementSizeModel.directive";
import { ScreenScrollHeightDiff } from "./directives/ScreenScrollHeightDiff.directive";
import { ScreenScroll } from "./directives/ScreenScroll.directive";
import { PxFromHtmlTop } from "./directives/PxFromHtmlTop.directive";
import { ScreenScrollModelY } from "./directives/ScreenScrollModelY.directive";
import { ScreenWidthModel } from "./directives/ScreenWidthModel.directive";
import { ScreenHeightModel } from "./directives/ScreenHeightModel.directive";
import { HtmlWidthModel } from "./directives/HtmlWidthModel.directive";
import { HtmlHeightModel } from "./directives/HtmlHeightModel.directive";
import { StatusOnlineModel } from "./directives/StatusOnlineModel.directive";
import { StatusOfflineModel } from "./directives/StatusOfflineModel.directive";
import { VarDirective } from "./directives/VarDirective.directive";
let EnterKey = class EnterKey {
    constructor(element) {
        this.element = element;
        this.enterKey = new EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) >= 0;
            if (yesNo) {
                this.enterKey.emit(event);
            }
        });
    }
};
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], EnterKey.prototype, "enterKey", void 0);
EnterKey = __decorate([
    Directive({ selector: '[enterKey]' }),
    __metadata("design:paramtypes", [ElementRef])
], EnterKey);
export { EnterKey };
let EscapeKey = class EscapeKey {
    constructor(element) {
        this.element = element;
        this.escapeKey = new EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            const code = event.which || event.keyCode;
            if (code == 27) {
                this.escapeKey.emit(event);
            }
        });
    }
};
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], EscapeKey.prototype, "escapeKey", void 0);
EscapeKey = __decorate([
    Directive({ selector: '[escapeKey]' }),
    __metadata("design:paramtypes", [ElementRef])
], EscapeKey);
export { EscapeKey };
let PreventBackKey = class PreventBackKey {
    constructor(element) {
        this.element = element;
        this.preventBackKey = new EventEmitter();
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
    Output(),
    __metadata("design:type", Object)
], PreventBackKey.prototype, "preventBackKey", void 0);
PreventBackKey = __decorate([
    Directive({ selector: '[preventBackKey]' }),
    __metadata("design:paramtypes", [ElementRef])
], PreventBackKey);
export { PreventBackKey };
let PreventEnterKey = class PreventEnterKey {
    constructor(element) {
        this.element = element;
        this.preventEnterKey = new EventEmitter();
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
    Output(),
    __metadata("design:type", Object)
], PreventEnterKey.prototype, "preventEnterKey", void 0);
PreventEnterKey = __decorate([
    Directive({ selector: '[preventEnterKey]' }),
    __metadata("design:paramtypes", [ElementRef])
], PreventEnterKey);
export { PreventEnterKey };
let InputHint = class InputHint {
    constructor() {
        this.hintStyle = { 'font-size': '75%', 'color': '#BBB' };
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputHint.prototype, "hintStyle", void 0);
InputHint = __decorate([
    Component({
        selector: 'input-hint',
        template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
    })
], InputHint);
export { InputHint };
let FormChanged = class FormChanged {
    constructor(element) {
        this.element = element;
        this.formChanged = new EventEmitter();
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
    Output(),
    __metadata("design:type", Object)
], FormChanged.prototype, "formChanged", void 0);
FormChanged = __decorate([
    Directive({
        selector: '[formChanged]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], FormChanged);
export { FormChanged };
let FormAlter = class FormAlter {
    constructor(element) {
        this.element = element;
        this.formAlter = new EventEmitter();
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
    Output(),
    __metadata("design:type", EventEmitter)
], FormAlter.prototype, "formAlter", void 0);
FormAlter = __decorate([
    Directive({
        selector: '[formAlter]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], FormAlter);
export { FormAlter };
export const screenDirectives = [
    ScreenScrollModelY,
    ScreenWidthModel,
    ScreenHeightModel,
    ScreenScroll,
    ScrollPastFixed,
    ScreenScrollHeightDiff,
    PxFromHtmlTop
];
export const declarations = [
    Init,
    SelectOn,
    FocusOn,
    VarDirective,
    InnerHtmlModel,
    ReplaceModel,
    FormAlter,
    FormChanged,
    EnterKey,
    EscapeKey,
    PreventBackKey,
    PreventEnterKey,
    ...screenDirectives,
    HtmlWidthModel,
    HtmlHeightModel,
    ShakeOn,
    FxOn,
    StatusOnlineModel,
    StatusOfflineModel,
    ElementSizeModel,
    ElementWidthModel,
    ElementHeightModel,
    InputHint,
    ...debugDecs,
    ErrorWell,
    AbsoluteOverflowX,
    ReaderHeaderBody,
    ReaderHeader,
    ReaderBody,
    AckCloseIcon,
    AckSections,
    AckSectionTemplates,
    AckOptions,
    AckOptionsModal,
    AckModal,
    AckModalLayout,
    AckArray,
    AckAggregate,
    AckFixedElement,
    AckFixedElementStage
];
