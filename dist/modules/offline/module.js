var AckOfflineModule_1;
import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { providers } from "./providers";
let AckOfflineModule = AckOfflineModule_1 = class AckOfflineModule {
    static forRoot() {
        return {
            ngModule: AckOfflineModule_1,
            providers: providers
        };
    }
};
AckOfflineModule = AckOfflineModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule
        ]
    })
], AckOfflineModule);
export { AckOfflineModule };
