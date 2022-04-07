import { EventEmitter } from "@angular/core";
export declare class ScreenScrollHeightDiff {
    on: any;
    screenScrollHeightDiff: any;
    screenScrollHeightDiffChange: EventEmitter<any>;
    constructor();
    apply(): void;
    ngOnDestroy(): void;
}
