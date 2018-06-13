import { EventEmitter } from "@angular/core";
export declare class AckAggregate {
    type: 'sum' | string;
    keys: string[];
    output: number;
    outputChange: EventEmitter<number>;
}
