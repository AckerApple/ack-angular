import { EventEmitter, ElementRef } from "@angular/core";
export declare class ElementSizeModel {
    element: ElementRef;
    onResize: any;
    observer: any;
    timeout: any;
    inChange: boolean;
    elementSizeModelWatch: any;
    elementSizeModel: any;
    elementSizeModelChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
export declare class ElementHeightModel extends ElementSizeModel {
    element: ElementRef;
    elementHeightModel: any;
    elementHeightModelChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    setModel(): void;
}
export declare class ElementWidthModel extends ElementSizeModel {
    element: ElementRef;
    elementWidthModel: any;
    elementWidthModelChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    setModel(): void;
}
