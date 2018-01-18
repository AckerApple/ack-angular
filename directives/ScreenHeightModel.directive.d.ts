import { EventEmitter } from "@angular/core";
export declare class ScreenHeightModel {
    onResize: () => any;
    screenHeightModel: number;
    screenHeightModelChange: EventEmitter<number>;
    constructor();
    ngDoCheck(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
