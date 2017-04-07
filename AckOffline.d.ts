/** Offline storage provided by localforage */
export declare class AckOffline {
    prefix: string;
    set(name: any, data: any): Promise<any>;
    get(name: any): Promise<{}>;
    remove(name: any): Promise<void>;
    /** aka of remove */
    clear(name: any): Promise<void>;
    clearAll(): Promise<any>;
    /** returns string array of all key names used for browser storage */
    promiseNameArray(): Promise<any>;
}
