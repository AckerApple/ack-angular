import { ElementRef, EventEmitter } from "@angular/core";
import { TemplateReader } from "../TemplateReader.class";
export declare class AckOptions {
    ElementRef: ElementRef;
    array: never[];
    stylize: boolean;
    multiple: boolean;
    modelAsArray: boolean;
    max: number;
    toggleable: boolean;
    TemplateReader: TemplateReader;
    templateRefs: any;
    inputTemplateRefs: any;
    model: any;
    modelChange: EventEmitter<any>;
    arrayKey: string;
    modelKey: string;
    arrayToModelKey: string;
    constructor(ElementRef: ElementRef);
    ngAfterViewInit(): void;
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
