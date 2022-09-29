import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class ScreenScrollHeightDiff {
    on: any;
    screenScrollHeightDiff: any;
    screenScrollHeightDiffChange: EventEmitter<any>;
    constructor();
    apply(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScreenScrollHeightDiff, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ScreenScrollHeightDiff, "[screenScrollHeightDiff]", never, { "screenScrollHeightDiff": "screenScrollHeightDiff"; }, { "screenScrollHeightDiffChange": "screenScrollHeightDiffChange"; }, never, never, false>;
}
