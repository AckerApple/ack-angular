import { Injectable } from '@angular/core';
function getDocument() { return document; }
var DocumentService = /** @class */ (function () {
    function DocumentService() {
    }
    Object.defineProperty(DocumentService.prototype, "nativeElement", {
        get: function () { return getDocument(); },
        enumerable: false,
        configurable: true
    });
    DocumentService.decorators = [
        { type: Injectable }
    ];
    return DocumentService;
}());
export { DocumentService };
//# sourceMappingURL=DocumentService.js.map