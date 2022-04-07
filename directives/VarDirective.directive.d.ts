import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class VarDirective {
    var: any;
    changed: EventEmitter<any>;
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VarDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<VarDirective, "[var]", ["var"], { "var": "var"; }, { "changed": "changed"; }, never>;
}
