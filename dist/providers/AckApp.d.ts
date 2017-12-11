import { ElementRef } from '@angular/core';
import { AckModal } from '../components/AckModal.component';
export declare class AckApp {
    warnedFixElements: boolean;
    fixedElementStage: ElementRef;
    modals: AckModal[];
    registerModal(modal: AckModal): AckApp;
    unregisterModal(modal: AckModal): this;
}
