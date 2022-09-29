import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import * as i0 from "@angular/core";
export declare class RouteHistory {
    Router: Router;
    routeHistory: string[];
    maxHistory: number;
    historyIndex: number;
    subs: Subscription[];
    forward?: string;
    back?: string;
    constructor(Router: Router);
    monitor(): void;
    ngOnDestroy(): void;
    addRouteToHistory(): void;
    applyNav(): void;
    goBack(): void;
    goForward(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RouteHistory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RouteHistory>;
}
