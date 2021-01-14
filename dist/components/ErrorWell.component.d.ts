import { EventEmitter, TemplateRef, ElementRef } from "@angular/core";
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
}
