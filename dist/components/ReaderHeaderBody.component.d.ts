import { ElementRef, TemplateRef } from "@angular/core";
export declare class ReaderHeaderBody {
    readerHeader: TemplateRef<any>;
}
export declare class ReaderHeader {
}
export declare class ReaderBody {
    element: ElementRef;
    readerHeader: TemplateRef<any>;
    constructor(element: ElementRef);
}
