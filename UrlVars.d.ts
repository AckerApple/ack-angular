import { WindowService } from "./WindowService";
export declare class UrlVars {
    WindowService: WindowService;
    vars: any;
    constructor(WindowService: WindowService);
    parse(): {};
    get(name: any, param?: any): any;
}
