import { AckOffline } from './AckOffline';
export declare class AckCache extends AckOffline {
    prefix: string;
    validate(data: any, config: any): boolean;
    optionsKillCache(options: any): boolean;
    hasMaxAged(stamp: any, maxAge: any): boolean;
    hasExpired(stamp: any, expires: any): boolean;
    param(name: any, options: any): Promise<any>;
    paramCache(name: any, options: any): Promise<any>;
    paramSave(name: any, options: any): Promise<any>;
    paramSaveCache(name: any, options: any): Promise<any>;
    cacheToReturn(name: any, data: any, options: any): Promise<any>;
    selfDestructData(name: any, data: any): Promise<void>;
    dataDestructReady(data: any): boolean;
    get(name: any, options?: any): Promise<any>;
    getCache(name: any, options: any): Promise<any>;
    dataOptionsCache(allCache: any, options: any, cache: any): any;
    set(name: any, cache: any, options?: any): Promise<any>;
    setCache(name: any, cache: any, options?: any): Promise<any>;
}
