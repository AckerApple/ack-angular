"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckModule = exports.CommonModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var common_2 = require("@angular/common");
Object.defineProperty(exports, "CommonModule", { enumerable: true, get: function () { return common_2.CommonModule; } });
//import { FormsModule }   from "@angular/forms"
var providers_1 = require("./providers");
var declarations_1 = require("./declarations");
var pipes_1 = require("./pipes");
var declarations = __spreadArrays(declarations_1.declarations, pipes_1.declarations);
var AckModule = /** @class */ (function () {
    function AckModule() {
    }
    AckModule.forRoot = function () {
        return {
            ngModule: AckModule,
            providers: providers_1.providers,
        };
    };
    AckModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: declarations, providers: providers_1.providers,
                    exports: declarations
                },] }
    ];
    return AckModule;
}());
exports.AckModule = AckModule;
// export default AckModule
//# sourceMappingURL=AckModule.js.map