"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Prompts_1 = require("./Prompts");
var AckApp = (function () {
    function AckApp(prompts) {
        this.prompts = prompts;
        this.warnedFixElements = true;
        this.modals = [];
        this.appHeaderTemplates = [];
        this.appFooterTemplates = [];
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
    AckApp.prototype.unregisterAppHeaderTemplate = function (item) {
        for (var x = this.appHeaderTemplates.length - 1; x >= 0; --x) {
            if (this.appHeaderTemplates[x] == item) {
                this.appHeaderTemplates.splice(x, 1);
                break;
            }
        }
    };
    AckApp.prototype.unregisterAppFooterTemplate = function (item) {
        for (var x = this.appFooterTemplates.length - 1; x >= 0; --x) {
            if (this.appFooterTemplates[x] == item) {
                this.appFooterTemplates.splice(x, 1);
                break;
            }
        }
    };
    AckApp.decorators = [
        { type: core_1.Injectable },
    ];
    AckApp.ctorParameters = function () { return [
        { type: Prompts_1.Prompts, },
    ]; };
    return AckApp;
}());
exports.AckApp = AckApp;
