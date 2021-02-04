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
    transform(input, a, b) { return pipes.between(input, a, b); }
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
    transform() { return console.log.apply(console, arguments); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vc3JjLyIsInNvdXJjZXMiOlsicGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyQyxPQUFPLEtBQUssS0FBSyxNQUFNLGVBQWUsQ0FBQTtBQUV0QyxPQUFPO0FBQ0wsbURBQW1EO0FBQ25ELG9EQUFvRDtBQUNwRCxrQkFBa0I7QUFDbEIsWUFBWSxFQUNiLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsb0JBQW9CO0FBQ1UsTUFBTSxPQUFPLFVBQVU7SUFDakQsU0FBUztRQUNQLE9BQU8sVUFBUyxLQUFLLElBQUUsT0FBTyxLQUFLLENBQUEsQ0FBQSxDQUFDLENBQUE7SUFDdEMsQ0FBQzs7O1lBSEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQzs7QUFNQyxNQUFNLE9BQU8sU0FBUztJQUMvQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU07UUFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDNUMsQ0FBQzs7O1lBSEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQzs7QUFNRixNQUFNLE9BQU8sVUFBVTtJQUM1QyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU8sRUFBRSxXQUFZO1FBQ3BDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ2hELENBQUM7OztZQUhGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7O0FBTVcsTUFBTSxPQUFPLGNBQWM7SUFDekQsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVztRQUNsQyxPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUN6RCxD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dCAqIGFzIHBpcGVzIGZyb20gXCIuL3BpcGVzLmNsYXNzXCJcblxuaW1wb3J0IHtcbiAgLy9TYWZlSHRtbCBhcyBTYWZlSHRtbGVyLC8vbXVzdCBiZSBleHBvcnRlZCBmb3IgQU9UXG4gIC8vU2FmZVN0eWxlIGFzIFNhZmVTdHlsZXIsLy9tdXN0IGJlIGV4cG9ydGVkIGZvciBBT1RcbiAgLy9TYWZlUmVzb3VyY2VVcmwsXG4gIERvbVNhbml0aXplclxufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuLyogT05MWSBUSElTIEZJTEUgKi9cbiAgQFBpcGUoe25hbWU6ICdpbmRleFRyYWNrJ30pIGV4cG9ydCBjbGFzcyBJbmRleFRyYWNrIHtcbiAgICB0cmFuc2Zvcm0oKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oaW5kZXgpe3JldHVybiBpbmRleH1cbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ3N0cmluZ2lmeSd9KSBleHBvcnQgY2xhc3MgU3RyaW5naWZ5IHtcbiAgICB0cmFuc2Zvcm0oaW5wdXQsIHNwYWNlcykge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGlucHV0LCBudWxsLCBzcGFjZXMpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdhcnJheSd9KSBleHBvcnQgY2xhc3MgRm9yY2VBcnJheSB7XG4gICAgdHJhbnNmb3JtKGlucHV0LCByZXBlYXQ/LCByZXBlYXRWYWx1ZT8pIHtcbiAgICAgIHJldHVybiBwaXBlcy5hcnJheShpbnB1dCwgcmVwZWF0LCByZXBlYXRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ2FycmF5T2ZPYmplY3RzJ30pIGV4cG9ydCBjbGFzcyBBcnJheU9mT2JqZWN0cyB7XG4gICAgdHJhbnNmb3JtKGlucHV0LCByZXBlYXQsIHJlcGVhdFZhbHVlKSB7XG4gICAgICByZXR1cm4gcGlwZXMuYXJyYXlPZk9iamVjdHMoaW5wdXQsIHJlcGVhdCwgcmVwZWF0VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdzYWZlVXJsJ30pIGV4cG9ydCBjbGFzcyBTYWZlVXJsIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuICAgIHRyYW5zZm9ybShpbnB1dCkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChpbnB1dClcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ251bWJlcldvcmQnfSkgZXhwb3J0IGNsYXNzIE51bWJlcldvcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICB0cmFuc2Zvcm0oaW5wdXQsIG51bWJlcikge1xuICAgICAgcmV0dXJuIGlucHV0ICsgKG51bWJlciAmJiBudW1iZXI9PTEgPyAnJyA6ICdzJylcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ2VuZE51bWJlcldvcmQnfSkgZXhwb3J0IGNsYXNzIEVuZE51bWJlcldvcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICB0cmFuc2Zvcm0oaW5wdXQpIHtcbiAgICAgIHJldHVybiBpbnB1dCAmJiBpbnB1dD09MSA/ICcnIDogJ3MnXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdzYWZlSHRtbCd9KSBleHBvcnQgY2xhc3MgU2FmZUh0bWwge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG4gICAgdHJhbnNmb3JtKGlucHV0KSB7XG4gICAgICByZXR1cm4gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaW5wdXQpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdzYWZlU3R5bGUnfSkgZXhwb3J0IGNsYXNzIFNhZmVTdHlsZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cbiAgICB0cmFuc2Zvcm0oaW5wdXQpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoaW5wdXQpXG4gICAgfVxuICB9XG4vKiBlbmQ6IG9ubHkgdGhpcyBmaWxlICovXG5cblxuLyoqIChpbnB1dD49YSAmJiBpbnB1dDw9YikgfHwgKGlucHV0Pj1iICYmIGlucHV0PD1hKSAqL1xuQFBpcGUoe25hbWU6ICdiZXR3ZWVuJ30pIGV4cG9ydCBjbGFzcyBCZXR3ZWVuIHtcbsKgIHRyYW5zZm9ybShpbnB1dCwgYSwgYikge3JldHVybiBwaXBlcy5iZXR3ZWVuKGlucHV0LCBhLCBiKX1cbn1cblxuQFBpcGUoe25hbWU6ICdyZXBsYWNlTWF4TGVuZ3RoJ30pIGV4cG9ydCBjbGFzcyBSZXBsYWNlTWF4TGVuZ3RoIHtcbsKgIHRyYW5zZm9ybShcbiAgIGlucHV0OnN0cmluZywgbWF4OiBudW1iZXIsIHJlcGxhY2VtZW50OiBzdHJpbmdcbiAgKSB7XG4gICAgcmV0dXJuIHBpcGVzLnJlcGxhY2VNYXhMZW5ndGgoaW5wdXQsIG1heCwgcmVwbGFjZW1lbnQpXG4gIH1cbn1cblxuLyoqIHVzZSB3aXRoIGJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCBmb3IgaHJlZiAqL1xuQFBpcGUoe25hbWU6ICd0ZXh0RG93bmxvYWQnfSkgZXhwb3J0IGNsYXNzIFRleHREb3dubG9hZCB7XG4gIHRyYW5zZm9ybShpbnB1dDpzdHJpbmcpe3JldHVybiBwaXBlcy50ZXh0RG93bmxvYWQoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ251bWJlclRvUGhvbmUnfSkgZXhwb3J0IGNsYXNzIE51bWJlclRvUGhvbmUge1xuICB0cmFuc2Zvcm0oaW5wdXQ6c3RyaW5nKXtyZXR1cm4gcGlwZXMubnVtYmVyVG9QaG9uZShpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAndG9OdW1iZXInfSkgZXhwb3J0IGNsYXNzIHRvTnVtYmVyIHtcbiAgdHJhbnNmb3JtKGlucHV0OnN0cmluZyl7cmV0dXJuIHBpcGVzLnRvTnVtYmVyKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdudW1iZXJTdWZmaXgnfSkgZXhwb3J0IGNsYXNzIE51bWJlclN1ZmZpeCB7XG4gIHRyYW5zZm9ybShpbnB1dDpzdHJpbmcsIHJ0bklucHV0Pyl7cmV0dXJuIHBpcGVzLm51bWJlclN1ZmZpeChpbnB1dCwgcnRuSW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ21hcmtkb3duQW5jaG9yJ30pIGV4cG9ydCBjbGFzcyBNYXJrZG93bkFuY2hvciB7XG4gIHRyYW5zZm9ybShpbnB1dDpzdHJpbmcpe3JldHVybiBwaXBlcy5tYXJrZG93bkFuY2hvcihpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnY2FwaXRhbGl6ZSd9KSBleHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZSB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlcy5jYXBpdGFsaXplKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdjYXBpdGFsaXplV29yZHMnfSkgZXhwb3J0IGNsYXNzIENhcGl0YWxpemVXb3JkcyB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlcy5jYXBpdGFsaXplV29yZHMoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ3llc25vJ30pIGV4cG9ydCBjbGFzcyBZZXNubyB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlcy55ZXNubyhpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnWWVzTm8nfSkgZXhwb3J0IGNsYXNzIFllc05vIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLnllc05vKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdib29sZWFuJ30pIGV4cG9ydCBjbGFzcyBCb29sZWFuUGlwZSB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlcy5ib29sZWFuKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdiaXQnfSkgZXhwb3J0IGNsYXNzIEJpdCB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlcy5iaXQoaW5wdXQpfVxufVxuXG4vL2dldCBhbmQgcmV0dXJuIGFsbCBudW1iZXJzIGluc2lkZSBhIHN0cmluZ1xuQFBpcGUoe25hbWU6ICdudW1iZXJzJ30pIGV4cG9ydCBjbGFzcyBOdW1iZXJzIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLm51bWJlcnMoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2FEYXRlJ30pIGV4cG9ydCBjbGFzcyBBRGF0ZSB7XG4gIHRyYW5zZm9ybSguLi5hcmdzKXtyZXR1cm4gcGlwZXMuYURhdGUuYXBwbHkocGlwZXMuYURhdGUsIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2FNYXRoJ30pIGV4cG9ydCBjbGFzcyBBTWF0aCB7XG4gIHRyYW5zZm9ybSguLi5hcmdzKXtyZXR1cm4gcGlwZXMuYU1hdGguYXBwbHkocGlwZXMuYU1hdGgsIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2FTdHJpbmcnfSkgZXhwb3J0IGNsYXNzIEFTdHJpbmcge1xuICB0cmFuc2Zvcm0oLi4uYXJncyl7cmV0dXJuIHBpcGVzLmFTdHJpbmcuYXBwbHkocGlwZXMuYVN0cmluZywgYXJncyl9XG59XG5cbkBQaXBlKHtuYW1lOiAnYVRpbWUnfSkgZXhwb3J0IGNsYXNzIEFUaW1lIHtcbiAgdHJhbnNmb3JtKC4uLmFyZ3Mpe3JldHVybiBwaXBlcy5hVGltZS5hcHBseShwaXBlcy5hVGltZSwgYXJncyl9XG59XG5cbkBQaXBlKHtuYW1lOiAnYWNrJ30pIGV4cG9ydCBjbGFzcyBBY2sge1xuICB0cmFuc2Zvcm0oLi4uYXJncyl7cmV0dXJuIHBpcGVzLmFjay5hcHBseShwaXBlcy5hY2ssIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2tleXMnfSkgZXhwb3J0IGNsYXNzIEtleXMge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mKGlucHV0KT09J29iamVjdCdcbiAgICBjb25zdCBpc09iID0gaW5wdXQgJiYgdHlwZVxuICAgIGNvbnN0IGlzQXJyYXkgPSBpc09iICYmIGlucHV0LmNvbnN0cnVjdG9yID09IEFycmF5XG5cbiAgICBpZihpc0FycmF5KXtcbiAgICAgIHJldHVybiBpbnB1dC5tYXAoKF92YWx1ZSxpbmRleCk9PmluZGV4KVxuICAgIH1cblxuICAgIHJldHVybiBpbnB1dCA/IE9iamVjdC5rZXlzKGlucHV0KSA6IFtdXG4gIH1cbn1cblxuQFBpcGUoe25hbWU6ICd0eXBlb2YnfSkgZXhwb3J0IGNsYXNzIFR5cGVvZlBpcGUge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtyZXR1cm4gdHlwZW9mKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdjb25zb2xlJ30pIGV4cG9ydCBjbGFzcyBDb25zb2xlUGlwZSB7XG4gIHRyYW5zZm9ybSgpe3JldHVybiBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLGFyZ3VtZW50cyl9XG59XG5cbmV4cG9ydCBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXG4gIEluZGV4VHJhY2ssXG4gIFN0cmluZ2lmeSxcbiAgRm9yY2VBcnJheSxcbiAgQXJyYXlPZk9iamVjdHMsXG4gIFNhZmVIdG1sLFxuICBTYWZlVXJsLFxuICBTYWZlU3R5bGUsXG4gIFRleHREb3dubG9hZCxcbiAgTWFya2Rvd25BbmNob3IsXG4gIENhcGl0YWxpemUsXG4gIENhcGl0YWxpemVXb3JkcyxcbiAgWWVzbm8sXG4gIFllc05vLFxuICBLZXlzLFxuICBUeXBlb2ZQaXBlLFxuICBDb25zb2xlUGlwZSxcbiAgQURhdGUsXG4gIEFNYXRoLFxuICBBU3RyaW5nLFxuICBBVGltZSxcbiAgQWNrLFxuICBOdW1iZXJzLFxuICB0b051bWJlcixcbiAgTnVtYmVyVG9QaG9uZSxcbiAgTnVtYmVyU3VmZml4LFxuICBCaXQsXG4gIE51bWJlcldvcmQsXG4gIEVuZE51bWJlcldvcmQsXG4gIEJvb2xlYW5QaXBlLFxuICBCZXR3ZWVuLFxuICBSZXBsYWNlTWF4TGVuZ3RoLFxuXSJdfQ==