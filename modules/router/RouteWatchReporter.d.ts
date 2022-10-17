import { Route, Router, ActivatedRoute, Data, Resolve, ResolveFn, Params } from '@angular/router';
import { Type } from '@angular/core';
import * as i0 from "@angular/core";
export interface RouteInsight {
    config: Route;
    ActivatedRoute?: ActivatedRoute;
}
export interface currentRoute extends RouteInsight {
    ActivatedRoute: ActivatedRoute;
    params: Record<string, string>;
    parent?: currentRoute;
}
interface History {
    name: string;
    title?: string | Type<Resolve<string>> | ResolveFn<string>;
    params?: any;
    data?: Data;
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
    $history: History[];
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
    getCurrentParams(): Params | undefined;
    isTrapHistory(toState: any, toParams: any): boolean;
    isBackHistory(toState: any, toParams: any): boolean;
    isForwardHistory(toState: any, toParams: any): boolean;
    isParamsMatch(toParams: any, otherParams: any): boolean;
    recordStateChange(toState: Route, toParams: any): void;
    goBackTo(name: any, params: any): void;
    tryBack(name: any, params: any): void;
    watchDocument($document: any): void;
    getDocumentCallbacks(): {
        isBackButton: () => void;
        isNotBackButton: () => void;
    };
    watchDocByCallbacks($document: any, callbacks: any): void;
    unwatchDocByCallbacks($document: any, callbacks: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RouteWatchReporter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RouteWatchReporter>;
}
export declare function getCurrentByActive(ActivatedRoute: ActivatedRoute): currentRoute;
export declare function getRouteByActive(ActivatedRoute: ActivatedRoute): ActivatedRoute;
export {};
