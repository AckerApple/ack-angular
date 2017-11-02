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
    return DocumentService;
}());
exports.DocumentService = DocumentService;
