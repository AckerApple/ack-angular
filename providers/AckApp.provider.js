import { 
//TemplateRef,
Injectable } from "@angular/core";
import { 
//prompt,
Prompts } from "./Prompts";
import * as i0 from "@angular/core";
import * as i1 from "./Prompts";
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
    AckApp.ɵfac = function AckApp_Factory(t) { return new (t || AckApp)(i0.ɵɵinject(i1.Prompts)); };
    AckApp.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AckApp, factory: AckApp.ɵfac });
    return AckApp;
}());
export { AckApp };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AckApp, [{
        type: Injectable
    }], function () { return [{ type: i1.Prompts }]; }, null); })();
//# sourceMappingURL=AckApp.provider.js.map