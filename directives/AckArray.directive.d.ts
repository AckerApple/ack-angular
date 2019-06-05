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
import { AckArray as AckArrayClass } from './AckArray.class';
export declare class AckArray extends AckArrayClass {
    private _iterableDiffers;
    iterableDiffer: IterableDiffer<any[]>;
    inited: boolean;
    pushed: any;
    inSort: boolean;
    sortArray: sortDef[];
    pageAt: number;
    pages: any[][];
    pagesChange: BehaviorSubject<any[][]>;
    page: number;
    pageChange: EventEmitter<number>;
    keyMap: any;
    keyMapChange: EventEmitter<{}>;
    loopStart: EventEmitter<boolean>;
    loopEach: EventEmitter<loop>;
    loopEnd: EventEmitter<void>;
    AckAggregates: AckAggregate[];
    idKeys: string[];
    merge: boolean;
    array: any[];
    arrayChange: EventEmitter<{}>;
    array$: EventEmitter<any[]>;
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
    getItemId(item: any): any;
    getCompareArray(): (string | number)[];
    itemIndex(item: any): number;
    toggle(item: any): this;
    push(item: any): this;
    unshift(item: any): this;
    splice(x: number, y?: number): this;
    param(): any[];
    toggleSort(arrayKey: string | string[], sortType: "date" | "time" | "datetime" | "int" | "number" | string | number): boolean;
}
