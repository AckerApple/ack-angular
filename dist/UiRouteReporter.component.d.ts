import { TransitionService } from "ui-router-ng2";
import { EventEmitter } from "@angular/core";
import { UiRouteWatchReporter } from "./UiRouteWatchReporter.class";
export declare class UiRouteReporter {
    UiRouteWatchReporter: UiRouteWatchReporter;
    TransitionService: TransitionService;
    $document: any;
    $scope: any;
    static parameters: (typeof TransitionService[] | typeof UiRouteWatchReporter[])[];
    docCallbacks: any;
    stateChanger: EventEmitter<{}>;
    beforeChanger: EventEmitter<{}>;
    onLoad: any;
    ref: any;
    refChange: EventEmitter<{}>;
    constructor(UiRouteWatchReporter: UiRouteWatchReporter, TransitionService: TransitionService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    goBackTo(name: any, params: any): void;
    tryBack(name: any, params: any): void;
}
