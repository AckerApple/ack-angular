import { EventEmitter } from '@angular/core';
export declare class AckArray {
    idKey: any;
    array: any[];
    ref: any;
    refChange: EventEmitter<{}>;
    ngOnInit(): void;
    getItemId(item: any): any;
    getCompareArray(): any[];
    selected(item: any): boolean;
    itemIndex(item: any): number;
    toggle(item: any): any[];
}
