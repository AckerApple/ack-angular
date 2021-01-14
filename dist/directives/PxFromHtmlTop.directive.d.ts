import { ElementRef, EventEmitter } from "@angular/core";
export declare class PxFromHtmlTop {
    ElementRef: ElementRef;
    onScroll: any;
    number: number;
    numberChange: EventEmitter<number>;
    watch: any;
    constructor(ElementRef: ElementRef);
    emit(): void;
    ngOnChanges(): void;
    setter(): void;
    ngAfterViewInit(): void;
    delayFire(num?: number): void;
    ngOnDestroy(): void;
}
