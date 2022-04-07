import { EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class SelectOn {
    element: ElementRef;
    selectOn: any;
    selectOnDelay: number;
    selectThen: EventEmitter<any>;
    constructor(element: ElementRef);
    ngOnChanges(changes: any): void;
    update(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectOn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SelectOn, "[selectOn]", never, { "selectOn": "selectOn"; "selectOnDelay": "selectOnDelay"; }, { "selectThen": "selectThen"; }, never>;
}
