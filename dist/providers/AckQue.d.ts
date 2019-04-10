import { AckOffline } from './AckOffline';
export interface handlerConfig {
    name: string;
    handler: (qued: any) => any;
}
export declare class AckQue extends AckOffline {
    prefix: string;
    handlers: any[];
    get(name: any): Promise<any>;
    getQue(name: string): Promise<any>;
    setQue(name: string, que: any): Promise<any>;
    que(name: string, queData: any): Promise<any>;
    set(name: string, queData: any): Promise<any>;
    dequeByIndex(name: string, index: number): Promise<any>;
    processQuedByIndex(name: string, index: number): Promise<any>;
    registerHandler(name: string, handler: (qued: any) => any): this;
    registerQueHandler(name: string, handler: (qued: any) => any): this;
    paramHandler(name: string, handler: (qued: any) => any): this;
    getQueHandDefByName(name: string): any;
    getQueHandlerByName(name: any): any;
    handleQued(qued: any, handler: (qued: any) => any): Promise<any>;
    processQuedHandler(hand: handlerConfig): Promise<any>;
    eachHandler(handler: (qued: any) => any): (data: any) => Promise<any>;
    processQue(name: string): Promise<any>;
    processAllQues(): Promise<any[]>;
}
