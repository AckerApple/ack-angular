import { EventEmitter, ElementRef } from "@angular/core";
import { AckSections } from "./components/AckSections.component";
import { AckSectionTemplates } from "./components/AckSectionTemplates.component";
import { AckModal } from "./components/AckModal.component";
import { AckModalLayout } from "./components/AckModalLayout.component";
import { AckFixedElementStage } from "./components/AckFixedElementStage.component";
import { AckFixedElement } from "./components/AckFixedElement.component";
import { AckCloseIcon } from "./components/AckCloseIcon.component";
import { AckOptions } from "./components/AckOptions.component";
import { AbsoluteOverflowX } from "./components/AbsoluteOverflowX.component";
import { ReaderBody } from "./components/ReaderHeaderBody.component";
import { AckArray } from "./directives/AckArray.directive";
import { ScrollPastFixed } from "./components/ScrollPastFixed.component";
import { ShakeOn } from "./directives/ShakeOn.directive";
import { FxOn } from "./directives/FxOn.directive";
import { FocusOn } from "./directives/FocusOn.directive";
import { ContentModel } from "./directives/ContentModel.directive";
import { SelectOn } from "./directives/SelectOn.directive";
import { InnerHtmlModel } from "./directives/InnerHtmlModel.directive";
import { ElementSizeModel } from "./directives/ElementSizeModel.directive";
import { ScreenScrollHeightDiff } from "./directives/ScreenScrollHeightDiff.directive";
import { ScreenScroll } from "./directives/ScreenScroll.directive";
import { PxFromHtmlTop } from "./directives/PxFromHtmlTop.directive";
import { ScreenScrollModelY } from "./directives/ScreenScrollModelY.directive";
import { ScreenWidthModel } from "./directives/ScreenWidthModel.directive";
import { ScreenHeightModel } from "./directives/ScreenHeightModel.directive";
import { HtmlWidthModel } from "./directives/HtmlWidthModel.directive";
export declare class EnterKey {
    element: ElementRef;
    enterKey: EventEmitter<Event>;
    constructor(element: ElementRef);
}
export declare class EscapeKey {
    element: ElementRef;
    escapeKey: EventEmitter<Event>;
    constructor(element: ElementRef);
}
/** Disallow keyboard access to the backspace key */
export declare class PreventBackKey {
    element: ElementRef;
    preventBackKey: EventEmitter<any>;
    constructor(element: ElementRef);
}
/** Disallow keyboard access to the enter keys */
export declare class PreventEnterKey {
    element: ElementRef;
    preventEnterKey: EventEmitter<any>;
    constructor(element: ElementRef);
}
export declare class InputHint {
    hintStyle: {
        'font-size': string;
        color: string;
    };
}
/** adds form element onchange listener via addEventListener('change') that calls formChanged scope argument */
export declare class FormChanged {
    element: ElementRef;
    onChange: any;
    formChanged: EventEmitter<any>;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
}
/** when ever change or input form event triggered, bindings are called */
export declare class FormAlter {
    element: ElementRef;
    onChange: (Event: Event) => void;
    formAlter: EventEmitter<Event>;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
}
export declare const screenDirectives: (typeof ScrollPastFixed | typeof ScreenScrollHeightDiff | typeof ScreenScroll | typeof PxFromHtmlTop | typeof ScreenScrollModelY | typeof ScreenWidthModel | typeof ScreenHeightModel)[];
export declare const declarations: (typeof SelectOn | typeof FocusOn | typeof ContentModel | typeof InnerHtmlModel | typeof AckSections | typeof AckSectionTemplates | typeof AckFixedElement | typeof AckModal | typeof AckModalLayout | typeof AckFixedElementStage | typeof AckCloseIcon | typeof AckOptions | typeof AbsoluteOverflowX | typeof ReaderBody | typeof AckArray | typeof ScrollPastFixed | typeof FxOn | typeof ShakeOn | typeof ElementSizeModel | typeof PxFromHtmlTop | typeof ScreenWidthModel | typeof ScreenHeightModel | typeof HtmlWidthModel | typeof EnterKey | typeof EscapeKey | typeof PreventBackKey | typeof PreventEnterKey | typeof FormChanged | typeof FormAlter)[];
export default declarations;
