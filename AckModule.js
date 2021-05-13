var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
export { CommonModule } from "@angular/common";
//import { FormsModule }   from "@angular/forms"
import { providers } from "./providers";
import { declarations as components } from "./declarations";
import { declarations as pipes } from "./pipes";
var declarations = __spreadArrays(components, pipes);
var AckModule = /** @class */ (function () {
    function AckModule() {
    }
    AckModule.forRoot = function () {
        return {
            ngModule: AckModule,
            providers: providers,
        };
    };
    AckModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: declarations, providers: providers,
                    exports: declarations
                },] }
    ];
    return AckModule;
}());
export { AckModule };
// export default AckModule
//# sourceMappingURL=AckModule.js.map