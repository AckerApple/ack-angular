import { 
//TemplateRef,
Injectable } from "@angular/core";
import { 
//prompt,
Prompts } from "./Prompts";
var AckApp = /** @class */ (function () {
    function AckApp(prompts) {
        this.prompts = prompts;
        this.warnedFixElements = true;
        this.fixedElms = [];
        this.modals = [];
    }
    AckApp.prototype.registerModal = function (item) {
        this.modals.push(item);
        return this;
    };
    AckApp.prototype.unregisterModal = function (item) {
        for (var index = this.modals.length - 1; index >= 0; --index) {
            if (this.modals[index] == item) {
                this.modals.splice(index, 1);
                break;
            }
        }
        return this;
    };
    AckApp.decorators = [
        { type: Injectable }
    ];
    AckApp.ctorParameters = function () { return [
        { type: 
            //prompt,
            Prompts }
    ]; };
    return AckApp;
}());
export { AckApp };
//# sourceMappingURL=AckApp.provider.js.map