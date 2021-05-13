import { ContentChild, Component, Input, ElementRef, TemplateRef } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
import { string } from "./templates/ack-sections.pug";
var AckSections = /** @class */ (function () {
    function AckSections(SectionProvider, ElementRef) {
        this.SectionProvider = SectionProvider;
        this.ElementRef = ElementRef;
        //clone is more performant in most cases but things duplicate like requests and timers may result
        this.mode = "calculate";
        this.zIndex = 19;
        var elmStyle = ElementRef.nativeElement.style;
        elmStyle.height = "100%";
        elmStyle.display = "block";
    }
    AckSections.decorators = [
        { type: Component, args: [{
                    selector: 'ack-sections',
                    template: string,
                    providers: [SectionProvider]
                    //,exportAs:"AckSections"
                },] }
    ];
    AckSections.ctorParameters = function () { return [
        { type: SectionProvider },
        { type: ElementRef }
    ]; };
    AckSections.propDecorators = {
        mode: [{ type: Input }],
        zIndex: [{ type: Input }],
        table: [{ type: ContentChild, args: ["table",] }],
        headerWrap: [{ type: ContentChild, args: ["headerWrap",] }],
        bodyCell: [{ type: ContentChild, args: ["bodyCell",] }],
        leftBodyWrap: [{ type: ContentChild, args: ["leftBodyWrap",] }],
        rightBodyWrap: [{ type: ContentChild, args: ["rightBodyWrap",] }]
    };
    return AckSections;
}());
export { AckSections };
//# sourceMappingURL=AckSections.component.js.map