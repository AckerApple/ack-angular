"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
function getDocument() { return document; }
var DocumentService = (function () {
    function DocumentService() {
    }
    Object.defineProperty(DocumentService.prototype, "nativeElement", {
        get: function () { return getDocument(); },
        enumerable: true,
        configurable: true
    });
    DocumentService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    DocumentService.ctorParameters = function () { return []; };
    return DocumentService;
}());
exports.DocumentService = DocumentService;
//# sourceMappingURL=DocumentService.js.map