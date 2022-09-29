import { KeysPipe } from './pipes/keys.pipe';
import * as pipesUtils from "./pipes.class";
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export { KeysPipe } from './pipes/keys.pipe';
/* ONLY THIS FILE */
export class IndexTrack {
    transform(_x) {
        return function (index) { return index; };
    }
}
IndexTrack.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: IndexTrack, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
IndexTrack.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: IndexTrack, name: "indexTrack" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: IndexTrack, decorators: [{
            type: Pipe,
            args: [{ name: 'indexTrack' }]
        }] });
export class Stringify {
    transform(input, spaces = 0) {
        return JSON.stringify(input, null, spaces);
    }
}
Stringify.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Stringify, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
Stringify.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: Stringify, name: "stringify" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Stringify, decorators: [{
            type: Pipe,
            args: [{ name: 'stringify' }]
        }] });
export class ForceArray {
    transform(input, repeat, repeatValue) {
        return pipesUtils.array(input, repeat, repeatValue);
    }
}
ForceArray.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ForceArray, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ForceArray.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: ForceArray, name: "array" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ForceArray, decorators: [{
            type: Pipe,
            args: [{ name: 'array' }]
        }] });
export class ArrayOfObjects {
    transform(input, repeat, repeatValue) {
        return pipesUtils.arrayOfObjects(input, repeat, repeatValue);
    }
}
ArrayOfObjects.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ArrayOfObjects, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ArrayOfObjects.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: ArrayOfObjects, name: "arrayOfObjects" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ArrayOfObjects, decorators: [{
            type: Pipe,
            args: [{ name: 'arrayOfObjects' }]
        }] });
export class SafeUrl {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(input);
    }
}
SafeUrl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: SafeUrl, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
SafeUrl.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: SafeUrl, name: "safeUrl" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: SafeUrl, decorators: [{
            type: Pipe,
            args: [{ name: 'safeUrl' }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; } });
export class NumberWord {
    constructor() { }
    transform(input, number) {
        return input + (number && number == 1 ? '' : 's');
    }
}
NumberWord.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: NumberWord, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
NumberWord.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: NumberWord, name: "numberWord" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: NumberWord, decorators: [{
            type: Pipe,
            args: [{ name: 'numberWord' }]
        }], ctorParameters: function () { return []; } });
export class EndNumberWord {
    constructor() { }
    transform(input) {
        return input && input == 1 ? '' : 's';
    }
}
EndNumberWord.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: EndNumberWord, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EndNumberWord.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: EndNumberWord, name: "endNumberWord" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: EndNumberWord, decorators: [{
            type: Pipe,
            args: [{ name: 'endNumberWord' }]
        }], ctorParameters: function () { return []; } });
export class SafeHtml {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustHtml(input);
    }
}
SafeHtml.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: SafeHtml, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
SafeHtml.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: SafeHtml, name: "safeHtml" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: SafeHtml, decorators: [{
            type: Pipe,
            args: [{ name: 'safeHtml' }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; } });
export class SafeStyle {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustStyle(input);
    }
}
SafeStyle.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: SafeStyle, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
SafeStyle.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: SafeStyle, name: "safeStyle" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: SafeStyle, decorators: [{
            type: Pipe,
            args: [{ name: 'safeStyle' }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; } });
/* end: only this file */
/** (input>=a && input<=b) || (input>=b && input<=a) */
export class Between {
    transform(input, a, b) {
        return pipesUtils.between(input, a, b);
    }
}
Between.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Between, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
Between.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: Between, name: "between" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Between, decorators: [{
            type: Pipe,
            args: [{ name: 'between' }]
        }] });
export class ReplaceMaxLength {
    transform(input, max, replacement) {
        return pipesUtils.replaceMaxLength(input, max, replacement);
    }
}
ReplaceMaxLength.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ReplaceMaxLength, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ReplaceMaxLength.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: ReplaceMaxLength, name: "replaceMaxLength" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ReplaceMaxLength, decorators: [{
            type: Pipe,
            args: [{ name: 'replaceMaxLength' }]
        }] });
/** use with bypassSecurityTrustResourceUrl for href */
export class TextDownload {
    transform(input) { return pipesUtils.textDownload(input); }
}
TextDownload.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: TextDownload, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TextDownload.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: TextDownload, name: "textDownload" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: TextDownload, decorators: [{
            type: Pipe,
            args: [{ name: 'textDownload' }]
        }] });
export class NumberToPhone {
    transform(input) {
        return pipesUtils.numberToPhone(input);
    }
}
NumberToPhone.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: NumberToPhone, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
NumberToPhone.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: NumberToPhone, name: "numberToPhone" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: NumberToPhone, decorators: [{
            type: Pipe,
            args: [{ name: 'numberToPhone' }]
        }] });
export class toNumber {
    transform(input) { return pipesUtils.toNumber(input); }
}
toNumber.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: toNumber, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
toNumber.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: toNumber, name: "toNumber" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: toNumber, decorators: [{
            type: Pipe,
            args: [{ name: 'toNumber' }]
        }] });
export class NumberSuffix {
    transform(input, rtnInput) {
        return pipesUtils.numberSuffix(input, rtnInput);
    }
}
NumberSuffix.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: NumberSuffix, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
NumberSuffix.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: NumberSuffix, name: "numberSuffix" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: NumberSuffix, decorators: [{
            type: Pipe,
            args: [{ name: 'numberSuffix' }]
        }] });
export class MarkdownAnchor {
    transform(input) { return pipesUtils.markdownAnchor(input); }
}
MarkdownAnchor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: MarkdownAnchor, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
MarkdownAnchor.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: MarkdownAnchor, name: "markdownAnchor" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: MarkdownAnchor, decorators: [{
            type: Pipe,
            args: [{ name: 'markdownAnchor' }]
        }] });
export class Capitalize {
    transform(input) { return pipesUtils.capitalize(input); }
}
Capitalize.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Capitalize, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
Capitalize.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: Capitalize, name: "capitalize" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Capitalize, decorators: [{
            type: Pipe,
            args: [{ name: 'capitalize' }]
        }] });
export class CapitalizeWords {
    transform(input) { return pipesUtils.capitalizeWords(input); }
}
CapitalizeWords.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: CapitalizeWords, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
CapitalizeWords.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: CapitalizeWords, name: "capitalizeWords" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: CapitalizeWords, decorators: [{
            type: Pipe,
            args: [{ name: 'capitalizeWords' }]
        }] });
export class Yesno {
    transform(input) { return pipesUtils.yesno(input); }
}
Yesno.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Yesno, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
Yesno.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: Yesno, name: "yesno" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Yesno, decorators: [{
            type: Pipe,
            args: [{ name: 'yesno' }]
        }] });
export class YesNo {
    transform(input) { return pipesUtils.yesNo(input); }
}
YesNo.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: YesNo, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
YesNo.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: YesNo, name: "YesNo" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: YesNo, decorators: [{
            type: Pipe,
            args: [{ name: 'YesNo' }]
        }] });
export class BooleanPipe {
    transform(input) { return pipesUtils.boolean(input); }
}
BooleanPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: BooleanPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
BooleanPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: BooleanPipe, name: "boolean" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: BooleanPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'boolean' }]
        }] });
export class Bit {
    transform(input) { return pipesUtils.bit(input); }
}
Bit.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Bit, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
Bit.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: Bit, name: "bit" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Bit, decorators: [{
            type: Pipe,
            args: [{ name: 'bit' }]
        }] });
//get and return all numbers inside a string
export class Numbers {
    transform(input) { return pipesUtils.numbers(input); }
}
Numbers.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Numbers, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
Numbers.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: Numbers, name: "numbers" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Numbers, decorators: [{
            type: Pipe,
            args: [{ name: 'numbers' }]
        }] });
export class ADate {
    transform(...args) { return pipesUtils.aDate.apply(pipesUtils.aDate, args); }
}
ADate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ADate, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ADate.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: ADate, name: "aDate" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ADate, decorators: [{
            type: Pipe,
            args: [{ name: 'aDate' }]
        }] });
export class AMath {
    transform(...args) { return pipesUtils.aMath.apply(pipesUtils.aMath, args); }
}
AMath.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AMath, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
AMath.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: AMath, name: "aMath" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AMath, decorators: [{
            type: Pipe,
            args: [{ name: 'aMath' }]
        }] });
export class AString {
    transform(...args) { return pipesUtils.aString.apply(pipesUtils.aString, args); }
}
AString.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AString, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
AString.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: AString, name: "aString" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AString, decorators: [{
            type: Pipe,
            args: [{ name: 'aString' }]
        }] });
export class ATime {
    transform(...args) { return pipesUtils.aTime.apply(pipesUtils.aTime, args); }
}
ATime.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ATime, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ATime.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: ATime, name: "aTime" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ATime, decorators: [{
            type: Pipe,
            args: [{ name: 'aTime' }]
        }] });
export class Ack {
    transform(...args) { return pipesUtils.ack.apply(pipesUtils.ack, args); }
}
Ack.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Ack, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
Ack.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: Ack, name: "ack" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Ack, decorators: [{
            type: Pipe,
            args: [{ name: 'ack' }]
        }] });
export class TypeofPipe {
    transform(input) { return typeof (input); }
}
TypeofPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: TypeofPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TypeofPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: TypeofPipe, name: "typeof" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: TypeofPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'typeof' }]
        }] });
export class ConsolePipe {
    transform() {
        return console.log.apply(console, arguments);
    }
}
ConsolePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ConsolePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ConsolePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: ConsolePipe, name: "console" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ConsolePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'console' }]
        }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQzVDLE9BQU8sS0FBSyxVQUFVLE1BQU0sZUFBZSxDQUFBO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUE7OztBQUVwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFNUMsb0JBQW9CO0FBQ1UsTUFBTSxPQUFPLFVBQVU7SUFDakQsU0FBUyxDQUFDLEVBQU87UUFDZixPQUFPLFVBQVMsS0FBVSxJQUFFLE9BQU8sS0FBSyxDQUFBLENBQUEsQ0FBQyxDQUFBO0lBQzNDLENBQUM7O3VHQUhzQyxVQUFVO3FHQUFWLFVBQVU7MkZBQVYsVUFBVTtrQkFBbEQsSUFBSTttQkFBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUM7O0FBTUMsTUFBTSxPQUFPLFNBQVM7SUFDL0MsU0FBUyxDQUFDLEtBQVUsRUFBRSxNQUFNLEdBQUMsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUM1QyxDQUFDOztzR0FIcUMsU0FBUztvR0FBVCxTQUFTOzJGQUFULFNBQVM7a0JBQWhELElBQUk7bUJBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDOztBQU1GLE1BQU0sT0FBTyxVQUFVO0lBQzVDLFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBWSxFQUFFLFdBQWlCO1FBQ25ELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ3JELENBQUM7O3VHQUhpQyxVQUFVO3FHQUFWLFVBQVU7MkZBQVYsVUFBVTtrQkFBN0MsSUFBSTttQkFBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7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R0FIbUMsV0FBVztzR0FBWCxXQUFXOzJGQUFYLFdBQVc7a0JBQWhELElBQUk7bUJBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDOztBQU12QixNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUc7SUFDbkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsY0FBYztJQUNkLFFBQVE7SUFDUixPQUFPO0lBQ1AsU0FBUztJQUNULFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7SUFDZixLQUFLO0lBQ0wsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLEtBQUs7SUFDTCxLQUFLO0lBQ0wsT0FBTztJQUNQLEtBQUs7SUFDTCxHQUFHO0lBQ0gsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWTtJQUNaLEdBQUc7SUFDSCxVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7SUFDWCxPQUFPO0lBQ1AsZ0JBQWdCO0NBQ2pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJ1xuaW1wb3J0IHsgS2V5c1BpcGUgfSBmcm9tICcuL3BpcGVzL2tleXMucGlwZSdcbmltcG9ydCAqIGFzIHBpcGVzVXRpbHMgZnJvbSBcIi4vcGlwZXMuY2xhc3NcIlxuaW1wb3J0IHsgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmV4cG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzLnBpcGUnXG5cbi8qIE9OTFkgVEhJUyBGSUxFICovXG4gIEBQaXBlKHtuYW1lOiAnaW5kZXhUcmFjayd9KSBleHBvcnQgY2xhc3MgSW5kZXhUcmFjayB7XG4gICAgdHJhbnNmb3JtKF94OiBhbnkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihpbmRleDogYW55KXtyZXR1cm4gaW5kZXh9XG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdzdHJpbmdpZnknfSkgZXhwb3J0IGNsYXNzIFN0cmluZ2lmeSB7XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnksIHNwYWNlcz0wKSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoaW5wdXQsIG51bGwsIHNwYWNlcylcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ2FycmF5J30pIGV4cG9ydCBjbGFzcyBGb3JjZUFycmF5IHtcbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgcmVwZWF0PzogYW55LCByZXBlYXRWYWx1ZT86IGFueSkge1xuICAgICAgcmV0dXJuIHBpcGVzVXRpbHMuYXJyYXkoaW5wdXQsIHJlcGVhdCwgcmVwZWF0VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdhcnJheU9mT2JqZWN0cyd9KSBleHBvcnQgY2xhc3MgQXJyYXlPZk9iamVjdHMge1xuICAgIHRyYW5zZm9ybShpbnB1dDogYW55LCByZXBlYXQ/OiBudW1iZXIgfCB1bmRlZmluZWQsIHJlcGVhdFZhbHVlPzogdW5rbm93bikge1xuICAgICAgcmV0dXJuIHBpcGVzVXRpbHMuYXJyYXlPZk9iamVjdHMoaW5wdXQsIHJlcGVhdCwgcmVwZWF0VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgQFBpcGUoe25hbWU6ICdzYWZlVXJsJ30pIGV4cG9ydCBjbGFzcyBTYWZlVXJsIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuICAgIHRyYW5zZm9ybShpbnB1dDogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGlucHV0KVxuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnbnVtYmVyV29yZCd9KSBleHBvcnQgY2xhc3MgTnVtYmVyV29yZCB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIHRyYW5zZm9ybShpbnB1dDogYW55LCBudW1iZXI6IGFueSkge1xuICAgICAgcmV0dXJuIGlucHV0ICsgKG51bWJlciAmJiBudW1iZXI9PTEgPyAnJyA6ICdzJylcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ2VuZE51bWJlcldvcmQnfSkgZXhwb3J0IGNsYXNzIEVuZE51bWJlcldvcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSkge1xuICAgICAgcmV0dXJuIGlucHV0ICYmIGlucHV0PT0xID8gJycgOiAncydcbiAgICB9XG4gIH1cblxuICBAUGlwZSh7bmFtZTogJ3NhZmVIdG1sJ30pIGV4cG9ydCBjbGFzcyBTYWZlSHRtbCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGlucHV0KVxuICAgIH1cbiAgfVxuXG4gIEBQaXBlKHtuYW1lOiAnc2FmZVN0eWxlJ30pIGV4cG9ydCBjbGFzcyBTYWZlU3R5bGUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoaW5wdXQpXG4gICAgfVxuICB9XG4vKiBlbmQ6IG9ubHkgdGhpcyBmaWxlICovXG5cblxuLyoqIChpbnB1dD49YSAmJiBpbnB1dDw9YikgfHwgKGlucHV0Pj1iICYmIGlucHV0PD1hKSAqL1xuQFBpcGUoe25hbWU6ICdiZXR3ZWVuJ30pIGV4cG9ydCBjbGFzcyBCZXR3ZWVuIHtcbsKgIHRyYW5zZm9ybShpbnB1dDogYW55LCBhOiBhbnksIGI6IGFueSkge1xuICAgIHJldHVybiBwaXBlc1V0aWxzLmJldHdlZW4oaW5wdXQsIGEsIGIpXG4gIH1cbn1cblxuQFBpcGUoe25hbWU6ICdyZXBsYWNlTWF4TGVuZ3RoJ30pIGV4cG9ydCBjbGFzcyBSZXBsYWNlTWF4TGVuZ3RoIHtcbsKgIHRyYW5zZm9ybShcbiAgIGlucHV0OnN0cmluZywgbWF4OiBudW1iZXIsIHJlcGxhY2VtZW50Pzogc3RyaW5nXG4gICkge1xuICAgIHJldHVybiBwaXBlc1V0aWxzLnJlcGxhY2VNYXhMZW5ndGgoaW5wdXQsIG1heCwgcmVwbGFjZW1lbnQpXG4gIH1cbn1cblxuLyoqIHVzZSB3aXRoIGJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCBmb3IgaHJlZiAqL1xuQFBpcGUoe25hbWU6ICd0ZXh0RG93bmxvYWQnfSkgZXhwb3J0IGNsYXNzIFRleHREb3dubG9hZCB7XG4gIHRyYW5zZm9ybShpbnB1dDpzdHJpbmcpe3JldHVybiBwaXBlc1V0aWxzLnRleHREb3dubG9hZChpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnbnVtYmVyVG9QaG9uZSd9KSBleHBvcnQgY2xhc3MgTnVtYmVyVG9QaG9uZSB7XG4gIHRyYW5zZm9ybShpbnB1dDpzdHJpbmcgfCBudW1iZXIpe1xuICAgIHJldHVybiBwaXBlc1V0aWxzLm51bWJlclRvUGhvbmUoaW5wdXQpXG4gIH1cbn1cblxuQFBpcGUoe25hbWU6ICd0b051bWJlcid9KSBleHBvcnQgY2xhc3MgdG9OdW1iZXIge1xuICB0cmFuc2Zvcm0oaW5wdXQ6c3RyaW5nKXtyZXR1cm4gcGlwZXNVdGlscy50b051bWJlcihpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnbnVtYmVyU3VmZml4J30pIGV4cG9ydCBjbGFzcyBOdW1iZXJTdWZmaXgge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlciB8IHN0cmluZywgcnRuSW5wdXQ/OiBhbnkpe1xuICAgIHJldHVybiBwaXBlc1V0aWxzLm51bWJlclN1ZmZpeChpbnB1dCwgcnRuSW5wdXQpXG4gIH1cbn1cblxuQFBpcGUoe25hbWU6ICdtYXJrZG93bkFuY2hvcid9KSBleHBvcnQgY2xhc3MgTWFya2Rvd25BbmNob3Ige1xuICB0cmFuc2Zvcm0oaW5wdXQ6c3RyaW5nKXtyZXR1cm4gcGlwZXNVdGlscy5tYXJrZG93bkFuY2hvcihpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnY2FwaXRhbGl6ZSd9KSBleHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZSB7XG4gIHRyYW5zZm9ybShpbnB1dDphbnkpe3JldHVybiBwaXBlc1V0aWxzLmNhcGl0YWxpemUoaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2NhcGl0YWxpemVXb3Jkcyd9KSBleHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZVdvcmRzIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzVXRpbHMuY2FwaXRhbGl6ZVdvcmRzKGlucHV0KX1cbn1cblxuQFBpcGUoe25hbWU6ICd5ZXNubyd9KSBleHBvcnQgY2xhc3MgWWVzbm8ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtyZXR1cm4gcGlwZXNVdGlscy55ZXNubyhpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnWWVzTm8nfSkgZXhwb3J0IGNsYXNzIFllc05vIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzVXRpbHMueWVzTm8oaW5wdXQpfVxufVxuXG5AUGlwZSh7bmFtZTogJ2Jvb2xlYW4nfSkgZXhwb3J0IGNsYXNzIEJvb2xlYW5QaXBlIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzVXRpbHMuYm9vbGVhbihpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnYml0J30pIGV4cG9ydCBjbGFzcyBCaXQge1xuICB0cmFuc2Zvcm0oaW5wdXQ6YW55KXtyZXR1cm4gcGlwZXNVdGlscy5iaXQoaW5wdXQpfVxufVxuXG4vL2dldCBhbmQgcmV0dXJuIGFsbCBudW1iZXJzIGluc2lkZSBhIHN0cmluZ1xuQFBpcGUoe25hbWU6ICdudW1iZXJzJ30pIGV4cG9ydCBjbGFzcyBOdW1iZXJzIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHBpcGVzVXRpbHMubnVtYmVycyhpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnYURhdGUnfSkgZXhwb3J0IGNsYXNzIEFEYXRlIHtcbiAgdHJhbnNmb3JtKC4uLmFyZ3M6IGFueSl7cmV0dXJuIHBpcGVzVXRpbHMuYURhdGUuYXBwbHkocGlwZXNVdGlscy5hRGF0ZSwgYXJncyl9XG59XG5cbkBQaXBlKHtuYW1lOiAnYU1hdGgnfSkgZXhwb3J0IGNsYXNzIEFNYXRoIHtcbiAgdHJhbnNmb3JtKC4uLmFyZ3M6IGFueSl7cmV0dXJuIHBpcGVzVXRpbHMuYU1hdGguYXBwbHkocGlwZXNVdGlscy5hTWF0aCwgYXJncyl9XG59XG5cbkBQaXBlKHtuYW1lOiAnYVN0cmluZyd9KSBleHBvcnQgY2xhc3MgQVN0cmluZyB7XG4gIHRyYW5zZm9ybSguLi5hcmdzOiBhbnkpe3JldHVybiBwaXBlc1V0aWxzLmFTdHJpbmcuYXBwbHkocGlwZXNVdGlscy5hU3RyaW5nLCBhcmdzKX1cbn1cblxuQFBpcGUoe25hbWU6ICdhVGltZSd9KSBleHBvcnQgY2xhc3MgQVRpbWUge1xuICB0cmFuc2Zvcm0oLi4uYXJnczogYW55KXtyZXR1cm4gcGlwZXNVdGlscy5hVGltZS5hcHBseShwaXBlc1V0aWxzLmFUaW1lLCBhcmdzKX1cbn1cblxuQFBpcGUoe25hbWU6ICdhY2snfSkgZXhwb3J0IGNsYXNzIEFjayB7XG4gIHRyYW5zZm9ybSguLi5hcmdzOiBhbnkpe3JldHVybiBwaXBlc1V0aWxzLmFjay5hcHBseShwaXBlc1V0aWxzLmFjaywgYXJncyl9XG59XG5cbkBQaXBlKHtuYW1lOiAndHlwZW9mJ30pIGV4cG9ydCBjbGFzcyBUeXBlb2ZQaXBlIHtcbiAgdHJhbnNmb3JtKGlucHV0OmFueSl7cmV0dXJuIHR5cGVvZihpbnB1dCl9XG59XG5cbkBQaXBlKHtuYW1lOiAnY29uc29sZSd9KSBleHBvcnQgY2xhc3MgQ29uc29sZVBpcGUge1xuICB0cmFuc2Zvcm0oKXtcbiAgICByZXR1cm4gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzIGFzIGFueSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGlwZXMgPSBbXG4gIEluZGV4VHJhY2ssXG4gIFN0cmluZ2lmeSxcbiAgRm9yY2VBcnJheSxcbiAgQXJyYXlPZk9iamVjdHMsXG4gIFNhZmVIdG1sLFxuICBTYWZlVXJsLFxuICBTYWZlU3R5bGUsXG4gIFRleHREb3dubG9hZCxcbiAgTWFya2Rvd25BbmNob3IsXG4gIENhcGl0YWxpemUsXG4gIENhcGl0YWxpemVXb3JkcyxcbiAgWWVzbm8sXG4gIFllc05vLFxuICBLZXlzUGlwZSxcbiAgVHlwZW9mUGlwZSxcbiAgQ29uc29sZVBpcGUsXG4gIEFEYXRlLFxuICBBTWF0aCxcbiAgQVN0cmluZyxcbiAgQVRpbWUsXG4gIEFjayxcbiAgTnVtYmVycyxcbiAgdG9OdW1iZXIsXG4gIE51bWJlclRvUGhvbmUsXG4gIE51bWJlclN1ZmZpeCxcbiAgQml0LFxuICBOdW1iZXJXb3JkLFxuICBFbmROdW1iZXJXb3JkLFxuICBCb29sZWFuUGlwZSxcbiAgQmV0d2VlbixcbiAgUmVwbGFjZU1heExlbmd0aCxcbl0iXX0=