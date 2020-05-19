var AckRouterModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteWatchReporter } from "./RouteWatchReporter";
import { RouteHistory } from "./RouteHistory.provider";
import { RouteReporter } from "./RouteReporter.directive";
export const providers = [RouteWatchReporter, RouteHistory];
let AckRouterModule = AckRouterModule_1 = class AckRouterModule {
    static forRoot() {
        return {
            ngModule: AckRouterModule_1,
            providers: providers
        };
    }
};
AckRouterModule = AckRouterModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule
        ],
        declarations: [RouteReporter],
        exports: [
            RouteReporter,
            RouterModule
        ]
    })
], AckRouterModule);
export { AckRouterModule };
