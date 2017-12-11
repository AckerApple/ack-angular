import { EventEmitter } from "@angular/core";
export declare class HtmlHeightModel {
    onResize: any;
    htmlHeightModel: any;
    htmlHeightModelChange: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
