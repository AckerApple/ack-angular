import { ElementRef } from "@angular/core";
import { AckModal } from "../components/AckModal.component";
import { AckFixedElement } from "../components/AckFixedElement.component";
import { Prompts } from "./Prompts";
export declare class AckApp {
    prompts: Prompts;
    warnedFixElements: boolean;
    fixedElementStage: ElementRef;
    fixedElms: AckFixedElement[];
    modals: AckModal[];
    constructor(prompts: Prompts);
    registerModal(item: AckModal): AckApp;
    unregisterModal(item: AckModal): this;
}
