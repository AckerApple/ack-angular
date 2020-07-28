import { Injectable } from "@angular/core";
import { Prompts } from "./Prompts";
export class AckApp {
    constructor(prompts) {
        this.prompts = prompts;
        this.warnedFixElements = true;
        this.fixedElms = [];
        this.modals = [];
    }
    registerModal(item) {
        this.modals.push(item);
        return this;
    }
    unregisterModal(item) {
        for (let index = this.modals.length - 1; index >= 0; --index) {
            if (this.modals[index] == item) {
                this.modals.splice(index, 1);
                break;
            }
        }
        return this;
    }
}
AckApp.decorators = [
    { type: Injectable }
];
AckApp.ctorParameters = () => [
    { type: Prompts }
];
