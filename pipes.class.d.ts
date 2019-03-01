export declare function between(input: any, a: any, b: any): boolean;
export declare function numberToPhone(val: any): any;
export declare function toNumber(val: any): number;
export declare function numberSuffix(val: any, rtnVal?: boolean): string;
export declare function array(input: any, repeat?: number, repeatValue?: any): any[];
export declare function arrayOfObjects(input: any, repeat?: number, repeatValue?: any): {
    value: any;
    index: number;
}[];
export declare function markdownAnchor(input: string): string;
export declare function textDownload(input: any): any;
export declare function yesno(input: any): any;
export declare function yesNo(input: any): any;
export declare function boolean(input: any): boolean;
export declare function bit(input: any): 1 | 0;
export declare function numbers(input: any, safeChars?: string): any;
export declare function capitalizeWords(input: any): any;
export declare function capitalize(input: any): any;
export declare function capitalizeAfterSentence(input: any): any;
export declare function capitalizeOne(input: any): any;
export declare const aDate: (v: any, call0?: any, call1?: any, call2?: any) => any;
export declare const aTime: (v: any, call0?: any, call1?: any, call2?: any) => any;
export declare const aMath: (v: any, call0?: any, call1?: any, call2?: any) => any;
export declare const aString: (v: any, call0?: any, call1?: any, call2?: any) => any;
export declare const ack: (v: any, call0?: any, call1?: any, call2?: any) => any;
export declare const pipes: {
    array: typeof array;
    markdownAnchor: typeof markdownAnchor;
    textDownload: typeof textDownload;
    yesno: typeof yesno;
    yesNo: typeof yesNo;
    numbers: typeof numbers;
    capitalizeWords: typeof capitalizeWords;
    capitalize: typeof capitalize;
    capitalizeAfterSentence: typeof capitalizeAfterSentence;
    capitalizeOne: typeof capitalizeOne;
    toNumber: typeof toNumber;
    numberToPhone: typeof numberToPhone;
    numberSuffix: typeof numberSuffix;
    aDate: (v: any, call0?: any, call1?: any, call2?: any) => any;
    aMath: (v: any, call0?: any, call1?: any, call2?: any) => any;
    aString: (v: any, call0?: any, call1?: any, call2?: any) => any;
    aTime: (v: any, call0?: any, call1?: any, call2?: any) => any;
    ack: (v: any, call0?: any, call1?: any, call2?: any) => any;
    between: typeof between;
};
