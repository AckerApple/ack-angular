"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var providers_1 = require("./providers");
var components_1 = require("./components");
var pipes_1 = require("./pipes");
var declarations = components_1.declarations.concat(pipes_1.declarations);
var AckModule = (function () {
    function AckModule() {
    }
    return AckModule;
}());
exports.AckModule = AckModule;
