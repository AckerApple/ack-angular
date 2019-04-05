"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Prompts_1 = require("./Prompts");
var AckApp = (function () {
    function AckApp(prompts) {
        this.prompts = prompts;
        this.warnedFixElements = true;
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
    AckApp = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [Prompts_1.Prompts])
    ], AckApp);
    return AckApp;
}());
exports.AckApp = AckApp;
