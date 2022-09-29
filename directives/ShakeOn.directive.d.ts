import { EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
/** runs shake instructions when condition returns a truthy value */
export declare class ShakeOn {
    element: ElementRef;
    shakeConstant: boolean;
    shakeOn: any;
    shakeForMs: any;
    shakeType: any;
    shakeThen: EventEmitter<any>;
    timeout?: number;
    shakeTypes: string[];
    constructor(element: ElementRef);
    ngOnInit(): void;
    update(): void;
    ngOnChanges(changes: any): void;
    onFalse(): void;
    removeType(): void;
    applyType(): void;
    onTrue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShakeOn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ShakeOn, "[shakeOn]", ["ShakeOn"], { "shakeConstant": "shakeConstant"; "shakeOn": "shakeOn"; "shakeForMs": "shakeForMs"; "shakeType": "shakeType"; }, { "shakeThen": "shakeThen"; }, never, never, false>;
}
