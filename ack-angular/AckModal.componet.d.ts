import { EventEmitter, ElementRef } from "@angular/core";
export declare class AckModal {
    element: ElementRef;
    onClose: EventEmitter<{}>;
    wrapStyle: any;
    allowClose: boolean;
    backgroundColor: any;
    backgroundColorChange: EventEmitter<{}>;
    private ref;
    refChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    clickListenForClose(): void;
    ngOnInit(): void;
    close(): void;
}
