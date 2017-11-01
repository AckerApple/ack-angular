import { TemplateRef, EventEmitter } from "@angular/core";
export declare class AckOptions {
    array: any[];
    stylize: boolean;
    multiple: boolean;
    toggleable: boolean;
    templateRef: TemplateRef<any>;
    model: any;
    modelChange: EventEmitter<{}>;
    ref: any;
    refChange: EventEmitter<{}>;
    arrayKey: string;
    modelKey: string;
    arrayToModelKey: string;
    ngOnInit(): void;
    selectItem(item: any): void;
    emitChange(): void;
    fireFormEvents(form: any): void;
    getArrayItemModel(item: any): any;
    getArrayItemValue(item: any): any;
    getModelValueToArrayItem(modelValue: any): any;
    modelIndex(item: any): number;
    isItemSelected(item: any): boolean;
    getItemClass(item: any): string;
}
export declare function getParentByTagName(node: any, tagname: any): any;
