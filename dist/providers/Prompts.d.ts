import { EventEmitter } from '@angular/core';
export interface button {
    text: string;
    handler?: () => any;
}
export interface prompt {
    type: "confirm" | "alert" | "string";
    message: string;
    emitter: EventEmitter<boolean>;
    title?: string;
    buttons?: button[];
}
export declare class Prompts {
    prompts: prompt[];
    remove(prompt: prompt): void;
    issuePrompt(prompt: prompt): EventEmitter<boolean>;
    alert(message: string, options?: prompt): EventEmitter<boolean>;
    confirm(message: string, options?: prompt): EventEmitter<boolean>;
}
