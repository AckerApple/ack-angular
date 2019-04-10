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
const core_1 = require("@angular/core");
const AckSections_provider_1 = require("../providers/AckSections.provider");
let AckSectionTemplates = class AckSectionTemplates {
    constructor(SectionProvider) {
        this.SectionProvider = SectionProvider;
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => {
            this.check();
            this.inited = true;
        });
    }
    ngOnChanges() {
        if (this.inited) {
            this.check();
        }
    }
    check() {
        if (this.pushed)
            return;
        if (this.header) {
            this.SectionProvider.headerTemplates.unshift(this.header);
        }
        if (this.footer) {
            this.SectionProvider.footerTemplates.unshift(this.footer);
        }
        if (this.leftBody) {
            this.SectionProvider.leftBodyTemplates.unshift(this.leftBody);
        }
        if (this.rightBody) {
            this.SectionProvider.rightBodyTemplates.unshift(this.rightBody);
        }
        this.pushed = true;
    }
    ngOnDestroy() {
        Promise.resolve().then(() => this.unregister());
    }
    unregister() {
        this.pushed = false;
        this.SectionProvider.unregisterHeaderTemplate(this.header);
        this.SectionProvider.unregisterFooterTemplate(this.footer);
        this.SectionProvider.unregisterTemplate(this.leftBody);
        this.SectionProvider.unregisterTemplate(this.rightBody);
    }
};
__decorate([
    core_1.ContentChild('sectionHeader'),
    __metadata("design:type", core_1.TemplateRef)
], AckSectionTemplates.prototype, "header", void 0);
__decorate([
    core_1.ContentChild('sectionFooter'),
    __metadata("design:type", core_1.TemplateRef)
], AckSectionTemplates.prototype, "footer", void 0);
__decorate([
    core_1.ContentChild('sectionLeftBody'),
    __metadata("design:type", core_1.TemplateRef)
], AckSectionTemplates.prototype, "leftBody", void 0);
__decorate([
    core_1.ContentChild('sectionRightBody'),
    __metadata("design:type", core_1.TemplateRef)
], AckSectionTemplates.prototype, "rightBody", void 0);
AckSectionTemplates = __decorate([
    core_1.Directive({
        selector: "ack-section-templates"
    }),
    __metadata("design:paramtypes", [AckSections_provider_1.SectionProvider])
], AckSectionTemplates);
exports.AckSectionTemplates = AckSectionTemplates;
