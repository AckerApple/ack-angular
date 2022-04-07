import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface button {
    text: string;
    handler?: () => any;
}
export interface promptOptions {
    title?: string;
    buttons?: button[];
    emitter?: EventEmitter<boolean>;
    message?: string;
    type?: "confirm" | "alert" | "string";
}
export interface prompt extends promptOptions {
    type: "confirm" | "alert" | "string";
    message: string;
    emitter: EventEmitter<boolean>;
}
export declare class Prompts {
    prompts: prompt[];
    remove(prompt: prompt): void;
    issuePrompt(prompt: prompt): EventEmitter<boolean>;
    alert(message: string, options?: promptOptions): EventEmitter<boolean>;
    confirm(message: string, options?: promptOptions): EventEmitter<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<Prompts, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Prompts>;
}
