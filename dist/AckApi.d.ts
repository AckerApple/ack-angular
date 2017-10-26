import 'rxjs/add/operator/toPromise';
import { EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
/** Http util with offline config for request failures */
export declare class AckApi {
    http: Http;
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
    constructor(http: Http);
    /** an empty function for inheritance to hook into */
    paramConfig(): void;
    /** START HERE. Handlers must be registered before sending requests
      @options{maxTry:50}
    */
    registerHandler(name: any, handler?: any, options?: any): this;
    getQue(name: any): any;
    getCache(name: any): any;
    /** when back online, run this function */
    processQue(name: any): any;
    /** clears POST/PUT/PATCH/DELETE que */
    clearQue(name: any): any;
    /** clears GET cache */
    clearCache(name: any): any;
    /** method all request transactions tunnel thru to instead try for cache first
      @config - {
        url:string
        method:string - GET,POST,DELETE,PUT
        queModel:{
          name, maxTry:50, expires||maxAge, allowExpired
        }
      }
  
      HINT: @config.queModel, when defined:
        - POST/PUT/PATCH requests goto que if they fail.
        - GET responses are cached with optional expires or maxAge option
    */
    request(config: any): any;
    getCacheByNamedRequest(request: any): any;
    requestQueModel(request: any): any;
    processCacheGet(cache: any, cfg: any): any;
    postRequestFail(e: any, request: any): any;
    /** master method for sending requests and caching responses using $http requests
      @cfg{
        catch:'data'//typically only error data is returned, but if catch!='data' then entire response is returned for a caught error
        promise:'data'//typically only data is returned, but if promise!='data' then entire response is returned
        headers:{}//when sending a file 'Content-Type':undefined so that no content-type header is sent
      }
    */
    _fetch(cfg: any): Promise<Response>;
    processFetchByConfig(response: any, request: any): Promise<any>;
    httpFailByConfig(e: any, cfg: any): Promise<never>;
    requestResponseToCache(request: any, output: any): any;
    /**
      @path:url
      @config:{
        params:{}//url parameters
      }
    */
    get(path: any, config?: any): any;
    post(path: any, data: any, config?: any): any;
    delete(path: any, config?: any): any;
    put(path: any, data: any, config?: any): any;
}
