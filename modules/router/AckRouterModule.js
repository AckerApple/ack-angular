import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteWatchReporter } from "./RouteWatchReporter";
import { RouteHistory } from "./RouteHistory.provider";
import { RouteReporter } from "./RouteReporter.directive";
import * as i0 from "@angular/core";
export { RouteReporter } from "./RouteReporter.directive";
var providers = [RouteWatchReporter, RouteHistory];
var AckRouterModule = /** @class */ (function () {
    function AckRouterModule() {
    }
    AckRouterModule.forRoot = function () {
        return {
            ngModule: AckRouterModule,
            providers: providers
        };
    };
    AckRouterModule.ɵfac = function AckRouterModule_Factory(t) { return new (t || AckRouterModule)(); };
    AckRouterModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AckRouterModule });
    AckRouterModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
                CommonModule,
                RouterModule
            ], RouterModule] });
    return AckRouterModule;
}());
export { AckRouterModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AckRouterModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    RouterModule
                ],
                declarations: [RouteReporter],
                // providers:providers,
                exports: [
                    RouteReporter,
                    RouterModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AckRouterModule, { declarations: [RouteReporter], imports: [CommonModule,
        RouterModule], exports: [RouteReporter,
        RouterModule] }); })();
//# sourceMappingURL=AckRouterModule.js.map