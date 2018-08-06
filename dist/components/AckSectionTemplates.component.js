"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckSections_provider_1 = require("../providers/AckSections.provider");
var AckSectionTemplates = (function () {
    function AckSectionTemplates(SectionProvider) {
        this.SectionProvider = SectionProvider;
    }
    AckSectionTemplates.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.check();
            _this.inited = true;
        }, 0);
    };
    AckSectionTemplates.prototype.ngOnChanges = function (changes) {
        if (this.inited) {
            this.check();
        }
    };
    AckSectionTemplates.prototype.check = function () {
        if (this.pushed)
            return;
        this.SectionProvider.headerTemplates.unshift(this.header);
        this.SectionProvider.footerTemplates.unshift(this.footer);
        this.pushed = true;
    };
    AckSectionTemplates.prototype.ngOnDestroy = function () {
        this.unregister();
    };
    AckSectionTemplates.prototype.unregister = function () {
        this.pushed = false;
        this.SectionProvider.unregisterHeaderTemplate(this.header);
        this.SectionProvider.unregisterFooterTemplate(this.footer);
    };
    AckSectionTemplates.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "ack-section-templates"
                },] },
    ];
    AckSectionTemplates.ctorParameters = function () { return [
        { type: AckSections_provider_1.SectionProvider }
    ]; };
    AckSectionTemplates.propDecorators = {
        header: [{ type: core_1.ContentChild, args: ['sectionHeader',] }],
        footer: [{ type: core_1.ContentChild, args: ['sectionFooter',] }]
    };
    return AckSectionTemplates;
}());
exports.AckSectionTemplates = AckSectionTemplates;
