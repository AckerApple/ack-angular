import { EventEmitter, TemplateRef, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class ErrorWell {
    errorClose: any;
    moreDetails: boolean;
    message: string;
    error: Error;
    cssClasses: string;
    closable: boolean;
    allowDetails: boolean;
    close: EventEmitter<void>;
    titleFooter: TemplateRef<ElementRef>;
    ngOnInit(): void;
    getErrorMessage(error: Error): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorWell, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErrorWell, "error-well", never, { "moreDetails": "moreDetails"; "message": "message"; "error": "error"; "cssClasses": "cssClasses"; "closable": "closable"; "allowDetails": "allowDetails"; }, { "close": "close"; }, ["titleFooter"], never, false>;
}
