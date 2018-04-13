import { EventEmitter, ElementRef } from "@angular/core";
import { AckAppTemplates } from "./components/AckAppTemplates.component";
import { AckModal } from "./components/AckModal.component";
import { AckModalLayout } from "./components/AckModalLayout.component";
import { AckCloseIcon } from "./components/AckCloseIcon.component";
import { AckOptions } from "./components/AckOptions.component";
import { AbsoluteOverflowX } from "./components/AbsoluteOverflowX.component";
import { AckFixedElementStage } from "./components/AckFixedElementStage.component";
import { ReaderBody } from "./components/ReaderHeaderBody.component";
import { ScrollPastFixed } from "./components/ScrollPastFixed.component";
import { ShakeOn } from "./directives/ShakeOn.directive";
import { FocusOn } from "./directives/FocusOn.directive";
import { SelectOn } from "./directives/SelectOn.directive";
import { InnerHtmlModel } from "./directives/InnerHtmlModel.directive";
import { ElementSizeModel } from "./directives/ElementSizeModel.directive";
export declare class VarDirective {
    var: any;
}
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
export declare class PreventBackKey {
    element: ElementRef;
    preventBackKey: EventEmitter<{}>;
    constructor(element: ElementRef);
}
export declare class PreventEnterKey {
    element: ElementRef;
    preventEnterKey: EventEmitter<{}>;
    constructor(element: ElementRef);
}
export declare class InputHint {
    hintStyle: {
        'font-size': string;
        'color': string;
    };
}
export declare class FormChanged {
    element: ElementRef;
    onChange: any;
    formChanged: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
}
export declare class FormAlter {
    element: ElementRef;
    onChange: (Event) => void;
    formAlter: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
}
export declare const declarations: (typeof AckModalLayout | typeof AckModal | typeof AckAppTemplates | typeof AckCloseIcon | typeof AckOptions | typeof AbsoluteOverflowX | typeof AckFixedElementStage | typeof ReaderBody | typeof ScrollPastFixed | typeof ShakeOn | typeof FocusOn | typeof SelectOn | typeof InnerHtmlModel | typeof ElementSizeModel | typeof EnterKey | typeof EscapeKey | typeof PreventBackKey | typeof PreventEnterKey | typeof FormChanged | typeof FormAlter)[];
