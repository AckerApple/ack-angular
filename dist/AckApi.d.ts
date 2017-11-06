import 'rxjs/add/operator/toPromise';
import { EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
export declare class AckApi {
    HttpClient: Http;
    response: EventEmitter<Response>;
    AuthError: EventEmitter<Error>;
    ApiError: EventEmitter<Error>;
    AckCache: any;
    AckQue: any;
    config: {
        promise?: string;
        method: string;
        baseUrl: string;
        params?: object;
        $http: {
            headers: any;
        };
    };
    constructor(HttpClient: Http);
    paramConfig(): void;
    registerHandler(name: any, handler?: any, options?: any): this;
    getQue(name: any): any;
    getCache(name: any): any;
    processQue(name: any): any;
    clearQue(name: any): any;
    clearCache(name: any): any;
    request(config: any): any;
    getCacheByNamedRequest(request: any): any;
    requestQueModel(request: any): any;
    processCacheGet(cache: any, cfg: any): any;
    postRequestFail(e: any, request: any): any;
    _fetch(cfg: any): Promise<Response>;
    processFetchByConfig(response: any, request: any): Promise<any>;
    httpFailByConfig(e: any, cfg: any): Promise<never>;
    requestResponseToCache(request: any, output: any): any;
    get(path: any, config?: any): any;
    post(path: any, data: any, config?: any): any;
    delete(path: any, config?: any): any;
    put(path: any, data: any, config?: any): any;
}
