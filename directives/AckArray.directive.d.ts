import { BehaviorSubject, Subscription } from "rxjs";
import { EventEmitter, IterableDiffers, IterableDiffer } from "@angular/core";
import { AckAggregate } from "./AckAggregate.directive";
import * as i0 from "@angular/core";
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
    array$sub?: Subscription;
    iterableDiffer: IterableDiffer<any[]>;
    inited?: boolean;
    pushed: any;
    inSort: boolean;
    sortArray: sortDef[];
    pageAt: number;
    pages: any;
    pagesChange: BehaviorSubject<any>;
    page: number;
    pageChange: EventEmitter<number>;
    keyMap: any;
    keyMapChange: EventEmitter<any>;
    loopStart: EventEmitter<boolean>;
    loopEach: EventEmitter<loop>;
    loopEnd: EventEmitter<void>;
    AckAggregates?: AckAggregate[];
    idKeys: string[];
    merge?: boolean;
    array: any[];
    arrayChange: EventEmitter<any>;
    array$?: EventEmitter<any[]>;
    constructor(_iterableDiffers: IterableDiffers);
    ngOnDestroy(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnChanges(changes: any): void;
    pushAggregates(aggs: AckAggregate[]): void;
    getItemValueByKeys(item: any, keys: string[]): any;
    loop(reset: boolean): void;
    pushCreateMap(): void;
    /** adds to loop functionality how to create pages */
    pushCreatePages(): void;
    only(item: any): void;
    getItemId(item: any): any;
    getCompareArray(): (string | number)[];
    selected(item: any): boolean;
    itemIndex(item: any): number;
    toggle(item: any): this;
    push(item: any): this;
    unshift(item: any): this;
    splice(x: number, y?: number): this;
    param(): any[];
    toggleSort(arrayKey: string | string[], sortType?: "date" | "time" | "datetime" | "int" | "number" | string | number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AckArray, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AckArray, "ack-array", ["AckArray"], { "pageAt": "pageAt"; "pages": "pages"; "page": "page"; "keyMap": "keyMap"; "idKeys": "idKeys"; "merge": "merge"; "array": "array"; "array$": "array$"; }, { "pagesChange": "pagesChange"; "pageChange": "pageChange"; "keyMapChange": "keyMapChange"; "arrayChange": "arrayChange"; }, ["AckAggregates"], never, false>;
}
export declare function dataKeysMatch(ao: any, an: any, idKeys: string[]): boolean;
export declare function mergeArrays(arrayOriginal: any[], arrayNew: any[], idKeys: string[]): void;
