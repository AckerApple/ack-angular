import { TemplateRef } from "@angular/core";
import { TemplateReader } from "../TemplateReader.class";
export declare class TemplateSwitch {
    templateRef: TemplateRef<any>;
    template: string;
    templates: TemplateRef<any>[];
    TemplateReader: TemplateReader;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
}
