import { Subscription } from "rxjs/internal/Subscription";
import { EventEmitter } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { currentRoute, RouteWatchReporter } from "./RouteWatchReporter";
export declare class RouteReporter {
    Router: Router;
    RouteWatchReporter: RouteWatchReporter;
    ActivatedRoute: ActivatedRoute;
    onLoad: any;
    stateChanger: EventEmitter<RouteWatchReporter>;
    beforeChanger: EventEmitter<any>;
    activated: ActivatedRoute;
    activatedChange: EventEmitter<ActivatedRoute>;
    params: any;
    paramsChange: EventEmitter<any>;
    data: any;
    dataChange: EventEmitter<any>;
    query: any;
    queryChange: EventEmitter<any>;
    route: Route;
    routeChange: EventEmitter<Route>;
    parentRoute: Route;
    parentRouteChange: EventEmitter<Route>;
    parent: ActivatedRoute;
    parentChange: EventEmitter<ActivatedRoute>;
    parentData: any;
    parentDataChange: EventEmitter<any>;
    current: currentRoute;
    state: currentRoute;
    stateChange: EventEmitter<currentRoute>;
    $document: any;
    $scope: any;
    docCallbacks: any;
    querySub: Subscription;
    constructor(Router: Router, RouteWatchReporter: RouteWatchReporter, ActivatedRoute: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    apply(): void;
    emit(): void;
    goBackTo(name: string, params: any): void;
    tryBack(name: string, params: any): void;
}
