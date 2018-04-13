import { ElementRef } from "@angular/core";
import { AckModal } from "../components/AckModal.component";
import { AckApp as AckAppComponent } from "../components/AckApp.component";
import { AckAppFooter } from "../components/AckAppFooter.component";
import { Prompts } from "./Prompts";
export declare class AckApp {
    prompts: Prompts;
    warnedFixElements: boolean;
    fixedElementStage: ElementRef;
    Component: AckAppComponent;
    modals: AckModal[];
    footerPrepends: AckAppFooter[];
    constructor(prompts: Prompts);
    registerModal(item: AckModal): AckApp;
    unregisterModal(item: AckModal): this;
    unregisterFooterPrepend(item: AckAppFooter): void;
}
