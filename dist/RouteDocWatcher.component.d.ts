import { TransitionService } from "ui-router-ng2";
import { EventEmitter } from "@angular/core";
import { RouteWatcher } from "./RouteWatcher.class";
export declare class RouteDocWatcher {
    RouteWatcher: RouteWatcher;
    TransitionService: TransitionService;
    $document: any;
    $scope: any;
    static parameters: (typeof TransitionService[] | typeof RouteWatcher[])[];
    docCallbacks: any;
    stateChanger: EventEmitter<{}>;
    beforeChanger: EventEmitter<{}>;
    onLoad: any;
    ref: any;
    refChange: EventEmitter<{}>;
    constructor(RouteWatcher: RouteWatcher, TransitionService: TransitionService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    goBackTo(name: any, params: any): void;
    tryBack(name: any, params: any): void;
}
