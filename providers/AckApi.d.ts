import { EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AckCache, cacheModel } from './AckCache';
import { AckQue } from './AckQue';
export interface sendFailMeta {
    offlineId?: number | string;
    lastAttempt?: Date;
    attempts?: number;
    maxTry?: number;
}
export interface httpOptions {
    url: string;
    params?: any;
    body?: any;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | string;
    headers?: any;
    timeout?: number;
    offlineModel?: cacheModel | string;
    sendFailMeta?: sendFailMeta;
    promise?: 'response' | 'all' | 'data';
    reportProgress?: boolean;
}
export interface apiConfig {
    baseUrl?: string;
    $http?: httpOptions;
}
export declare function TimeOutError(message: any): void;
export declare class AckApi {
    HttpClient: Http;
    response: EventEmitter<Response>;
    AuthError: EventEmitter<Error>;
    ApiError: EventEmitter<Error>;
    AckCache: AckCache;
    AckQue: AckQue;
    config: apiConfig;
    constructor(HttpClient: Http);
    paramConfig(): void;
    registerHandler(name: string, handler?: (config: httpOptions) => any, options?: sendFailMeta): this;
    getQue(name: string): Promise<any>;
    getCache(name: string): Promise<any>;
    processQue(name: string): Promise<any>;
    clearQue(name: string): Promise<void>;
    clearCache(name: any): Promise<void>;
    request(config: httpOptions): Promise<Response>;
    getCacheByNamedRequest(request: httpOptions): Promise<Response>;
    getSotageNameByRequest(request: httpOptions): string;
    requestOfflineModel(request: httpOptions): Promise<Response>;
    processCacheGet(cache: any, cfg: httpOptions): Promise<Response>;
    postRequestFail(e: any, request: httpOptions): Promise<never>;
    _fetch(cfg: httpOptions): Promise<Response>;
    processFetchByConfig(response: Response, request: httpOptions): Promise<any>;
    httpFailByConfig(e: any, cfg: any): Promise<never>;
    requestResponseToCache(request: any, output: any): Promise<any>;
    get(path: string, config?: httpOptions): Promise<Response>;
    post(path: string, data: any, config?: httpOptions): Promise<Response>;
    delete(path: string, config?: httpOptions): Promise<Response>;
    put(path: any, data: any, config?: any): Promise<Response>;
}
