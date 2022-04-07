import { EventEmitter, TemplateRef, ElementRef, QueryList } from "@angular/core";
import * as i0 from "@angular/core";
export declare class DebugItem {
    name: string;
    value: any;
    type: "array" | string;
    rowTitle: TemplateRef<ElementRef>;
    save: EventEmitter<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DebugItem, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DebugItem, "debug-item", never, { "name": "name"; "value": "value"; "type": "type"; }, { "save": "save"; }, ["rowTitle"]>;
}
export declare class DebugArea {
    edit: boolean;
    dataString: string;
    editsMap?: any;
    debugItem: DebugItem;
    DebugItems: QueryList<DebugItem>;
    ngAfterViewInit(): void;
    updateDataByJsonString(item: any, string: string, debugItem: DebugItem): void;
    apply(item: any, json: string, debugItem: DebugItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DebugArea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DebugArea, "debug-area", never, {}, {}, ["DebugItems"], never>;
}
export declare const debugDeclarations: (typeof DebugItem | typeof DebugArea)[];
