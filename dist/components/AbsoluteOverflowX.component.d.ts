import { ElementRef } from "@angular/core";
export declare class AbsoluteOverflowX {
    ElementRef: ElementRef;
    elementHeightModel: number;
    scrollBars: boolean | any;
    wrapClass: any;
    active: boolean | any;
    overflow: 'auto' | 'none' | 'hidden' | 'scroll';
    constructor(ElementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngAfterViewInit(): void;
    checkDisplay(): void;
}
