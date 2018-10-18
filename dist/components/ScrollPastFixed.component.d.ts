import { TemplateRef, ElementRef } from "@angular/core";
export declare class ScrollPastFixed {
    ElementRef: ElementRef;
    currentPosition: "fixed";
    fillHeight: number;
    placeholder: number;
    onScroll: () => any;
    template: TemplateRef<any>;
    constructor(ElementRef: ElementRef);
    getReadElement(): any;
    init(): void;
    ngAfterViewInit(): void;
    check(): void;
}
export declare function getDistanceFromTop(element: any): number;
