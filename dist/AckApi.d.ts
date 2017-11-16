import { EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
export interface httpQueModel {
    name: string;
    maxTry?: number;
    expires?: number;
    maxAge?: number;
    allowExpired?: boolean;
}
export interface offlineMeta {
    offlineId?: number;
    lastAttempt?: Date;
    attempts?: number;
    maxTry?: number;
}
export interface httpOptions {
    url: string;
    method?: string;
    headers?: any;
    timeout?: number;
    queModel?: httpQueModel | string;
    offlineMeta?: offlineMeta;
    promise?: 'response' | 'all' | 'data';
}
export interface apiConfig {
    promise?: 'all' | 'data';
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | string;
    baseUrl?: string;
    params?: object;
    $http?: httpOptions;
}
export declare function TimeOutError(message: any): void;
export declare class AckApi {
    HttpClient: Http;
    response: EventEmitter<Response>;
    AuthError: EventEmitter<Error>;
    ApiError: EventEmitter<Error>;
    AckCache: any;
    AckQue: any;
    config: apiConfig;
    constructor(HttpClient: Http);
    paramConfig(): void;
    registerHandler(name: string, handler?: (config: httpOptions) => any, options?: offlineMeta): this;
    getQue(name: string): any;
    getCache(name: string): any;
    processQue(name: string): any;
    clearQue(name: string): any;
    clearCache(name: any): any;
    request(config: httpOptions): any;
    getCacheByNamedRequest(request: httpOptions): any;
    requestQueModel(request: httpOptions): any;
    processCacheGet(cache: any, cfg: httpOptions): any;
    postRequestFail(e: any, request: httpOptions): any;
    _fetch(cfg: httpOptions): Promise<Response>;
    processFetchByConfig(response: Response, request: httpOptions): Promise<any>;
    httpFailByConfig(e: any, cfg: any): Promise<never>;
    requestResponseToCache(request: any, output: any): any;
    get(path: any, config?: any): any;
    post(path: any, data: any, config?: any): any;
    delete(path: any, config?: any): any;
    put(path: any, data: any, config?: any): any;
}
