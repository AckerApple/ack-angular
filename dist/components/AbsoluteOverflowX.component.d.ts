import { ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class AbsoluteOverflowX {
    ElementRef: ElementRef;
    elementHeightModel: number;
    scrollBars: boolean | any;
    wrapClass: any;
    active: boolean | any;
    overflow: 'auto' | 'none' | 'hidden' | 'scroll';
    constructor(ElementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngAfterViewInit(): void;
    checkDisplay(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbsoluteOverflowX, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AbsoluteOverflowX, "absolute-overflow-x", never, { "scrollBars": "scrollBars"; "wrapClass": "wrapClass"; "active": "active"; "overflow": "overflow"; }, {}, never, ["*"]>;
}
