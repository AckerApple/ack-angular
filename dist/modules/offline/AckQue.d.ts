import { AckOffline } from './AckOffline';
export interface handlerConfig {
    name: string;
    handler: (qued: any) => any;
}
/** Que data based processes by associating name based handlers */
export declare class AckQue extends AckOffline {
    prefix: string;
    handlers: any[];
    /** processes with associated that are typically awaiting internet access to complete processing */
    get(name: any): Promise<any>;
    /** aka get */
    getQue(name: string): Promise<any>;
    /** aka set */
    setQue(name: string, que: any): Promise<any>;
    /** add to qued data. Typically when offline, add post/put requests here and process them when back online */
    que(name: string, queData: any): Promise<any>;
    /** merge new que data overtop of existing que
      @name:string
      @que
    */
    set(name: string, queData: any): Promise<any>;
    dequeByIndex(name: string, index: number): Promise<any>;
    processQuedByIndex(name: string, index: number): Promise<any>;
    /** Most important. When a que of data-tasks is being processed, the approperiate handler must be registered here */
    registerHandler(name: string, handler: (qued: any) => any): this;
    /** aka registerHandler */
    registerQueHandler(name: string, handler: (qued: any) => any): this;
    paramHandler(name: string, handler: (qued: any) => any): this;
    getQueHandDefByName(name: string): any;
    /** return functions */
    getQueHandlerByName(name: any): any;
    handleQued(qued: any, handler: (qued: any) => any): Promise<any>;
    /** gets array of qued data and processes all and then clears que */
    processQuedHandler(hand: handlerConfig): Promise<any>;
    eachHandler(handler: (qued: any) => any): (data: any) => Promise<any>;
    /** call manually in app when back online */
    processQue(name: string): Promise<any>;
    /** call manually in app when back online and sure you want to process all ques */
    processAllQues(): Promise<any[]>;
}
