import { SafeHtml as SafeHtmler, SafeStyle as SafeStyler, SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
export declare class IndexTrack {
    transform(): (index: any, ob: any) => any;
}
export declare class Stringify {
    transform(input: any, spaces: any): string;
}
export declare class ForceArray {
    transform(input: any, repeat: any, repeatValue: any): any;
}
export declare class ArrayOfObjects {
    transform(input: any, repeat: any, repeatValue: any): any;
}
export declare class SafeUrl {
    private domSanitizer;
    constructor(domSanitizer: DomSanitizer);
    transform(input: any): SafeResourceUrl;
}
export declare class SafeHtml {
    private domSanitizer;
    constructor(domSanitizer: DomSanitizer);
    transform(input: any): SafeHtmler;
}
export declare class SafeStyle {
    private domSanitizer;
    constructor(domSanitizer: DomSanitizer);
    transform(input: any): SafeStyler;
}
/** (input>=a && input<=b) || (input>=b && input<=a) */
export declare class Between {
    transform(input: any, a: any, b: any): boolean;
}
/** use with bypassSecurityTrustResourceUrl for href */
export declare class TextDownload {
    transform(input: string): any;
}
export declare class NumberToPhone {
    transform(input: string): any;
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
    transform(input: any): "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function";
}
export declare class ConsolePipe {
    transform(): any;
}
export declare const declarations: (typeof ForceArray | typeof SafeUrl | typeof SafeHtml | typeof SafeStyle)[];
