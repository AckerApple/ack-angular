"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckSectionTemplates = void 0;
var core_1 = require("@angular/core");
var AckSections_provider_1 = require("../providers/AckSections.provider");
var AckSectionTemplates = /** @class */ (function () {
    function AckSectionTemplates(SectionProvider) {
        this.SectionProvider = SectionProvider;
    }
    AckSectionTemplates.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            _this.check();
            _this.inited = true;
        });
    };
    AckSectionTemplates.prototype.ngOnChanges = function () {
        if (this.inited) {
            this.check();
        }
    };
    AckSectionTemplates.prototype.check = function () {
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
    };
    AckSectionTemplates.prototype.ngOnDestroy = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.unregister(); });
    };
    AckSectionTemplates.prototype.unregister = function () {
        this.pushed = false;
        this.SectionProvider.unregisterHeaderTemplate(this.header);
        this.SectionProvider.unregisterFooterTemplate(this.footer);
        this.SectionProvider.unregisterTemplate(this.leftBody);
        this.SectionProvider.unregisterTemplate(this.rightBody);
    };
    AckSectionTemplates.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "ack-section-templates"
                },] }
    ];
    AckSectionTemplates.ctorParameters = function () { return [
        { type: AckSections_provider_1.SectionProvider }
    ]; };
    AckSectionTemplates.propDecorators = {
        header: [{ type: core_1.ContentChild, args: ['sectionHeader',] }],
        footer: [{ type: core_1.ContentChild, args: ['sectionFooter',] }],
        leftBody: [{ type: core_1.ContentChild, args: ['sectionLeftBody',] }],
        rightBody: [{ type: core_1.ContentChild, args: ['sectionRightBody',] }]
    };
    return AckSectionTemplates;
}());
exports.AckSectionTemplates = AckSectionTemplates;
//# sourceMappingURL=AckSectionTemplates.component.js.map