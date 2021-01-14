export declare function between(input: any, a: any, b: any): boolean;
export declare function numberToPhone(val: any): any;
export declare function toNumber(val: any): number;
export declare function numberSuffix(val: any, rtnVal?: boolean): string;
/** if input is array returned otherwise array created with  */
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
export declare function bit(input: any): 0 | 1;
export declare function numbers(input: any, safeChars?: string): any;
export declare function capitalizeWords(input: any): any;
/** each sentence word is capitalized */
export declare function capitalize(input: any): any;
export declare function capitalizeAfterSentence(input: any): any;
export declare function capitalizeOne(input: any): any;
export declare const aDate: Function;
export declare const aTime: Function;
export declare const aMath: Function;
export declare const aString: Function;
export declare const ack: Function;
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
    aDate: Function;
    aMath: Function;
    aString: Function;
    aTime: Function;
    ack: Function;
    between: typeof between;
};
