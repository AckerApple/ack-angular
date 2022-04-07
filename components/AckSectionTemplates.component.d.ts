import { TemplateRef } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
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
}
