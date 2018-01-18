import { EventEmitter } from "@angular/core";
import { HtmlSizeWatcher } from "./HtmlSizeWatcher";
export declare class HtmlHeightModel extends HtmlSizeWatcher {
    htmlHeightModel: any;
    htmlHeightModelChange: EventEmitter<{}>;
    hasChanged(): boolean;
    setModel(): void;
}
