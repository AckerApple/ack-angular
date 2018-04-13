import { TemplateRef, ElementRef } from "@angular/core";
import { AckModal } from "../components/AckModal.component";
import { AckApp as AckAppComponent } from "../components/AckApp.component";
import { Prompts } from "./Prompts";
export declare class AckApp {
    prompts: Prompts;
    warnedFixElements: boolean;
    fixedElementStage: ElementRef;
    Component: AckAppComponent;
    modals: AckModal[];
    appHeaderTemplates: TemplateRef<any>[];
    appFooterTemplates: TemplateRef<any>[];
    constructor(prompts: Prompts);
    registerModal(item: AckModal): AckApp;
    unregisterModal(item: AckModal): this;
    unregisterAppHeaderTemplate(item: TemplateRef<any>): void;
    unregisterAppFooterTemplate(item: TemplateRef<any>): void;
}
