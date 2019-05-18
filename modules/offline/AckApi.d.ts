import { EventEmitter } from "@angular/core";
import { HttpClient, HttpRequest, HttpResponse, HttpEvent } from "@angular/common/http";
import { AckCache } from "./AckCache";
import { AckQue } from "./AckQue";
import { sendFailMeta, httpOptions } from "../../httpOptions";
export interface apiConfig {
    baseUrl?: string;
    $http?: httpOptions;
}
export declare function TimeOutError(message?: string): void;
export declare namespace TimeOutError {
    var prototype: any;
}
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
    getStorageNameByRequest(request: httpOptions): string;
    requestOfflineModel(request: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    processCacheGet(cache: any, cfg: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    postRequestFail(e: any, request: httpOptions): Promise<any>;
    _fetch(cfg: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    processFetchByConfig(response: HttpResponse<HttpEvent<Event>>, request: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    httpFailByConfig(e: Error, cfg: httpOptions): Promise<never>;
    requestResponseToCache(request: any, output: any): Promise<any>;
    get(path: string, config?: httpOptions): Promise<HttpResponse<HttpEvent<Event>> | any>;
    post(path: string, data: any, config?: httpOptions): Promise<HttpResponse<HttpEvent<Event>> | any>;
    delete(path: string, config?: httpOptions): Promise<HttpResponse<HttpEvent<Event>> | any>;
    put(path: any, data: any, config?: any): Promise<HttpResponse<HttpEvent<Event>> | any>;
}
