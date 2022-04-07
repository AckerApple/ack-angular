
//COMPONENTS
import { AckSections } from "./components/AckSections.component"
import { AckSectionTemplates } from "./components/AckSectionTemplates.component"
import { AckModal } from "./components/AckModal.component"
import { AckModalLayout } from "./components/AckModalLayout.component"
import { AckFixedElementStage } from "./components/AckFixedElementStage.component"
import { AckFixedElement } from "./components/AckFixedElement.component"
import { AckCloseIcon } from "./components/AckCloseIcon.component"
import { AckOptions } from "./components/AckOptions.component"
import { AckOptionsModal } from "./components/AckOptionsModal.component"
import { AbsoluteOverflowX } from "./components/AbsoluteOverflowX.component"
import { ErrorWell } from "./components/ErrorWell.component"
import { ReaderHeaderBody, ReaderHeader, ReaderBody } from "./components/ReaderHeaderBody.component"
import { debugDeclarations } from "./components/debug-area/DebugArea.component"

//DIRECTIVES
import { AckArray } from "./directives/AckArray.directive"
import { AckAggregate } from "./directives/AckAggregate.directive"
import { ScrollPastFixed } from "./components/ScrollPastFixed.component"
import { ShakeOn } from "./directives/ShakeOn.directive"
import { FxOn } from "./directives/FxOn.directive"
import { FocusOn } from "./directives/FocusOn.directive"
import { InitDirective } from "./directives/Init.directive"
import { ContentModel } from "./directives/ContentModel.directive"
import { SelectOn } from "./directives/SelectOn.directive"
import { InnerHtmlModel } from "./directives/InnerHtmlModel.directive"
import { ReplaceModel } from "./directives/ReplaceModel.directive"
import { ElementSizeModel, ElementHeightModel, ElementWidthModel } from "./directives/ElementSizeModel.directive"
import { ScreenScrollHeightDiff } from "./directives/ScreenScrollHeightDiff.directive"
import { ScreenScroll } from "./directives/ScreenScroll.directive"
import { PxFromHtmlTop } from "./directives/PxFromHtmlTop.directive"
import { ScreenScrollModelY } from "./directives/ScreenScrollModelY.directive"
import { ScreenWidthModel } from "./directives/ScreenWidthModel.directive"
import { ScreenHeightModel } from "./directives/ScreenHeightModel.directive"
import { HtmlWidthModel } from "./directives/HtmlWidthModel.directive"
import { HtmlHeightModel } from "./directives/HtmlHeightModel.directive"
import { StatusOnlineModel } from "./directives/StatusOnlineModel.directive"
import { StatusOfflineModel } from "./directives/StatusOfflineModel.directive"
import { VarDirective } from "./directives/VarDirective.directive"
import { EnterKey, EscapeKey, FormAlter, FormChanged, InputHint, PreventBackKey, PreventEnterKey } from "./declarations.short"

export const screenDirectives = [
  ScreenScrollModelY,
  ScreenWidthModel,
  ScreenHeightModel,
  ScreenScroll,
  ScrollPastFixed,
  ScreenScrollHeightDiff,
  PxFromHtmlTop
]

export const declarations = [
  InitDirective,
  SelectOn,
  FocusOn,
  VarDirective,
  ContentModel,
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

  //components
  ...debugDeclarations,
  ErrorWell,
  AbsoluteOverflowX,

  //sorta ack-angular-templates
  ReaderHeaderBody,
  ReaderHeader,
  ReaderBody,

  //ack-angular-templates
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
]

export * from "./declarations.short"
export { AckSections } from "./components/AckSections.component"
export { AckSectionTemplates } from "./components/AckSectionTemplates.component"
export { AckModal } from "./components/AckModal.component"
export { AckModalLayout } from "./components/AckModalLayout.component"
export { AckFixedElementStage } from "./components/AckFixedElementStage.component"
export { AckFixedElement } from "./components/AckFixedElement.component"
export { AckCloseIcon } from "./components/AckCloseIcon.component"
export { AckOptions } from "./components/AckOptions.component"
export { AckOptionsModal } from "./components/AckOptionsModal.component"
export { AbsoluteOverflowX } from "./components/AbsoluteOverflowX.component"
export { ErrorWell } from "./components/ErrorWell.component"
export { ReaderHeaderBody, ReaderHeader, ReaderBody } from "./components/ReaderHeaderBody.component"
export * from "./components/debug-area/DebugArea.component"

//DIRECTIVES
export { AckArray } from "./directives/AckArray.directive"
export { AckAggregate } from "./directives/AckAggregate.directive"
export { ScrollPastFixed } from "./components/ScrollPastFixed.component"
export { ShakeOn } from "./directives/ShakeOn.directive"
export { FxOn } from "./directives/FxOn.directive"
export { FocusOn } from "./directives/FocusOn.directive"
export { InitDirective } from "./directives/Init.directive"
export { ContentModel } from "./directives/ContentModel.directive"
export { SelectOn } from "./directives/SelectOn.directive"
export { InnerHtmlModel } from "./directives/InnerHtmlModel.directive"
export { ReplaceModel } from "./directives/ReplaceModel.directive"
export { ElementSizeModel, ElementHeightModel, ElementWidthModel } from "./directives/ElementSizeModel.directive"
export { ScreenScrollHeightDiff } from "./directives/ScreenScrollHeightDiff.directive"
export { ScreenScroll } from "./directives/ScreenScroll.directive"
export { PxFromHtmlTop } from "./directives/PxFromHtmlTop.directive"
export { ScreenScrollModelY } from "./directives/ScreenScrollModelY.directive"
export { ScreenWidthModel } from "./directives/ScreenWidthModel.directive"
export { ScreenHeightModel } from "./directives/ScreenHeightModel.directive"
export { HtmlWidthModel } from "./directives/HtmlWidthModel.directive"
export { HtmlHeightModel } from "./directives/HtmlHeightModel.directive"
export { StatusOnlineModel } from "./directives/StatusOnlineModel.directive"
export { StatusOfflineModel } from "./directives/StatusOfflineModel.directive"
export { VarDirective } from "./directives/VarDirective.directive"
export { EnterKey, EscapeKey, FormAlter, FormChanged, InputHint, PreventBackKey, PreventEnterKey } from "./declarations.short"
