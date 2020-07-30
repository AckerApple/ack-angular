import { Component, Directive, ElementRef, TemplateRef, ContentChild } from "@angular/core";
import { string as readerHeaderBody } from "./templates/reader-header-body.pug";
export class ReaderHeaderBody {
}
ReaderHeaderBody.decorators = [
    { type: Component, args: [{
                selector: 'reader-header-body',
                template: readerHeaderBody
            },] }
];
ReaderHeaderBody.propDecorators = {
    readerHeader: [{ type: ContentChild, args: ['reader-header',] }]
};
export class ReaderHeader {
}
ReaderHeader.decorators = [
    { type: Directive, args: [{
                selector: 'reader-header'
            },] }
];
export class ReaderBody {
    constructor(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
}
ReaderBody.decorators = [
    { type: Directive, args: [{
                selector: "reader-body"
            },] }
];
ReaderBody.ctorParameters = () => [
    { type: ElementRef }
];
ReaderBody.propDecorators = {
    readerHeader: [{ type: ContentChild, args: ['reader-header',] }]
};
