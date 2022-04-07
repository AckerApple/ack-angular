import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class AckAggregate {
    type: 'sum' | string;
    keys: string[];
    output: number;
    outputChange: EventEmitter<number>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AckAggregate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AckAggregate, "ack-aggregate", never, { "type": "type"; "keys": "keys"; "output": "output"; }, { "outputChange": "outputChange"; }, never>;
}
