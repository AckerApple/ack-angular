/** Offline storage provided by localforage */
export declare class AckOffline {
    prefix: string;
    /** save to browser offline memory with datetime stamps offlineSavedAt and offlineCreatedAt */
    set(name: any, data: any): Promise<any>;
    get(name: any): Promise<{}>;
    remove(name: any): Promise<void>;
    /** aka of remove */
    clear(name: any): Promise<void>;
    clearAll(): Promise<void>;
    /** returns string array of all key names used for browser storage */
    promiseNameArray(): Promise<any[]>;
}
