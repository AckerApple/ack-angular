import { Subscription } from "rxjs";
import { EventEmitter } from "@angular/core";
import { htmlSize, HtmlSizeService } from "./HtmlSizeWatcher";
export declare class ScreenHeightModel {
    HtmlSizeService: HtmlSizeService;
    sub: Subscription;
    screenHeightModel: number;
    screenHeightModelChange: EventEmitter<number>;
    constructor(HtmlSizeService: HtmlSizeService);
    changed(): void;
    hasChanged(): boolean;
    setModel(model: htmlSize): void;
}
