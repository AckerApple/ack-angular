import { EventEmitter, ElementRef } from "@angular/core";
/** adds form element onchange listener via addEventListener('change') that calls onFormChanged scope argument */
export declare class OnFormChanged {
    element: ElementRef;
    static parameters: typeof ElementRef[][];
    onChange: any;
    onFormChanged: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
}
export declare class OnFormAlter {
    element: ElementRef;
    static parameters: typeof ElementRef[][];
    onChange: any;
    onFormAlter: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
}
export declare class ReaderHeaderBody {
}
export declare class ReaderHeader {
}
export declare class ReaderBody {
    element: ElementRef;
    static parameters: typeof ElementRef[][];
    constructor(element: ElementRef);
}
export declare class ElementHeightModel {
    element: ElementRef;
    onResize: any;
    timeout: any;
    elementHeightModel: any;
    elementHeightModelChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    setModel(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export declare class ElementWidthModel {
    element: ElementRef;
    onResize: any;
    timeout: any;
    elementWidthModel: any;
    elementWidthModelChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    setModel(): void;
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
export declare class ScreenWidthModel {
    window: any;
    onResize: any;
    screenWidthModel: any;
    screenWidthModelChange: EventEmitter<{}>;
    constructor();
    setModel(): void;
    ngAfterViewInit(): void;
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
export declare class AbsoluteOverflowY {
}
export declare class ErrorWell {
    error: any;
    cssClasses: string;
    ngOnInit(): void;
}
/** runs shake instructions when condition returns a truthy value */
export declare class ShakeOn {
    element: ElementRef;
    shakeOn: any;
    shakeThen: EventEmitter<{}>;
    shakeForMs: any;
    shakeForMsChange: EventEmitter<{}>;
    shakeType: any;
    shakeTypeChange: EventEmitter<{}>;
    shakeRef: any;
    shakeRefChange: EventEmitter<{}>;
    shakeTypes: string[];
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    onFalse(): void;
    onTrue(): void;
}
/** runs shake instructions when model changes to a truthy value */
/** runs shake instructions when model changes to a truthy value */
export declare function hasClass(el: any, className: any): any;
export declare function addClass(el: any, className: any): void;
export declare function removeClass(el: any, className: any): void;
export declare const declarations: (typeof ReaderHeaderBody | typeof ReaderBody | typeof ElementHeightModel | typeof ElementWidthModel | typeof ShakeOn)[];
