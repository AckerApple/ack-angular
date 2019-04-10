"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SectionProvider = (function () {
    function SectionProvider() {
        this.headerTemplates = [];
        this.footerTemplates = [];
        this.leftBodyTemplates = [];
        this.rightBodyTemplates = [];
    }
    SectionProvider.prototype.unregisterHeaderTemplate = function (item) {
        this.unregisterTemplateFrom(item, this.headerTemplates);
    };
    SectionProvider.prototype.unregisterFooterTemplate = function (item) {
        this.unregisterTemplateFrom(item, this.footerTemplates);
    };
    SectionProvider.prototype.unregisterTemplateFrom = function (item, templates) {
        for (var x = templates.length - 1; x >= 0; --x) {
            if (templates[x] === item) {
                templates.splice(x, 1);
                break;
            }
        }
    };
    SectionProvider.prototype.unregisterTemplate = function (item) {
        this.unregisterTemplateFrom(item, this.headerTemplates);
        this.unregisterTemplateFrom(item, this.footerTemplates);
        this.unregisterTemplateFrom(item, this.leftBodyTemplates);
        this.unregisterTemplateFrom(item, this.rightBodyTemplates);
    };
    SectionProvider = __decorate([
        core_1.Injectable()
    ], SectionProvider);
    return SectionProvider;
}());
exports.SectionProvider = SectionProvider;
