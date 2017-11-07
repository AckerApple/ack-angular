import { ElementRef } from "@angular/core";
export declare class AbsoluteOverflowX {
    ElementRef: ElementRef;
    elementHeightModel: number;
    scrollBars: boolean | any;
    wrapClass: any;
    active: boolean | any;
    overflow: 'auto' | 'none' | 'hidden' | 'scroll';
    constructor(ElementRef: ElementRef);
    ngOnChanges(changes: any): void;
}
