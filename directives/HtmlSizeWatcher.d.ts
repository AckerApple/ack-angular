import { EventEmitter } from "@angular/core";
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
}
