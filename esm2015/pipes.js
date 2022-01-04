import { Pipe } from '@angular/core';
import * as pipes from "./pipes.class";
import { 
//SafeHtml as SafeHtmler,//must be exported for AOT
//SafeStyle as SafeStyler,//must be exported for AOT
//SafeResourceUrl,
DomSanitizer } from '@angular/platform-browser';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyQyxPQUFPLEtBQUssS0FBSyxNQUFNLGVBQWUsQ0FBQTtBQUV0QyxPQUFPO0FBQ0wsbURBQW1EO0FBQ25ELG9EQUFvRDtBQUNwRCxrQkFBa0I7QUFDbEIsWUFBWSxFQUNiLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsb0JBQW9CO0FBQ1UsTUFBTSxPQUFPLFVBQVU7SUFDakQsU0FBUyxDQUFDLEVBQU87UUFDZixPQUFPLFVBQVMsS0FBVSxJQUFFLE9BQU8sS0FBSyxDQUFBLENBQUEsQ0FBQyxDQUFBO0lBQzNDLENBQUM7OztZQUhGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUM7O0FBTUMsTUFBTSxPQUFPLFNBQVM7SUFDL0MsU0FBUyxDQUFDLEtBQVUsRUFBRSxNQUFNLEdBQUMsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUM1QyxDQUFDOzs7WUFIRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDOztBQU1GLE1BQU0sT0FBTyxVQUFVO0lBQzVDLFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBWSxFQUFFLFdBQWlCO1FBQ25ELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ2hELENBQUM7OztZQUhGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7O0FBTVcsTUFBTSxPQUFPLGNBQWM7SUFDekQsU0FBUyxDQUFDLEtBQVUsRUFBRSxNQUEyQixFQUFFLFdBQXFCO1FBQ3RFLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ3pELENBQUM7OztZQUhGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQzs7QUFNTCxNQUFNLE9BQU8sT0FBTztJQUMzQyxZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFDbEQsU0FBUyxDQUFDLEtBQVU7UUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hFLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7Ozs7UUEvQnZCLG1EQUFtRDtRQUNuRCxvREFBb0Q7UUFDcEQsa0JBQWtCO1FBQ2xCLFlBQVk7O0FBbUNnQixNQUFNLE9BQU8sVUFBVTtJQUNqRCxnQkFBZSxDQUFDO0lBQ2hCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBVztRQUMvQixPQUFPLEtBQUssR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2pELENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUM7OztBQU9LLE1BQU0sT0FBTyxhQUFhO0lBQ3ZELGdCQUFlLENBQUM7SUFDaEIsU0FBUyxDQUFDLEtBQVU7UUFDbEIsT0FBTyxLQUFLLElBQUksS0FBSyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7SUFDckMsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBQzs7O0FBT0gsTUFBTSxPQUFPLFFBQVE7SUFDN0MsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDO0lBQ2xELFNBQVMsQ0FBQyxLQUFVO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN6RCxDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOzs7O1FBcER4QixtREFBbUQ7UUFDbkQsb0RBQW9EO1FBQ3BELGtCQUFrQjtRQUNsQixZQUFZOztBQXdEZSxNQUFNLE9BQU8sU0FBUztJQUMvQyxZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFDbEQsU0FBUyxDQUFDLEtBQVU7UUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzFELENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUM7Ozs7UUEzRHpCLG1EQUFtRDtRQUNuRCxvREFBb0Q7UUFDcEQsa0JBQWtCO1FBQ2xCLFlBQVk7O0FBOERkLHlCQUF5QjtBQUd6Qix1REFBdUQ7QUFDOUIsTUFBTSxPQUFPLE9BQU87SUFDM0MsU0FBUyxDQUFDLEtBQVUsRUFBRSxDQUFNLEVBQUUsQ0FBTTtRQUNsQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNuQyxDQUFDOzs7WUFIRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDOztBQU1XLE1BQU0sT0FBTyxnQkFBZ0I7SUFDN0QsU0FBUyxDQUNSLEtBQVksRUFBRSxHQUFXLEVBQUUsV0FBb0I7UUFFOUMsT0FBTyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUN4RCxDQUFDOzs7WUFMRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUM7O0FBUWhDLHVEQUF1RDtBQUN6QixNQUFNLE9BQU8sWUFBWTtJQUNyRCxTQUFTLENBQUMsS0FBWSxJQUFFLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFBLENBQUM7OztZQUQxRCxJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFDOztBQUlHLE1BQU0sT0FBTyxhQUFhO0lBQ3ZELFNBQVMsQ0FBQyxLQUFxQjtRQUM3QixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbkMsQ0FBQzs7O1lBSEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBQzs7QUFNSCxNQUFNLE9BQU8sUUFBUTtJQUM3QyxTQUFTLENBQUMsS0FBWSxJQUFFLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFBLENBQUM7OztZQUR0RCxJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOztBQUlNLE1BQU0sT0FBTyxZQUFZO0lBQ3JELFNBQVMsQ0FBQyxLQUFzQixFQUFFLFFBQWM7UUFDOUMsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUM1QyxDQUFDOzs7WUFIRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFDOztBQU1JLE1BQU0sT0FBTyxjQUFjO0lBQ3pELFNBQVMsQ0FBQyxLQUFZLElBQUUsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUEsQ0FBQzs7O1lBRDVELElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQzs7QUFJRixNQUFNLE9BQU8sVUFBVTtJQUNqRCxTQUFTLENBQUMsS0FBUyxJQUFFLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFBLENBQUM7OztZQURyRCxJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDOztBQUlPLE1BQU0sT0FBTyxlQUFlO0lBQzNELFNBQVMsQ0FBQyxLQUFTLElBQUUsT0FBTyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUEsQ0FBQzs7O1lBRDFELElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQzs7QUFJUixNQUFNLE9BQU8sS0FBSztJQUN2QyxTQUFTLENBQUMsS0FBUyxJQUFFLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFBLENBQUM7OztZQURoRCxJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDOztBQUlFLE1BQU0sT0FBTyxLQUFLO0lBQ3ZDLFNBQVMsQ0FBQyxLQUFTLElBQUUsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUEsQ0FBQzs7O1lBRGhELElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7O0FBSUksTUFBTSxPQUFPLFdBQVc7SUFDL0MsU0FBUyxDQUFDLEtBQVMsSUFBRSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQSxDQUFDOzs7WUFEbEQsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQzs7QUFJRixNQUFNLE9BQU8sR0FBRztJQUNuQyxTQUFTLENBQUMsS0FBUyxJQUFFLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFBLENBQUM7OztZQUQ5QyxJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDOztBQUluQiw0Q0FBNEM7QUFDbkIsTUFBTSxPQUFPLE9BQU87SUFDM0MsU0FBUyxDQUFDLEtBQVMsSUFBRSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQSxDQUFDOzs7WUFEbEQsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQzs7QUFJQSxNQUFNLE9BQU8sS0FBSztJQUN2QyxTQUFTLENBQUMsR0FBRyxJQUFTLElBQUUsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUEsQ0FBQzs7O1lBRHJFLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7O0FBSUUsTUFBTSxPQUFPLEtBQUs7SUFDdkMsU0FBUyxDQUFDLEdBQUcsSUFBUyxJQUFFLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFBLENBQUM7OztZQURyRSxJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDOztBQUlJLE1BQU0sT0FBTyxPQUFPO0lBQzNDLFNBQVMsQ0FBQyxHQUFHLElBQVMsSUFBRSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQSxDQUFDOzs7WUFEekUsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQzs7QUFJQSxNQUFNLE9BQU8sS0FBSztJQUN2QyxTQUFTLENBQUMsR0FBRyxJQUFTLElBQUUsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUEsQ0FBQzs7O1lBRHJFLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7O0FBSUEsTUFBTSxPQUFPLEdBQUc7SUFDbkMsU0FBUyxDQUFDLEdBQUcsSUFBUyxJQUFFLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFBLENBQUM7OztZQURqRSxJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDOztBQUlHLE1BQU0sT0FBTyxJQUFJO0lBQ3JDLFNBQVMsQ0FBQyxLQUFTO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLE9BQU0sQ0FBQyxLQUFLLENBQUMsSUFBRSxRQUFRLENBQUE7UUFDcEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQTtRQUMxQixNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUE7UUFFbEQsSUFBRyxPQUFPLEVBQUM7WUFDVCxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFXLEVBQUUsS0FBVSxFQUFDLEVBQUUsQ0FBQSxLQUFLLENBQUMsQ0FBQTtTQUNuRDtRQUVELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7SUFDeEMsQ0FBQzs7O1lBWEYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQzs7QUFjSSxNQUFNLE9BQU8sVUFBVTtJQUM3QyxTQUFTLENBQUMsS0FBUyxJQUFFLE9BQU8sT0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUEsQ0FBQzs7O1lBRDNDLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7O0FBSUcsTUFBTSxPQUFPLFdBQVc7SUFDL0MsU0FBUztRQUNQLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQWdCLENBQUMsQ0FBQTtJQUNyRCxDQUFDOzs7WUFIRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDOztBQU12QixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUc7SUFDMUIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsY0FBYztJQUNkLFFBQVE7SUFDUixPQUFPO0lBQ1AsU0FBUztJQUNULFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7SUFDZixLQUFLO0lBQ0wsS0FBSztJQUNMLElBQUk7SUFDSixVQUFVO0lBQ1YsV0FBVztJQUNYLEtBQUs7SUFDTCxLQUFLO0lBQ0wsT0FBTztJQUNQLEtBQUs7SUFDTCxHQUFHO0lBQ0gsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWTtJQUNaLEdBQUc7SUFDSCxVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7SUFDWCxPQUFPO0lBQ1AsZ0JBQWdCO0NBQ2pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIHBpcGVzIGZyb20gXCIuL3BpcGVzLmNsYXNzXCJcblxuaW1wb3J0IHtcbiAgLy9TYWZlSHRtbCBhcyBTYWZlSHRtbGVyLC8vbXVzdCBiZSBleHBvcnRlZCBmb3IgQU9UXG4gIC8vU2FmZVN0eWxlIGFzIFNhZmVTdHlsZXIsLy9tdXN0IGJlIGV4cG9ydGVkIGZvciBBT1RcbiAgLy9TYWZlUmVzb3VyY2VVcmwsXG4gIERvbVNhbml0aXplclxufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuLyogT05MWSBUSElTIEZJTEUgKi9cbiAgQFBpcGUoe25hbWU6ICdpbmRleFRyYWNrJ30pIGV4cG9ydCBjbGFzcyBJbmRleFRyYWNrIHtcbiAgICB0cmFuc2Zvcm0oX3g6IGFueSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGluZGV4OiBhbnkpe3JldHVybiBpbmRleH1cbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ3N0cmluZ2lmeSd9KSBleHBvcnQgY2xhc3MgU3RyaW5naWZ5IHtcbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgc3BhY2VzPTApIHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpbnB1dCwgbnVsbCwgc3BhY2VzKVxuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnYXJyYXknfSkgZXhwb3J0IGNsYXNzIEZvcmNlQXJyYXkge1xuICAgIHRyYW5zZm9ybShpbnB1dDogYW55LCByZXBlYXQ/OiBhbnksIHJlcGVhdFZhbHVlPzogYW55KSB7XG4gICAgICByZXR1cm4gcGlwZXMuYXJyYXkoaW5wdXQsIHJlcGVhdCwgcmVwZWF0VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdhcnJheU9mT2JqZWN0cyd9KSBleHBvcnQgY2xhc3MgQXJyYXlPZk9iamVjdHMge1xuICAgIHRyYW5zZm9ybShpbnB1dDogYW55LCByZXBlYXQ/OiBudW1iZXIgfCB1bmRlZmluZWQsIHJlcGVhdFZhbHVlPzogdW5rbm93bikge1xuICAgICAgcmV0dXJuIHBpcGVzLmFycmF5T2ZPYmplY3RzKGlucHV0LCByZXBlYXQsIHJlcGVhdFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnc2FmZVVybCd9KSBleHBvcnQgY2xhc3MgU2FmZVVybCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChpbnB1dClcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ251bWJlcldvcmQnfSkgZXhwb3J0IGNsYXNzIE51bWJlcldvcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgbnVtYmVyOiBhbnkpIHtcbiAgICAgIHJldHVybiBpbnB1dCArIChudW1iZXIgJiYgbnVtYmVyPT0xID8gJycgOiAncycpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdlbmROdW1iZXJXb3JkJ30pIGV4cG9ydCBjbGFzcyBFbmROdW1iZXJXb3JkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnkpIHtcbiAgICAgIHJldHVybiBpbnB1dCAmJiBpbnB1dD09MSA/ICcnIDogJ3MnXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdzYWZlSHRtbCd9KSBleHBvcnQgY2xhc3MgU2FmZUh0bWwge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpbnB1dClcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ3NhZmVTdHlsZSd9KSBleHBvcnQgY2xhc3MgU2FmZVN0eWxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuICAgIHRyYW5zZm9ybShpbnB1dDogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGlucHV0KVxuICAgIH1cbiAgfVxuLyogZW5kOiBvbmx5IHRoaXMgZmlsZSAqL1xuXG5cbi8qKiAoaW5wdXQ+PWEgJiYgaW5wdXQ8PWIpIHx8IChpbnB1dD49YiAmJiBpbnB1dDw9YSkgKi9cbkBQaXBlKHtuYW1lOiAnYmV0d2Vlbid9KSBleHBvcnQgY2xhc3MgQmV0d2VlbiB7XG7CoCB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgYTogYW55LCBiOiBhbnkpIHtcbiAgICByZXR1cm4gcGlwZXMuYmV0d2VlbihpbnB1dCwgYSwgYilcbiAgfVxufVxuXG5AUGlwZSh7bmFtZTogJ3JlcGxhY2VNYXhMZW5ndGgnfSkgZXhwb3J0IGNsYXNzIFJlcGxhY2VNYXhMZW5ndGgge1xuwqAgdHJhbnNmb3JtKFxuICAgaW5wdXQ6c3RyaW5nLCBtYXg6IG51bWJlciwgcmVwbGFjZW1lbnQ/OiBzdHJpbmdcbiAgKSB7XG4gICAgcmV0dXJuIHBpcGVzLnJlcGxhY2VNYXhMZW5ndGgoaW5wdXQsIG1heCwgcmVwbGFjZW1lbnQpXG4gIH1cbn1cblxuLyoqIHVzZSB3aXRoIGJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCBmb3IgaHJlZiAqL1xuQFBpcGUoe25hbWU6ICd0ZXh0RG93bmxvYWQnfSkgZXhwb3J0IGNsYXNzIFRleHREb3dubG9hZCB7XG4gIHRyYW5zZm9ybShpbnB1dDpzdHJpbmcpe3JldHVybiBwaXBlcy50ZXh0RG93bmxvYWQoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ251bWJlclRvUGhvbmUnfSkgZXhwb3J0IGNsYXNzIE51bWJlclRvUGhvbmUge1xuICB0cmFuc2Zvcm0oaW5wdXQ6c3RyaW5nIHwgbnVtYmVyKXtcbiAgICByZXR1cm4gcGlwZXMubnVtYmVyVG9QaG9uZShpbnB1dClcbiAgfVxufVxuXG5AUGlwZSh7bmFtZTogJ3RvTnVtYmVyJ30pIGV4cG9ydCBjbGFzcyB0b051bWJlciB7XG4gIHRyYW5zZm9ybShpbnB1dDpzdHJpbmcpe3JldHVybiBwaXBlcy50b051bWJlcihpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnbnVtYmVyU3VmZml4J30pIGV4cG9ydCBjbGFzcyBOdW1iZXJTdWZmaXgge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlciB8IHN0cmluZywgcnRuSW5wdXQ/OiBhbnkpe1xuICAgIHJldHVybiBwaXBlcy5udW1iZXJTdWZmaXgoaW5wdXQsIHJ0bklucHV0KVxuICB9XG59XG5cbkBQaXBlKHtuYW1lOiAnbWFya2Rvd25BbmNob3InfSkgZXhwb3J0IGNsYXNzIE1hcmtkb3duQW5jaG9yIHtcbiAgdHJhbnNmb3JtKGlucHV0OnN0cmluZyl7cmV0dXJuIHBpcGVzLm1hcmtkb3duQW5jaG9yKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdjYXBpdGFsaXplJ30pIGV4cG9ydCBjbGFzcyBDYXBpdGFsaXplIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLmNhcGl0YWxpemUoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2NhcGl0YWxpemVXb3Jkcyd9KSBleHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZVdvcmRzIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLmNhcGl0YWxpemVXb3JkcyhpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAneWVzbm8nfSkgZXhwb3J0IGNsYXNzIFllc25vIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLnllc25vKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICdZZXNObyd9KSBleHBvcnQgY2xhc3MgWWVzTm8ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtyZXR1cm4gcGlwZXMueWVzTm8oaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2Jvb2xlYW4nfSkgZXhwb3J0IGNsYXNzIEJvb2xlYW5QaXBlIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLmJvb2xlYW4oaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2JpdCd9KSBleHBvcnQgY2xhc3MgQml0IHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzLmJpdChpbnB1dCl9XG59XG5cbi8vZ2V0IGFuZCByZXR1cm4gYWxsIG51bWJlcnMgaW5zaWRlIGEgc3RyaW5nXG5AUGlwZSh7bmFtZTogJ251bWJlcnMnfSkgZXhwb3J0IGNsYXNzIE51bWJlcnMge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtyZXR1cm4gcGlwZXMubnVtYmVycyhpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnYURhdGUnfSkgZXhwb3J0IGNsYXNzIEFEYXRlIHtcbiAgdHJhbnNmb3JtKC4uLmFyZ3M6IGFueSl7cmV0dXJuIHBpcGVzLmFEYXRlLmFwcGx5KHBpcGVzLmFEYXRlLCBhcmdzKX1cbn1cblxuQFBpcGUoe25hbWU6ICdhTWF0aCd9KSBleHBvcnQgY2xhc3MgQU1hdGgge1xuICB0cmFuc2Zvcm0oLi4uYXJnczogYW55KXtyZXR1cm4gcGlwZXMuYU1hdGguYXBwbHkocGlwZXMuYU1hdGgsIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2FTdHJpbmcnfSkgZXhwb3J0IGNsYXNzIEFTdHJpbmcge1xuICB0cmFuc2Zvcm0oLi4uYXJnczogYW55KXtyZXR1cm4gcGlwZXMuYVN0cmluZy5hcHBseShwaXBlcy5hU3RyaW5nLCBhcmdzKX1cbn1cblxuQFBpcGUoe25hbWU6ICdhVGltZSd9KSBleHBvcnQgY2xhc3MgQVRpbWUge1xuICB0cmFuc2Zvcm0oLi4uYXJnczogYW55KXtyZXR1cm4gcGlwZXMuYVRpbWUuYXBwbHkocGlwZXMuYVRpbWUsIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2Fjayd9KSBleHBvcnQgY2xhc3MgQWNrIHtcbiAgdHJhbnNmb3JtKC4uLmFyZ3M6IGFueSl7cmV0dXJuIHBpcGVzLmFjay5hcHBseShwaXBlcy5hY2ssIGFyZ3MpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2tleXMnfSkgZXhwb3J0IGNsYXNzIEtleXMge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mKGlucHV0KT09J29iamVjdCdcbiAgICBjb25zdCBpc09iID0gaW5wdXQgJiYgdHlwZVxuICAgIGNvbnN0IGlzQXJyYXkgPSBpc09iICYmIGlucHV0LmNvbnN0cnVjdG9yID09IEFycmF5XG5cbiAgICBpZihpc0FycmF5KXtcbiAgICAgIHJldHVybiBpbnB1dC5tYXAoKF92YWx1ZTogYW55LCBpbmRleDogYW55KT0+aW5kZXgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGlucHV0ID8gT2JqZWN0LmtleXMoaW5wdXQpIDogW11cbiAgfVxufVxuXG5AUGlwZSh7bmFtZTogJ3R5cGVvZid9KSBleHBvcnQgY2xhc3MgVHlwZW9mUGlwZSB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiB0eXBlb2YoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2NvbnNvbGUnfSkgZXhwb3J0IGNsYXNzIENvbnNvbGVQaXBlIHtcbiAgdHJhbnNmb3JtKCl7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyBhcyBhbnkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcbiAgSW5kZXhUcmFjayxcbiAgU3RyaW5naWZ5LFxuICBGb3JjZUFycmF5LFxuICBBcnJheU9mT2JqZWN0cyxcbiAgU2FmZUh0bWwsXG4gIFNhZmVVcmwsXG4gIFNhZmVTdHlsZSxcbiAgVGV4dERvd25sb2FkLFxuICBNYXJrZG93bkFuY2hvcixcbiAgQ2FwaXRhbGl6ZSxcbiAgQ2FwaXRhbGl6ZVdvcmRzLFxuICBZZXNubyxcbiAgWWVzTm8sXG4gIEtleXMsXG4gIFR5cGVvZlBpcGUsXG4gIENvbnNvbGVQaXBlLFxuICBBRGF0ZSxcbiAgQU1hdGgsXG4gIEFTdHJpbmcsXG4gIEFUaW1lLFxuICBBY2ssXG4gIE51bWJlcnMsXG4gIHRvTnVtYmVyLFxuICBOdW1iZXJUb1Bob25lLFxuICBOdW1iZXJTdWZmaXgsXG4gIEJpdCxcbiAgTnVtYmVyV29yZCxcbiAgRW5kTnVtYmVyV29yZCxcbiAgQm9vbGVhblBpcGUsXG4gIEJldHdlZW4sXG4gIFJlcGxhY2VNYXhMZW5ndGgsXG5dIl19