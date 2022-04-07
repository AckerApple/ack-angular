import { EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
/**
  Applies css class when condition returns a truthy value. Allows timed removal
  Html inline elms cannot be animated. They will be upgraded to display inline-block
*/
export declare class FxOn {
    element: ElementRef;
    fxOn: boolean;
    fxClass: string;
    fxForMs: number;
    fxThen: EventEmitter<void>;
    inlineTreated: boolean;
    timeout?: number;
    fxTypes: string[];
    constructor(element: ElementRef);
    ngOnInit(): void;
    update(): void;
    ngOnChanges(changes: any): void;
    onFalse(): void;
    removeType(): void;
    applyType(): void;
    onTrue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FxOn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FxOn, "[fxOn]", ["FxOn"], { "fxOn": "fxOn"; "fxClass": "fxClass"; "fxForMs": "fxForMs"; }, { "fxThen": "fxThen"; }, never>;
}
export declare function hasClass(el: any, className: string): boolean;
export declare function addClass(el: any, className: string): void;
export declare function removeClass(el: any, className: string): void;
