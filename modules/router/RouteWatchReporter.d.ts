import { Route, Router, ActivatedRoute } from '@angular/router';
export interface currentRoute {
    ActivatedRoute: ActivatedRoute;
    config: Route;
    params: any;
    parent?: currentRoute;
}
/** A stateful connection to ui-router history
 - .stateChange() with arguments MUST be called at every state change
 - Has 99% accuracy of knowing if OS back or forward button has been used
   - Their is no web event for knowing if OS button is used.
*/
export declare class RouteWatchReporter {
    router: Router;
    activatedRoute: ActivatedRoute;
    current: any;
    $history: any;
    $state: any;
    historyPos: number;
    isBackMode: boolean;
    isOsAction: boolean;
    isNextBackMode: boolean;
    isNextBackHistory: boolean;
    constructor(router: Router, activatedRoute: ActivatedRoute);
    $window(): Window & typeof globalThis;
    getCurrent(): currentRoute;
    getCurrentConfig(): Route;
    getCurrentParams(): any;
    isTrapHistory(toState: any, toParams: any): boolean;
    isBackHistory(toState: any, toParams: any): boolean;
    isForwardHistory(toState: any, toParams: any): boolean;
    isParamsMatch(toParams: any, otherParams: any): boolean;
    recordStateChange(toState: any, toParams: any): void;
    goBackTo(name: any, params: any): void;
    tryBack(name: any, params: any): void;
    watchDocument($document: any): void;
    getDocumentCallbacks(): {
        isBackButton: () => void;
        isNotBackButton: () => void;
    };
    watchDocByCallbacks($document: any, callbacks: any): void;
    unwatchDocByCallbacks($document: any, callbacks: any): void;
}
export declare function getCurrentByActive(ActivatedRoute: ActivatedRoute): {
    ActivatedRoute: ActivatedRoute;
    config: Route;
    params: import("@angular/router").Params;
    parent: {
        ActivatedRoute: ActivatedRoute;
        config: Route;
        params: import("@angular/router").Params;
    };
};
