import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { EventEmitter, IterableDiffers, IterableDiffer } from "@angular/core";
import { AckAggregate } from "./AckAggregate.directive";
export interface sortDef {
    arrayKey: string | string[];
    asc: boolean;
}
export interface loop {
    index: number;
    item: any;
}
export declare class AckArray {
    private _iterableDiffers;
    iterableDiffer: IterableDiffer<any[]>;
    inited: boolean;
    pushed: any;
    inSort: boolean;
    sortArray: sortDef[];
    idKey: any;
    pageAt: number;
    pages: any[][];
    pagesChange: BehaviorSubject<any[][]>;
    page: number;
    pageChange: EventEmitter<number>;
    array: any[];
    arrayChange: EventEmitter<{}>;
    keyMap: any;
    keyMapChange: EventEmitter<{}>;
    loopStart: EventEmitter<boolean>;
    loopEach: EventEmitter<loop>;
    loopEnd: EventEmitter<void>;
    AckAggregates: AckAggregate[];
    constructor(_iterableDiffers: IterableDiffers);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnChanges(changes: any): void;
    pushAggregates(aggs: AckAggregate[]): void;
    getItemValueByKeys(item: any, keys: string[]): any;
    loop(reset: boolean): void;
    pushCreateMap(): void;
    pushCreatePages(): void;
    only(item: any): void;
    getItemId(item: any, itemIndexName?: string): any;
    getCompareArray(): any[];
    selected(item: any): boolean;
    itemIndex(item: any, itemIndexName?: string): number;
    toggle(item: any): this;
    push(item: any): this;
    unshift(item: any): this;
    splice(x: number, y?: number): this;
    param(): any[];
    toggleSort(arrayKey: string | string[], sortType: "date" | "time" | "datetime" | "int" | "number" | string | number): boolean;
}
