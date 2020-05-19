import { __decorate, __metadata } from "tslib";
import { ContentChild, Component, Input, ElementRef, TemplateRef } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
import { string } from "./templates/ack-sections.pug";
let AckSections = class AckSections {
    constructor(SectionProvider, ElementRef) {
        this.SectionProvider = SectionProvider;
        this.ElementRef = ElementRef;
        this.mode = "calculate";
        this.zIndex = 19;
        const elmStyle = ElementRef.nativeElement.style;
        elmStyle.height = "100%";
        elmStyle.display = "block";
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], AckSections.prototype, "mode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AckSections.prototype, "zIndex", void 0);
__decorate([
    ContentChild("table"),
    __metadata("design:type", TemplateRef)
], AckSections.prototype, "table", void 0);
__decorate([
    ContentChild("headerWrap"),
    __metadata("design:type", TemplateRef)
], AckSections.prototype, "headerWrap", void 0);
__decorate([
    ContentChild("bodyCell"),
    __metadata("design:type", TemplateRef)
], AckSections.prototype, "bodyCell", void 0);
__decorate([
    ContentChild("leftBodyWrap"),
    __metadata("design:type", TemplateRef)
], AckSections.prototype, "leftBodyWrap", void 0);
__decorate([
    ContentChild("rightBodyWrap"),
    __metadata("design:type", TemplateRef)
], AckSections.prototype, "rightBodyWrap", void 0);
AckSections = __decorate([
    Component({
        selector: 'ack-sections',
        template: string,
        providers: [SectionProvider]
    }),
    __metadata("design:paramtypes", [SectionProvider,
        ElementRef])
], AckSections);
export { AckSections };
