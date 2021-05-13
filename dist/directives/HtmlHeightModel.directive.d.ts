import { EventEmitter } from "@angular/core";
import { htmlSize, HtmlSizeService } from "./HtmlSizeWatcher";
import { HtmlWidthModel } from "./HtmlWidthModel.directive";
export declare class HtmlHeightModel extends HtmlWidthModel {
    HtmlSizeService: HtmlSizeService;
    htmlHeightModel: number | null;
    htmlHeightModelChange: EventEmitter<number | null>;
    constructor(HtmlSizeService: HtmlSizeService);
    hasChanged(): boolean;
    setModel(model: htmlSize): void;
}
