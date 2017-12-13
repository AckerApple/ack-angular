import { EventEmitter } from "@angular/core";
export declare class ScreenScroll {
    onScroll: any;
    screenScroll: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
}
