import { EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class EnterKey {
    element: ElementRef;
    enterKey: EventEmitter<Event>;
    constructor(element: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<EnterKey, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EnterKey, "[enterKey]", never, {}, { "enterKey": "enterKey"; }, never, never, false>;
}
export declare class EscapeKey {
    element: ElementRef;
    escapeKey: EventEmitter<Event>;
    constructor(element: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<EscapeKey, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EscapeKey, "[escapeKey]", never, {}, { "escapeKey": "escapeKey"; }, never, never, false>;
}
/** Disallow keyboard access to the backspace key */
export declare class PreventBackKey {
    element: ElementRef;
    preventBackKey: EventEmitter<any>;
    constructor(element: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<PreventBackKey, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PreventBackKey, "[preventBackKey]", never, {}, { "preventBackKey": "preventBackKey"; }, never, never, false>;
}
/** Disallow keyboard access to the enter keys */
export declare class PreventEnterKey {
    element: ElementRef;
    preventEnterKey: EventEmitter<any>;
    constructor(element: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<PreventEnterKey, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PreventEnterKey, "[preventEnterKey]", never, {}, { "preventEnterKey": "preventEnterKey"; }, never, never, false>;
}
export declare class InputHint {
    hintStyle: {
        'font-size': string;
        color: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<InputHint, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputHint, "input-hint", never, { "hintStyle": "hintStyle"; }, {}, never, ["*"], false>;
}
/** adds form element onchange listener via addEventListener('change') that calls formChanged scope argument */
export declare class FormChanged {
    element: ElementRef;
    onChange: any;
    formChanged: EventEmitter<any>;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormChanged, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormChanged, "[formChanged]", never, {}, { "formChanged": "formChanged"; }, never, never, false>;
}
/** when ever change or input form event triggered, bindings are called */
export declare class FormAlter {
    element: ElementRef;
    onChange: (Event: Event) => void;
    formAlter: EventEmitter<Event>;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormAlter, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormAlter, "[formAlter]", never, {}, { "formAlter": "formAlter"; }, never, never, false>;
}
