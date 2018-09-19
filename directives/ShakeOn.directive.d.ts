import { EventEmitter, ElementRef } from "@angular/core";
export declare class ShakeOn {
    element: ElementRef;
    shakeConstant: boolean;
    shakeOn: any;
    shakeForMs: any;
    shakeType: any;
    shakeThen: EventEmitter<{}>;
    timeout: number;
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
