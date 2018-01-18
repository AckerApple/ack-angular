import { EventEmitter } from "@angular/core";
export declare class HtmlWidthModel {
    window: any;
    onResize: any;
    htmlWidthModel: any;
    htmlWidthModelChange: EventEmitter<{}>;
    constructor();
    ngDoCheck(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
