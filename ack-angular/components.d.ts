import { EventEmitter, ElementRef } from "@angular/core";
/** adds form element onchange listener via addEventListener('change') that calls formChanged scope argument */
export declare class FormChanged {
    el: ElementRef;
    static parameters: typeof ElementRef[][];
    onChange: any;
    formChanged: EventEmitter<{}>;
    constructor(el: ElementRef);
    ngOnDestroy(): void;
}
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
