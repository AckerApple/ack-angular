import { ElementRef } from "@angular/core";
import { AckModal } from "../components/AckModal.component";
import { Prompts } from "./Prompts";
export declare class AckApp {
    prompts: Prompts;
    warnedFixElements: boolean;
    fixedElementStage: ElementRef;
    modals: AckModal[];
    constructor(prompts: Prompts);
    registerModal(modal: AckModal): AckApp;
    unregisterModal(modal: AckModal): this;
}
