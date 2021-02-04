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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlY2xhcmF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUE7QUFFdEIsWUFBWTtBQUNaLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQTtBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQTtBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUE7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFBO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFBO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUE7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFBO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQTtBQUM1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0NBQWtDLENBQUE7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQTtBQUNwRyxPQUFPLEVBQUUsWUFBWSxJQUFJLFNBQVMsRUFBRSxNQUFNLDZDQUE2QyxDQUFBO0FBRXZGLFlBQVk7QUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUE7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFD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UTtJQUNSLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZUFBZTtJQUVmLEdBQUcsZ0JBQWdCO0lBRW5CLGNBQWM7SUFDZCxlQUFlO0lBQ2YsT0FBTztJQUNQLElBQUk7SUFDSixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFFVCxZQUFZO0lBQ1osR0FBRyxTQUFTO0lBQ1osU0FBUztJQUNULGlCQUFpQjtJQUVqQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixVQUFVO0lBRVYsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixlQUFlO0lBQ2YsUUFBUTtJQUNSLGNBQWM7SUFDZCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7Q0FDckIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG4vL0NPTVBPTkVOVFNcbmltcG9ydCB7IEFja1NlY3Rpb25zIH0gZnJvbSBcIi4vY29tcG9uZW50cy9BY2tTZWN0aW9ucy5jb21wb25lbnRcIlxuaW1wb3J0IHsgQWNrU2VjdGlvblRlbXBsYXRlcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWNrU2VjdGlvblRlbXBsYXRlcy5jb21wb25lbnRcIlxuaW1wb3J0IHsgQWNrTW9kYWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL0Fja01vZGFsLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBBY2tNb2RhbExheW91dCB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50XCJcbmltcG9ydCB7IEFja0ZpeGVkRWxlbWVudFN0YWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9BY2tGaXhlZEVsZW1lbnRTdGFnZS5jb21wb25lbnRcIlxuaW1wb3J0IHsgQWNrRml4ZWRFbGVtZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9BY2tGaXhlZEVsZW1lbnQuY29tcG9uZW50XCJcbmltcG9ydCB7IEFja0Nsb3NlSWNvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWNrQ2xvc2VJY29uLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBBY2tPcHRpb25zIH0gZnJvbSBcIi4vY29tcG9uZW50cy9BY2tPcHRpb25zLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBBY2tPcHRpb25zTW9kYWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL0Fja09wdGlvbnNNb2RhbC5jb21wb25lbnRcIlxuaW1wb3J0IHsgQWJzb2x1dGVPdmVyZmxvd1ggfSBmcm9tIFwiLi9jb21wb25lbnRzL0Fic29sdXRlT3ZlcmZsb3dYLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBFcnJvcldlbGwgfSBmcm9tIFwiLi9jb21wb25lbnRzL0Vycm9yV2VsbC5jb21wb25lbnRcIlxuaW1wb3J0IHsgUmVhZGVySGVhZGVyQm9keSwgUmVhZGVySGVhZGVyLCBSZWFkZXJCb2R5IH0gZnJvbSBcIi4vY29tcG9uZW50cy9SZWFkZXJIZWFkZXJCb2R5LmNvbXBvbmVudFwiXG5pbXBvcnQgeyBkZWNsYXJhdGlvbnMgYXMgZGVidWdEZWNzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9kZWJ1Zy1hcmVhL0RlYnVnQXJlYS5jb21wb25lbnRcIlxuXG4vL0RJUkVDVElWRVNcbmltcG9ydCB7IEFja0FycmF5IH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9BY2tBcnJheS5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgQWNrQWdncmVnYXRlIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9BY2tBZ2dyZWdhdGUuZGlyZWN0aXZlXCJcbmltcG9ydCB7IFNjcm9sbFBhc3RGaXhlZCB9IGZyb20gXCIuL2NvbXBvbmVudHMvU2Nyb2xsUGFzdEZpeGVkLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBTaGFrZU9uIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9TaGFrZU9uLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBGeE9uIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9GeE9uLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBGb2N1c09uIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9Gb2N1c09uLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBJbml0IH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9Jbml0LmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBTZWxlY3RPbiB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU2VsZWN0T24uZGlyZWN0aXZlXCJcbmltcG9ydCB7IElubmVySHRtbE1vZGVsIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9Jbm5lckh0bWxNb2RlbC5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgUmVwbGFjZU1vZGVsIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9SZXBsYWNlTW9kZWwuZGlyZWN0aXZlXCJcbmltcG9ydCB7IEVsZW1lbnRTaXplTW9kZWwsIEVsZW1lbnRIZWlnaHRNb2RlbCwgRWxlbWVudFdpZHRoTW9kZWwgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL0VsZW1lbnRTaXplTW9kZWwuZGlyZWN0aXZlXCJcbmltcG9ydCB7IFNjcmVlblNjcm9sbEhlaWdodERpZmYgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL1NjcmVlblNjcm9sbEhlaWdodERpZmYuZGlyZWN0aXZlXCJcbmltcG9ydCB7IFNjcmVlblNjcm9sbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU2NyZWVuU2Nyb2xsLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBQeEZyb21IdG1sVG9wIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9QeEZyb21IdG1sVG9wLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBTY3JlZW5TY3JvbGxNb2RlbFkgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL1NjcmVlblNjcm9sbE1vZGVsWS5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgU2NyZWVuV2lkdGhNb2RlbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU2NyZWVuV2lkdGhNb2RlbC5kaXJlY3RpdmVcIlxuaW1wb3J0IHsgU2NyZWVuSGVpZ2h0TW9kZWwgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL1NjcmVlbkhlaWdodE1vZGVsLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBIdG1sV2lkdGhNb2RlbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvSHRtbFdpZHRoTW9kZWwuZGlyZWN0aXZlXCJcbmltcG9ydCB7IEh0bWxIZWlnaHRNb2RlbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvSHRtbEhlaWdodE1vZGVsLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBTdGF0dXNPbmxpbmVNb2RlbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU3RhdHVzT25saW5lTW9kZWwuZGlyZWN0aXZlXCJcbmltcG9ydCB7IFN0YXR1c09mZmxpbmVNb2RlbCB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvU3RhdHVzT2ZmbGluZU1vZGVsLmRpcmVjdGl2ZVwiXG5pbXBvcnQgeyBWYXJEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL1ZhckRpcmVjdGl2ZS5kaXJlY3RpdmVcIlxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjonW2VudGVyS2V5XSd9KVxuZXhwb3J0IGNsYXNzIEVudGVyS2V5e1xuICBAT3V0cHV0KCkgZW50ZXJLZXk6RXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKXtcbiAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCk9PntcbiAgICAgIHZhciB5ZXNObyA9IFsxMywxMF0uaW5kZXhPZihldmVudC53aGljaHx8ZXZlbnQua2V5Q29kZSk+PTBcbiAgICAgIGlmKHllc05vKXtcbiAgICAgICAgdGhpcy5lbnRlcktleS5lbWl0KGV2ZW50KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6J1tlc2NhcGVLZXldJ30pXG5leHBvcnQgY2xhc3MgRXNjYXBlS2V5e1xuICBAT3V0cHV0KCkgZXNjYXBlS2V5OkV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KT0+e1xuICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNofHxldmVudC5rZXlDb2RlXG4gICAgICBpZihjb2RlPT0yNyl7XG4gICAgICAgIHRoaXMuZXNjYXBlS2V5LmVtaXQoZXZlbnQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKiogRGlzYWxsb3cga2V5Ym9hcmQgYWNjZXNzIHRvIHRoZSBiYWNrc3BhY2Uga2V5ICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjonW3ByZXZlbnRCYWNrS2V5XSd9KVxuZXhwb3J0IGNsYXNzIFByZXZlbnRCYWNrS2V5IHtcbiAgQE91dHB1dCgpIHByZXZlbnRCYWNrS2V5ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KT0+e1xuICAgICAgdmFyIHllc05vID0gWzhdLmluZGV4T2YoZXZlbnQud2hpY2h8fGV2ZW50LmtleUNvZGUpPDBcbiAgICAgIGlmKCF5ZXNObyl7XG4gICAgICAgIHRoaXMucHJldmVudEJhY2tLZXkuZW1pdChldmVudClcbiAgICAgICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpe1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHllc05vXG4gICAgfSlcbiAgfVxufVxuXG4vKiogRGlzYWxsb3cga2V5Ym9hcmQgYWNjZXNzIHRvIHRoZSBlbnRlciBrZXlzICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjonW3ByZXZlbnRFbnRlcktleV0nfSlcbmV4cG9ydCBjbGFzcyBQcmV2ZW50RW50ZXJLZXl7XG4gIEBPdXRwdXQoKSBwcmV2ZW50RW50ZXJLZXkgPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7XG4gICAgZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpPT57XG4gICAgICB2YXIgeWVzTm8gPSBbMTMsMTBdLmluZGV4T2YoZXZlbnQud2hpY2h8fGV2ZW50LmtleUNvZGUpPDBcbiAgICAgIGlmKCF5ZXNObyl7XG4gICAgICAgIHRoaXMucHJldmVudEVudGVyS2V5LmVtaXQoZXZlbnQpXG4gICAgICAgIGlmKGV2ZW50LnByZXZlbnREZWZhdWx0KXtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB5ZXNOb1xuICAgIH0pXG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidpbnB1dC1oaW50JyxcbiAgdGVtcGxhdGU6JzxkaXYgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZTtcIiBbbmdTdHlsZV09XCJoaW50U3R5bGVcIj48ZGl2IHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7d2lkdGg6MTAwJVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj48L2Rpdj4nXG59KSBleHBvcnQgY2xhc3MgSW5wdXRIaW50IHtcbiAgQElucHV0KCkgaGludFN0eWxlID0geydmb250LXNpemUnOic3NSUnLCdjb2xvcic6JyNCQkInfVxufVxuXG5cbi8qKiBhZGRzIGZvcm0gZWxlbWVudCBvbmNoYW5nZSBsaXN0ZW5lciB2aWEgYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJykgdGhhdCBjYWxscyBmb3JtQ2hhbmdlZCBzY29wZSBhcmd1bWVudCAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOidbZm9ybUNoYW5nZWRdJy8vQWxzbyB0cnkgOiAoZm9ybUFsdGVyKSBkaXJlY3RpdmUgdGhhdCB3YXRjaGVzIHRoZSBmb3JtIFwiaW5wdXRcIiBldmVudFxufSkgZXhwb3J0IGNsYXNzIEZvcm1DaGFuZ2Vke1xuICAvL3N0YXRpYyBwYXJhbWV0ZXJzID0gW1tFbGVtZW50UmVmXV1cbiAgb25DaGFuZ2VcblxuICBAT3V0cHV0KCkgZm9ybUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKXtcbiAgICB0aGlzLm9uQ2hhbmdlID0gKGV2ZW50KT0+e1xuICAgICAgdGhpcy5mb3JtQ2hhbmdlZC5lbWl0KGV2ZW50KVxuICAgIH1cblxuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLHRoaXMub25DaGFuZ2UpXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsdGhpcy5vbkNoYW5nZSlcbiAgfVxufVxuXG4vKiogd2hlbiBldmVyIGNoYW5nZSBvciBpbnB1dCBmb3JtIGV2ZW50IHRyaWdnZXJlZCwgYmluZGluZ3MgYXJlIGNhbGxlZCAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOidbZm9ybUFsdGVyXSdcbn0pIGV4cG9ydCBjbGFzcyBGb3JtQWx0ZXJ7XG4gIC8vLXN0YXRpYyBwYXJhbWV0ZXJzID0gW1tFbGVtZW50UmVmXV1cbiAgb25DaGFuZ2U6KEV2ZW50KT0+dm9pZFxuICBAT3V0cHV0KCkgZm9ybUFsdGVyOkV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKXtcbiAgICB0aGlzLm9uQ2hhbmdlID0gKGV2ZW50OkV2ZW50KT0+e1xuICAgICAgdGhpcy5mb3JtQWx0ZXIuZW1pdChldmVudClcbiAgICB9XG5cbiAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLHRoaXMub25DaGFuZ2UpXG4gICAgZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsdGhpcy5vbkNoYW5nZSlcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJyx0aGlzLm9uQ2hhbmdlKVxuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0Jyx0aGlzLm9uQ2hhbmdlKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzY3JlZW5EaXJlY3RpdmVzID0gW1xuICBTY3JlZW5TY3JvbGxNb2RlbFksXG4gIFNjcmVlbldpZHRoTW9kZWwsXG4gIFNjcmVlbkhlaWdodE1vZGVsLFxuICBTY3JlZW5TY3JvbGwsXG4gIFNjcm9sbFBhc3RGaXhlZCxcbiAgU2NyZWVuU2Nyb2xsSGVpZ2h0RGlmZixcbiAgUHhGcm9tSHRtbFRvcFxuXVxuXG5leHBvcnQgY29uc3QgZGVjbGFyYXRpb25zID0gW1xuICBJbml0LFxuICBTZWxlY3RPbixcbiAgRm9jdXNPbixcbiAgVmFyRGlyZWN0aXZlLFxuICBJbm5lckh0bWxNb2RlbCxcbiAgUmVwbGFjZU1vZGVsLFxuICBGb3JtQWx0ZXIsXG4gIEZvcm1DaGFuZ2VkLFxuICBFbnRlcktleSxcbiAgRXNjYXBlS2V5LFxuICBQcmV2ZW50QmFja0tleSxcbiAgUHJldmVudEVudGVyS2V5LFxuICBcbiAgLi4uc2NyZWVuRGlyZWN0aXZlcyxcblxuICBIdG1sV2lkdGhNb2RlbCxcbiAgSHRtbEhlaWdodE1vZGVsLFxuICBTaGFrZU9uLFxuICBGeE9uLFxuICBTdGF0dXNPbmxpbmVNb2RlbCxcbiAgU3RhdHVzT2ZmbGluZU1vZGVsLFxuICBFbGVtZW50U2l6ZU1vZGVsLFxuICBFbGVtZW50V2lkdGhNb2RlbCxcbiAgRWxlbWVudEhlaWdodE1vZGVsLFxuICBJbnB1dEhpbnQsXG4gIFxuICAvL2NvbXBvbmVudHNcbiAgLi4uZGVidWdEZWNzLFxuICBFcnJvcldlbGwsXG4gIEFic29sdXRlT3ZlcmZsb3dYLFxuXG4gIC8vc29ydGEgYWNrLWFuZ3VsYXItdGVtcGxhdGVzXG4gIFJlYWRlckhlYWRlckJvZHksXG4gIFJlYWRlckhlYWRlcixcbiAgUmVhZGVyQm9keSxcblxuICAvL2Fjay1hbmd1bGFyLXRlbXBsYXRlc1xuICBBY2tDbG9zZUljb24sXG4gIEFja1NlY3Rpb25zLFxuICBBY2tTZWN0aW9uVGVtcGxhdGVzLFxuICBBY2tPcHRpb25zLFxuICBBY2tPcHRpb25zTW9kYWwsXG4gIEFja01vZGFsLFxuICBBY2tNb2RhbExheW91dCxcbiAgQWNrQXJyYXksXG4gIEFja0FnZ3JlZ2F0ZSxcbiAgQWNrRml4ZWRFbGVtZW50LFxuICBBY2tGaXhlZEVsZW1lbnRTdGFnZVxuXSJdfQ==