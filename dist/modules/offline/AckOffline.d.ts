/** Offline storage provided by localforage */
export declare class AckOffline {
    prefix: string;
    /** save to browser offline memory with datetime stamps offlineSavedAt and offlineCreatedAt */
    set(name: string, data: any): Promise<any>;
    get(name: string): Promise<any>;
    remove(name: string): Promise<void>;
    /** aka of remove */
    clear(name: string): Promise<void>;
    clearAll(): Promise<void>;
    /** returns string array of all key names used for browser storage */
    promiseNameArray(): Promise<any[]>;
}
