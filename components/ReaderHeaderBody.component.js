import { Component, Directive, ElementRef, TemplateRef, ContentChild } from "@angular/core";
import { string as readerHeaderBody } from "./templates/reader-header-body.pug";
//easy to use common full page templater
var ReaderHeaderBody = /** @class */ (function () {
    function ReaderHeaderBody() {
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
    return ReaderHeaderBody;
}());
export { ReaderHeaderBody };
var ReaderHeader = /** @class */ (function () {
    function ReaderHeader() {
    }
    ReaderHeader.decorators = [
        { type: Directive, args: [{
                    selector: 'reader-header'
                },] }
    ];
    return ReaderHeader;
}());
export { ReaderHeader };
var ReaderBody = /** @class */ (function () {
    function ReaderBody(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
    ReaderBody.decorators = [
        { type: Directive, args: [{
                    selector: "reader-body"
                },] }
    ];
    ReaderBody.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ReaderBody.propDecorators = {
        readerHeader: [{ type: ContentChild, args: ['reader-header',] }]
    };
    return ReaderBody;
}());
export { ReaderBody };
//# sourceMappingURL=ReaderHeaderBody.component.js.map