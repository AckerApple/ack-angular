import { cacheModel } from "./modules/offline/AckCache";
export interface sendFailMeta {
    offlineId?: number | string;
    lastAttempt?: Date;
    attempts?: number;
    maxTry?: number;
}
export interface httpOptions {
    url?: string;
    params?: any;
    body?: any;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | string;
    headers?: any;
    timeout?: number;
    offlineModel?: cacheModel | string;
    sendFailMeta?: sendFailMeta;
    promise?: "response" | "all" | "data" | string;
    reportProgress?: boolean;
    responseType?: "text" | "json";
    catch?: "data";
}
