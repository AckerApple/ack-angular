import { __decorate, __metadata } from "tslib";
import { Component, Directive, ElementRef, TemplateRef, ContentChild } from "@angular/core";
import { string as readerHeaderBody } from "./templates/reader-header-body.pug";
let ReaderHeaderBody = class ReaderHeaderBody {
};
__decorate([
    ContentChild('reader-header'),
    __metadata("design:type", TemplateRef)
], ReaderHeaderBody.prototype, "readerHeader", void 0);
ReaderHeaderBody = __decorate([
    Component({
        selector: 'reader-header-body',
        template: readerHeaderBody
    })
], ReaderHeaderBody);
export { ReaderHeaderBody };
let ReaderHeader = class ReaderHeader {
};
ReaderHeader = __decorate([
    Directive({
        selector: 'reader-header'
    })
], ReaderHeader);
export { ReaderHeader };
let ReaderBody = class ReaderBody {
    constructor(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
};
__decorate([
    ContentChild('reader-header'),
    __metadata("design:type", TemplateRef)
], ReaderBody.prototype, "readerHeader", void 0);
ReaderBody = __decorate([
    Directive({
        selector: "reader-body"
    }),
    __metadata("design:paramtypes", [ElementRef])
], ReaderBody);
export { ReaderBody };
