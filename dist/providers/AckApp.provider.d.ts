import { ElementRef } from "@angular/core";
import { AckModal } from "../components/AckModal.component";
import { AckFixedElement } from "../components/AckFixedElement.component";
import { Prompts } from "./Prompts";
import * as i0 from "@angular/core";
export declare class AckApp {
    prompts: Prompts;
    warnedFixElements: boolean;
    fixedElementStage: ElementRef;
    fixedElms: AckFixedElement[];
    modals: AckModal[];
    constructor(prompts: Prompts);
    registerModal(item: AckModal): AckApp;
    unregisterModal(item: AckModal): this;
    static ɵfac: i0.ɵɵFactoryDeclaration<AckApp, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AckApp>;
}
