import { TemplateRef, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class ScrollPastFixed {
    ElementRef: ElementRef;
    currentPosition?: "fixed";
    fillHeight?: number;
    placeholder?: number;
    onScroll: () => any;
    template: TemplateRef<any>;
    constructor(ElementRef: ElementRef);
    getReadElement(): any;
    init(): void;
    ngAfterViewInit(): void;
    check(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollPastFixed, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScrollPastFixed, "scroll-past-fixed", never, {}, {}, never, ["*"], false>;
}
export declare function getDistanceFromTop(element: any): number;
