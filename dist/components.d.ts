import { EventEmitter, ElementRef } from "@angular/core";
export declare class ReaderHeaderBody {
}
export declare class ReaderHeader {
}
export declare class ReaderBody {
    el: ElementRef;
    static parameters: typeof ElementRef[][];
    constructor(el: ElementRef);
}
export declare class ScreenWidthModel {
    window: any;
    onResize: any;
    screenWidthModel: any;
    screenWidthModelChange: EventEmitter<{}>;
    constructor();
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export declare class ScreenScrollModelY {
    window: any;
    onScroll: any;
    screenScrollModelY: any;
    screenScrollModelYChange: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class ScreenHeightModel {
    window: any;
    onResize: any;
    screenHeightModel: any;
    screenHeightModelChange: EventEmitter<{}>;
    constructor();
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export declare const declarations: (typeof ReaderHeaderBody | typeof ReaderBody)[];
