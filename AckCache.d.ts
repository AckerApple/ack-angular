import { AckOffline } from './AckOffline';
/** Cache logic that provides timestamping and timingout using AckOffline as storage */
export declare class AckCache extends AckOffline {
    prefix: string;
    validate(data: any, config: any): boolean;
    optionsKillCache(options: any): boolean;
    hasMaxAged(stamp: any, maxAge: any): boolean;
    hasExpired(stamp: any, expires: any): boolean;
    param(name: any, options: any): Promise<any>;
    /** aka param */
    paramCache(name: any, options: any): Promise<any>;
    paramSave(name: any, options: any): Promise<any>;
    /** aka paramSave */
    paramSaveCache(name: any, options: any): Promise<any>;
    /**
      @options{
        expires:Date||number - Exact date of expiration
        maxAge:number -
      }
    */
    cacheToReturn(name: any, data: any, options: any): Promise<void>;
    selfDestructData(name: any, data: any): Promise<void>;
    dataDestructReady(data: any): boolean;
    get(name: any, options?: any): Promise<any>;
    /** aka get */
    getCache(name: any, options: any): Promise<any>;
    /** paste cache over cache, leave all else alone */
    dataOptionsCache(allCache: any, options: any, cache: any): any;
    set(name: any, cache: any, options?: any): Promise<any>;
    /** aka set */
    setCache(name: any, cache: any, options?: any): Promise<any>;
}
