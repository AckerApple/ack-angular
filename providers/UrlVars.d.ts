import { WindowService } from "./WindowService";
import * as i0 from "@angular/core";
export declare class UrlVars {
    WindowService: WindowService;
    vars: any;
    constructor(WindowService: WindowService);
    parse(): {};
    /** case in-sensative variable fetch */
    get(name: any, param?: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<UrlVars, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UrlVars>;
}
