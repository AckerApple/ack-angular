"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentService = void 0;
var core_1 = require("@angular/core");
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
        { type: core_1.Injectable }
    ];
    return DocumentService;
}());
exports.DocumentService = DocumentService;
//# sourceMappingURL=DocumentService.js.map