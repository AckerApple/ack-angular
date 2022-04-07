import { ElementRef, TemplateRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class ReaderHeaderBody {
    readerHeader: TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReaderHeaderBody, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReaderHeaderBody, "reader-header-body", never, {}, {}, ["readerHeader"], ["*"]>;
}
export declare class ReaderHeader {
    static ɵfac: i0.ɵɵFactoryDeclaration<ReaderHeader, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ReaderHeader, "reader-header", never, {}, {}, never>;
}
export declare class ReaderBody {
    element: ElementRef;
    readerHeader: TemplateRef<any>;
    constructor(element: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ReaderBody, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ReaderBody, "reader-body", never, {}, {}, ["readerHeader"]>;
}
