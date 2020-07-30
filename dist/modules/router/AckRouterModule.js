import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteWatchReporter } from "./RouteWatchReporter";
import { RouteHistory } from "./RouteHistory.provider";
import { RouteReporter } from "./RouteReporter.directive";
export const providers = [RouteWatchReporter, RouteHistory];
export class AckRouterModule {
    static forRoot() {
        return {
            ngModule: AckRouterModule,
            providers: providers
        };
    }
}
AckRouterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule
                ],
                declarations: [RouteReporter],
                exports: [
                    RouteReporter,
                    RouterModule
                ]
            },] }
];
