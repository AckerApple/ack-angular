import { EventEmitter, TemplateRef, ElementRef, QueryList } from "@angular/core";
export declare class DebugItem {
    name: string;
    value: any;
    type: "array" | string;
    rowTitle: TemplateRef<ElementRef>;
    save: EventEmitter<any>;
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
}
export declare const declarations: (typeof DebugItem | typeof DebugArea)[];
