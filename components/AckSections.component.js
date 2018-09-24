"use strict";
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
    AckSections.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-sections',
                    template: ack_sections_pug_1.string,
                    providers: [AckSections_provider_1.SectionProvider],
                    exportAs: "AckSections"
                },] },
    ];
    AckSections.ctorParameters = function () { return [
        { type: AckSections_provider_1.SectionProvider },
        { type: core_1.ElementRef }
    ]; };
    AckSections.propDecorators = {
        mode: [{ type: core_1.Input }],
        zIndex: [{ type: core_1.Input }],
        header: [{ type: core_1.ContentChild, args: ["header",] }],
        footer: [{ type: core_1.ContentChild, args: ["footer",] }],
        leftBodyWrap: [{ type: core_1.ContentChild, args: ["leftBodyWrap",] }],
        leftBody: [{ type: core_1.ContentChild, args: ["leftBody",] }],
        rightBodyWrap: [{ type: core_1.ContentChild, args: ["rightBodyWrap",] }],
        rightBody: [{ type: core_1.ContentChild, args: ["rightBody",] }]
    };
    return AckSections;
}());
exports.AckSections = AckSections;
