import { TemplateRef, ElementRef, QueryList } from "@angular/core";
export declare class DebugItem {
    name: string;
    value: any;
    type: "array" | string;
    rowTitle: TemplateRef<ElementRef>;
}
export declare class DebugArea {
    edit: boolean;
    dataString: string;
    editsMap: any;
    debugItem: DebugItem;
    DebugItems: QueryList<DebugItem>;
    ngAfterViewInit(): void;
    updateDataByJsonString(item: any, string: string): void;
    apply(item: any, json: string): void;
}
export declare const declarations: (typeof DebugItem | typeof DebugArea)[];
