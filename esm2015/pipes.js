import { DomSanitizer } from '@angular/platform-browser';
import { KeysPipe } from './pipes/keys.pipe';
import * as pipes from "./pipes.class";
import { Pipe } from '@angular/core';
export { KeysPipe } from './pipes/keys.pipe';
/* ONLY THIS FILE */
export class IndexTrack {
    transform(_x) {
        return function (index) { return index; };
    }
}
IndexTrack.decorators = [
    { type: Pipe, args: [{ name: 'indexTrack' },] }
];
export class Stringify {
    transform(input, spaces = 0) {
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
    { type: DomSanitizer }
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
    { type: DomSanitizer }
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
    { type: DomSanitizer }
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
    transform(input) {
        return pipes.numberToPhone(input);
    }
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
    transform(input, rtnInput) {
        return pipes.numberSuffix(input, rtnInput);
    }
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
    KeysPipe,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUM1QyxPQUFPLEtBQUssS0FBSyxNQUFNLGVBQWUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRXBDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUU1QyxvQkFBb0I7QUFDVSxNQUFNLE9BQU8sVUFBVTtJQUNqRCxTQUFTLENBQUMsRUFBTztRQUNmLE9BQU8sVUFBUyxLQUFVLElBQUUsT0FBTyxLQUFLLENBQUEsQ0FBQSxDQUFDLENBQUE7SUFDM0MsQ0FBQzs7O1lBSEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQzs7QUFNQyxNQUFNLE9BQU8sU0FBUztJQUMvQyxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQU0sR0FBQyxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzVDLENBQUM7OztZQUhGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUM7O0FBTUYsTUFBTSxPQUFPLFVBQVU7SUFDNUMsU0FBUyxDQUFDLEtBQVUsRUFBRSxNQUFZLEVBQUUsV0FBaUI7UUFDbkQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDaEQsQ0FBQzs7O1lBSEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQzs7QUFNVyxNQUFNLE9BQU8sY0FBYztJQUN6RCxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQTJCLEVBQUUsV0FBcUI7UUFD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TUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHO0lBQzFCLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7SUFDZCxRQUFRO0lBQ1IsT0FBTztJQUNQLFNBQVM7SUFDVCxZQUFZO0lBQ1osY0FBYztJQUNkLFVBQVU7SUFDVixlQUFlO0lBQ2YsS0FBSztJQUNMLEtBQUs7SUFDTCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxLQUFLO0lBQ0wsS0FBSztJQUNMLE9BQU87SUFDUCxLQUFLO0lBQ0wsR0FBRztJQUNILE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtJQUNiLFlBQVk7SUFDWixHQUFHO0lBQ0gsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gsT0FBTztJQUNQLGdCQUFnQjtDQUNqQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcidcbmltcG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzLnBpcGUnXG5pbXBvcnQgKiBhcyBwaXBlcyBmcm9tIFwiLi9waXBlcy5jbGFzc1wiXG5pbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuZXhwb3J0IHsgS2V5c1BpcGUgfSBmcm9tICcuL3BpcGVzL2tleXMucGlwZSdcblxuLyogT05MWSBUSElTIEZJTEUgKi9cbiAgQFBpcGUoe25hbWU6ICdpbmRleFRyYWNrJ30pIGV4cG9ydCBjbGFzcyBJbmRleFRyYWNrIHtcbiAgICB0cmFuc2Zvcm0oX3g6IGFueSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGluZGV4OiBhbnkpe3JldHVybiBpbmRleH1cbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ3N0cmluZ2lmeSd9KSBleHBvcnQgY2xhc3MgU3RyaW5naWZ5IHtcbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgc3BhY2VzPTApIHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpbnB1dCwgbnVsbCwgc3BhY2VzKVxuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnYXJyYXknfSkgZXhwb3J0IGNsYXNzIEZvcmNlQXJyYXkge1xuICAgIHRyYW5zZm9ybShpbnB1dDogYW55LCByZXBlYXQ/OiBhbnksIHJlcGVhdFZhbHVlPzogYW55KSB7XG4gICAgICByZXR1cm4gcGlwZXMuYXJyYXkoaW5wdXQsIHJlcGVhdCwgcmVwZWF0VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdhcnJheU9mT2JqZWN0cyd9KSBleHBvcnQgY2xhc3MgQXJyYXlPZk9iamVjdHMge1xuICAgIHRyYW5zZm9ybShpbnB1dDogYW55LCByZXBlYXQ/OiBudW1iZXIgfCB1bmRlZmluZWQsIHJlcGVhdFZhbHVlPzogdW5rbm93bikge1xuICAgICAgcmV0dXJuIHBpcGVzLmFycmF5T2ZPYmplY3RzKGlucHV0LCByZXBlYXQsIHJlcGVhdFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnc2FmZVVybCd9KSBleHBvcnQgY2xhc3MgU2FmZVVybCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChpbnB1dClcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ251bWJlcldvcmQnfSkgZXhwb3J0IGNsYXNzIE51bWJlcldvcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgbnVtYmVyOiBhbnkpIHtcbiAgICAgIHJldHVybiBpbnB1dCArIChudW1iZXIgJiYgbnVtYmVyPT0xID8gJycgOiAncycpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdlbmROdW1iZXJXb3JkJ30pIGV4cG9ydCBjbGFzcyBFbmROdW1iZXJXb3JkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnkpIHtcbiAgICAgIHJldHVybiBpbnB1dCAmJiBpbnB1dD09MSA/ICcnIDogJ3MnXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdzYWZlSHRtbCd9KSBleHBvcnQgY2xhc3MgU2FmZUh0bWwge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpbnB1dClcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ3NhZmVTdHlsZSd9KSBleHBvcnQgY2xhc3MgU2FmZVN0eWxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuICAgIHRyYW5zZm9ybShpbnB1dDogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGlucHV0KVxuICAgIH1cbiAgfVxuLyogZW5kOiBvbmx5IHRoaXMgZmlsZSAqL1xuXG5cbi8qKiAoaW5wdXQ+PWEgJiYgaW5wdXQ8PWIpIHx8IChpbnB1dD49YiAmJiBpbnB1dDw9YSkgKi9cbkBQaXBlKHtuYW1lOiAnYmV0d2Vlbid9KSBleHBvcnQgY2xhc3MgQmV0d2VlbiB7XG7CoCB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgYTogYW55LCBiOiBhbnkpIHtcbiAgICByZXR1cm4gcGlwZXMuYmV0d2VlbihpbnB1dCwgYSwgYilcbiAgfVxufVxuXG5AUGlwZSh7bmFtZTogJ3JlcGxhY2VNYXhMZW5ndGgnfSkgZXhwb3J0IGNsYXNzIFJlcGxhY2VNYXhMZW5ndGgge1xuwqAgdHJhbnNmb3JtKFxuICAgaW5wdXQ6c3RyaW5nLCBtYXg6IG51bWJlciwgcmVwbGFjZW1lbnQ/OiBzdHJpbmdcbiAgKSB7XG4gICAgcmV0dXJuIHBpcGVzLnJlcGxhY2VNYXhMZW5ndGgoaW5wdXQsIG1heCwgcmVwbGFjZW1lbnQpXG4gIH1cbn1cblxuLyoqIHVzZSB3aXRoIGJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCBmb3IgaHJlZiAqL1xuQFBpcGUoe25hbWU6ICd0ZXh0RG93bmxvYWQnfSkgZXhwb3J0IGNsYXNzIFRleHREb3dubG9hZCB7XG4gIHRyYW5zZm9ybShpbnB1dDpzdHJpbmcpe3JldHVybiBwaXBlcy50ZXh0RG93bmxvYWQoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ251bWJlclRvUGhvbmUnfSkgZXhwb3J0IGNsYXNzIE51bWJlclRvUGhvbmUge1xuICB0cmFuc2Zvcm0oaW5wdXQ6c3RyaW5nIHwgbnVtYmVyKXtcbiAgICByZXR1cm4gcGlwZXMubnVtYmVyVG9QaG9uZShpbnB1dClcbiAgfVxufVxuXG5AUGlwZSh7bmFtZTogJ3RvTnVtYmVyJ30pIGV4cG9ydCBjbGFzcyB0b051bWJlciB7XG4gIHRyYW5zZm9ybShpbnB1dDpzdHJpbmcpe3JldHVybiBwaXBlcy50b051bWJlcihpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnbnVtYmVyU3VmZml4J30pIGV4cG9ydCBjbGFzcyBOdW1iZXJTdWZmaXgge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlciB8IHN0cmluZywgcnRuSW5wdXQ/OiBhbnkpe1xuICAgIHJldHVybiBwaXBlcy5udW1iZXJTdWZmaXgoaW5wdXQsIHJ0bklucHV0KVxuICB9XG59XG5cbkBQaXBlKHtuYW1lOiAnbWFya2Rvd25BbmNob3InfSkgZXhwb3J0IGNsYXNzIE1hcmtkb3duQW5jaG9yIHtcbiAgdHJhbnNmb3JtKGlucHV0OnN0cmluZyl7cmV0dXJuIHBpcGVzLm1hcmtkb3duQW5jaG9yKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdjYXBpdGFsaXplJ30pIGV4cG9ydCBjbGFzcyBDYXBpdGFsaXplIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLmNhcGl0YWxpemUoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2NhcGl0YWxpemVXb3Jkcyd9KSBleHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZVdvcmRzIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLmNhcGl0YWxpemVXb3JkcyhpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAneWVzbm8nfSkgZXhwb3J0IGNsYXNzIFllc25vIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLnllc25vKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdZZXNObyd9KSBleHBvcnQgY2xhc3MgWWVzTm8ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtyZXR1cm4gcGlwZXMueWVzTm8oaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2Jvb2xlYW4nfSkgZXhwb3J0IGNsYXNzIEJvb2xlYW5QaXBlIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLmJvb2xlYW4oaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2JpdCd9KSBleHBvcnQgY2xhc3MgQml0IHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLmJpdChpbnB1dCl9XG59XG5cbi8vZ2V0IGFuZCByZXR1cm4gYWxsIG51bWJlcnMgaW5zaWRlIGEgc3RyaW5nXG5AUGlwZSh7bmFtZTogJ251bWJlcnMnfSkgZXhwb3J0IGNsYXNzIE51bWJlcnMge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtyZXR1cm4gcGlwZXMubnVtYmVycyhpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnYURhdGUnfSkgZXhwb3J0IGNsYXNzIEFEYXRlIHtcbiAgdHJhbnNmb3JtKC4uLmFyZ3M6IGFueSl7cmV0dXJuIHBpcGVzLmFEYXRlLmFwcGx5KHBpcGVzLmFEYXRlLCBhcmdzKX1cbn1cblxuQFBpcGUoe25hbWU6ICdhTWF0aCd9KSBleHBvcnQgY2xhc3MgQU1hdGgge1xuICB0cmFuc2Zvcm0oLi4uYXJnczogYW55KXtyZXR1cm4gcGlwZXMuYU1hdGguYXBwbHkocGlwZXMuYU1hdGgsIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2FTdHJpbmcnfSkgZXhwb3J0IGNsYXNzIEFTdHJpbmcge1xuICB0cmFuc2Zvcm0oLi4uYXJnczogYW55KXtyZXR1cm4gcGlwZXMuYVN0cmluZy5hcHBseShwaXBlcy5hU3RyaW5nLCBhcmdzKX1cbn1cblxuQFBpcGUoe25hbWU6ICdhVGltZSd9KSBleHBvcnQgY2xhc3MgQVRpbWUge1xuICB0cmFuc2Zvcm0oLi4uYXJnczogYW55KXtyZXR1cm4gcGlwZXMuYVRpbWUuYXBwbHkocGlwZXMuYVRpbWUsIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2Fjayd9KSBleHBvcnQgY2xhc3MgQWNrIHtcbiAgdHJhbnNmb3JtKC4uLmFyZ3M6IGFueSl7cmV0dXJuIHBpcGVzLmFjay5hcHBseShwaXBlcy5hY2ssIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ3R5cGVvZid9KSBleHBvcnQgY2xhc3MgVHlwZW9mUGlwZSB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiB0eXBlb2YoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2NvbnNvbGUnfSkgZXhwb3J0IGNsYXNzIENvbnNvbGVQaXBlIHtcbiAgdHJhbnNmb3JtKCl7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyBhcyBhbnkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcbiAgSW5kZXhUcmFjayxcbiAgU3RyaW5naWZ5LFxuICBGb3JjZUFycmF5LFxuICBBcnJheU9mT2JqZWN0cyxcbiAgU2FmZUh0bWwsXG4gIFNhZmVVcmwsXG4gIFNhZmVTdHlsZSxcbiAgVGV4dERvd25sb2FkLFxuICBNYXJrZG93bkFuY2hvcixcbiAgQ2FwaXRhbGl6ZSxcbiAgQ2FwaXRhbGl6ZVdvcmRzLFxuICBZZXNubyxcbiAgWWVzTm8sXG4gIEtleXNQaXBlLFxuICBUeXBlb2ZQaXBlLFxuICBDb25zb2xlUGlwZSxcbiAgQURhdGUsXG4gIEFNYXRoLFxuICBBU3RyaW5nLFxuICBBVGltZSxcbiAgQWNrLFxuICBOdW1iZXJzLFxuICB0b051bWJlcixcbiAgTnVtYmVyVG9QaG9uZSxcbiAgTnVtYmVyU3VmZml4LFxuICBCaXQsXG4gIE51bWJlcldvcmQsXG4gIEVuZE51bWJlcldvcmQsXG4gIEJvb2xlYW5QaXBlLFxuICBCZXR3ZWVuLFxuICBSZXBsYWNlTWF4TGVuZ3RoLFxuXSJdfQ==