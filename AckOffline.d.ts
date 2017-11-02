export declare class AckOffline {
    prefix: string;
    set(name: any, data: any): Promise<any>;
    get(name: any): Promise<{}>;
    remove(name: any): Promise<void>;
    clear(name: any): Promise<void>;
    clearAll(): Promise<void>;
    promiseNameArray(): Promise<any[]>;
}
