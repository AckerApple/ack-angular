import { Subscription } from "rxjs";
import { EventEmitter } from "@angular/core";
import { htmlSize, HtmlSizeService } from "./HtmlSizeWatcher";
export declare class HtmlHeightModel {
    HtmlSizeService: HtmlSizeService;
    sub: Subscription;
    htmlHeightModel: number;
    htmlHeightModelChange: EventEmitter<number>;
    constructor(HtmlSizeService: HtmlSizeService);
    changed(): void;
    hasChanged(): boolean;
    setModel(model: htmlSize): void;
}
