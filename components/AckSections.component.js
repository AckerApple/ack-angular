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
var AckSections_provider_1 = require("../providers/AckSections.provider");
var ack_sections_pug_1 = require("./templates/ack-sections.pug");
var AckSections = (function () {
    function AckSections(SectionProvider, ElementRef) {
        this.SectionProvider = SectionProvider;
        this.ElementRef = ElementRef;
        this.mode = "calculate";
        this.zIndex = 19;
        var elmStyle = ElementRef.nativeElement.style;
        elmStyle.height = "100%";
        elmStyle.display = "block";
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AckSections.prototype, "mode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AckSections.prototype, "zIndex", void 0);
    __decorate([
        core_1.ContentChild("table"),
        __metadata("design:type", core_1.TemplateRef)
    ], AckSections.prototype, "table", void 0);
    __decorate([
        core_1.ContentChild("headerWrap"),
        __metadata("design:type", core_1.TemplateRef)
    ], AckSections.prototype, "headerWrap", void 0);
    __decorate([
        core_1.ContentChild("bodyCell"),
        __metadata("design:type", core_1.TemplateRef)
    ], AckSections.prototype, "bodyCell", void 0);
    __decorate([
        core_1.ContentChild("leftBodyWrap"),
        __metadata("design:type", core_1.TemplateRef)
    ], AckSections.prototype, "leftBodyWrap", void 0);
    __decorate([
        core_1.ContentChild("rightBodyWrap"),
        __metadata("design:type", core_1.TemplateRef)
    ], AckSections.prototype, "rightBodyWrap", void 0);
    AckSections = __decorate([
        core_1.Component({
            selector: 'ack-sections',
            template: ack_sections_pug_1.string,
            providers: [AckSections_provider_1.SectionProvider]
        }),
        __metadata("design:paramtypes", [AckSections_provider_1.SectionProvider,
            core_1.ElementRef])
    ], AckSections);
    return AckSections;
}());
exports.AckSections = AckSections;
