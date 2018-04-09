import { EventEmitter } from "@angular/core";
import { AckAggregate } from "./AckAggregate.directive";
export interface loop {
    index: number;
    item: any;
}
export declare class AckArray {
    inited: boolean;
    pushed: any;
    idKey: any;
    ref: any;
    refChange: EventEmitter<{}>;
    pageAt: number;
    pages: any[];
    pagesChange: EventEmitter<{}>;
    array: any[];
    arrayChange: EventEmitter<{}>;
    keyMap: any;
    keyMapChange: EventEmitter<{}>;
    loopStart: EventEmitter<void>;
    loopEach: EventEmitter<loop>;
    loopEnd: EventEmitter<void>;
    AckAggregates: AckAggregate[];
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    pushAggregates(aggs: AckAggregate[]): void;
    getItemValueByKeys(item: any, keys: string[]): any;
    loop(): void;
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
}
