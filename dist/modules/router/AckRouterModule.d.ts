import { ModuleWithProviders } from '@angular/core';
import { RouteWatchReporter } from "./RouteWatchReporter";
import { RouteHistory } from "./RouteHistory.provider";
export declare const providers: (typeof RouteWatchReporter | typeof RouteHistory)[];
export declare class AckRouterModule {
    static forRoot(): ModuleWithProviders<any>;
}
