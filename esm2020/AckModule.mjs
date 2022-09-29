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
export { CommonModule } from "@angular/common";
const declarations = [...components, ...pipes];
export class AckModule {
    static forRoot() {
        return {
            ngModule: AckModule, providers,
        };
    }
}
AckModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AckModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: AckModule, declarations: [i1.InitDirective, i2.SelectOn, i3.FocusOn, i4.VarDirective, i5.ContentModel, i6.InnerHtmlModel, i7.ReplaceModel, i8.FormAlter, i8.FormChanged, i8.EnterKey, i8.EscapeKey, i8.PreventBackKey, i8.PreventEnterKey, i9.ScreenScrollModelY, i10.ScreenWidthModel, i11.ScreenHeightModel, i12.ScreenScroll, i13.ScrollPastFixed, i14.ScreenScrollHeightDiff, i15.PxFromHtmlTop, i16.HtmlWidthModel, i17.HtmlHeightModel, i18.ShakeOn, i19.FxOn, i20.StatusOnlineModel, i21.StatusOfflineModel, i22.ElementSizeModel, i22.ElementWidthModel, i22.ElementHeightModel, i8.InputHint, i23.DebugItem, i23.DebugArea, i24.ErrorWell, i25.AbsoluteOverflowX, i26.ReaderHeaderBody, i26.ReaderHeader, i26.ReaderBody, i27.AckCloseIcon, i28.AckSections, i29.AckSectionTemplates, i30.AckOptions, i31.AckOptionsModal, i32.AckModal, i33.AckModalLayout, i34.AckArray, i35.AckAggregate, i36.AckFixedElement, i37.AckFixedElementStage, i38.IndexTrack, i38.Stringify, i38.ForceArray, i38.ArrayOfObjects, i38.SafeHtml, i38.SafeUrl, i38.SafeStyle, i38.TextDownload, i38.MarkdownAnchor, i38.Capitalize, i38.CapitalizeWords, i38.Yesno, i38.YesNo, i39.KeysPipe, i38.TypeofPipe, i38.ConsolePipe, i38.ADate, i38.AMath, i38.AString, i38.ATime, i38.Ack, i38.Numbers, i38.toNumber, i38.NumberToPhone, i38.NumberSuffix, i38.Bit, i38.NumberWord, i38.EndNumberWord, i38.BooleanPipe, i38.Between, i38.ReplaceMaxLength], imports: [CommonModule], exports: [i1.InitDirective, i2.SelectOn, i3.FocusOn, i4.VarDirective, i5.ContentModel, i6.InnerHtmlModel, i7.ReplaceModel, i8.FormAlter, i8.FormChanged, i8.EnterKey, i8.EscapeKey, i8.PreventBackKey, i8.PreventEnterKey, i9.ScreenScrollModelY, i10.ScreenWidthModel, i11.ScreenHeightModel, i12.ScreenScroll, i13.ScrollPastFixed, i14.ScreenScrollHeightDiff, i15.PxFromHtmlTop, i16.HtmlWidthModel, i17.HtmlHeightModel, i18.ShakeOn, i19.FxOn, i20.StatusOnlineModel, i21.StatusOfflineModel, i22.ElementSizeModel, i22.ElementWidthModel, i22.ElementHeightModel, i8.InputHint, i23.DebugItem, i23.DebugArea, i24.ErrorWell, i25.AbsoluteOverflowX, i26.ReaderHeaderBody, i26.ReaderHeader, i26.ReaderBody, i27.AckCloseIcon, i28.AckSections, i29.AckSectionTemplates, i30.AckOptions, i31.AckOptionsModal, i32.AckModal, i33.AckModalLayout, i34.AckArray, i35.AckAggregate, i36.AckFixedElement, i37.AckFixedElementStage, i38.IndexTrack, i38.Stringify, i38.ForceArray, i38.ArrayOfObjects, i38.SafeHtml, i38.SafeUrl, i38.SafeStyle, i38.TextDownload, i38.MarkdownAnchor, i38.Capitalize, i38.CapitalizeWords, i38.Yesno, i38.YesNo, i39.KeysPipe, i38.TypeofPipe, i38.ConsolePipe, i38.ADate, i38.AMath, i38.AString, i38.ATime, i38.Ack, i38.Numbers, i38.toNumber, i38.NumberToPhone, i38.NumberSuffix, i38.Bit, i38.NumberWord, i38.EndNumberWord, i38.BooleanPipe, i38.Between, i38.ReplaceMaxLength] });
AckModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckModule, providers: providers, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations, providers,
                    exports: declarations
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0Fja01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUU5QyxnREFBZ0Q7QUFFaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUN2QyxPQUFPLEVBQUUsWUFBWSxJQUFJLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBQzNELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTC9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQU85QyxNQUFNLFlBQVksR0FBRyxDQUFDLEdBQUcsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUE7QUFRM0MsTUFBTSxPQUFPLFNBQVM7SUFDdkIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTO1NBQy9CLENBQUE7SUFDSCxDQUFDOztzR0FMYSxTQUFTO3VHQUFULFNBQVMsMjJDQUpyQixZQUFZO3VHQUlBLFNBQVMsYUFGVCxTQUFTLFlBRnJCLFlBQVk7MkZBSUEsU0FBUztrQkFOeEIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUM7d0JBQ04sWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsU0FBUztvQkFDdkIsT0FBTyxFQUFFLFlBQVk7aUJBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGVcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCJcbmV4cG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIlxuLy9pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCJcblxuaW1wb3J0IHsgcHJvdmlkZXJzIH0gZnJvbSBcIi4vcHJvdmlkZXJzXCJcbmltcG9ydCB7IGRlY2xhcmF0aW9ucyBhcyBjb21wb25lbnRzIH0gZnJvbSBcIi4vZGVjbGFyYXRpb25zXCJcbmltcG9ydCB7IHBpcGVzIH0gZnJvbSBcIi4vcGlwZXNcIlxuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbLi4uY29tcG9uZW50cywgLi4ucGlwZXNdXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6W1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnMsIHByb3ZpZGVycyxcbiAgZXhwb3J0czogZGVjbGFyYXRpb25zXG59KSBleHBvcnQgY2xhc3MgQWNrTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBY2tNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFja01vZHVsZSwgcHJvdmlkZXJzLFxuICAgIH1cbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBBY2tNb2R1bGUiXX0=