import { EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class ElementSizeModel {
    element: ElementRef;
    onResize: any;
    observer: any;
    timeout: any;
    inChange: boolean;
    elementSizeModelWatch: any;
    elementSizeModel: any;
    elementSizeModelChange: EventEmitter<any>;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    setModel(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ElementSizeModel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ElementSizeModel, "[elementSizeModel]", never, { "elementSizeModelWatch": "elementSizeModelWatch"; "elementSizeModel": "elementSizeModel"; }, { "elementSizeModelChange": "elementSizeModelChange"; }, never>;
}
export declare class ElementHeightModel extends ElementSizeModel {
    element: ElementRef;
    elementHeightModel: any;
    elementHeightModelChange: EventEmitter<any>;
    constructor(element: ElementRef);
    setModel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ElementHeightModel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ElementHeightModel, "[elementHeightModel]", never, { "elementHeightModel": "elementHeightModel"; }, { "elementHeightModelChange": "elementHeightModelChange"; }, never>;
}
export declare class ElementWidthModel extends ElementSizeModel {
    element: ElementRef;
    elementWidthModel: any;
    elementWidthModelChange: EventEmitter<any>;
    constructor(element: ElementRef);
    setModel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ElementWidthModel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ElementWidthModel, "[elementWidthModel]", ["ElementWidthModel"], { "elementWidthModel": "elementWidthModel"; }, { "elementWidthModelChange": "elementWidthModelChange"; }, never>;
}
