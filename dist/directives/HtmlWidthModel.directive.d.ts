import { Subscription } from "rxjs/internal/Subscription";
import { EventEmitter } from "@angular/core";
import { htmlSize, HtmlSizeService } from "./HtmlSizeWatcher";
export declare class HtmlWidthModel {
    HtmlSizeService: HtmlSizeService;
    sub: Subscription;
    htmlWidthModel: number;
    htmlWidthModelChange: EventEmitter<number>;
    constructor(HtmlSizeService: HtmlSizeService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    changed(): void;
    hasChanged(): boolean;
    setModel(htmlSize: htmlSize): void;
}
