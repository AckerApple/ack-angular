export { pipes } from "./pipes.class";
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
export declare class Numbers {
    transform(input: any): any;
}
export declare class Keys {
    transform(input: any): string[];
}
export declare class TypeofPipe {
    transform(input: any): "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function";
}
export declare class ConsolePipe {
    transform(): any;
}
export declare const declarations: typeof Capitalize[];
export declare function getDeclarations(): typeof Capitalize[];
