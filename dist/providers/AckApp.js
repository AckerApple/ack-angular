"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckApp = (function () {
    function AckApp() {
        this.warnedFixElements = true;
        this.modals = [];
    }
    AckApp.prototype.registerModal = function (modal) {
        this.modals.push(modal);
        return this;
    };
    AckApp.prototype.unregisterModal = function (modal) {
        for (var index = this.modals.length - 1; index >= 0; --index) {
            if (this.modals[index] == modal) {
                this.modals.splice(index, 1);
                break;
            }
        }
        return this;
    };
    AckApp.decorators = [
        { type: core_1.Injectable },
    ];
    AckApp.ctorParameters = function () { return []; };
    return AckApp;
}());
exports.AckApp = AckApp;
