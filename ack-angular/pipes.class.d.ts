/** if input is array returned otherwise array created with  */
export declare function array(input: any, repeat?: number, repeatValue?: any): any;
export declare function markdownAnchor(input: string): string;
export declare function textDownload(input: any): any;
export declare function yesno(input: any): any;
export declare function yesNo(input: any): any;
export declare function numbers(input: any): any;
export declare function capitalizeWords(input: any): any;
/** each sentence word is capitalized */
export declare function capitalize(input: any): any;
export declare function capitalizeAfterSentence(input: any): any;
export declare function capitalizeOne(input: any): any;
export declare const pipes: {
    array: (input: any, repeat?: number, repeatValue?: any) => any;
    markdownAnchor: (input: string) => string;
    textDownload: (input: any) => any;
    yesno: (input: any) => any;
    yesNo: (input: any) => any;
    numbers: (input: any) => any;
    capitalizeWords: (input: any) => any;
    capitalize: (input: any) => any;
    capitalizeAfterSentence: (input: any) => any;
    capitalizeOne: (input: any) => any;
    aDate: (v: any, call0: any, call1: any, call2: any) => any;
    aTime: (v: any, call0: any, call1: any, call2: any) => any;
    ack: (v: any, call0: any, call1: any, call2: any) => any;
};
