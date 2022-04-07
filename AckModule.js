import { __spreadArray } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//import { FormsModule }   from "@angular/forms"
import { providers } from "./providers";
import { declarations as components } from "./declarations";
import { pipes } from "./pipes";
import * as i0 from "@angular/core";
import * as i1 from "./directives/Init.directive";
import * as i2 from "./directives/SelectOn.directive";
import * as i3 from "./directives/FocusOn.directive";
import * as i4 from "./directives/VarDirective.directive";
import * as i5 from "./directives/ContentModel.directive";
import * as i6 from "./directives/InnerHtmlModel.directive";
import * as i7 from "./directives/ReplaceModel.directive";
import * as i8 from "./declarations.short";
import * as i9 from "./directives/ScreenScrollModelY.directive";
import * as i10 from "./directives/ScreenWidthModel.directive";
import * as i11 from "./directives/ScreenHeightModel.directive";
import * as i12 from "./directives/ScreenScroll.directive";
import * as i13 from "./components/ScrollPastFixed.component";
import * as i14 from "./directives/ScreenScrollHeightDiff.directive";
import * as i15 from "./directives/PxFromHtmlTop.directive";
import * as i16 from "./directives/HtmlWidthModel.directive";
import * as i17 from "./directives/HtmlHeightModel.directive";
import * as i18 from "./directives/ShakeOn.directive";
import * as i19 from "./directives/FxOn.directive";
import * as i20 from "./directives/StatusOnlineModel.directive";
import * as i21 from "./directives/StatusOfflineModel.directive";
import * as i22 from "./directives/ElementSizeModel.directive";
import * as i23 from "./components/debug-area/DebugArea.component";
import * as i24 from "./components/ErrorWell.component";
import * as i25 from "./components/AbsoluteOverflowX.component";
import * as i26 from "./components/ReaderHeaderBody.component";
import * as i27 from "./components/AckCloseIcon.component";
import * as i28 from "./components/AckSections.component";
import * as i29 from "./components/AckSectionTemplates.component";
import * as i30 from "./components/AckOptions.component";
import * as i31 from "./components/AckOptionsModal.component";
import * as i32 from "./components/AckModal.component";
import * as i33 from "./components/AckModalLayout.component";
import * as i34 from "./directives/AckArray.directive";
import * as i35 from "./directives/AckAggregate.directive";
import * as i36 from "./components/AckFixedElement.component";
import * as i37 from "./components/AckFixedElementStage.component";
import * as i38 from "./pipes";
import * as i39 from "./pipes/keys.pipe";
import * as i40 from "@angular/common";
export { CommonModule } from "@angular/common";
var declarations = __spreadArray(__spreadArray([], components), pipes);
var AckModule = /** @class */ (function () {
    function AckModule() {
    }
    AckModule.forRoot = function () {
        return {
            ngModule: AckModule,
            providers: providers,
        };
    };
    AckModule.ɵfac = function AckModule_Factory(t) { return new (t || AckModule)(); };
    AckModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AckModule });
    AckModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: providers, imports: [[
                CommonModule
            ]] });
    return AckModule;
}());
export { AckModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AckModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: declarations,
                providers: providers,
                exports: declarations
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AckModule, { declarations: [i1.InitDirective, i2.SelectOn, i3.FocusOn, i4.VarDirective, i5.ContentModel, i6.InnerHtmlModel, i7.ReplaceModel, i8.FormAlter, i8.FormChanged, i8.EnterKey, i8.EscapeKey, i8.PreventBackKey, i8.PreventEnterKey, i9.ScreenScrollModelY, i10.ScreenWidthModel, i11.ScreenHeightModel, i12.ScreenScroll, i13.ScrollPastFixed, i14.ScreenScrollHeightDiff, i15.PxFromHtmlTop, i16.HtmlWidthModel, i17.HtmlHeightModel, i18.ShakeOn, i19.FxOn, i20.StatusOnlineModel, i21.StatusOfflineModel, i22.ElementSizeModel, i22.ElementWidthModel, i22.ElementHeightModel, i8.InputHint, i23.DebugItem, i23.DebugArea, i24.ErrorWell, i25.AbsoluteOverflowX, i26.ReaderHeaderBody, i26.ReaderHeader, i26.ReaderBody, i27.AckCloseIcon, i28.AckSections, i29.AckSectionTemplates, i30.AckOptions, i31.AckOptionsModal, i32.AckModal, i33.AckModalLayout, i34.AckArray, i35.AckAggregate, i36.AckFixedElement, i37.AckFixedElementStage, i38.IndexTrack, i38.Stringify, i38.ForceArray, i38.ArrayOfObjects, i38.SafeHtml, i38.SafeUrl, i38.SafeStyle, i38.TextDownload, i38.MarkdownAnchor, i38.Capitalize, i38.CapitalizeWords, i38.Yesno, i38.YesNo, i39.KeysPipe, i38.TypeofPipe, i38.ConsolePipe, i38.ADate, i38.AMath, i38.AString, i38.ATime, i38.Ack, i38.Numbers, i38.toNumber, i38.NumberToPhone, i38.NumberSuffix, i38.Bit, i38.NumberWord, i38.EndNumberWord, i38.BooleanPipe, i38.Between, i38.ReplaceMaxLength], imports: [CommonModule], exports: [i1.InitDirective, i2.SelectOn, i3.FocusOn, i4.VarDirective, i5.ContentModel, i6.InnerHtmlModel, i7.ReplaceModel, i8.FormAlter, i8.FormChanged, i8.EnterKey, i8.EscapeKey, i8.PreventBackKey, i8.PreventEnterKey, i9.ScreenScrollModelY, i10.ScreenWidthModel, i11.ScreenHeightModel, i12.ScreenScroll, i13.ScrollPastFixed, i14.ScreenScrollHeightDiff, i15.PxFromHtmlTop, i16.HtmlWidthModel, i17.HtmlHeightModel, i18.ShakeOn, i19.FxOn, i20.StatusOnlineModel, i21.StatusOfflineModel, i22.ElementSizeModel, i22.ElementWidthModel, i22.ElementHeightModel, i8.InputHint, i23.DebugItem, i23.DebugArea, i24.ErrorWell, i25.AbsoluteOverflowX, i26.ReaderHeaderBody, i26.ReaderHeader, i26.ReaderBody, i27.AckCloseIcon, i28.AckSections, i29.AckSectionTemplates, i30.AckOptions, i31.AckOptionsModal, i32.AckModal, i33.AckModalLayout, i34.AckArray, i35.AckAggregate, i36.AckFixedElement, i37.AckFixedElementStage, i38.IndexTrack, i38.Stringify, i38.ForceArray, i38.ArrayOfObjects, i38.SafeHtml, i38.SafeUrl, i38.SafeStyle, i38.TextDownload, i38.MarkdownAnchor, i38.Capitalize, i38.CapitalizeWords, i38.Yesno, i38.YesNo, i39.KeysPipe, i38.TypeofPipe, i38.ConsolePipe, i38.ADate, i38.AMath, i38.AString, i38.ATime, i38.Ack, i38.Numbers, i38.toNumber, i38.NumberToPhone, i38.NumberSuffix, i38.Bit, i38.NumberWord, i38.EndNumberWord, i38.BooleanPipe, i38.Between, i38.ReplaceMaxLength] }); })();
i0.ɵɵsetComponentScope(i32.AckModal, [i33.AckModalLayout, i40.NgTemplateOutlet, i40.NgIf], []);
//# sourceMappingURL=AckModule.js.map