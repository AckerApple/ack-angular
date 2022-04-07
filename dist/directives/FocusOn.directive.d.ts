import { EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class FocusOn {
    element: ElementRef;
    focusOn: any;
    focusOnDelay: number;
    focusThen: EventEmitter<any>;
    constructor(element: ElementRef);
    ngOnChanges(changes: any): void;
    update(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FocusOn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FocusOn, "[focusOn]", never, { "focusOn": "focusOn"; "focusOnDelay": "focusOnDelay"; }, { "focusThen": "focusThen"; }, never>;
}
