"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AckModule_1;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const common_1 = require("@angular/common");
const providers_1 = require("./providers");
const declarations_1 = require("./declarations");
const pipes_1 = require("./pipes");
const declarations = [...declarations_1.declarations, ...pipes_1.declarations];
let AckModule = AckModule_1 = class AckModule {
    static forRoot() {
        return {
            ngModule: AckModule_1,
            providers: providers_1.providers
        };
    }
};
AckModule = AckModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpClientModule
        ],
        declarations: declarations,
        exports: [
            http_1.HttpClientModule,
            ...declarations,
        ]
    })
], AckModule);
exports.AckModule = AckModule;
