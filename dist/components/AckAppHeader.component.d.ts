import { TemplateRef } from "@angular/core";
import { AckApp as AckAppProvider } from "../providers/AckApp.provider";
export declare class AckAppHeader {
    AckApp: AckAppProvider;
    inited: boolean;
    pushed: boolean;
    content: TemplateRef<any>;
    constructor(AckApp: AckAppProvider);
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    check(): void;
    ngOnDestroy(): void;
    unregister(): void;
}
