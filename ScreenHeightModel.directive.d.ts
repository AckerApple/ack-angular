import { EventEmitter } from "@angular/core";
export declare class ScreenHeightModel {
    onResize: any;
    screenHeightModel: any;
    screenHeightModelChange: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
