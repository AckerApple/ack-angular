import { ContentChild, Component, Input, ElementRef, TemplateRef } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
import { string } from "./templates/ack-sections.pug";
export class AckSections {
    constructor(SectionProvider, ElementRef) {
        this.SectionProvider = SectionProvider;
        this.ElementRef = ElementRef;
        this.mode = "calculate";
        this.zIndex = 19;
        const elmStyle = ElementRef.nativeElement.style;
        elmStyle.height = "100%";
        elmStyle.display = "block";
    }
}
AckSections.decorators = [
    { type: Component, args: [{
                selector: 'ack-sections',
                template: string,
                providers: [SectionProvider]
            },] }
];
AckSections.ctorParameters = () => [
    { type: SectionProvider },
    { type: ElementRef }
];
AckSections.propDecorators = {
    mode: [{ type: Input }],
    zIndex: [{ type: Input }],
    table: [{ type: ContentChild, args: ["table",] }],
    headerWrap: [{ type: ContentChild, args: ["headerWrap",] }],
    bodyCell: [{ type: ContentChild, args: ["bodyCell",] }],
    leftBodyWrap: [{ type: ContentChild, args: ["leftBodyWrap",] }],
    rightBodyWrap: [{ type: ContentChild, args: ["rightBodyWrap",] }]
};
