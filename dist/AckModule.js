"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var providers_1 = require("./providers");
var declarations_1 = require("./declarations");
var pipes_1 = require("./pipes");
var declarations = declarations_1.declarations.concat(pipes_1.declarations);
var AckModule = (function () {
    function AckModule() {
    }
    AckModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        http_1.HttpModule
                    ],
                    declarations: declarations,
                    providers: providers_1.providers,
                    exports: [
                        forms_1.FormsModule,
                        http_1.HttpModule
                    ].concat(declarations)
                },] },
    ];
    return AckModule;
}());
exports.AckModule = AckModule;
