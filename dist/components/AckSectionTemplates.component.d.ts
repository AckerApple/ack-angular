import { TemplateRef } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
import * as i0 from "@angular/core";
export declare class AckSectionTemplates {
    SectionProvider: SectionProvider;
    inited: boolean;
    pushed: boolean;
    header: TemplateRef<any>;
    footer: TemplateRef<any>;
    leftBody: TemplateRef<any>;
    rightBody: TemplateRef<any>;
    constructor(SectionProvider: SectionProvider);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    check(): void;
    ngOnDestroy(): void;
    unregister(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AckSectionTemplates, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AckSectionTemplates, "ack-section-templates", never, {}, {}, ["header", "footer", "leftBody", "rightBody"]>;
}
