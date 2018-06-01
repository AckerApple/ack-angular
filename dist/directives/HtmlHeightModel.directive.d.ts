import { EventEmitter } from "@angular/core";
import { htmlSize, HtmlSizeService } from "./HtmlSizeWatcher";
import { HtmlWidthModel } from "./HtmlWidthModel.directive";
export declare class HtmlHeightModel extends HtmlWidthModel {
    HtmlSizeService: HtmlSizeService;
    htmlHeightModel: number;
    htmlHeightModelChange: EventEmitter<number>;
    constructor(HtmlSizeService: HtmlSizeService);
    hasChanged(): boolean;
    setModel(model: htmlSize): void;
}
