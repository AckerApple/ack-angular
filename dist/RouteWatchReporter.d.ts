import { Router, ActivatedRoute } from '@angular/router';
export declare class RouteWatchReporter {
    router: Router;
    activatedRoute: ActivatedRoute;
    current: any;
    $history: any;
    $state: any;
    $window: any;
    historyPos: number;
    isNextBackMode: boolean;
    isNextBackHistory: boolean;
    isBackMode: boolean;
    isOsAction: boolean;
    constructor(router: Router, activatedRoute: ActivatedRoute);
    getCurrent(): any;
    getCurrentConfig(): any;
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
