var AckModule_1;
import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { providers } from "./providers";
import { declarations as components } from "./declarations";
import { declarations as pipes } from "./pipes";
const declarations = [...components, ...pipes];
let AckModule = AckModule_1 = class AckModule {
    static forRoot() {
        return {
            ngModule: AckModule_1,
            providers: providers
        };
    }
};
AckModule = AckModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: declarations,
        exports: [
            ...declarations,
        ]
    })
], AckModule);
export { AckModule };
