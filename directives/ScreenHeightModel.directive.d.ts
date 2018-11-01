import { Subscription } from "rxjs";
import { EventEmitter } from "@angular/core";
import { htmlSize, HtmlSizeService } from "./HtmlSizeWatcher";
export declare class ScreenHeightModel {
    HtmlSizeService: HtmlSizeService;
    sub: Subscription;
    model: number;
    modelChange: EventEmitter<number>;
    constructor(HtmlSizeService: HtmlSizeService);
    ngAfterViewInit(): void;
    delayCheck(num?: number): void;
    changed(): void;
    hasChanged(): boolean;
    setModel(model: htmlSize): void;
}
