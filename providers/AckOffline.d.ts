export declare class AckOffline {
    prefix: string;
    set(name: string, data: any): Promise<any>;
    get(name: string): Promise<any>;
    remove(name: string): Promise<void>;
    clear(name: string): Promise<void>;
    clearAll(): Promise<void>;
    promiseNameArray(): Promise<any[]>;
}
