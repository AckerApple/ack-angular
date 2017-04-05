export declare class ErrorLog {
    log: any[];
    maxLog: number;
    monitorWindow(win?: any): void;
    reject(err: any): Promise<never>;
    rejector(): (err: any) => Promise<never>;
    add(e: any, toConsole?: any): Error;
    paramAudit(e: any, toConsole?: any): {};
    objectifyError(err: any): {};
    /** same as reject but uses native throw instead of native Promise.reject */
    rethrow(err: any): void;
}
