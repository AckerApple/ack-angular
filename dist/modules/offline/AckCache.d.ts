import { AckOffline } from './AckOffline';
export interface cacheModel {
    name?: string;
    maxTry?: number;
    expires?: number;
    maxAge?: number;
    allowExpired?: boolean;
    param?: object;
}
/** Cache logic that provides timestamping and timingout using AckOffline as storage */
export declare class AckCache extends AckOffline {
    prefix: string;
    validate(data: any, config: any): boolean;
    optionsKillCache(options: cacheModel): boolean;
    hasMaxAged(stamp: number, maxAge: number): boolean;
    hasExpired(_stamp: number, expires: number): boolean;
    param(name: string, options?: cacheModel): Promise<any>;
    /** aka param */
    paramCache(name: string, options: cacheModel): Promise<any>;
    paramSave(name: string, options: cacheModel): Promise<any>;
    /** aka paramSave */
    paramSaveCache(name: string, options: cacheModel): Promise<any>;
    /**
      @options{
        expires:Date||number - Exact date of expiration
        maxAge:number -
      }
    */
    cacheToReturn(name: string, data: any, options: cacheModel): any;
    selfDestructData(name: any, data: any): Promise<void>;
    dataDestructReady(data: any): boolean;
    get(name: string, options?: cacheModel): Promise<any>;
    /** aka get */
    getCache(name: string, options?: cacheModel): Promise<any>;
    /** paste cache over cache, leave all else alone */
    dataOptionsCache(allCache: any, options: cacheModel, cache: any): any;
    set(name: string, cache: any, options?: cacheModel): Promise<any>;
    /** aka set */
    setCache(name: string, cache: any, options?: cacheModel): Promise<any>;
}
