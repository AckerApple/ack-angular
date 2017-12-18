import { EventEmitter, ElementRef } from "@angular/core";
export declare class ElementSizeModel {
    element: ElementRef;
    onResize: any;
    observer: any;
    timeout: any;
    inChange: any;
    elementSizeModel: any;
    elementSizeModelChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    setModel(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
export declare class ElementHeightModel extends ElementSizeModel {
    elementHeightModel: any;
    elementHeightModelChange: EventEmitter<{}>;
    setModel(): void;
}
export declare class ElementWidthModel extends ElementSizeModel {
    elementWidthModel: any;
    elementWidthModelChange: EventEmitter<{}>;
    setModel(): void;
}
