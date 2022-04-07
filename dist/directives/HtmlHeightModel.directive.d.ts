import { EventEmitter } from "@angular/core";
import { htmlSize, HtmlSizeService } from "./HtmlSizeWatcher";
import { HtmlWidthModel } from "./HtmlWidthModel.directive";
import * as i0 from "@angular/core";
export declare class HtmlHeightModel extends HtmlWidthModel {
    HtmlSizeService: HtmlSizeService;
    htmlHeightModel: number | null;
    htmlHeightModelChange: EventEmitter<number | null>;
    constructor(HtmlSizeService: HtmlSizeService);
    hasChanged(): boolean;
    setModel(model: htmlSize): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HtmlHeightModel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HtmlHeightModel, "[htmlHeightModel]", never, { "htmlHeightModel": "htmlHeightModel"; }, { "htmlHeightModelChange": "htmlHeightModelChange"; }, never>;
}
