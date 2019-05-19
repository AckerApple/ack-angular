import { Subscription } from "rxjs/internal/Subscription";
import { Router } from "@angular/router";
export declare class RouteHistory {
    Router: Router;
    routeHistory: string[];
    maxHistory: number;
    historyIndex: number;
    subs: Subscription[];
    constructor(Router: Router);
    monitor(): void;
    ngOnDestroy(): void;
    addRouteToHistory(): void;
    goBack(): void;
    goForward(): void;
}
