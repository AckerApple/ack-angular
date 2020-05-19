import { __decorate, __metadata } from "tslib";
import { Injectable } from "@angular/core";
import { Prompts } from "./Prompts";
let AckApp = class AckApp {
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
};
AckApp = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Prompts])
], AckApp);
export { AckApp };
