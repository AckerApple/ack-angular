"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SectionProvider = (function () {
    function SectionProvider() {
        this.headerTemplates = [];
        this.footerTemplates = [];
    }
    SectionProvider.prototype.unregisterHeaderTemplate = function (item) {
        for (var x = this.headerTemplates.length - 1; x >= 0; --x) {
            if (this.headerTemplates[x] === item) {
                this.headerTemplates.splice(x, 1);
                break;
            }
        }
    };
    SectionProvider.prototype.unregisterFooterTemplate = function (item) {
        for (var x = this.footerTemplates.length - 1; x >= 0; --x) {
            if (this.footerTemplates[x] === item) {
                this.footerTemplates.splice(x, 1);
                break;
            }
        }
    };
    SectionProvider.decorators = [
        { type: core_1.Injectable },
    ];
    return SectionProvider;
}());
exports.SectionProvider = SectionProvider;
