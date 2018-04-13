import { EventEmitter, TemplateRef, ElementRef } from "@angular/core";
export declare class AckContent {
    output: TemplateRef<any>;
    outputChange: EventEmitter<TemplateRef<any>>;
    template: TemplateRef<any>;
    outChild: ElementRef;
    ngAfterViewInit(): void;
}
