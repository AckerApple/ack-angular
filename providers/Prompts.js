import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
var Prompts = /** @class */ (function () {
    function Prompts() {
        this.prompts = [];
    }
    Prompts.prototype.remove = function (prompt) {
        for (var x = this.prompts.length - 1; x >= 0; --x) {
            if (this.prompts[x] == prompt) {
                this.prompts.splice(x, 1);
                return;
            }
        }
    };
    Prompts.prototype.issuePrompt = function (prompt) {
        var _this = this;
        this.prompts.push(prompt);
        prompt.emitter.subscribe(function () { return _this.remove(prompt); });
        return prompt.emitter;
    };
    Prompts.prototype.alert = function (message, options) {
        if (options === void 0) { options = {}; }
        options.emitter = new EventEmitter();
        options.type = "alert";
        options.message = message;
        return this.issuePrompt(options);
    };
    Prompts.prototype.confirm = function (message, options) {
        if (options === void 0) { options = {}; }
        options.emitter = new EventEmitter();
        options.type = "confirm";
        options.message = message;
        return this.issuePrompt(options);
    };
    Prompts.ɵfac = function Prompts_Factory(t) { return new (t || Prompts)(); };
    Prompts.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: Prompts, factory: Prompts.ɵfac });
    return Prompts;
}());
export { Prompts };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Prompts, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=Prompts.js.map