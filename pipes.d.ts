import { DomSanitizer } from '@angular/platform-browser';
export declare class IndexTrack {
    transform(_x: any): (index: any) => any;
}
export declare class Stringify {
    transform(input: any, spaces?: number): string;
}
export declare class ForceArray {
    transform(input: any, repeat?: any, repeatValue?: any): any[];
}
export declare class ArrayOfObjects {
    transform(input: any, repeat?: number | undefined, repeatValue?: unknown): any[];
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
/** (input>=a && input<=b) || (input>=b && input<=a) */
export declare class Between {
    transform(input: any, a: any, b: any): boolean;
}
export declare class ReplaceMaxLength {
    transform(input: string, max: number, replacement?: string): string;
}
/** use with bypassSecurityTrustResourceUrl for href */
export declare class TextDownload {
    transform(input: string): any;
}
export declare class NumberToPhone {
    transform(input: string | number): unknown;
}
export declare class toNumber {
    transform(input: string): number;
}
export declare class NumberSuffix {
    transform(input: number | string, rtnInput?: any): string;
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
    transform(input: any): 0 | 1;
}
export declare class Numbers {
    transform(input: any): any;
}
export declare class ADate {
    transform(...args: any): any;
}
export declare class AMath {
    transform(...args: any): any;
}
export declare class AString {
    transform(...args: any): any;
}
export declare class ATime {
    transform(...args: any): any;
}
export declare class Ack {
    transform(...args: any): any;
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
export declare const declarations: (typeof SafeUrl | typeof SafeHtml | typeof SafeStyle | typeof ADate)[];
