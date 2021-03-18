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
import { Init } from "./directives/Init.directive";
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
    Init,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlY2xhcmF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUE7QUFFdEIsWUFBWTtBQUNaLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQTtBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQTtBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUE7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFBO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFBO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUE7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFBO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQTtBQUM1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0NBQWtDLENBQUE7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQTtBQUNwRyxPQUFPLEVBQUUsWUFBWSxJQUFJLFNBQVMsRUFBRSxNQUFNLDZDQUE2QyxDQUFBO0FBRXZGLFlBQVk7QUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUE7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFD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WUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBQ1osU0FBUztJQUNULFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7SUFDZCxlQUFlO0lBRWYsR0FBRyxnQkFBZ0I7SUFFbkIsY0FBYztJQUNkLGVBQWU7SUFDZixPQUFPO0lBQ1AsSUFBSTtJQUNKLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUVULFlBQVk7SUFDWixHQUFHLFNBQVM7SUFDWixTQUFTO0lBQ1QsaUJBQWlCO0lBRWpCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7SUFFVix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGVBQWU7SUFDZixRQUFRO0lBQ1IsY0FBYztJQUNkLFFBQVE7SUFDUixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtDQUNyQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbi8vQ09NUE9ORU5UU1xuaW1wb3J0IHsgQWNrU2VjdGlvbnMgfSBmcm9tIFwiLi9jb21wb25lbnRzL0Fja1NlY3Rpb25zLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBBY2tTZWN0aW9uVGVtcGxhdGVzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9BY2tTZWN0aW9uVGVtcGxhdGVzLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBBY2tNb2RhbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWNrTW9kYWwuY29tcG9uZW50XCJcbmltcG9ydCB7IEFja01vZGFsTGF5b3V0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9BY2tNb2RhbExheW91dC5jb21wb25lbnRcIlxuaW1wb3J0IHsgQWNrRml4ZWRFbGVtZW50U3RhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL0Fja0ZpeGVkRWxlbWVudFN0YWdlLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBBY2tGaXhlZEVsZW1lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL0Fja0ZpeGVkRWxlbWVudC5jb21wb25lbnRcIlxuaW1wb3J0IHsgQWNrQ2xvc2VJY29uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9BY2tDbG9zZUljb24uY29tcG9uZW50XCJcbmltcG9ydCB7IEFja09wdGlvbnMgfSBmcm9tIFwiLi9jb21wb25lbnRzL0Fja09wdGlvbnMuY29tcG9uZW50XCJcbmltcG9ydCB7IEFja09wdGlvbnNNb2RhbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWNrT3B0aW9uc01vZGFsLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBBYnNvbHV0ZU92ZXJmbG93WCB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWJzb2x1dGVPdmVyZmxvd1guY29tcG9uZW50XCJcbmltcG9ydCB7IEVycm9yV2VsbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvRXJyb3JXZWxsLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBSZWFkZXJIZWFkZXJCb2R5LCBSZWFkZXJIZWFkZXIsIFJlYWRlckJvZHkgfSBmcm9tIFwiLi9jb21wb25lbnRzL1JlYWRlckhlYWRlckJvZHkuY29tcG9uZW50XCJcbmltcG9ydCB7IGRlY2xhcmF0aW9ucyBhcyBkZWJ1Z0RlY3MgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RlYnVnLWFyZWEvRGVidWdBcmVhLmNvbXBvbmVudFwiXG5cbi8vRElSRUNUSVZFU1xuaW1wb3J0IHsgQWNrQXJyYXkgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL0Fja0FycmF5LmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBBY2tBZ2dyZWdhdGUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL0Fja0FnZ3JlZ2F0ZS5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgU2Nyb2xsUGFzdEZpeGVkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9TY3JvbGxQYXN0Rml4ZWQuY29tcG9uZW50XCJcbmltcG9ydCB7IFNoYWtlT24gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL1NoYWtlT24uZGlyZWN0aXZlXCJcbmltcG9ydCB7IEZ4T24gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL0Z4T24uZGlyZWN0aXZlXCJcbmltcG9ydCB7IEZvY3VzT24gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL0ZvY3VzT24uZGlyZWN0aXZlXCJcbmltcG9ydCB7IEluaXQgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL0luaXQuZGlyZWN0aXZlXCJcbmltcG9ydCB7IENvbnRlbnRNb2RlbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvQ29udGVudE1vZGVsLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBTZWxlY3RPbiB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU2VsZWN0T24uZGlyZWN0aXZlXCJcbmltcG9ydCB7IElubmVySHRtbE1vZGVsIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9Jbm5lckh0bWxNb2RlbC5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgUmVwbGFjZU1vZGVsIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9SZXBsYWNlTW9kZWwuZGlyZWN0aXZlXCJcbmltcG9ydCB7IEVsZW1lbnRTaXplTW9kZWwsIEVsZW1lbnRIZWlnaHRNb2RlbCwgRWxlbWVudFdpZHRoTW9kZWwgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL0VsZW1lbnRTaXplTW9kZWwuZGlyZWN0aXZlXCJcbmltcG9ydCB7IFNjcmVlblNjcm9sbEhlaWdodERpZmYgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL1NjcmVlblNjcm9sbEhlaWdodERpZmYuZGlyZWN0aXZlXCJcbmltcG9ydCB7IFNjcmVlblNjcm9sbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU2NyZWVuU2Nyb2xsLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBQeEZyb21IdG1sVG9wIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9QeEZyb21IdG1sVG9wLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBTY3JlZW5TY3JvbGxNb2RlbFkgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL1NjcmVlblNjcm9sbE1vZGVsWS5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgU2NyZWVuV2lkdGhNb2RlbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU2NyZWVuV2lkdGhNb2RlbC5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgU2NyZWVuSGVpZ2h0TW9kZWwgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL1NjcmVlbkhlaWdodE1vZGVsLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBIdG1sV2lkdGhNb2RlbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvSHRtbFdpZHRoTW9kZWwuZGlyZWN0aXZlXCJcbmltcG9ydCB7IEh0bWxIZWlnaHRNb2RlbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvSHRtbEhlaWdodE1vZGVsLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBTdGF0dXNPbmxpbmVNb2RlbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU3RhdHVzT25saW5lTW9kZWwuZGlyZWN0aXZlXCJcbmltcG9ydCB7IFN0YXR1c09mZmxpbmVNb2RlbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU3RhdHVzT2ZmbGluZU1vZGVsLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBWYXJEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL1ZhckRpcmVjdGl2ZS5kaXJlY3RpdmVcIlxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjonW2VudGVyS2V5XSd9KVxuZXhwb3J0IGNsYXNzIEVudGVyS2V5e1xuICBAT3V0cHV0KCkgZW50ZXJLZXk6RXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKXtcbiAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCk9PntcbiAgICAgIHZhciB5ZXNObyA9IFsxMywxMF0uaW5kZXhPZihldmVudC53aGljaHx8ZXZlbnQua2V5Q29kZSk+PTBcbiAgICAgIGlmKHllc05vKXtcbiAgICAgICAgdGhpcy5lbnRlcktleS5lbWl0KGV2ZW50KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6J1tlc2NhcGVLZXldJ30pXG5leHBvcnQgY2xhc3MgRXNjYXBlS2V5e1xuICBAT3V0cHV0KCkgZXNjYXBlS2V5OkV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKXtcbiAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCk9PntcbiAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaHx8ZXZlbnQua2V5Q29kZVxuICAgICAgaWYoY29kZT09Mjcpe1xuICAgICAgICB0aGlzLmVzY2FwZUtleS5lbWl0KGV2ZW50KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqIERpc2FsbG93IGtleWJvYXJkIGFjY2VzcyB0byB0aGUgYmFja3NwYWNlIGtleSAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6J1twcmV2ZW50QmFja0tleV0nfSlcbmV4cG9ydCBjbGFzcyBQcmV2ZW50QmFja0tleSB7XG4gIEBPdXRwdXQoKSBwcmV2ZW50QmFja0tleSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKXtcbiAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCk9PntcbiAgICAgIHZhciB5ZXNObyA9IFs4XS5pbmRleE9mKGV2ZW50LndoaWNofHxldmVudC5rZXlDb2RlKTwwXG4gICAgICBpZigheWVzTm8pe1xuICAgICAgICB0aGlzLnByZXZlbnRCYWNrS2V5LmVtaXQoZXZlbnQpXG4gICAgICAgIGlmKGV2ZW50LnByZXZlbnREZWZhdWx0KXtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB5ZXNOb1xuICAgIH0pXG4gIH1cbn1cblxuLyoqIERpc2FsbG93IGtleWJvYXJkIGFjY2VzcyB0byB0aGUgZW50ZXIga2V5cyAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6J1twcmV2ZW50RW50ZXJLZXldJ30pXG5leHBvcnQgY2xhc3MgUHJldmVudEVudGVyS2V5e1xuICBAT3V0cHV0KCkgcHJldmVudEVudGVyS2V5ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KT0+e1xuICAgICAgdmFyIHllc05vID0gWzEzLDEwXS5pbmRleE9mKGV2ZW50LndoaWNofHxldmVudC5rZXlDb2RlKTwwXG4gICAgICBpZigheWVzTm8pe1xuICAgICAgICB0aGlzLnByZXZlbnRFbnRlcktleS5lbWl0KGV2ZW50KVxuICAgICAgICBpZihldmVudC5wcmV2ZW50RGVmYXVsdCl7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4geWVzTm9cbiAgICB9KVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonaW5wdXQtaGludCcsXG4gIHRlbXBsYXRlOic8ZGl2IHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmU7XCIgW25nU3R5bGVdPVwiaGludFN0eWxlXCI+PGRpdiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpZHRoOjEwMCVcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+PC9kaXY+J1xufSkgZXhwb3J0IGNsYXNzIElucHV0SGludCB7XG4gIEBJbnB1dCgpIGhpbnRTdHlsZSA9IHsnZm9udC1zaXplJzonNzUlJywnY29sb3InOicjQkJCJ31cbn1cblxuXG4vKiogYWRkcyBmb3JtIGVsZW1lbnQgb25jaGFuZ2UgbGlzdGVuZXIgdmlhIGFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScpIHRoYXQgY2FsbHMgZm9ybUNoYW5nZWQgc2NvcGUgYXJndW1lbnQgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjonW2Zvcm1DaGFuZ2VkXScvL0Fsc28gdHJ5IDogKGZvcm1BbHRlcikgZGlyZWN0aXZlIHRoYXQgd2F0Y2hlcyB0aGUgZm9ybSBcImlucHV0XCIgZXZlbnRcbn0pIGV4cG9ydCBjbGFzcyBGb3JtQ2hhbmdlZHtcbiAgLy9zdGF0aWMgcGFyYW1ldGVycyA9IFtbRWxlbWVudFJlZl1dXG4gIG9uQ2hhbmdlXG5cbiAgQE91dHB1dCgpIGZvcm1DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7XG4gICAgdGhpcy5vbkNoYW5nZSA9IChldmVudCk9PntcbiAgICAgIHRoaXMuZm9ybUNoYW5nZWQuZW1pdChldmVudClcbiAgICB9XG5cbiAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJyx0aGlzLm9uQ2hhbmdlKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLHRoaXMub25DaGFuZ2UpXG4gIH1cbn1cblxuLyoqIHdoZW4gZXZlciBjaGFuZ2Ugb3IgaW5wdXQgZm9ybSBldmVudCB0cmlnZ2VyZWQsIGJpbmRpbmdzIGFyZSBjYWxsZWQgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjonW2Zvcm1BbHRlcl0nXG59KSBleHBvcnQgY2xhc3MgRm9ybUFsdGVye1xuICAvLy1zdGF0aWMgcGFyYW1ldGVycyA9IFtbRWxlbWVudFJlZl1dXG4gIG9uQ2hhbmdlOihFdmVudCk9PnZvaWRcbiAgQE91dHB1dCgpIGZvcm1BbHRlcjpFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7XG4gICAgdGhpcy5vbkNoYW5nZSA9IChldmVudDpFdmVudCk9PntcbiAgICAgIHRoaXMuZm9ybUFsdGVyLmVtaXQoZXZlbnQpXG4gICAgfVxuXG4gICAgZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jyx0aGlzLm9uQ2hhbmdlKVxuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLHRoaXMub25DaGFuZ2UpXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsdGhpcy5vbkNoYW5nZSlcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsdGhpcy5vbkNoYW5nZSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2NyZWVuRGlyZWN0aXZlcyA9IFtcbiAgU2NyZWVuU2Nyb2xsTW9kZWxZLFxuICBTY3JlZW5XaWR0aE1vZGVsLFxuICBTY3JlZW5IZWlnaHRNb2RlbCxcbiAgU2NyZWVuU2Nyb2xsLFxuICBTY3JvbGxQYXN0Rml4ZWQsXG4gIFNjcmVlblNjcm9sbEhlaWdodERpZmYsXG4gIFB4RnJvbUh0bWxUb3Bcbl1cblxuZXhwb3J0IGNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcbiAgSW5pdCxcbiAgU2VsZWN0T24sXG4gIEZvY3VzT24sXG4gIFZhckRpcmVjdGl2ZSxcbiAgQ29udGVudE1vZGVsLFxuICBJbm5lckh0bWxNb2RlbCxcbiAgUmVwbGFjZU1vZGVsLFxuICBGb3JtQWx0ZXIsXG4gIEZvcm1DaGFuZ2VkLFxuICBFbnRlcktleSxcbiAgRXNjYXBlS2V5LFxuICBQcmV2ZW50QmFja0tleSxcbiAgUHJldmVudEVudGVyS2V5LFxuXG4gIC4uLnNjcmVlbkRpcmVjdGl2ZXMsXG5cbiAgSHRtbFdpZHRoTW9kZWwsXG4gIEh0bWxIZWlnaHRNb2RlbCxcbiAgU2hha2VPbixcbiAgRnhPbixcbiAgU3RhdHVzT25saW5lTW9kZWwsXG4gIFN0YXR1c09mZmxpbmVNb2RlbCxcbiAgRWxlbWVudFNpemVNb2RlbCxcbiAgRWxlbWVudFdpZHRoTW9kZWwsXG4gIEVsZW1lbnRIZWlnaHRNb2RlbCxcbiAgSW5wdXRIaW50LFxuXG4gIC8vY29tcG9uZW50c1xuICAuLi5kZWJ1Z0RlY3MsXG4gIEVycm9yV2VsbCxcbiAgQWJzb2x1dGVPdmVyZmxvd1gsXG5cbiAgLy9zb3J0YSBhY2stYW5ndWxhci10ZW1wbGF0ZXNcbiAgUmVhZGVySGVhZGVyQm9keSxcbiAgUmVhZGVySGVhZGVyLFxuICBSZWFkZXJCb2R5LFxuXG4gIC8vYWNrLWFuZ3VsYXItdGVtcGxhdGVzXG4gIEFja0Nsb3NlSWNvbixcbiAgQWNrU2VjdGlvbnMsXG4gIEFja1NlY3Rpb25UZW1wbGF0ZXMsXG4gIEFja09wdGlvbnMsXG4gIEFja09wdGlvbnNNb2RhbCxcbiAgQWNrTW9kYWwsXG4gIEFja01vZGFsTGF5b3V0LFxuICBBY2tBcnJheSxcbiAgQWNrQWdncmVnYXRlLFxuICBBY2tGaXhlZEVsZW1lbnQsXG4gIEFja0ZpeGVkRWxlbWVudFN0YWdlXG5dIl19