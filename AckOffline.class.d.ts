export declare class AckOffline {
    prefix: string;
    handlers: any;
    constructor();
    remove(name: any): Promise<void>;
    get(name: any): Promise<{}>;
    set(name: any, data: any): Promise<any>;
    validate(data: any, config: any): boolean;
    expired(stamp: any, expires: any): boolean;
    /**
      Creates que handler. Returns self. Most likely, use newQueModel
      @options - {
        handler : dataArray=> - overrides $http posting for que processing
        onData : data=> - callback fired everytime data is retrieved
        expires: Number - how many milisecs can a saved transmission live in cache
      }
    */
    /**
      Creates que handler. Returns self. Most likely, use newQueModel
      @options - {
        handler : dataArray=> - overrides $http posting for que processing
        onData : data=> - callback fired everytime data is retrieved
      }
    */
    paramCache(name: any, options: any): Promise<any>;
    paramSaveCache(name: any, options: any): Promise<any>;
    getCache(name: any, options: any): Promise<any>;
    setCache(name: any, cache: any): Promise<{}>;
    cacheResponse(name: any, response: any): Promise<{}>;
    getQueue(name: any): Promise<any>;
    setQueue(name: any, queue: any): Promise<{}>;
    clearQueue(name: any): Promise<void>;
    /** post/put que */
    enqueue(name: any, queueData: any): any;
    registerQueueHandler(name: any, handler: any): this;
    processQueues(): Promise<any[]>;
}
