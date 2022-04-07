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
    /** Convert Error object to a regular object */
    objectifyError(err: any): {
        data?: any;
    };
    /** same as reject but uses native throw instead of native Promise.reject */
    rethrow(err: any): void;
}
