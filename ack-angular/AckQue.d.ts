import { AckOffline } from './AckOffline';
/** Que data based processes by associating name based handlers */
export declare class AckQue extends AckOffline {
    handlers: any[];
    /** processes with associated that are typically awaiting internet access to complete processing */
    get(name: any): Promise<any>;
    /** aka get */
    getQue(name: any): Promise<any>;
    /** aka set */
    setQue(name: any, que: any): Promise<{}>;
    /** clears data-process based que of tasks */
    /** add to qued data. Typically when offline, add post/put requests here and process them when back online */
    que(name: any, queData: any): Promise<{}>;
    /** merge new que data overtop of existing que
      @name:string
      @que
    */
    set(name: any, queData: any): Promise<{}>;
    dequeByIndex(name: any, index: any): Promise<any>;
    processQuedByIndex(name: any, index: any): Promise<any>;
    /** Most important. When a que of data-tasks is being processed, the approperiate handler must be registered here */
    registerQueHandler(name: any, handler: any): this;
    /** return functions */
    getQueHandlerByName(name: any): any;
    handleQued(name: any, qued: any, handler: any): Promise<any>;
    processQuedHandler(hand: any): Promise<any>;
    eachHandler(name: any, handler: any): (data: any) => Promise<any>;
    /** call manually in app when back online */
    processQue(): Promise<any[]>;
}
