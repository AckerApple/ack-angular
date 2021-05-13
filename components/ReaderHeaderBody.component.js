"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReaderBody = exports.ReaderHeader = exports.ReaderHeaderBody = void 0;
var core_1 = require("@angular/core");
var reader_header_body_pug_1 = require("./templates/reader-header-body.pug");
//easy to use common full page templater
var ReaderHeaderBody = /** @class */ (function () {
    function ReaderHeaderBody() {
    }
    ReaderHeaderBody.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'reader-header-body',
                    template: reader_header_body_pug_1.string
                },] }
    ];
    ReaderHeaderBody.propDecorators = {
        readerHeader: [{ type: core_1.ContentChild, args: ['reader-header',] }]
    };
    return ReaderHeaderBody;
}());
exports.ReaderHeaderBody = ReaderHeaderBody;
var ReaderHeader = /** @class */ (function () {
    function ReaderHeader() {
    }
    ReaderHeader.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'reader-header'
                },] }
    ];
    return ReaderHeader;
}());
exports.ReaderHeader = ReaderHeader;
var ReaderBody = /** @class */ (function () {
    function ReaderBody(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
    ReaderBody.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "reader-body"
                },] }
    ];
    ReaderBody.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    ReaderBody.propDecorators = {
        readerHeader: [{ type: core_1.ContentChild, args: ['reader-header',] }]
    };
    return ReaderBody;
}());
exports.ReaderBody = ReaderBody;
//# sourceMappingURL=ReaderHeaderBody.component.js.map