"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let Prompts = class Prompts {
    constructor() {
        this.prompts = [];
    }
    remove(prompt) {
        for (let x = this.prompts.length - 1; x >= 0; --x) {
            if (this.prompts[x] == prompt) {
                this.prompts.splice(x, 1);
                return;
            }
        }
    }
    issuePrompt(prompt) {
        this.prompts.push(prompt);
        prompt.emitter.subscribe(() => this.remove(prompt));
        return prompt.emitter;
    }
    alert(message, options = {}) {
        options.emitter = new core_1.EventEmitter();
        options.type = "alert";
        options.message = message;
        return this.issuePrompt(options);
    }
    confirm(message, options = {}) {
        options.emitter = new core_1.EventEmitter();
        options.type = "confirm";
        options.message = message;
        return this.issuePrompt(options);
    }
};
Prompts = __decorate([
    core_1.Injectable()
], Prompts);
exports.Prompts = Prompts;
