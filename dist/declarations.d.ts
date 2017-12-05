import { EventEmitter, ElementRef } from "@angular/core";
import { AckCloseIcon } from "./components/AckCloseIcon.component";
import { AckOptions } from "./components/AckOptions.component";
import { AbsoluteOverflowX } from "./components/AbsoluteOverflowX.component";
export { AbsoluteOverflowX } from "./components/AbsoluteOverflowX.component";
export { ShakeOn } from "./ShakeOn.directive";
export { ErrorWell } from "./components/ErrorWell.component";
import { ReaderBody } from "./components/ReaderHeaderBody.component";
export declare class FocusOn {
    element: ElementRef;
    focusOn: any;
    focusOnDelay: number;
    focusThen: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnChanges(changes: any): void;
}
export declare class SelectOn {
    element: ElementRef;
    selectOn: any;
    selectOnDelay: number;
    selectThen: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnChanges(changes: any): void;
}
export declare class VarDirective {
    var: any;
}
export declare class EnterKey {
    element: ElementRef;
    enterKey: EventEmitter<Event>;
    constructor(element: ElementRef);
}
export declare class EscapeKey {
    element: ElementRef;
    escapeKey: EventEmitter<Event>;
    constructor(element: ElementRef);
}
export declare class PreventBackKey {
    element: ElementRef;
    preventBackKey: EventEmitter<{}>;
    constructor(element: ElementRef);
}
export declare class PreventEnterKey {
    element: ElementRef;
    preventEnterKey: EventEmitter<{}>;
    constructor(element: ElementRef);
}
export declare class InputHint {
    hintStyle: {
        'font-size': string;
        'color': string;
    };
}
export declare class StatusOnlineModel {
    onChange: any;
    statusOnlineModel: any;
    statusOnlineModelChange: EventEmitter<{}>;
    constructor();
    ngOnDestroy(): void;
}
export declare class StatusOfflineModel {
    onChange: any;
    statusOfflineModel: any;
    statusOfflineModelChange: EventEmitter<{}>;
    constructor();
    ngOnDestroy(): void;
}
export declare class FormChanged {
    element: ElementRef;
    onChange: any;
    formChanged: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
}
export declare class FormAlter {
    element: ElementRef;
    onChange: (Event) => void;
    formAlter: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
}
export declare class InnerHtmlModel {
    element: ElementRef;
    onChange: any;
    observer: any;
    timeout: any;
    innerHtmlModel: any;
    innerHtmlModelChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
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
export declare class ScreenScrollHeightDiff {
    on: any;
    screenScrollHeightDiff: any;
    screenScrollHeightDiffChange: EventEmitter<{}>;
    constructor();
    apply(): void;
    ngOnDestroy(): void;
}
export declare class ScreenScroll {
    onScroll: any;
    screenScroll: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class ScreenScrollModelY {
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
    ngOnInit(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
export declare class ScreenHeightModel {
    onResize: any;
    screenHeightModel: any;
    screenHeightModelChange: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
export declare class HtmlWidthModel {
    window: any;
    onResize: any;
    htmlWidthModel: any;
    htmlWidthModelChange: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
export declare class HtmlHeightModel {
    onResize: any;
    htmlHeightModel: any;
    htmlHeightModelChange: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
export declare const declarations: (typeof AckCloseIcon | typeof AckOptions | typeof AbsoluteOverflowX | typeof ReaderBody)[];
