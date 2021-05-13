import { Component, Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
//COMPONENTS
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
//DIRECTIVES
import { AckArray } from "./directives/AckArray.directive";
import { AckAggregate } from "./directives/AckAggregate.directive";
import { ScrollPastFixed } from "./components/ScrollPastFixed.component";
import { ShakeOn } from "./directives/ShakeOn.directive";
import { FxOn } from "./directives/FxOn.directive";
import { FocusOn } from "./directives/FocusOn.directive";
import { InitDirective } from "./directives/Init.directive";
import { ContentModel } from "./directives/ContentModel.directive";
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
export class EnterKey {
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
}
EnterKey.decorators = [
    { type: Directive, args: [{ selector: '[enterKey]' },] }
];
EnterKey.ctorParameters = () => [
    { type: ElementRef }
];
EnterKey.propDecorators = {
    enterKey: [{ type: Output }]
};
export class EscapeKey {
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
}
EscapeKey.decorators = [
    { type: Directive, args: [{ selector: '[escapeKey]' },] }
];
EscapeKey.ctorParameters = () => [
    { type: ElementRef }
];
EscapeKey.propDecorators = {
    escapeKey: [{ type: Output }]
};
/** Disallow keyboard access to the backspace key */
export class PreventBackKey {
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
}
PreventBackKey.decorators = [
    { type: Directive, args: [{ selector: '[preventBackKey]' },] }
];
PreventBackKey.ctorParameters = () => [
    { type: ElementRef }
];
PreventBackKey.propDecorators = {
    preventBackKey: [{ type: Output }]
};
/** Disallow keyboard access to the enter keys */
export class PreventEnterKey {
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
}
PreventEnterKey.decorators = [
    { type: Directive, args: [{ selector: '[preventEnterKey]' },] }
];
PreventEnterKey.ctorParameters = () => [
    { type: ElementRef }
];
PreventEnterKey.propDecorators = {
    preventEnterKey: [{ type: Output }]
};
export class InputHint {
    constructor() {
        this.hintStyle = { 'font-size': '75%', 'color': '#BBB' };
    }
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
/** adds form element onchange listener via addEventListener('change') that calls formChanged scope argument */
export class FormChanged {
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
}
FormChanged.decorators = [
    { type: Directive, args: [{
                selector: '[formChanged]' //Also try : (formAlter) directive that watches the form "input" event
            },] }
];
FormChanged.ctorParameters = () => [
    { type: ElementRef }
];
FormChanged.propDecorators = {
    formChanged: [{ type: Output }]
};
/** when ever change or input form event triggered, bindings are called */
export class FormAlter {
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
}
FormAlter.decorators = [
    { type: Directive, args: [{
                selector: '[formAlter]'
            },] }
];
FormAlter.ctorParameters = () => [
    { type: ElementRef }
];
FormAlter.propDecorators = {
    formAlter: [{ type: Output }]
};
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
    ...debugDecs,
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
];
export default declarations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlY2xhcmF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUE7QUFFdEIsWUFBWTtBQUNaLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQTtBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQTtBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUE7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFBO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFBO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUE7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFBO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQTtBQUM1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0NBQWtDLENBQUE7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQTtBQUNwRyxPQUFPLEVBQUUsWUFBWSxJQUFJLFNBQVMsRUFBRSxNQUFNLDZDQUE2QyxDQUFBO0FBRXZGLFlBQVk7QUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUE7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFD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WUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBQ1osU0FBUztJQUNULFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7SUFDZCxlQUFlO0lBRWYsR0FBRyxnQkFBZ0I7SUFFbkIsY0FBYztJQUNkLGVBQWU7SUFDZixPQUFPO0lBQ1AsSUFBSTtJQUNKLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUVULFlBQVk7SUFDWixHQUFHLFNBQVM7SUFDWixTQUFTO0lBQ1QsaUJBQWlCO0lBRWpCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7SUFFVix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGVBQWU7SUFDZixRQUFRO0lBQ1IsY0FBYztJQUNkLFFBQVE7SUFDUixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtDQUNyQixDQUFBO0FBRUQsZUFBZSxZQUFZLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuLy9DT01QT05FTlRTXG5pbXBvcnQgeyBBY2tTZWN0aW9ucyB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWNrU2VjdGlvbnMuY29tcG9uZW50XCJcbmltcG9ydCB7IEFja1NlY3Rpb25UZW1wbGF0ZXMgfSBmcm9tIFwiLi9jb21wb25lbnRzL0Fja1NlY3Rpb25UZW1wbGF0ZXMuY29tcG9uZW50XCJcbmltcG9ydCB7IEFja01vZGFsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9BY2tNb2RhbC5jb21wb25lbnRcIlxuaW1wb3J0IHsgQWNrTW9kYWxMYXlvdXQgfSBmcm9tIFwiLi9jb21wb25lbnRzL0Fja01vZGFsTGF5b3V0LmNvbXBvbmVudFwiXG5pbXBvcnQgeyBBY2tGaXhlZEVsZW1lbnRTdGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWNrRml4ZWRFbGVtZW50U3RhZ2UuY29tcG9uZW50XCJcbmltcG9ydCB7IEFja0ZpeGVkRWxlbWVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWNrRml4ZWRFbGVtZW50LmNvbXBvbmVudFwiXG5pbXBvcnQgeyBBY2tDbG9zZUljb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL0Fja0Nsb3NlSWNvbi5jb21wb25lbnRcIlxuaW1wb3J0IHsgQWNrT3B0aW9ucyB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWNrT3B0aW9ucy5jb21wb25lbnRcIlxuaW1wb3J0IHsgQWNrT3B0aW9uc01vZGFsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9BY2tPcHRpb25zTW9kYWwuY29tcG9uZW50XCJcbmltcG9ydCB7IEFic29sdXRlT3ZlcmZsb3dYIH0gZnJvbSBcIi4vY29tcG9uZW50cy9BYnNvbHV0ZU92ZXJmbG93WC5jb21wb25lbnRcIlxuaW1wb3J0IHsgRXJyb3JXZWxsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9FcnJvcldlbGwuY29tcG9uZW50XCJcbmltcG9ydCB7IFJlYWRlckhlYWRlckJvZHksIFJlYWRlckhlYWRlciwgUmVhZGVyQm9keSB9IGZyb20gXCIuL2NvbXBvbmVudHMvUmVhZGVySGVhZGVyQm9keS5jb21wb25lbnRcIlxuaW1wb3J0IHsgZGVjbGFyYXRpb25zIGFzIGRlYnVnRGVjcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGVidWctYXJlYS9EZWJ1Z0FyZWEuY29tcG9uZW50XCJcblxuLy9ESVJFQ1RJVkVTXG5pbXBvcnQgeyBBY2tBcnJheSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvQWNrQXJyYXkuZGlyZWN0aXZlXCJcbmltcG9ydCB7IEFja0FnZ3JlZ2F0ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvQWNrQWdncmVnYXRlLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBTY3JvbGxQYXN0Rml4ZWQgfSBmcm9tIFwiLi9jb21wb25lbnRzL1Njcm9sbFBhc3RGaXhlZC5jb21wb25lbnRcIlxuaW1wb3J0IHsgU2hha2VPbiB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU2hha2VPbi5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgRnhPbiB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvRnhPbi5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgRm9jdXNPbiB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvRm9jdXNPbi5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgSW5pdERpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvSW5pdC5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgQ29udGVudE1vZGVsIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9Db250ZW50TW9kZWwuZGlyZWN0aXZlXCJcbmltcG9ydCB7IFNlbGVjdE9uIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9TZWxlY3RPbi5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgSW5uZXJIdG1sTW9kZWwgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL0lubmVySHRtbE1vZGVsLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBSZXBsYWNlTW9kZWwgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL1JlcGxhY2VNb2RlbC5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgRWxlbWVudFNpemVNb2RlbCwgRWxlbWVudEhlaWdodE1vZGVsLCBFbGVtZW50V2lkdGhNb2RlbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvRWxlbWVudFNpemVNb2RlbC5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgU2NyZWVuU2Nyb2xsSGVpZ2h0RGlmZiB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU2NyZWVuU2Nyb2xsSGVpZ2h0RGlmZi5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgU2NyZWVuU2Nyb2xsIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9TY3JlZW5TY3JvbGwuZGlyZWN0aXZlXCJcbmltcG9ydCB7IFB4RnJvbUh0bWxUb3AgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL1B4RnJvbUh0bWxUb3AuZGlyZWN0aXZlXCJcbmltcG9ydCB7IFNjcmVlblNjcm9sbE1vZGVsWSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU2NyZWVuU2Nyb2xsTW9kZWxZLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBTY3JlZW5XaWR0aE1vZGVsIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9TY3JlZW5XaWR0aE1vZGVsLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBTY3JlZW5IZWlnaHRNb2RlbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU2NyZWVuSGVpZ2h0TW9kZWwuZGlyZWN0aXZlXCJcbmltcG9ydCB7IEh0bWxXaWR0aE1vZGVsIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9IdG1sV2lkdGhNb2RlbC5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgSHRtbEhlaWdodE1vZGVsIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9IdG1sSGVpZ2h0TW9kZWwuZGlyZWN0aXZlXCJcbmltcG9ydCB7IFN0YXR1c09ubGluZU1vZGVsIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9TdGF0dXNPbmxpbmVNb2RlbC5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgU3RhdHVzT2ZmbGluZU1vZGVsIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9TdGF0dXNPZmZsaW5lTW9kZWwuZGlyZWN0aXZlXCJcbmltcG9ydCB7IFZhckRpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvVmFyRGlyZWN0aXZlLmRpcmVjdGl2ZVwiXG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOidbZW50ZXJLZXldJ30pXG5leHBvcnQgY2xhc3MgRW50ZXJLZXl7XG4gIEBPdXRwdXQoKSBlbnRlcktleTpFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50OiBhbnkpPT57XG4gICAgICB2YXIgeWVzTm8gPSBbMTMsMTBdLmluZGV4T2YoZXZlbnQud2hpY2h8fGV2ZW50LmtleUNvZGUpPj0wXG4gICAgICBpZih5ZXNObyl7XG4gICAgICAgIHRoaXMuZW50ZXJLZXkuZW1pdChldmVudClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOidbZXNjYXBlS2V5XSd9KVxuZXhwb3J0IGNsYXNzIEVzY2FwZUtleXtcbiAgQE91dHB1dCgpIGVzY2FwZUtleTpFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7XG4gICAgZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IGFueSk9PntcbiAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaHx8ZXZlbnQua2V5Q29kZVxuICAgICAgaWYoY29kZT09Mjcpe1xuICAgICAgICB0aGlzLmVzY2FwZUtleS5lbWl0KGV2ZW50KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqIERpc2FsbG93IGtleWJvYXJkIGFjY2VzcyB0byB0aGUgYmFja3NwYWNlIGtleSAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6J1twcmV2ZW50QmFja0tleV0nfSlcbmV4cG9ydCBjbGFzcyBQcmV2ZW50QmFja0tleSB7XG4gIEBPdXRwdXQoKSBwcmV2ZW50QmFja0tleSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKXtcbiAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudDogYW55KT0+e1xuICAgICAgdmFyIHllc05vID0gWzhdLmluZGV4T2YoZXZlbnQud2hpY2h8fGV2ZW50LmtleUNvZGUpPDBcbiAgICAgIGlmKCF5ZXNObyl7XG4gICAgICAgIHRoaXMucHJldmVudEJhY2tLZXkuZW1pdChldmVudClcbiAgICAgICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpe1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHllc05vXG4gICAgfSlcbiAgfVxufVxuXG4vKiogRGlzYWxsb3cga2V5Ym9hcmQgYWNjZXNzIHRvIHRoZSBlbnRlciBrZXlzICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjonW3ByZXZlbnRFbnRlcktleV0nfSlcbmV4cG9ydCBjbGFzcyBQcmV2ZW50RW50ZXJLZXl7XG4gIEBPdXRwdXQoKSBwcmV2ZW50RW50ZXJLZXkgPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7XG4gICAgZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IGFueSk9PntcbiAgICAgIHZhciB5ZXNObyA9IFsxMywxMF0uaW5kZXhPZihldmVudC53aGljaHx8ZXZlbnQua2V5Q29kZSk8MFxuICAgICAgaWYoIXllc05vKXtcbiAgICAgICAgdGhpcy5wcmV2ZW50RW50ZXJLZXkuZW1pdChldmVudClcbiAgICAgICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpe1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHllc05vXG4gICAgfSlcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2lucHV0LWhpbnQnLFxuICB0ZW1wbGF0ZTonPGRpdiBzdHlsZT1cInBvc2l0aW9uOnJlbGF0aXZlO1wiIFtuZ1N0eWxlXT1cImhpbnRTdHlsZVwiPjxkaXYgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDt3aWR0aDoxMDAlXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PjwvZGl2Pidcbn0pIGV4cG9ydCBjbGFzcyBJbnB1dEhpbnQge1xuICBASW5wdXQoKSBoaW50U3R5bGUgPSB7J2ZvbnQtc2l6ZSc6Jzc1JScsJ2NvbG9yJzonI0JCQid9XG59XG5cblxuLyoqIGFkZHMgZm9ybSBlbGVtZW50IG9uY2hhbmdlIGxpc3RlbmVyIHZpYSBhZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnKSB0aGF0IGNhbGxzIGZvcm1DaGFuZ2VkIHNjb3BlIGFyZ3VtZW50ICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6J1tmb3JtQ2hhbmdlZF0nLy9BbHNvIHRyeSA6IChmb3JtQWx0ZXIpIGRpcmVjdGl2ZSB0aGF0IHdhdGNoZXMgdGhlIGZvcm0gXCJpbnB1dFwiIGV2ZW50XG59KSBleHBvcnQgY2xhc3MgRm9ybUNoYW5nZWR7XG4gIC8vc3RhdGljIHBhcmFtZXRlcnMgPSBbW0VsZW1lbnRSZWZdXVxuICBvbkNoYW5nZTogYW55XG5cbiAgQE91dHB1dCgpIGZvcm1DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7XG4gICAgdGhpcy5vbkNoYW5nZSA9IChldmVudDogRXZlbnQpPT57XG4gICAgICB0aGlzLmZvcm1DaGFuZ2VkLmVtaXQoZXZlbnQpXG4gICAgfVxuXG4gICAgZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsdGhpcy5vbkNoYW5nZSlcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJyx0aGlzLm9uQ2hhbmdlKVxuICB9XG59XG5cbi8qKiB3aGVuIGV2ZXIgY2hhbmdlIG9yIGlucHV0IGZvcm0gZXZlbnQgdHJpZ2dlcmVkLCBiaW5kaW5ncyBhcmUgY2FsbGVkICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6J1tmb3JtQWx0ZXJdJ1xufSkgZXhwb3J0IGNsYXNzIEZvcm1BbHRlcntcbiAgLy8tc3RhdGljIHBhcmFtZXRlcnMgPSBbW0VsZW1lbnRSZWZdXVxuICBvbkNoYW5nZTogKEV2ZW50OiBFdmVudCk9PnZvaWRcbiAgQE91dHB1dCgpIGZvcm1BbHRlcjpFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7XG4gICAgdGhpcy5vbkNoYW5nZSA9IChldmVudDpFdmVudCk9PntcbiAgICAgIHRoaXMuZm9ybUFsdGVyLmVtaXQoZXZlbnQpXG4gICAgfVxuXG4gICAgZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jyx0aGlzLm9uQ2hhbmdlKVxuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLHRoaXMub25DaGFuZ2UpXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsdGhpcy5vbkNoYW5nZSlcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsdGhpcy5vbkNoYW5nZSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2NyZWVuRGlyZWN0aXZlcyA9IFtcbiAgU2NyZWVuU2Nyb2xsTW9kZWxZLFxuICBTY3JlZW5XaWR0aE1vZGVsLFxuICBTY3JlZW5IZWlnaHRNb2RlbCxcbiAgU2NyZWVuU2Nyb2xsLFxuICBTY3JvbGxQYXN0Rml4ZWQsXG4gIFNjcmVlblNjcm9sbEhlaWdodERpZmYsXG4gIFB4RnJvbUh0bWxUb3Bcbl1cblxuZXhwb3J0IGNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcbiAgSW5pdERpcmVjdGl2ZSxcbiAgU2VsZWN0T24sXG4gIEZvY3VzT24sXG4gIFZhckRpcmVjdGl2ZSxcbiAgQ29udGVudE1vZGVsLFxuICBJbm5lckh0bWxNb2RlbCxcbiAgUmVwbGFjZU1vZGVsLFxuICBGb3JtQWx0ZXIsXG4gIEZvcm1DaGFuZ2VkLFxuICBFbnRlcktleSxcbiAgRXNjYXBlS2V5LFxuICBQcmV2ZW50QmFja0tleSxcbiAgUHJldmVudEVudGVyS2V5LFxuXG4gIC4uLnNjcmVlbkRpcmVjdGl2ZXMsXG5cbiAgSHRtbFdpZHRoTW9kZWwsXG4gIEh0bWxIZWlnaHRNb2RlbCxcbiAgU2hha2VPbixcbiAgRnhPbixcbiAgU3RhdHVzT25saW5lTW9kZWwsXG4gIFN0YXR1c09mZmxpbmVNb2RlbCxcbiAgRWxlbWVudFNpemVNb2RlbCxcbiAgRWxlbWVudFdpZHRoTW9kZWwsXG4gIEVsZW1lbnRIZWlnaHRNb2RlbCxcbiAgSW5wdXRIaW50LFxuXG4gIC8vY29tcG9uZW50c1xuICAuLi5kZWJ1Z0RlY3MsXG4gIEVycm9yV2VsbCxcbiAgQWJzb2x1dGVPdmVyZmxvd1gsXG5cbiAgLy9zb3J0YSBhY2stYW5ndWxhci10ZW1wbGF0ZXNcbiAgUmVhZGVySGVhZGVyQm9keSxcbiAgUmVhZGVySGVhZGVyLFxuICBSZWFkZXJCb2R5LFxuXG4gIC8vYWNrLWFuZ3VsYXItdGVtcGxhdGVzXG4gIEFja0Nsb3NlSWNvbixcbiAgQWNrU2VjdGlvbnMsXG4gIEFja1NlY3Rpb25UZW1wbGF0ZXMsXG4gIEFja09wdGlvbnMsXG4gIEFja09wdGlvbnNNb2RhbCxcbiAgQWNrTW9kYWwsXG4gIEFja01vZGFsTGF5b3V0LFxuICBBY2tBcnJheSxcbiAgQWNrQWdncmVnYXRlLFxuICBBY2tGaXhlZEVsZW1lbnQsXG4gIEFja0ZpeGVkRWxlbWVudFN0YWdlXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGRlY2xhcmF0aW9ucyJdfQ==