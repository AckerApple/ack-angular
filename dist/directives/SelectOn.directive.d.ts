import { EventEmitter, ElementRef } from "@angular/core";
export declare class SelectOn {
    element: ElementRef;
    selectOn: any;
    selectOnDelay: number;
    selectThen: EventEmitter<any>;
    constructor(element: ElementRef);
    ngOnChanges(changes: any): void;
    update(): void;
}
