import { Subscription } from "rxjs";
import { EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
import * as i0 from "@angular/core";
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
    updateModel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScreenHeightModel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ScreenHeightModel, "[screenHeightModel]", ["ScreenHeightModel"], { "model": "screenHeightModel"; }, { "modelChange": "screenHeightModelChange"; }, never>;
}
