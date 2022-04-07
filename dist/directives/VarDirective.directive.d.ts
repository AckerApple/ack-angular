import { EventEmitter } from "@angular/core";
export declare class VarDirective {
    var: any;
    changed: EventEmitter<any>;
    ngOnChanges(changes: any): void;
}
