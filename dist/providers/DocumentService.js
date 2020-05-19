import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
function getDocument() { return document; }
let DocumentService = class DocumentService {
    get nativeElement() { return getDocument(); }
};
DocumentService = __decorate([
    Injectable()
], DocumentService);
export { DocumentService };
