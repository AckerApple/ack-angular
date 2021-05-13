import { Pipe } from '@angular/core';
import * as pipes from "./pipes.class";
import { 
//SafeHtml as SafeHtmler,//must be exported for AOT
//SafeStyle as SafeStyler,//must be exported for AOT
//SafeResourceUrl,
DomSanitizer } from '@angular/platform-browser';
/* ONLY THIS FILE */
export class IndexTrack {
    transform() {
        return function (index) { return index; };
    }
}
IndexTrack.decorators = [
    { type: Pipe, args: [{ name: 'indexTrack' },] }
];
export class Stringify {
    transform(input, spaces) {
        return JSON.stringify(input, null, spaces);
    }
}
Stringify.decorators = [
    { type: Pipe, args: [{ name: 'stringify' },] }
];
export class ForceArray {
    transform(input, repeat, repeatValue) {
        return pipes.array(input, repeat, repeatValue);
    }
}
ForceArray.decorators = [
    { type: Pipe, args: [{ name: 'array' },] }
];
export class ArrayOfObjects {
    transform(input, repeat, repeatValue) {
        return pipes.arrayOfObjects(input, repeat, repeatValue);
    }
}
ArrayOfObjects.decorators = [
    { type: Pipe, args: [{ name: 'arrayOfObjects' },] }
];
export class SafeUrl {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(input);
    }
}
SafeUrl.decorators = [
    { type: Pipe, args: [{ name: 'safeUrl' },] }
];
SafeUrl.ctorParameters = () => [
    { type: 
        //SafeHtml as SafeHtmler,//must be exported for AOT
        //SafeStyle as SafeStyler,//must be exported for AOT
        //SafeResourceUrl,
        DomSanitizer }
];
export class NumberWord {
    constructor() { }
    transform(input, number) {
        return input + (number && number == 1 ? '' : 's');
    }
}
NumberWord.decorators = [
    { type: Pipe, args: [{ name: 'numberWord' },] }
];
NumberWord.ctorParameters = () => [];
export class EndNumberWord {
    constructor() { }
    transform(input) {
        return input && input == 1 ? '' : 's';
    }
}
EndNumberWord.decorators = [
    { type: Pipe, args: [{ name: 'endNumberWord' },] }
];
EndNumberWord.ctorParameters = () => [];
export class SafeHtml {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustHtml(input);
    }
}
SafeHtml.decorators = [
    { type: Pipe, args: [{ name: 'safeHtml' },] }
];
SafeHtml.ctorParameters = () => [
    { type: 
        //SafeHtml as SafeHtmler,//must be exported for AOT
        //SafeStyle as SafeStyler,//must be exported for AOT
        //SafeResourceUrl,
        DomSanitizer }
];
export class SafeStyle {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustStyle(input);
    }
}
SafeStyle.decorators = [
    { type: Pipe, args: [{ name: 'safeStyle' },] }
];
SafeStyle.ctorParameters = () => [
    { type: 
        //SafeHtml as SafeHtmler,//must be exported for AOT
        //SafeStyle as SafeStyler,//must be exported for AOT
        //SafeResourceUrl,
        DomSanitizer }
];
/* end: only this file */
/** (input>=a && input<=b) || (input>=b && input<=a) */
export class Between {
    transform(input, a, b) {
        return pipes.between(input, a, b);
    }
}
Between.decorators = [
    { type: Pipe, args: [{ name: 'between' },] }
];
export class ReplaceMaxLength {
    transform(input, max, replacement) {
        return pipes.replaceMaxLength(input, max, replacement);
    }
}
ReplaceMaxLength.decorators = [
    { type: Pipe, args: [{ name: 'replaceMaxLength' },] }
];
/** use with bypassSecurityTrustResourceUrl for href */
export class TextDownload {
    transform(input) { return pipes.textDownload(input); }
}
TextDownload.decorators = [
    { type: Pipe, args: [{ name: 'textDownload' },] }
];
export class NumberToPhone {
    transform(input) { return pipes.numberToPhone(input); }
}
NumberToPhone.decorators = [
    { type: Pipe, args: [{ name: 'numberToPhone' },] }
];
export class toNumber {
    transform(input) { return pipes.toNumber(input); }
}
toNumber.decorators = [
    { type: Pipe, args: [{ name: 'toNumber' },] }
];
export class NumberSuffix {
    transform(input, rtnInput) { return pipes.numberSuffix(input, rtnInput); }
}
NumberSuffix.decorators = [
    { type: Pipe, args: [{ name: 'numberSuffix' },] }
];
export class MarkdownAnchor {
    transform(input) { return pipes.markdownAnchor(input); }
}
MarkdownAnchor.decorators = [
    { type: Pipe, args: [{ name: 'markdownAnchor' },] }
];
export class Capitalize {
    transform(input) { return pipes.capitalize(input); }
}
Capitalize.decorators = [
    { type: Pipe, args: [{ name: 'capitalize' },] }
];
export class CapitalizeWords {
    transform(input) { return pipes.capitalizeWords(input); }
}
CapitalizeWords.decorators = [
    { type: Pipe, args: [{ name: 'capitalizeWords' },] }
];
export class Yesno {
    transform(input) { return pipes.yesno(input); }
}
Yesno.decorators = [
    { type: Pipe, args: [{ name: 'yesno' },] }
];
export class YesNo {
    transform(input) { return pipes.yesNo(input); }
}
YesNo.decorators = [
    { type: Pipe, args: [{ name: 'YesNo' },] }
];
export class BooleanPipe {
    transform(input) { return pipes.boolean(input); }
}
BooleanPipe.decorators = [
    { type: Pipe, args: [{ name: 'boolean' },] }
];
export class Bit {
    transform(input) { return pipes.bit(input); }
}
Bit.decorators = [
    { type: Pipe, args: [{ name: 'bit' },] }
];
//get and return all numbers inside a string
export class Numbers {
    transform(input) { return pipes.numbers(input); }
}
Numbers.decorators = [
    { type: Pipe, args: [{ name: 'numbers' },] }
];
export class ADate {
    transform(...args) { return pipes.aDate.apply(pipes.aDate, args); }
}
ADate.decorators = [
    { type: Pipe, args: [{ name: 'aDate' },] }
];
export class AMath {
    transform(...args) { return pipes.aMath.apply(pipes.aMath, args); }
}
AMath.decorators = [
    { type: Pipe, args: [{ name: 'aMath' },] }
];
export class AString {
    transform(...args) { return pipes.aString.apply(pipes.aString, args); }
}
AString.decorators = [
    { type: Pipe, args: [{ name: 'aString' },] }
];
export class ATime {
    transform(...args) { return pipes.aTime.apply(pipes.aTime, args); }
}
ATime.decorators = [
    { type: Pipe, args: [{ name: 'aTime' },] }
];
export class Ack {
    transform(...args) { return pipes.ack.apply(pipes.ack, args); }
}
Ack.decorators = [
    { type: Pipe, args: [{ name: 'ack' },] }
];
export class Keys {
    transform(input) {
        const type = typeof (input) == 'object';
        const isOb = input && type;
        const isArray = isOb && input.constructor == Array;
        if (isArray) {
            return input.map((_value, index) => index);
        }
        return input ? Object.keys(input) : [];
    }
}
Keys.decorators = [
    { type: Pipe, args: [{ name: 'keys' },] }
];
export class TypeofPipe {
    transform(input) { return typeof (input); }
}
TypeofPipe.decorators = [
    { type: Pipe, args: [{ name: 'typeof' },] }
];
export class ConsolePipe {
    transform() {
        return console.log.apply(console, arguments);
    }
}
ConsolePipe.decorators = [
    { type: Pipe, args: [{ name: 'console' },] }
];
export const declarations = [
    IndexTrack,
    Stringify,
    ForceArray,
    ArrayOfObjects,
    SafeHtml,
    SafeUrl,
    SafeStyle,
    TextDownload,
    MarkdownAnchor,
    Capitalize,
    CapitalizeWords,
    Yesno,
    YesNo,
    Keys,
    TypeofPipe,
    ConsolePipe,
    ADate,
    AMath,
    AString,
    ATime,
    Ack,
    Numbers,
    toNumber,
    NumberToPhone,
    NumberSuffix,
    Bit,
    NumberWord,
    EndNumberWord,
    BooleanPipe,
    Between,
    ReplaceMaxLength,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyQyxPQUFPLEtBQUssS0FBSyxNQUFNLGVBQWUsQ0FBQTtBQUV0QyxPQUFPO0FBQ0wsbURBQW1EO0FBQ25ELG9EQUFvRDtBQUNwRCxrQkFBa0I7QUFDbEIsWUFBWSxFQUNiLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsb0JBQW9CO0FBQ1UsTUFBTSxPQUFPLFVBQVU7SUFDakQsU0FBUztRQUNQLE9BQU8sVUFBUyxLQUFVLElBQUUsT0FBTyxLQUFLLENBQUEsQ0FBQSxDQUFDLENBQUE7SUFDM0MsQ0FBQzs7O1lBSEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQzs7QUFNQyxNQUFNLE9BQU8sU0FBUztJQUMvQyxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQVc7UUFDL0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDNUMsQ0FBQzs7O1lBSEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQzs7QUFNRixNQUFNLE9BQU8sVUFBVTtJQUM1QyxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQVksRUFBRSxXQUFpQjtRQUNuRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUNoRCxDQUFDOzs7WUFIRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDOztBQU1XLE1BQU0sT0FBTyxjQUFjO0lBQ3pELFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLFdBQWdCO1FBQ2pELE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ3pE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blxuaW1wb3J0ICogYXMgcGlwZXMgZnJvbSBcIi4vcGlwZXMuY2xhc3NcIlxuXG5pbXBvcnQge1xuICAvL1NhZmVIdG1sIGFzIFNhZmVIdG1sZXIsLy9tdXN0IGJlIGV4cG9ydGVkIGZvciBBT1RcbiAgLy9TYWZlU3R5bGUgYXMgU2FmZVN0eWxlciwvL211c3QgYmUgZXhwb3J0ZWQgZm9yIEFPVFxuICAvL1NhZmVSZXNvdXJjZVVybCxcbiAgRG9tU2FuaXRpemVyXG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG4vKiBPTkxZIFRISVMgRklMRSAqL1xuICBAUGlwZSh7bmFtZTogJ2luZGV4VHJhY2snfSkgZXhwb3J0IGNsYXNzIEluZGV4VHJhY2sge1xuICAgIHRyYW5zZm9ybSgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihpbmRleDogYW55KXtyZXR1cm4gaW5kZXh9XG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdzdHJpbmdpZnknfSkgZXhwb3J0IGNsYXNzIFN0cmluZ2lmeSB7XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnksIHNwYWNlczogYW55KSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoaW5wdXQsIG51bGwsIHNwYWNlcylcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ2FycmF5J30pIGV4cG9ydCBjbGFzcyBGb3JjZUFycmF5IHtcbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgcmVwZWF0PzogYW55LCByZXBlYXRWYWx1ZT86IGFueSkge1xuICAgICAgcmV0dXJuIHBpcGVzLmFycmF5KGlucHV0LCByZXBlYXQsIHJlcGVhdFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnYXJyYXlPZk9iamVjdHMnfSkgZXhwb3J0IGNsYXNzIEFycmF5T2ZPYmplY3RzIHtcbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgcmVwZWF0OiBhbnksIHJlcGVhdFZhbHVlOiBhbnkpIHtcbiAgICAgIHJldHVybiBwaXBlcy5hcnJheU9mT2JqZWN0cyhpbnB1dCwgcmVwZWF0LCByZXBlYXRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ3NhZmVVcmwnfSkgZXhwb3J0IGNsYXNzIFNhZmVVcmwge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoaW5wdXQpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdudW1iZXJXb3JkJ30pIGV4cG9ydCBjbGFzcyBOdW1iZXJXb3JkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnksIG51bWJlcjogYW55KSB7XG4gICAgICByZXR1cm4gaW5wdXQgKyAobnVtYmVyICYmIG51bWJlcj09MSA/ICcnIDogJ3MnKVxuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnZW5kTnVtYmVyV29yZCd9KSBleHBvcnQgY2xhc3MgRW5kTnVtYmVyV29yZCB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIHRyYW5zZm9ybShpbnB1dDogYW55KSB7XG4gICAgICByZXR1cm4gaW5wdXQgJiYgaW5wdXQ9PTEgPyAnJyA6ICdzJ1xuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnc2FmZUh0bWwnfSkgZXhwb3J0IGNsYXNzIFNhZmVIdG1sIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuICAgIHRyYW5zZm9ybShpbnB1dDogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaW5wdXQpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdzYWZlU3R5bGUnfSkgZXhwb3J0IGNsYXNzIFNhZmVTdHlsZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShpbnB1dClcbiAgICB9XG4gIH1cbi8qIGVuZDogb25seSB0aGlzIGZpbGUgKi9cblxuXG4vKiogKGlucHV0Pj1hICYmIGlucHV0PD1iKSB8fCAoaW5wdXQ+PWIgJiYgaW5wdXQ8PWEpICovXG5AUGlwZSh7bmFtZTogJ2JldHdlZW4nfSkgZXhwb3J0IGNsYXNzIEJldHdlZW4ge1xuwqAgdHJhbnNmb3JtKGlucHV0OiBhbnksIGE6IGFueSwgYjogYW55KSB7XG4gICAgcmV0dXJuIHBpcGVzLmJldHdlZW4oaW5wdXQsIGEsIGIpXG4gIH1cbn1cblxuQFBpcGUoe25hbWU6ICdyZXBsYWNlTWF4TGVuZ3RoJ30pIGV4cG9ydCBjbGFzcyBSZXBsYWNlTWF4TGVuZ3RoIHtcbsKgIHRyYW5zZm9ybShcbiAgIGlucHV0OnN0cmluZywgbWF4OiBudW1iZXIsIHJlcGxhY2VtZW50OiBzdHJpbmdcbiAgKSB7XG4gICAgcmV0dXJuIHBpcGVzLnJlcGxhY2VNYXhMZW5ndGgoaW5wdXQsIG1heCwgcmVwbGFjZW1lbnQpXG4gIH1cbn1cblxuLyoqIHVzZSB3aXRoIGJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCBmb3IgaHJlZiAqL1xuQFBpcGUoe25hbWU6ICd0ZXh0RG93bmxvYWQnfSkgZXhwb3J0IGNsYXNzIFRleHREb3dubG9hZCB7XG4gIHRyYW5zZm9ybShpbnB1dDpzdHJpbmcpe3JldHVybiBwaXBlcy50ZXh0RG93bmxvYWQoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ251bWJlclRvUGhvbmUnfSkgZXhwb3J0IGNsYXNzIE51bWJlclRvUGhvbmUge1xuICB0cmFuc2Zvcm0oaW5wdXQ6c3RyaW5nKXtyZXR1cm4gcGlwZXMubnVtYmVyVG9QaG9uZShpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAndG9OdW1iZXInfSkgZXhwb3J0IGNsYXNzIHRvTnVtYmVyIHtcbiAgdHJhbnNmb3JtKGlucHV0OnN0cmluZyl7cmV0dXJuIHBpcGVzLnRvTnVtYmVyKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdudW1iZXJTdWZmaXgnfSkgZXhwb3J0IGNsYXNzIE51bWJlclN1ZmZpeCB7XG4gIHRyYW5zZm9ybShpbnB1dDpzdHJpbmcsIHJ0bklucHV0PzogYW55KXtyZXR1cm4gcGlwZXMubnVtYmVyU3VmZml4KGlucHV0LCBydG5JbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnbWFya2Rvd25BbmNob3InfSkgZXhwb3J0IGNsYXNzIE1hcmtkb3duQW5jaG9yIHtcbiAgdHJhbnNmb3JtKGlucHV0OnN0cmluZyl7cmV0dXJuIHBpcGVzLm1hcmtkb3duQW5jaG9yKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdjYXBpdGFsaXplJ30pIGV4cG9ydCBjbGFzcyBDYXBpdGFsaXplIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLmNhcGl0YWxpemUoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2NhcGl0YWxpemVXb3Jkcyd9KSBleHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZVdvcmRzIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLmNhcGl0YWxpemVXb3JkcyhpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAneWVzbm8nfSkgZXhwb3J0IGNsYXNzIFllc25vIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLnllc25vKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdZZXNObyd9KSBleHBvcnQgY2xhc3MgWWVzTm8ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtyZXR1cm4gcGlwZXMueWVzTm8oaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2Jvb2xlYW4nfSkgZXhwb3J0IGNsYXNzIEJvb2xlYW5QaXBlIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLmJvb2xlYW4oaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2JpdCd9KSBleHBvcnQgY2xhc3MgQml0IHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLmJpdChpbnB1dCl9XG59XG5cbi8vZ2V0IGFuZCByZXR1cm4gYWxsIG51bWJlcnMgaW5zaWRlIGEgc3RyaW5nXG5AUGlwZSh7bmFtZTogJ251bWJlcnMnfSkgZXhwb3J0IGNsYXNzIE51bWJlcnMge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtyZXR1cm4gcGlwZXMubnVtYmVycyhpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnYURhdGUnfSkgZXhwb3J0IGNsYXNzIEFEYXRlIHtcbiAgdHJhbnNmb3JtKC4uLmFyZ3M6IGFueSl7cmV0dXJuIHBpcGVzLmFEYXRlLmFwcGx5KHBpcGVzLmFEYXRlLCBhcmdzKX1cbn1cblxuQFBpcGUoe25hbWU6ICdhTWF0aCd9KSBleHBvcnQgY2xhc3MgQU1hdGgge1xuICB0cmFuc2Zvcm0oLi4uYXJnczogYW55KXtyZXR1cm4gcGlwZXMuYU1hdGguYXBwbHkocGlwZXMuYU1hdGgsIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2FTdHJpbmcnfSkgZXhwb3J0IGNsYXNzIEFTdHJpbmcge1xuICB0cmFuc2Zvcm0oLi4uYXJnczogYW55KXtyZXR1cm4gcGlwZXMuYVN0cmluZy5hcHBseShwaXBlcy5hU3RyaW5nLCBhcmdzKX1cbn1cblxuQFBpcGUoe25hbWU6ICdhVGltZSd9KSBleHBvcnQgY2xhc3MgQVRpbWUge1xuICB0cmFuc2Zvcm0oLi4uYXJnczogYW55KXtyZXR1cm4gcGlwZXMuYVRpbWUuYXBwbHkocGlwZXMuYVRpbWUsIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2Fjayd9KSBleHBvcnQgY2xhc3MgQWNrIHtcbiAgdHJhbnNmb3JtKC4uLmFyZ3M6IGFueSl7cmV0dXJuIHBpcGVzLmFjay5hcHBseShwaXBlcy5hY2ssIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2tleXMnfSkgZXhwb3J0IGNsYXNzIEtleXMge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mKGlucHV0KT09J29iamVjdCdcbiAgICBjb25zdCBpc09iID0gaW5wdXQgJiYgdHlwZVxuICAgIGNvbnN0IGlzQXJyYXkgPSBpc09iICYmIGlucHV0LmNvbnN0cnVjdG9yID09IEFycmF5XG5cbiAgICBpZihpc0FycmF5KXtcbiAgICAgIHJldHVybiBpbnB1dC5tYXAoKF92YWx1ZTogYW55LCBpbmRleDogYW55KT0+aW5kZXgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGlucHV0ID8gT2JqZWN0LmtleXMoaW5wdXQpIDogW11cbiAgfVxufVxuXG5AUGlwZSh7bmFtZTogJ3R5cGVvZid9KSBleHBvcnQgY2xhc3MgVHlwZW9mUGlwZSB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiB0eXBlb2YoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2NvbnNvbGUnfSkgZXhwb3J0IGNsYXNzIENvbnNvbGVQaXBlIHtcbiAgdHJhbnNmb3JtKCl7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyBhcyBhbnkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcbiAgSW5kZXhUcmFjayxcbiAgU3RyaW5naWZ5LFxuICBGb3JjZUFycmF5LFxuICBBcnJheU9mT2JqZWN0cyxcbiAgU2FmZUh0bWwsXG4gIFNhZmVVcmwsXG4gIFNhZmVTdHlsZSxcbiAgVGV4dERvd25sb2FkLFxuICBNYXJrZG93bkFuY2hvcixcbiAgQ2FwaXRhbGl6ZSxcbiAgQ2FwaXRhbGl6ZVdvcmRzLFxuICBZZXNubyxcbiAgWWVzTm8sXG4gIEtleXMsXG4gIFR5cGVvZlBpcGUsXG4gIENvbnNvbGVQaXBlLFxuICBBRGF0ZSxcbiAgQU1hdGgsXG4gIEFTdHJpbmcsXG4gIEFUaW1lLFxuICBBY2ssXG4gIE51bWJlcnMsXG4gIHRvTnVtYmVyLFxuICBOdW1iZXJUb1Bob25lLFxuICBOdW1iZXJTdWZmaXgsXG4gIEJpdCxcbiAgTnVtYmVyV29yZCxcbiAgRW5kTnVtYmVyV29yZCxcbiAgQm9vbGVhblBpcGUsXG4gIEJldHdlZW4sXG4gIFJlcGxhY2VNYXhMZW5ndGgsXG5dIl19