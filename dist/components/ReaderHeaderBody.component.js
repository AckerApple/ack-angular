"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var reader_header_body_pug_1 = require("./templates/reader-header-body.pug");
var ReaderHeaderBody = (function () {
    function ReaderHeaderBody() {
    }
    ReaderHeaderBody.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'reader-header-body',
                    template: reader_header_body_pug_1.string
                },] },
    ];
    ReaderHeaderBody.ctorParameters = function () { return []; };
    return ReaderHeaderBody;
}());
exports.ReaderHeaderBody = ReaderHeaderBody;
var ReaderHeader = (function () {
    function ReaderHeader() {
    }
    ReaderHeader.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'reader-header'
                },] },
    ];
    ReaderHeader.ctorParameters = function () { return []; };
    return ReaderHeader;
}());
exports.ReaderHeader = ReaderHeader;
var ReaderBody = (function () {
    function ReaderBody(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
    ReaderBody.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "reader-body"
                },] },
    ];
    ReaderBody.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return ReaderBody;
}());
exports.ReaderBody = ReaderBody;
