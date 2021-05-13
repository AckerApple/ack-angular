"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.declarations = exports.screenDirectives = void 0;
//COMPONENTS
var AckSections_component_1 = require("./components/AckSections.component");
var AckSectionTemplates_component_1 = require("./components/AckSectionTemplates.component");
var AckModal_component_1 = require("./components/AckModal.component");
var AckModalLayout_component_1 = require("./components/AckModalLayout.component");
var AckFixedElementStage_component_1 = require("./components/AckFixedElementStage.component");
var AckFixedElement_component_1 = require("./components/AckFixedElement.component");
var AckCloseIcon_component_1 = require("./components/AckCloseIcon.component");
var AckOptions_component_1 = require("./components/AckOptions.component");
var AckOptionsModal_component_1 = require("./components/AckOptionsModal.component");
var AbsoluteOverflowX_component_1 = require("./components/AbsoluteOverflowX.component");
var ErrorWell_component_1 = require("./components/ErrorWell.component");
var ReaderHeaderBody_component_1 = require("./components/ReaderHeaderBody.component");
var DebugArea_component_1 = require("./components/debug-area/DebugArea.component");
//DIRECTIVES
var AckArray_directive_1 = require("./directives/AckArray.directive");
var AckAggregate_directive_1 = require("./directives/AckAggregate.directive");
var ScrollPastFixed_component_1 = require("./components/ScrollPastFixed.component");
var ShakeOn_directive_1 = require("./directives/ShakeOn.directive");
var FxOn_directive_1 = require("./directives/FxOn.directive");
var FocusOn_directive_1 = require("./directives/FocusOn.directive");
var Init_directive_1 = require("./directives/Init.directive");
var ContentModel_directive_1 = require("./directives/ContentModel.directive");
var SelectOn_directive_1 = require("./directives/SelectOn.directive");
var InnerHtmlModel_directive_1 = require("./directives/InnerHtmlModel.directive");
var ReplaceModel_directive_1 = require("./directives/ReplaceModel.directive");
var ElementSizeModel_directive_1 = require("./directives/ElementSizeModel.directive");
var ScreenScrollHeightDiff_directive_1 = require("./directives/ScreenScrollHeightDiff.directive");
var ScreenScroll_directive_1 = require("./directives/ScreenScroll.directive");
var PxFromHtmlTop_directive_1 = require("./directives/PxFromHtmlTop.directive");
var ScreenScrollModelY_directive_1 = require("./directives/ScreenScrollModelY.directive");
var ScreenWidthModel_directive_1 = require("./directives/ScreenWidthModel.directive");
var ScreenHeightModel_directive_1 = require("./directives/ScreenHeightModel.directive");
var HtmlWidthModel_directive_1 = require("./directives/HtmlWidthModel.directive");
var HtmlHeightModel_directive_1 = require("./directives/HtmlHeightModel.directive");
var StatusOnlineModel_directive_1 = require("./directives/StatusOnlineModel.directive");
var StatusOfflineModel_directive_1 = require("./directives/StatusOfflineModel.directive");
var VarDirective_directive_1 = require("./directives/VarDirective.directive");
var declarations_short_1 = require("./declarations.short");
exports.screenDirectives = [
    ScreenScrollModelY_directive_1.ScreenScrollModelY,
    ScreenWidthModel_directive_1.ScreenWidthModel,
    ScreenHeightModel_directive_1.ScreenHeightModel,
    ScreenScroll_directive_1.ScreenScroll,
    ScrollPastFixed_component_1.ScrollPastFixed,
    ScreenScrollHeightDiff_directive_1.ScreenScrollHeightDiff,
    PxFromHtmlTop_directive_1.PxFromHtmlTop
];
exports.declarations = __spreadArrays([
    Init_directive_1.InitDirective,
    SelectOn_directive_1.SelectOn,
    FocusOn_directive_1.FocusOn,
    VarDirective_directive_1.VarDirective,
    ContentModel_directive_1.ContentModel,
    InnerHtmlModel_directive_1.InnerHtmlModel,
    ReplaceModel_directive_1.ReplaceModel,
    declarations_short_1.FormAlter,
    declarations_short_1.FormChanged,
    declarations_short_1.EnterKey,
    declarations_short_1.EscapeKey,
    declarations_short_1.PreventBackKey,
    declarations_short_1.PreventEnterKey
], exports.screenDirectives, [
    HtmlWidthModel_directive_1.HtmlWidthModel,
    HtmlHeightModel_directive_1.HtmlHeightModel,
    ShakeOn_directive_1.ShakeOn,
    FxOn_directive_1.FxOn,
    StatusOnlineModel_directive_1.StatusOnlineModel,
    StatusOfflineModel_directive_1.StatusOfflineModel,
    ElementSizeModel_directive_1.ElementSizeModel,
    ElementSizeModel_directive_1.ElementWidthModel,
    ElementSizeModel_directive_1.ElementHeightModel,
    declarations_short_1.InputHint
], DebugArea_component_1.declarations, [
    ErrorWell_component_1.ErrorWell,
    AbsoluteOverflowX_component_1.AbsoluteOverflowX,
    //sorta ack-angular-templates
    ReaderHeaderBody_component_1.ReaderHeaderBody,
    ReaderHeaderBody_component_1.ReaderHeader,
    ReaderHeaderBody_component_1.ReaderBody,
    //ack-angular-templates
    AckCloseIcon_component_1.AckCloseIcon,
    AckSections_component_1.AckSections,
    AckSectionTemplates_component_1.AckSectionTemplates,
    AckOptions_component_1.AckOptions,
    AckOptionsModal_component_1.AckOptionsModal,
    AckModal_component_1.AckModal,
    AckModalLayout_component_1.AckModalLayout,
    AckArray_directive_1.AckArray,
    AckAggregate_directive_1.AckAggregate,
    AckFixedElement_component_1.AckFixedElement,
    AckFixedElementStage_component_1.AckFixedElementStage
]);
// export default declarations
//# sourceMappingURL=declarations.js.map