import { AckOffline } from './AckOffline';
export declare class AckQue extends AckOffline {
    prefix: string;
    handlers: any[];
    get(name: any): Promise<any>;
    getQue(name: any): Promise<any>;
    setQue(name: any, que: any): Promise<any>;
    que(name: any, queData: any): Promise<any>;
    set(name: any, queData: any): Promise<any>;
    dequeByIndex(name: any, index: any): Promise<any>;
    processQuedByIndex(name: any, index: any): Promise<any>;
    registerHandler(name: any, handler: any): this;
    registerQueHandler(name: any, handler: any): this;
    paramHandler(name: any, handler: any): this;
    getQueHandDefByName(name: any): any;
    getQueHandlerByName(name: any): any;
    handleQued(name: any, qued: any, handler: any): Promise<any>;
    processQuedHandler(hand: {
        name: string;
        handler;
    }): Promise<any>;
    eachHandler(name: any, handler: any): (data: any) => Promise<any>;
    processQue(name: string): Promise<any>;
    processAllQues(): Promise<any[]>;
}
