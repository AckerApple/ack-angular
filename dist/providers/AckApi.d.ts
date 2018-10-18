import { EventEmitter } from "@angular/core";
import { HttpClient, HttpRequest, HttpResponse, HttpEvent } from "@angular/common/http";
import { AckCache, cacheModel } from "./AckCache";
import { AckQue } from "./AckQue";
export interface sendFailMeta {
    offlineId?: number | string;
    lastAttempt?: Date;
    attempts?: number;
    maxTry?: number;
}
export interface httpOptions {
    url?: string;
    params?: any;
    body?: any;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | string;
    headers?: any;
    timeout?: number;
    offlineModel?: cacheModel | string;
    sendFailMeta?: sendFailMeta;
    promise?: "response" | "all" | "data" | string;
    reportProgress?: boolean;
}
export interface apiConfig {
    baseUrl?: string;
    $http?: httpOptions;
}
export declare function TimeOutError(message: any): void;
export declare class AckApi {
    HttpClient: HttpClient;
    response: EventEmitter<HttpResponse<HttpEvent<Event>>>;
    Request: EventEmitter<HttpRequest<HttpEvent<Event>>>;
    AuthError: EventEmitter<Error>;
    ApiError: EventEmitter<Error>;
    AckCache: AckCache;
    AckQue: AckQue;
    config: apiConfig;
    constructor(HttpClient: HttpClient);
    paramConfig(): void;
    registerHandler(name: string, handler?: (config: httpOptions) => any, options?: sendFailMeta): this;
    getQue(name: string): Promise<any>;
    getCache(name: string): Promise<any>;
    processQue(name: string): Promise<any>;
    clearQue(name: string): Promise<void>;
    clearCache(name: any): Promise<void>;
    request(config: httpOptions): Promise<HttpRequest<HttpEvent<Event>> | any>;
    getCacheByNamedRequest(request: httpOptions): Promise<any>;
    getSotageNameByRequest(request: httpOptions): string;
    requestOfflineModel(request: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    processCacheGet(cache: any, cfg: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    postRequestFail(e: any, request: httpOptions): Promise<any>;
    _fetch(cfg: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    processFetchByConfig(response: HttpResponse<HttpEvent<Event>>, request: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    httpFailByConfig(e: any, cfg: any): Promise<never>;
    requestResponseToCache(request: any, output: any): Promise<any>;
    get(path: string, config?: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    post(path: string, data: any, config?: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    delete(path: string, config?: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    put(path: any, data: any, config?: any): Promise<HttpResponse<HttpEvent<Event>>>;
}
