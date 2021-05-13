import { EventEmitter, ElementRef } from "@angular/core";
export declare class InnerHtmlModel {
    element: ElementRef;
    onChange: any;
    observer: MutationObserver;
    timeout: any;
    innerHtmlModel: any;
    innerHtmlModelChange: EventEmitter<any>;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
