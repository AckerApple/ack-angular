import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class ReplaceModel {
    replaceModel: string;
    replaceModelChange: EventEmitter<string>;
    replaceExpression: string;
    ngOnChanges(changes: any): void;
    run(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReplaceModel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ReplaceModel, "[replaceModel]", never, { "replaceModel": "replaceModel"; "replaceExpression": "replaceExpression"; }, { "replaceModelChange": "replaceModelChange"; }, never, never, false>;
}
