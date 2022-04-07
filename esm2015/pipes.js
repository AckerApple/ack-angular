import { DomSanitizer } from '@angular/platform-browser';
import { KeysPipe } from './pipes/keys.pipe';
import * as pipesUtils from "./pipes.class";
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
        return pipesUtils.array(input, repeat, repeatValue);
    }
}
ForceArray.decorators = [
    { type: Pipe, args: [{ name: 'array' },] }
];
export class ArrayOfObjects {
    transform(input, repeat, repeatValue) {
        return pipesUtils.arrayOfObjects(input, repeat, repeatValue);
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
        return pipesUtils.between(input, a, b);
    }
}
Between.decorators = [
    { type: Pipe, args: [{ name: 'between' },] }
];
export class ReplaceMaxLength {
    transform(input, max, replacement) {
        return pipesUtils.replaceMaxLength(input, max, replacement);
    }
}
ReplaceMaxLength.decorators = [
    { type: Pipe, args: [{ name: 'replaceMaxLength' },] }
];
/** use with bypassSecurityTrustResourceUrl for href */
export class TextDownload {
    transform(input) { return pipesUtils.textDownload(input); }
}
TextDownload.decorators = [
    { type: Pipe, args: [{ name: 'textDownload' },] }
];
export class NumberToPhone {
    transform(input) {
        return pipesUtils.numberToPhone(input);
    }
}
NumberToPhone.decorators = [
    { type: Pipe, args: [{ name: 'numberToPhone' },] }
];
export class toNumber {
    transform(input) { return pipesUtils.toNumber(input); }
}
toNumber.decorators = [
    { type: Pipe, args: [{ name: 'toNumber' },] }
];
export class NumberSuffix {
    transform(input, rtnInput) {
        return pipesUtils.numberSuffix(input, rtnInput);
    }
}
NumberSuffix.decorators = [
    { type: Pipe, args: [{ name: 'numberSuffix' },] }
];
export class MarkdownAnchor {
    transform(input) { return pipesUtils.markdownAnchor(input); }
}
MarkdownAnchor.decorators = [
    { type: Pipe, args: [{ name: 'markdownAnchor' },] }
];
export class Capitalize {
    transform(input) { return pipesUtils.capitalize(input); }
}
Capitalize.decorators = [
    { type: Pipe, args: [{ name: 'capitalize' },] }
];
export class CapitalizeWords {
    transform(input) { return pipesUtils.capitalizeWords(input); }
}
CapitalizeWords.decorators = [
    { type: Pipe, args: [{ name: 'capitalizeWords' },] }
];
export class Yesno {
    transform(input) { return pipesUtils.yesno(input); }
}
Yesno.decorators = [
    { type: Pipe, args: [{ name: 'yesno' },] }
];
export class YesNo {
    transform(input) { return pipesUtils.yesNo(input); }
}
YesNo.decorators = [
    { type: Pipe, args: [{ name: 'YesNo' },] }
];
export class BooleanPipe {
    transform(input) { return pipesUtils.boolean(input); }
}
BooleanPipe.decorators = [
    { type: Pipe, args: [{ name: 'boolean' },] }
];
export class Bit {
    transform(input) { return pipesUtils.bit(input); }
}
Bit.decorators = [
    { type: Pipe, args: [{ name: 'bit' },] }
];
//get and return all numbers inside a string
export class Numbers {
    transform(input) { return pipesUtils.numbers(input); }
}
Numbers.decorators = [
    { type: Pipe, args: [{ name: 'numbers' },] }
];
export class ADate {
    transform(...args) { return pipesUtils.aDate.apply(pipesUtils.aDate, args); }
}
ADate.decorators = [
    { type: Pipe, args: [{ name: 'aDate' },] }
];
export class AMath {
    transform(...args) { return pipesUtils.aMath.apply(pipesUtils.aMath, args); }
}
AMath.decorators = [
    { type: Pipe, args: [{ name: 'aMath' },] }
];
export class AString {
    transform(...args) { return pipesUtils.aString.apply(pipesUtils.aString, args); }
}
AString.decorators = [
    { type: Pipe, args: [{ name: 'aString' },] }
];
export class ATime {
    transform(...args) { return pipesUtils.aTime.apply(pipesUtils.aTime, args); }
}
ATime.decorators = [
    { type: Pipe, args: [{ name: 'aTime' },] }
];
export class Ack {
    transform(...args) { return pipesUtils.ack.apply(pipesUtils.ack, args); }
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
export const pipes = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUM1QyxPQUFPLEtBQUssVUFBVSxNQUFNLGVBQWUsQ0FBQTtBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRXBDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUU1QyxvQkFBb0I7QUFDVSxNQUFNLE9BQU8sVUFBVTtJQUNqRCxTQUFTLENBQUMsRUFBTztRQUNmLE9BQU8sVUFBUyxLQUFVLElBQUUsT0FBTyxLQUFLLENBQUEsQ0FBQSxDQUFDLENBQUE7SUFDM0MsQ0FBQzs7O1lBSEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQzs7QUFNQyxNQUFNLE9BQU8sU0FBUztJQUMvQyxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQU0sR0FBQyxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzVDLENBQUM7OztZQUhGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUM7O0FBTUYsTUFBTSxPQUFPLFVBQVU7SUFDNUMsU0FBUyxDQUFDLEtBQVUsRUFBRSxNQUFZLEVBQUUsV0FBaUI7UUFDbkQsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDckQsQ0FBQzs7O1lBSEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQzs7QUFNVyxNQUFNLE9BQU8sY0FBYztJQUN6RCxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQTJCLEVBQUUsV0FBcUI7UUFD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TUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHO0lBQ25CLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7SUFDZCxRQUFRO0lBQ1IsT0FBTztJQUNQLFNBQVM7SUFDVCxZQUFZO0lBQ1osY0FBYztJQUNkLFVBQVU7SUFDVixlQUFlO0lBQ2YsS0FBSztJQUNMLEtBQUs7SUFDTCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxLQUFLO0lBQ0wsS0FBSztJQUNMLE9BQU87SUFDUCxLQUFLO0lBQ0wsR0FBRztJQUNILE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtJQUNiLFlBQVk7SUFDWixHQUFHO0lBQ0gsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gsT0FBTztJQUNQLGdCQUFnQjtDQUNqQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcidcbmltcG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzLnBpcGUnXG5pbXBvcnQgKiBhcyBwaXBlc1V0aWxzIGZyb20gXCIuL3BpcGVzLmNsYXNzXCJcbmltcG9ydCB7IFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5leHBvcnQgeyBLZXlzUGlwZSB9IGZyb20gJy4vcGlwZXMva2V5cy5waXBlJ1xuXG4vKiBPTkxZIFRISVMgRklMRSAqL1xuICBAUGlwZSh7bmFtZTogJ2luZGV4VHJhY2snfSkgZXhwb3J0IGNsYXNzIEluZGV4VHJhY2sge1xuICAgIHRyYW5zZm9ybShfeDogYW55KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oaW5kZXg6IGFueSl7cmV0dXJuIGluZGV4fVxuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnc3RyaW5naWZ5J30pIGV4cG9ydCBjbGFzcyBTdHJpbmdpZnkge1xuICAgIHRyYW5zZm9ybShpbnB1dDogYW55LCBzcGFjZXM9MCkge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGlucHV0LCBudWxsLCBzcGFjZXMpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdhcnJheSd9KSBleHBvcnQgY2xhc3MgRm9yY2VBcnJheSB7XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnksIHJlcGVhdD86IGFueSwgcmVwZWF0VmFsdWU/OiBhbnkpIHtcbiAgICAgIHJldHVybiBwaXBlc1V0aWxzLmFycmF5KGlucHV0LCByZXBlYXQsIHJlcGVhdFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnYXJyYXlPZk9iamVjdHMnfSkgZXhwb3J0IGNsYXNzIEFycmF5T2ZPYmplY3RzIHtcbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgcmVwZWF0PzogbnVtYmVyIHwgdW5kZWZpbmVkLCByZXBlYXRWYWx1ZT86IHVua25vd24pIHtcbiAgICAgIHJldHVybiBwaXBlc1V0aWxzLmFycmF5T2ZPYmplY3RzKGlucHV0LCByZXBlYXQsIHJlcGVhdFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnc2FmZVVybCd9KSBleHBvcnQgY2xhc3MgU2FmZVVybCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChpbnB1dClcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ251bWJlcldvcmQnfSkgZXhwb3J0IGNsYXNzIE51bWJlcldvcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgbnVtYmVyOiBhbnkpIHtcbiAgICAgIHJldHVybiBpbnB1dCArIChudW1iZXIgJiYgbnVtYmVyPT0xID8gJycgOiAncycpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdlbmROdW1iZXJXb3JkJ30pIGV4cG9ydCBjbGFzcyBFbmROdW1iZXJXb3JkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnkpIHtcbiAgICAgIHJldHVybiBpbnB1dCAmJiBpbnB1dD09MSA/ICcnIDogJ3MnXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdzYWZlSHRtbCd9KSBleHBvcnQgY2xhc3MgU2FmZUh0bWwge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpbnB1dClcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ3NhZmVTdHlsZSd9KSBleHBvcnQgY2xhc3MgU2FmZVN0eWxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuICAgIHRyYW5zZm9ybShpbnB1dDogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGlucHV0KVxuICAgIH1cbiAgfVxuLyogZW5kOiBvbmx5IHRoaXMgZmlsZSAqL1xuXG5cbi8qKiAoaW5wdXQ+PWEgJiYgaW5wdXQ8PWIpIHx8IChpbnB1dD49YiAmJiBpbnB1dDw9YSkgKi9cbkBQaXBlKHtuYW1lOiAnYmV0d2Vlbid9KSBleHBvcnQgY2xhc3MgQmV0d2VlbiB7XG7CoCB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgYTogYW55LCBiOiBhbnkpIHtcbiAgICByZXR1cm4gcGlwZXNVdGlscy5iZXR3ZWVuKGlucHV0LCBhLCBiKVxuICB9XG59XG5cbkBQaXBlKHtuYW1lOiAncmVwbGFjZU1heExlbmd0aCd9KSBleHBvcnQgY2xhc3MgUmVwbGFjZU1heExlbmd0aCB7XG7CoCB0cmFuc2Zvcm0oXG4gICBpbnB1dDpzdHJpbmcsIG1heDogbnVtYmVyLCByZXBsYWNlbWVudD86IHN0cmluZ1xuICApIHtcbiAgICByZXR1cm4gcGlwZXNVdGlscy5yZXBsYWNlTWF4TGVuZ3RoKGlucHV0LCBtYXgsIHJlcGxhY2VtZW50KVxuICB9XG59XG5cbi8qKiB1c2Ugd2l0aCBieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwgZm9yIGhyZWYgKi9cbkBQaXBlKHtuYW1lOiAndGV4dERvd25sb2FkJ30pIGV4cG9ydCBjbGFzcyBUZXh0RG93bmxvYWQge1xuICB0cmFuc2Zvcm0oaW5wdXQ6c3RyaW5nKXtyZXR1cm4gcGlwZXNVdGlscy50ZXh0RG93bmxvYWQoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ251bWJlclRvUGhvbmUnfSkgZXhwb3J0IGNsYXNzIE51bWJlclRvUGhvbmUge1xuICB0cmFuc2Zvcm0oaW5wdXQ6c3RyaW5nIHwgbnVtYmVyKXtcbiAgICByZXR1cm4gcGlwZXNVdGlscy5udW1iZXJUb1Bob25lKGlucHV0KVxuICB9XG59XG5cbkBQaXBlKHtuYW1lOiAndG9OdW1iZXInfSkgZXhwb3J0IGNsYXNzIHRvTnVtYmVyIHtcbiAgdHJhbnNmb3JtKGlucHV0OnN0cmluZyl7cmV0dXJuIHBpcGVzVXRpbHMudG9OdW1iZXIoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ251bWJlclN1ZmZpeCd9KSBleHBvcnQgY2xhc3MgTnVtYmVyU3VmZml4IHtcbiAgdHJhbnNmb3JtKGlucHV0OiBudW1iZXIgfCBzdHJpbmcsIHJ0bklucHV0PzogYW55KXtcbiAgICByZXR1cm4gcGlwZXNVdGlscy5udW1iZXJTdWZmaXgoaW5wdXQsIHJ0bklucHV0KVxuICB9XG59XG5cbkBQaXBlKHtuYW1lOiAnbWFya2Rvd25BbmNob3InfSkgZXhwb3J0IGNsYXNzIE1hcmtkb3duQW5jaG9yIHtcbiAgdHJhbnNmb3JtKGlucHV0OnN0cmluZyl7cmV0dXJuIHBpcGVzVXRpbHMubWFya2Rvd25BbmNob3IoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2NhcGl0YWxpemUnfSkgZXhwb3J0IGNsYXNzIENhcGl0YWxpemUge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtyZXR1cm4gcGlwZXNVdGlscy5jYXBpdGFsaXplKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdjYXBpdGFsaXplV29yZHMnfSkgZXhwb3J0IGNsYXNzIENhcGl0YWxpemVXb3JkcyB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlc1V0aWxzLmNhcGl0YWxpemVXb3JkcyhpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAneWVzbm8nfSkgZXhwb3J0IGNsYXNzIFllc25vIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzVXRpbHMueWVzbm8oaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ1llc05vJ30pIGV4cG9ydCBjbGFzcyBZZXNObyB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlc1V0aWxzLnllc05vKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdib29sZWFuJ30pIGV4cG9ydCBjbGFzcyBCb29sZWFuUGlwZSB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlc1V0aWxzLmJvb2xlYW4oaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2JpdCd9KSBleHBvcnQgY2xhc3MgQml0IHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzVXRpbHMuYml0KGlucHV0KX1cbn1cblxuLy9nZXQgYW5kIHJldHVybiBhbGwgbnVtYmVycyBpbnNpZGUgYSBzdHJpbmdcbkBQaXBlKHtuYW1lOiAnbnVtYmVycyd9KSBleHBvcnQgY2xhc3MgTnVtYmVycyB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlc1V0aWxzLm51bWJlcnMoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2FEYXRlJ30pIGV4cG9ydCBjbGFzcyBBRGF0ZSB7XG4gIHRyYW5zZm9ybSguLi5hcmdzOiBhbnkpe3JldHVybiBwaXBlc1V0aWxzLmFEYXRlLmFwcGx5KHBpcGVzVXRpbHMuYURhdGUsIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2FNYXRoJ30pIGV4cG9ydCBjbGFzcyBBTWF0aCB7XG4gIHRyYW5zZm9ybSguLi5hcmdzOiBhbnkpe3JldHVybiBwaXBlc1V0aWxzLmFNYXRoLmFwcGx5KHBpcGVzVXRpbHMuYU1hdGgsIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2FTdHJpbmcnfSkgZXhwb3J0IGNsYXNzIEFTdHJpbmcge1xuICB0cmFuc2Zvcm0oLi4uYXJnczogYW55KXtyZXR1cm4gcGlwZXNVdGlscy5hU3RyaW5nLmFwcGx5KHBpcGVzVXRpbHMuYVN0cmluZywgYXJncyl9XG59XG5cbkBQaXBlKHtuYW1lOiAnYVRpbWUnfSkgZXhwb3J0IGNsYXNzIEFUaW1lIHtcbiAgdHJhbnNmb3JtKC4uLmFyZ3M6IGFueSl7cmV0dXJuIHBpcGVzVXRpbHMuYVRpbWUuYXBwbHkocGlwZXNVdGlscy5hVGltZSwgYXJncyl9XG59XG5cbkBQaXBlKHtuYW1lOiAnYWNrJ30pIGV4cG9ydCBjbGFzcyBBY2sge1xuICB0cmFuc2Zvcm0oLi4uYXJnczogYW55KXtyZXR1cm4gcGlwZXNVdGlscy5hY2suYXBwbHkocGlwZXNVdGlscy5hY2ssIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ3R5cGVvZid9KSBleHBvcnQgY2xhc3MgVHlwZW9mUGlwZSB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiB0eXBlb2YoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2NvbnNvbGUnfSkgZXhwb3J0IGNsYXNzIENvbnNvbGVQaXBlIHtcbiAgdHJhbnNmb3JtKCl7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyBhcyBhbnkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBpcGVzID0gW1xuICBJbmRleFRyYWNrLFxuICBTdHJpbmdpZnksXG4gIEZvcmNlQXJyYXksXG4gIEFycmF5T2ZPYmplY3RzLFxuICBTYWZlSHRtbCxcbiAgU2FmZVVybCxcbiAgU2FmZVN0eWxlLFxuICBUZXh0RG93bmxvYWQsXG4gIE1hcmtkb3duQW5jaG9yLFxuICBDYXBpdGFsaXplLFxuICBDYXBpdGFsaXplV29yZHMsXG4gIFllc25vLFxuICBZZXNObyxcbiAgS2V5c1BpcGUsXG4gIFR5cGVvZlBpcGUsXG4gIENvbnNvbGVQaXBlLFxuICBBRGF0ZSxcbiAgQU1hdGgsXG4gIEFTdHJpbmcsXG4gIEFUaW1lLFxuICBBY2ssXG4gIE51bWJlcnMsXG4gIHRvTnVtYmVyLFxuICBOdW1iZXJUb1Bob25lLFxuICBOdW1iZXJTdWZmaXgsXG4gIEJpdCxcbiAgTnVtYmVyV29yZCxcbiAgRW5kTnVtYmVyV29yZCxcbiAgQm9vbGVhblBpcGUsXG4gIEJldHdlZW4sXG4gIFJlcGxhY2VNYXhMZW5ndGgsXG5dIl19