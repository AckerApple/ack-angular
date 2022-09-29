import { EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class InnerHtmlModel {
    element: ElementRef;
    onChange: any;
    observer: any;
    timeout: any;
    innerHtmlModel: any;
    innerHtmlModelChange: EventEmitter<any>;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    setModel(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InnerHtmlModel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InnerHtmlModel, "[innerHtmlModel]", never, { "innerHtmlModel": "innerHtmlModel"; }, { "innerHtmlModelChange": "innerHtmlModelChange"; }, never, never, false>;
}
