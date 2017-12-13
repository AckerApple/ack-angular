import { EventEmitter } from "@angular/core";
export declare class ScreenScrollHeightDiff {
    on: any;
    screenScrollHeightDiff: any;
    screenScrollHeightDiffChange: EventEmitter<{}>;
    constructor();
    apply(): void;
    ngOnDestroy(): void;
}
