import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export interface htmlSize {
    width: number | null;
    height: number | null;
}
export declare class HtmlSizeService {
    private onResize;
    htmlSize: htmlSize;
    change: EventEmitter<void>;
    constructor();
    checkWatchers(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HtmlSizeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HtmlSizeService>;
}
