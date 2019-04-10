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
const core_1 = require("@angular/core");
const WindowService_1 = require("./WindowService");
let UrlVars = class UrlVars {
    constructor(WindowService) {
        this.WindowService = WindowService;
        this.vars = this.parse();
    }
    parse() {
        var regex = /[?&]([^=#]+)(=([^&#]*))?/g, url = this.WindowService.nativeWindow.location.href, params = {}, match;
        while (match = regex.exec(url)) {
            params[match[1]] = match[2] == null ? true : match[3];
        }
        return params;
    }
    get(name, param) {
        if (!name)
            return;
        if (this.vars && this.vars[name] != null)
            return this.vars[name];
        var lcase = name.toLowerCase();
        for (var key in this.vars) {
            if (lcase == key.toLowerCase())
                return this.vars[key];
        }
        return param;
    }
};
UrlVars = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [WindowService_1.WindowService])
], UrlVars);
exports.UrlVars = UrlVars;
