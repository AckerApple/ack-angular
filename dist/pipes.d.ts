import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export { KeysPipe } from './pipes/keys.pipe';
export declare class IndexTrack {
    transform(_x: any): (index: any) => any;
    static ɵfac: i0.ɵɵFactoryDeclaration<IndexTrack, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IndexTrack, "indexTrack", false>;
}
export declare class Stringify {
    transform(input: any, spaces?: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<Stringify, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<Stringify, "stringify", false>;
}
export declare class ForceArray {
    transform(input: any, repeat?: any, repeatValue?: any): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ForceArray, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ForceArray, "array", false>;
}
export declare class ArrayOfObjects {
    transform(input: any, repeat?: number | undefined, repeatValue?: unknown): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ArrayOfObjects, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ArrayOfObjects, "arrayOfObjects", false>;
}
export declare class SafeUrl {
    private domSanitizer;
    constructor(domSanitizer: DomSanitizer);
    transform(input: any): import("@angular/platform-browser").SafeResourceUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<SafeUrl, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SafeUrl, "safeUrl", false>;
}
export declare class NumberWord {
    constructor();
    transform(input: any, number: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberWord, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<NumberWord, "numberWord", false>;
}
export declare class EndNumberWord {
    constructor();
    transform(input: any): "" | "s";
    static ɵfac: i0.ɵɵFactoryDeclaration<EndNumberWord, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<EndNumberWord, "endNumberWord", false>;
}
export declare class SafeHtml {
    private domSanitizer;
    constructor(domSanitizer: DomSanitizer);
    transform(input: any): import("@angular/platform-browser").SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<SafeHtml, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SafeHtml, "safeHtml", false>;
}
export declare class SafeStyle {
    private domSanitizer;
    constructor(domSanitizer: DomSanitizer);
    transform(input: any): import("@angular/platform-browser").SafeStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<SafeStyle, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SafeStyle, "safeStyle", false>;
}
/** (input>=a && input<=b) || (input>=b && input<=a) */
export declare class Between {
    transform(input: any, a: any, b: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<Between, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<Between, "between", false>;
}
export declare class ReplaceMaxLength {
    transform(input: string, max: number, replacement?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReplaceMaxLength, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ReplaceMaxLength, "replaceMaxLength", false>;
}
/** use with bypassSecurityTrustResourceUrl for href */
export declare class TextDownload {
    transform(input: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextDownload, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TextDownload, "textDownload", false>;
}
export declare class NumberToPhone {
    transform(input: string | number): unknown;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberToPhone, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<NumberToPhone, "numberToPhone", false>;
}
export declare class toNumber {
    transform(input: string): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<toNumber, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<toNumber, "toNumber", false>;
}
export declare class NumberSuffix {
    transform(input: number | string, rtnInput?: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberSuffix, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<NumberSuffix, "numberSuffix", false>;
}
export declare class MarkdownAnchor {
    transform(input: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkdownAnchor, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<MarkdownAnchor, "markdownAnchor", false>;
}
export declare class Capitalize {
    transform(input: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<Capitalize, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<Capitalize, "capitalize", false>;
}
export declare class CapitalizeWords {
    transform(input: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CapitalizeWords, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CapitalizeWords, "capitalizeWords", false>;
}
export declare class Yesno {
    transform(input: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<Yesno, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<Yesno, "yesno", false>;
}
export declare class YesNo {
    transform(input: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<YesNo, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<YesNo, "YesNo", false>;
}
export declare class BooleanPipe {
    transform(input: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BooleanPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<BooleanPipe, "boolean", false>;
}
export declare class Bit {
    transform(input: any): 1 | 0;
    static ɵfac: i0.ɵɵFactoryDeclaration<Bit, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<Bit, "bit", false>;
}
export declare class Numbers {
    transform(input: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<Numbers, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<Numbers, "numbers", false>;
}
export declare class ADate {
    transform(...args: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADate, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ADate, "aDate", false>;
}
export declare class AMath {
    transform(...args: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AMath, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<AMath, "aMath", false>;
}
export declare class AString {
    transform(...args: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AString, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<AString, "aString", false>;
}
export declare class ATime {
    transform(...args: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ATime, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ATime, "aTime", false>;
}
export declare class Ack {
    transform(...args: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<Ack, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<Ack, "ack", false>;
}
export declare class TypeofPipe {
    transform(input: any): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    static ɵfac: i0.ɵɵFactoryDeclaration<TypeofPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TypeofPipe, "typeof", false>;
}
export declare class ConsolePipe {
    transform(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConsolePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ConsolePipe, "console", false>;
}
export declare const pipes: (typeof SafeUrl | typeof SafeHtml | typeof SafeStyle | typeof ADate)[];
