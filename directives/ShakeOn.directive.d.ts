import { EventEmitter, ElementRef } from "@angular/core";
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
}
