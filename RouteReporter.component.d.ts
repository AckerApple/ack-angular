import { EventEmitter } from "@angular/core";
import { RouteWatchReporter } from "./RouteWatchReporter";
export declare class RouteReporter {
    RouteWatchReporter: RouteWatchReporter;
    $document: any;
    $scope: any;
    static parameters: (typeof RouteWatchReporter)[][];
    docCallbacks: any;
    stateChanger: EventEmitter<{}>;
    beforeChanger: EventEmitter<{}>;
    onLoad: any;
    ref: any;
    refChange: EventEmitter<{}>;
    stateName: any;
    stateNameChange: EventEmitter<{}>;
    params: any;
    paramsChange: EventEmitter<{}>;
    state: any;
    stateChange: EventEmitter<{}>;
    constructor(RouteWatchReporter: RouteWatchReporter);
    ngOnDestroy(): void;
    emit(): void;
    ngOnInit(): void;
    goBackTo(name: any, params: any): void;
    tryBack(name: any, params: any): void;
}
