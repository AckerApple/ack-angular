import { DomSanitizer } from '@angular/platform-browser';
import { Keys } from './pipes/keys.pipe';
import * as pipes from "./pipes.class";
import { Pipe } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBQ3hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUN4QyxPQUFPLEtBQUssS0FBSyxNQUFNLGVBQWUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRXBDLG9CQUFvQjtBQUNVLE1BQU0sT0FBTyxVQUFVO0lBQ2pELFNBQVMsQ0FBQyxFQUFPO1FBQ2YsT0FBTyxVQUFTLEtBQVUsSUFBRSxPQUFPLEtBQUssQ0FBQSxDQUFBLENBQUMsQ0FBQTtJQUMzQyxDQUFDOzs7WUFIRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDOztBQU1DLE1BQU0sT0FBTyxTQUFTO0lBQy9DLFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBTSxHQUFDLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDNUMsQ0FBQzs7O1lBSEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQzs7QUFNRixNQUFNLE9BQU8sVUFBVTtJQUM1QyxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQVksRUFBRSxXQUFpQjtRQUNuRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUNoRCxDQUFDOzs7WUFIRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDOztBQU1XLE1BQU0sT0FBTyxjQUFjO0lBQ3pELFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBMkIsRUFBRSxXQUFxQjtRQUN0RSxPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0s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QVM7SUFDVCxVQUFVO0lBQ1YsY0FBYztJQUNkLFFBQVE7SUFDUixPQUFPO0lBQ1AsU0FBUztJQUNULFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7SUFDZixLQUFLO0lBQ0wsS0FBSztJQUNMLElBQUk7SUFDSixVQUFVO0lBQ1YsV0FBVztJQUNYLEtBQUs7SUFDTCxLQUFLO0lBQ0wsT0FBTztJQUNQLEtBQUs7SUFDTCxHQUFHO0lBQ0gsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWTtJQUNaLEdBQUc7SUFDSCxVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7SUFDWCxPQUFPO0lBQ1AsZ0JBQWdCO0NBQ2pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJ1xuaW1wb3J0IHsgS2V5cyB9IGZyb20gJy4vcGlwZXMva2V5cy5waXBlJ1xuaW1wb3J0ICogYXMgcGlwZXMgZnJvbSBcIi4vcGlwZXMuY2xhc3NcIlxuaW1wb3J0IHsgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbi8qIE9OTFkgVEhJUyBGSUxFICovXG4gIEBQaXBlKHtuYW1lOiAnaW5kZXhUcmFjayd9KSBleHBvcnQgY2xhc3MgSW5kZXhUcmFjayB7XG4gICAgdHJhbnNmb3JtKF94OiBhbnkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihpbmRleDogYW55KXtyZXR1cm4gaW5kZXh9XG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdzdHJpbmdpZnknfSkgZXhwb3J0IGNsYXNzIFN0cmluZ2lmeSB7XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnksIHNwYWNlcz0wKSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoaW5wdXQsIG51bGwsIHNwYWNlcylcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ2FycmF5J30pIGV4cG9ydCBjbGFzcyBGb3JjZUFycmF5IHtcbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgcmVwZWF0PzogYW55LCByZXBlYXRWYWx1ZT86IGFueSkge1xuICAgICAgcmV0dXJuIHBpcGVzLmFycmF5KGlucHV0LCByZXBlYXQsIHJlcGVhdFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnYXJyYXlPZk9iamVjdHMnfSkgZXhwb3J0IGNsYXNzIEFycmF5T2ZPYmplY3RzIHtcbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgcmVwZWF0PzogbnVtYmVyIHwgdW5kZWZpbmVkLCByZXBlYXRWYWx1ZT86IHVua25vd24pIHtcbiAgICAgIHJldHVybiBwaXBlcy5hcnJheU9mT2JqZWN0cyhpbnB1dCwgcmVwZWF0LCByZXBlYXRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ3NhZmVVcmwnfSkgZXhwb3J0IGNsYXNzIFNhZmVVcmwge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoaW5wdXQpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdudW1iZXJXb3JkJ30pIGV4cG9ydCBjbGFzcyBOdW1iZXJXb3JkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnksIG51bWJlcjogYW55KSB7XG4gICAgICByZXR1cm4gaW5wdXQgKyAobnVtYmVyICYmIG51bWJlcj09MSA/ICcnIDogJ3MnKVxuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnZW5kTnVtYmVyV29yZCd9KSBleHBvcnQgY2xhc3MgRW5kTnVtYmVyV29yZCB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIHRyYW5zZm9ybShpbnB1dDogYW55KSB7XG4gICAgICByZXR1cm4gaW5wdXQgJiYgaW5wdXQ9PTEgPyAnJyA6ICdzJ1xuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnc2FmZUh0bWwnfSkgZXhwb3J0IGNsYXNzIFNhZmVIdG1sIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuICAgIHRyYW5zZm9ybShpbnB1dDogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaW5wdXQpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdzYWZlU3R5bGUnfSkgZXhwb3J0IGNsYXNzIFNhZmVTdHlsZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShpbnB1dClcbiAgICB9XG4gIH1cbi8qIGVuZDogb25seSB0aGlzIGZpbGUgKi9cblxuXG4vKiogKGlucHV0Pj1hICYmIGlucHV0PD1iKSB8fCAoaW5wdXQ+PWIgJiYgaW5wdXQ8PWEpICovXG5AUGlwZSh7bmFtZTogJ2JldHdlZW4nfSkgZXhwb3J0IGNsYXNzIEJldHdlZW4ge1xuwqAgdHJhbnNmb3JtKGlucHV0OiBhbnksIGE6IGFueSwgYjogYW55KSB7XG4gICAgcmV0dXJuIHBpcGVzLmJldHdlZW4oaW5wdXQsIGEsIGIpXG4gIH1cbn1cblxuQFBpcGUoe25hbWU6ICdyZXBsYWNlTWF4TGVuZ3RoJ30pIGV4cG9ydCBjbGFzcyBSZXBsYWNlTWF4TGVuZ3RoIHtcbsKgIHRyYW5zZm9ybShcbiAgIGlucHV0OnN0cmluZywgbWF4OiBudW1iZXIsIHJlcGxhY2VtZW50Pzogc3RyaW5nXG4gICkge1xuICAgIHJldHVybiBwaXBlcy5yZXBsYWNlTWF4TGVuZ3RoKGlucHV0LCBtYXgsIHJlcGxhY2VtZW50KVxuICB9XG59XG5cbi8qKiB1c2Ugd2l0aCBieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwgZm9yIGhyZWYgKi9cbkBQaXBlKHtuYW1lOiAndGV4dERvd25sb2FkJ30pIGV4cG9ydCBjbGFzcyBUZXh0RG93bmxvYWQge1xuICB0cmFuc2Zvcm0oaW5wdXQ6c3RyaW5nKXtyZXR1cm4gcGlwZXMudGV4dERvd25sb2FkKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdudW1iZXJUb1Bob25lJ30pIGV4cG9ydCBjbGFzcyBOdW1iZXJUb1Bob25lIHtcbiAgdHJhbnNmb3JtKGlucHV0OnN0cmluZyB8IG51bWJlcil7XG4gICAgcmV0dXJuIHBpcGVzLm51bWJlclRvUGhvbmUoaW5wdXQpXG4gIH1cbn1cblxuQFBpcGUoe25hbWU6ICd0b051bWJlcid9KSBleHBvcnQgY2xhc3MgdG9OdW1iZXIge1xuICB0cmFuc2Zvcm0oaW5wdXQ6c3RyaW5nKXtyZXR1cm4gcGlwZXMudG9OdW1iZXIoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ251bWJlclN1ZmZpeCd9KSBleHBvcnQgY2xhc3MgTnVtYmVyU3VmZml4IHtcbiAgdHJhbnNmb3JtKGlucHV0OiBudW1iZXIgfCBzdHJpbmcsIHJ0bklucHV0PzogYW55KXtcbiAgICByZXR1cm4gcGlwZXMubnVtYmVyU3VmZml4KGlucHV0LCBydG5JbnB1dClcbiAgfVxufVxuXG5AUGlwZSh7bmFtZTogJ21hcmtkb3duQW5jaG9yJ30pIGV4cG9ydCBjbGFzcyBNYXJrZG93bkFuY2hvciB7XG4gIHRyYW5zZm9ybShpbnB1dDpzdHJpbmcpe3JldHVybiBwaXBlcy5tYXJrZG93bkFuY2hvcihpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnY2FwaXRhbGl6ZSd9KSBleHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZSB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlcy5jYXBpdGFsaXplKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdjYXBpdGFsaXplV29yZHMnfSkgZXhwb3J0IGNsYXNzIENhcGl0YWxpemVXb3JkcyB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlcy5jYXBpdGFsaXplV29yZHMoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ3llc25vJ30pIGV4cG9ydCBjbGFzcyBZZXNubyB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlcy55ZXNubyhpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnWWVzTm8nfSkgZXhwb3J0IGNsYXNzIFllc05vIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLnllc05vKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdib29sZWFuJ30pIGV4cG9ydCBjbGFzcyBCb29sZWFuUGlwZSB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlcy5ib29sZWFuKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdiaXQnfSkgZXhwb3J0IGNsYXNzIEJpdCB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlcy5iaXQoaW5wdXQpfVxufVxuXG4vL2dldCBhbmQgcmV0dXJuIGFsbCBudW1iZXJzIGluc2lkZSBhIHN0cmluZ1xuQFBpcGUoe25hbWU6ICdudW1iZXJzJ30pIGV4cG9ydCBjbGFzcyBOdW1iZXJzIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLm51bWJlcnMoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2FEYXRlJ30pIGV4cG9ydCBjbGFzcyBBRGF0ZSB7XG4gIHRyYW5zZm9ybSguLi5hcmdzOiBhbnkpe3JldHVybiBwaXBlcy5hRGF0ZS5hcHBseShwaXBlcy5hRGF0ZSwgYXJncyl9XG59XG5cbkBQaXBlKHtuYW1lOiAnYU1hdGgnfSkgZXhwb3J0IGNsYXNzIEFNYXRoIHtcbiAgdHJhbnNmb3JtKC4uLmFyZ3M6IGFueSl7cmV0dXJuIHBpcGVzLmFNYXRoLmFwcGx5KHBpcGVzLmFNYXRoLCBhcmdzKX1cbn1cblxuQFBpcGUoe25hbWU6ICdhU3RyaW5nJ30pIGV4cG9ydCBjbGFzcyBBU3RyaW5nIHtcbiAgdHJhbnNmb3JtKC4uLmFyZ3M6IGFueSl7cmV0dXJuIHBpcGVzLmFTdHJpbmcuYXBwbHkocGlwZXMuYVN0cmluZywgYXJncyl9XG59XG5cbkBQaXBlKHtuYW1lOiAnYVRpbWUnfSkgZXhwb3J0IGNsYXNzIEFUaW1lIHtcbiAgdHJhbnNmb3JtKC4uLmFyZ3M6IGFueSl7cmV0dXJuIHBpcGVzLmFUaW1lLmFwcGx5KHBpcGVzLmFUaW1lLCBhcmdzKX1cbn1cblxuQFBpcGUoe25hbWU6ICdhY2snfSkgZXhwb3J0IGNsYXNzIEFjayB7XG4gIHRyYW5zZm9ybSguLi5hcmdzOiBhbnkpe3JldHVybiBwaXBlcy5hY2suYXBwbHkocGlwZXMuYWNrLCBhcmdzKX1cbn1cblxuQFBpcGUoe25hbWU6ICd0eXBlb2YnfSkgZXhwb3J0IGNsYXNzIFR5cGVvZlBpcGUge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtyZXR1cm4gdHlwZW9mKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdjb25zb2xlJ30pIGV4cG9ydCBjbGFzcyBDb25zb2xlUGlwZSB7XG4gIHRyYW5zZm9ybSgpe1xuICAgIHJldHVybiBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMgYXMgYW55KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXG4gIEluZGV4VHJhY2ssXG4gIFN0cmluZ2lmeSxcbiAgRm9yY2VBcnJheSxcbiAgQXJyYXlPZk9iamVjdHMsXG4gIFNhZmVIdG1sLFxuICBTYWZlVXJsLFxuICBTYWZlU3R5bGUsXG4gIFRleHREb3dubG9hZCxcbiAgTWFya2Rvd25BbmNob3IsXG4gIENhcGl0YWxpemUsXG4gIENhcGl0YWxpemVXb3JkcyxcbiAgWWVzbm8sXG4gIFllc05vLFxuICBLZXlzLFxuICBUeXBlb2ZQaXBlLFxuICBDb25zb2xlUGlwZSxcbiAgQURhdGUsXG4gIEFNYXRoLFxuICBBU3RyaW5nLFxuICBBVGltZSxcbiAgQWNrLFxuICBOdW1iZXJzLFxuICB0b051bWJlcixcbiAgTnVtYmVyVG9QaG9uZSxcbiAgTnVtYmVyU3VmZml4LFxuICBCaXQsXG4gIE51bWJlcldvcmQsXG4gIEVuZE51bWJlcldvcmQsXG4gIEJvb2xlYW5QaXBlLFxuICBCZXR3ZWVuLFxuICBSZXBsYWNlTWF4TGVuZ3RoLFxuXSJdfQ==