import { Subscription } from "rxjs";
import { EventEmitter } from "@angular/core";
import { htmlSize, HtmlSizeService } from "./HtmlSizeWatcher";
import * as i0 from "@angular/core";
export declare class HtmlWidthModel {
    HtmlSizeService: HtmlSizeService;
    sub: Subscription;
    htmlWidthModel?: number | null;
    htmlWidthModelChange: EventEmitter<number | null>;
    constructor(HtmlSizeService: HtmlSizeService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    changed(): void;
    hasChanged(): boolean;
    setModel(htmlSize: htmlSize): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HtmlWidthModel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HtmlWidthModel, "[htmlWidthModel]", never, { "htmlWidthModel": "htmlWidthModel"; }, { "htmlWidthModelChange": "htmlWidthModelChange"; }, never>;
}
