import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { providers } from "./providers";
export class AckOfflineModule {
    static forRoot() {
        return {
            ngModule: AckOfflineModule,
            providers: providers
        };
    }
}
AckOfflineModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule
                ]
            },] }
];
