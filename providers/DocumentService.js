import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
function getDocument() { return document; }
var DocumentService = /** @class */ (function () {
    function DocumentService() {
    }
    Object.defineProperty(DocumentService.prototype, "nativeElement", {
        get: function () { return getDocument(); },
        enumerable: false,
        configurable: true
    });
    DocumentService.ɵfac = function DocumentService_Factory(t) { return new (t || DocumentService)(); };
    DocumentService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DocumentService, factory: DocumentService.ɵfac });
    return DocumentService;
}());
export { DocumentService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DocumentService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=DocumentService.js.map