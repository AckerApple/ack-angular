import { EventEmitter } from "@angular/core";
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
