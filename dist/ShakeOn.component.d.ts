import { EventEmitter, ElementRef } from "@angular/core";
export declare class ShakeOn {
    element: ElementRef;
    timeout: any;
    shakeConstant: boolean;
    shakeOn: any;
    shakeThen: EventEmitter<{}>;
    shakeForMs: any;
    shakeForMsChange: EventEmitter<{}>;
    shakeType: any;
    shakeTypeChange: EventEmitter<{}>;
    shakeRef: any;
    shakeRefChange: EventEmitter<{}>;
    shakeTypes: string[];
    constructor(element: ElementRef);
    ngOnInit(): void;
    update(): void;
    ngOnChanges(changes: any): void;
    onFalse(): void;
    removeType(): void;
    applyType(): void;
    onTrue(): void;
}
export declare function hasClass(el: any, className: any): any;
export declare function addClass(el: any, className: any): void;
export declare function removeClass(el: any, className: any): void;
