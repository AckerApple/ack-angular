import { Subscription } from "rxjs/internal/Subscription";
import { EventEmitter } from "@angular/core";
export declare class AckArray {
    idKeys: string[];
    merge: boolean;
    array: any[];
    arrayChange: EventEmitter<{}>;
    array$: EventEmitter<any[]>;
    array$sub: Subscription;
    ngOnDestroy(): void;
    ngOnChanges(changes: any): void;
    loop(_reset?: boolean): void;
}
export declare function dataKeysMatch(ao: any, an: any, idKeys: string[]): boolean;
export declare function mergeArrays(arrayOriginal: any[], arrayNew: any[], idKeys: string[]): void;
