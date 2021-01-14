import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { providers } from "./providers";
import { declarations as components } from "./declarations";
import { declarations as pipes } from "./pipes";
const declarations = [...components, ...pipes];
export class AckModule {
    static forRoot() {
        return {
            ngModule: AckModule,
            providers: providers
        };
    }
}
AckModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: declarations,
                exports: [
                    ...declarations,
                ]
            },] }
];
