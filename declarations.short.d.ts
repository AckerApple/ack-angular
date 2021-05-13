import { EventEmitter, ElementRef } from "@angular/core";
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
