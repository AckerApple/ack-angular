import { Subscription } from "rxjs/internal/Subscription";
import { EventEmitter } from "@angular/core";
import { htmlSize, HtmlSizeService } from "./HtmlSizeWatcher";
export declare class ScreenWidthModel {
    HtmlSizeService: HtmlSizeService;
    sub: Subscription;
    screenWidthModel: number;
    screenWidthModelChange: EventEmitter<number>;
    constructor(HtmlSizeService: HtmlSizeService);
    changed(): void;
    hasChanged(): boolean;
    setModel(model: htmlSize): void;
}
