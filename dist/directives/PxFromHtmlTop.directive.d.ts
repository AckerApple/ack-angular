import { ElementRef, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class PxFromHtmlTop {
    ElementRef: ElementRef;
    onScroll?: any;
    number?: number;
    numberChange: EventEmitter<number>;
    watch: any;
    constructor(ElementRef: ElementRef);
    emit(): void;
    ngOnChanges(): void;
    setter(): void;
    ngAfterViewInit(): void;
    delayFire(num?: number): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PxFromHtmlTop, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PxFromHtmlTop, "[pxFromHtmlTop]", ["PxFromHtmlTop"], { "number": "pxFromHtmlTop"; "watch": "watch"; }, { "numberChange": "pxFromHtmlTopChange"; }, never, never, false>;
}
