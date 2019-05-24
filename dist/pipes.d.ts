import { DomSanitizer } from '@angular/platform-browser';
export declare class IndexTrack {
    transform(): (index: any) => any;
}
export declare class Stringify {
    transform(input: any, spaces: any): string;
}
export declare class ForceArray {
    transform(input: any, repeat: any, repeatValue: any): any[];
}
export declare class ArrayOfObjects {
    transform(input: any, repeat: any, repeatValue: any): {
        value: any;
        index: number;
    }[];
}
export declare class SafeUrl {
    private domSanitizer;
    constructor(domSanitizer: DomSanitizer);
    transform(input: any): import("@angular/platform-browser").SafeResourceUrl;
}
export declare class NumberWord {
    constructor();
    transform(input: any, number: any): string;
}
export declare class EndNumberWord {
    constructor();
    transform(input: any): "" | "s";
}
export declare class SafeHtml {
    private domSanitizer;
    constructor(domSanitizer: DomSanitizer);
    transform(input: any): import("@angular/platform-browser").SafeHtml;
}
export declare class SafeStyle {
    private domSanitizer;
    constructor(domSanitizer: DomSanitizer);
    transform(input: any): import("@angular/platform-browser").SafeStyle;
}
export declare class Between {
    transform(input: any, a: any, b: any): boolean;
}
export declare class TextDownload {
    transform(input: string): any;
}
export declare class NumberToPhone {
    transform(input: string): any;
}
export declare class toNumber {
    transform(input: string): number;
}
export declare class NumberSuffix {
    transform(input: string, rtnInput: any): string;
}
export declare class MarkdownAnchor {
    transform(input: string): string;
}
export declare class Capitalize {
    transform(input: any): any;
}
export declare class CapitalizeWords {
    transform(input: any): any;
}
export declare class Yesno {
    transform(input: any): any;
}
export declare class YesNo {
    transform(input: any): any;
}
export declare class BooleanPipe {
    transform(input: any): boolean;
}
export declare class Bit {
    transform(input: any): 1 | 0;
}
export declare class Numbers {
    transform(input: any): any;
}
export declare class ADate {
    transform(): any;
}
export declare class AMath {
    transform(): any;
}
export declare class AString {
    transform(): any;
}
export declare class ATime {
    transform(): any;
}
export declare class Ack {
    transform(): any;
}
export declare class Keys {
    transform(input: any): any;
}
export declare class TypeofPipe {
    transform(input: any): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
}
export declare class ConsolePipe {
    transform(): any;
}
export declare const declarations: (typeof Stringify | typeof ForceArray | typeof SafeUrl | typeof SafeHtml | typeof SafeStyle | typeof Between | typeof TextDownload)[];
