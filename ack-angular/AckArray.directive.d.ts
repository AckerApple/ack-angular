import { EventEmitter } from '@angular/core';
export declare class AckArray {
    idKey: any;
    ref: any;
    refChange: EventEmitter<{}>;
    pages: any[];
    pagesChange: EventEmitter<{}>;
    pageAt: number;
    array: any[];
    arrayChange: EventEmitter<{}>;
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    createPages(): void;
    getItemId(item: any): any;
    getCompareArray(): any[];
    selected(item: any): boolean;
    itemIndex(item: any): number;
    toggle(item: any): this;
    push(item: any): this;
    unshift(item: any): this;
    splice(x: number, y?: number): this;
    param(): any[];
}
