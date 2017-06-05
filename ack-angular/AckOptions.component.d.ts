import { TemplateRef, EventEmitter } from "@angular/core";
export declare class AckOptions {
    array: any[];
    stylize: boolean;
    multiple: boolean;
    toggleable: boolean;
    model: any;
    modelChange: EventEmitter<{}>;
    templateRef: TemplateRef<any>;
    private ref;
    refChange: EventEmitter<{}>;
    ngOnInit(): void;
    selectItem(item: any): void;
    modelIndex(item: any): number;
}
