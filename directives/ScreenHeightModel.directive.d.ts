import { EventEmitter } from "@angular/core";
import { HtmlSizeWatcher } from "./HtmlSizeWatcher";
export declare class ScreenHeightModel extends HtmlSizeWatcher {
    screenHeightModel: number;
    screenHeightModelChange: EventEmitter<number>;
    hasChanged(): boolean;
    setModel(): void;
}
