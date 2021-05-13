"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prompts = void 0;
var core_1 = require("@angular/core");
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
        options.emitter = new core_1.EventEmitter();
        options.type = "alert";
        options.message = message;
        return this.issuePrompt(options);
    };
    Prompts.prototype.confirm = function (message, options) {
        if (options === void 0) { options = {}; }
        options.emitter = new core_1.EventEmitter();
        options.type = "confirm";
        options.message = message;
        return this.issuePrompt(options);
    };
    Prompts.decorators = [
        { type: core_1.Injectable }
    ];
    return Prompts;
}());
exports.Prompts = Prompts;
//# sourceMappingURL=Prompts.js.map