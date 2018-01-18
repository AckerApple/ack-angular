import { EventEmitter } from "@angular/core";
import { HtmlSizeWatcher } from "./HtmlSizeWatcher";
export declare class ScreenWidthModel extends HtmlSizeWatcher {
    screenWidthModel: number;
    screenWidthModelChange: EventEmitter<number>;
    hasChanged(): boolean;
    setModel(): void;
}
