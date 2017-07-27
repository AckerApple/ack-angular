import { EventEmitter } from '@angular/core';
export declare class AckArray {
    idKey: any;
    ref: any;
    refChange: EventEmitter<{}>;
    array: any[];
    arrayChange: EventEmitter<{}>;
    ngOnInit(): void;
    getItemId(item: any): any;
    getCompareArray(): any[];
    selected(item: any): boolean;
    itemIndex(item: any): number;
    toggle(item: any): any[] | this;
    push(item: any): this;
    unshift(item: any): this;
    param(): any[];
}
