"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckRouterModule = exports.providers = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var RouteWatchReporter_1 = require("./RouteWatchReporter");
var RouteHistory_provider_1 = require("./RouteHistory.provider");
var RouteReporter_directive_1 = require("./RouteReporter.directive");
exports.providers = [RouteWatchReporter_1.RouteWatchReporter, RouteHistory_provider_1.RouteHistory];
var AckRouterModule = /** @class */ (function () {
    function AckRouterModule() {
    }
    AckRouterModule.forRoot = function () {
        return {
            ngModule: AckRouterModule,
            providers: exports.providers
        };
    };
    AckRouterModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        router_1.RouterModule
                    ],
                    declarations: [RouteReporter_directive_1.RouteReporter],
                    // providers:providers,
                    exports: [
                        RouteReporter_directive_1.RouteReporter,
                        router_1.RouterModule
                    ]
                },] }
    ];
    return AckRouterModule;
}());
exports.AckRouterModule = AckRouterModule;
//# sourceMappingURL=AckRouterModule.js.map