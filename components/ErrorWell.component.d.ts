import { EventEmitter, TemplateRef, ElementRef } from "@angular/core";
export declare class ErrorWell {
    errorClose: any;
    message: string;
    error: any;
    cssClasses: string;
    closable: boolean;
    allowDetails: boolean;
    close: EventEmitter<void>;
    titleFooter: TemplateRef<ElementRef>;
    ngOnInit(): void;
    getErrorMessage(error: Error): any;
}
