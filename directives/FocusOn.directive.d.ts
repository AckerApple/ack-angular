import { EventEmitter, ElementRef } from "@angular/core";
export declare class FocusOn {
    element: ElementRef;
    focusOn: any;
    focusOnDelay: number;
    focusThen: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnChanges(changes: any): void;
    update(): void;
}
