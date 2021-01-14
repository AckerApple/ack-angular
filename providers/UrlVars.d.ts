import { WindowService } from "./WindowService";
export declare class UrlVars {
    WindowService: WindowService;
    vars: any;
    constructor(WindowService: WindowService);
    parse(): {};
    /** case in-sensative variable fetch */
    get(name: any, param?: any): any;
}
