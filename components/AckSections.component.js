"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckSections_provider_1 = require("../providers/AckSections.provider");
var ack_sections_pug_1 = require("./templates/ack-sections.pug");
var AckSections = (function () {
    function AckSections(SectionProvider, ElementRef) {
        this.SectionProvider = SectionProvider;
        this.ElementRef = ElementRef;
        this.zIndex = 30;
        this.headerHeightChange = new core_1.EventEmitter();
        this.footerHeightChange = new core_1.EventEmitter();
        ElementRef.nativeElement.style.height = '100%';
        ElementRef.nativeElement.style.display = 'block';
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
        headerHeight: [{ type: core_1.Input }],
        headerHeightChange: [{ type: core_1.Output }],
        footerHeight: [{ type: core_1.Input }],
        footerHeightChange: [{ type: core_1.Output }],
        header: [{ type: core_1.ContentChild, args: ["header",] }],
        footer: [{ type: core_1.ContentChild, args: ["footer",] }]
    };
    return AckSections;
}());
exports.AckSections = AckSections;
