import { EventEmitter } from "@angular/core";
import { HtmlSizeWatcher } from "./HtmlSizeWatcher";
export declare class HtmlWidthModel extends HtmlSizeWatcher {
    htmlWidthModel: any;
    htmlWidthModelChange: EventEmitter<{}>;
    hasChanged(): boolean;
    setModel(): void;
}
