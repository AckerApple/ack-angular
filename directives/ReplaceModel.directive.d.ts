import { EventEmitter } from "@angular/core";
export declare class ReplaceModel {
    replaceModel: string;
    replaceModelChange: EventEmitter<string>;
    replaceExpression: string;
    ngOnChanges(changes: any): void;
    run(): void;
}
