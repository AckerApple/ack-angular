import { Subscription } from "rxjs";
import { EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
import * as i0 from "@angular/core";
export declare class ScreenWidthModel {
    HtmlSizeService: HtmlSizeService;
    sub: Subscription;
    screenWidthModel: number;
    screenWidthModelChange: EventEmitter<number>;
    constructor(HtmlSizeService: HtmlSizeService);
    changed(): void;
    hasChanged(): boolean;
    updateModel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScreenWidthModel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ScreenWidthModel, "[screenWidthModel]", never, { "screenWidthModel": "screenWidthModel"; }, { "screenWidthModelChange": "screenWidthModelChange"; }, never>;
}
