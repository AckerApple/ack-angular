import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteWatchReporter } from "./RouteWatchReporter";
import { RouteHistory } from "./RouteHistory.provider";
import { RouteReporter } from "./RouteReporter.directive";
export var providers = [RouteWatchReporter, RouteHistory];
var AckRouterModule = /** @class */ (function () {
    function AckRouterModule() {
    }
    AckRouterModule.forRoot = function () {
        return {
            ngModule: AckRouterModule,
            providers: providers
        };
    };
    AckRouterModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return AckRouterModule;
}());
export { AckRouterModule };
//# sourceMappingURL=AckRouterModule.js.map