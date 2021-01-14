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
/** Http util with offline config for request failures */
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
    /** an empty function for inheritance to hook into */
    paramConfig(): void;
    /** START HERE. Handlers must be registered before sending requests
      @options{maxTry:50}
    */
    registerHandler(name: string, handler?: (config: httpOptions) => any, options?: sendFailMeta): this;
    getQue(name: string): Promise<any>;
    getCache(name: string): Promise<any>;
    /** when back online, run this function */
    processQue(name: string): Promise<any>;
    /** clears POST/PUT/PATCH/DELETE que */
    clearQue(name: string): Promise<void>;
    /** clears GET cache */
    clearCache(name: any): Promise<void>;
    /** method all request transactions tunnel thru to instead try for cache first
      HINT: @config.offlineModel, when defined:
        - POST/PUT/PATCH requests goto que if they fail.
        - GET responses are cached with optional expires or maxAge option
    */
    request(config: httpOptions): Promise<HttpRequest<HttpEvent<Event>> | any>;
    getCacheByNamedRequest(request: httpOptions): Promise<any>;
    getStorageNameByRequest(request: httpOptions): string;
    requestOfflineModel(request: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    processCacheGet(cache: any, cfg: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    postRequestFail(e: any, request: httpOptions): Promise<any>;
    /** master method for sending requests and caching responses using $http requests
      @cfg{
        catch:"data"//typically only error data is returned, but if catch!="data" then entire response is returned for a caught error
        promise:"data"//typically only data is returned, but if promise!="data" then entire response is returned
        headers:{}//when sending a file "Content-Type":undefined so that no content-type header is sent
      }
    */
    _fetch(cfg: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    /** Once a request is successful, this is the primary processor */
    processFetchByConfig(response: HttpResponse<HttpEvent<Event>>, request: httpOptions): Promise<HttpResponse<HttpEvent<Event>>>;
    httpFailByConfig(e: Error, cfg: httpOptions): Promise<never>;
    requestResponseToCache(request: any, output: any): Promise<any>;
    get(path: string, config?: httpOptions): Promise<HttpResponse<HttpEvent<Event>> | any>;
    post(path: string, data: any, config?: httpOptions): Promise<HttpResponse<HttpEvent<Event>> | any>;
    delete(path: string, config?: httpOptions): Promise<HttpResponse<HttpEvent<Event>> | any>;
    put(path: any, data: any, config?: any): Promise<HttpResponse<HttpEvent<Event>> | any>;
}
