"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var reader_header_body_pug_1 = require("./templates/reader-header-body.pug");
var ReaderHeaderBody = (function () {
    function ReaderHeaderBody() {
    }
    __decorate([
        core_1.ContentChild('reader-header'),
        __metadata("design:type", core_1.TemplateRef)
    ], ReaderHeaderBody.prototype, "readerHeader", void 0);
    ReaderHeaderBody = __decorate([
        core_1.Component({
            selector: 'reader-header-body',
            template: reader_header_body_pug_1.string
        })
    ], ReaderHeaderBody);
    return ReaderHeaderBody;
}());
exports.ReaderHeaderBody = ReaderHeaderBody;
var ReaderHeader = (function () {
    function ReaderHeader() {
    }
    ReaderHeader = __decorate([
        core_1.Directive({
            selector: 'reader-header'
        })
    ], ReaderHeader);
    return ReaderHeader;
}());
exports.ReaderHeader = ReaderHeader;
var ReaderBody = (function () {
    function ReaderBody(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
    __decorate([
        core_1.ContentChild('reader-header'),
        __metadata("design:type", core_1.TemplateRef)
    ], ReaderBody.prototype, "readerHeader", void 0);
    ReaderBody = __decorate([
        core_1.Directive({
            selector: "reader-body"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ReaderBody);
    return ReaderBody;
}());
exports.ReaderBody = ReaderBody;
