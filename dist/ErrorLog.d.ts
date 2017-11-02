export declare class ErrorLog {
    log: any[];
    maxLog: number;
    monitorWindow(win?: any): void;
    reject(err: any): Promise<never>;
    rejector(): (err: any) => Promise<never>;
    add(e: any, toConsole?: any): Error;
    paramAudit(e: any, toConsole?: any): {
        data?: any;
    };
    objectifyError(err: any): {
        data?: any;
    };
    rethrow(err: any): void;
}
