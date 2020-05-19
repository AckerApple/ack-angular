import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import * as pipes from "./pipes.class";
import { DomSanitizer } from '@angular/platform-browser';
let IndexTrack = class IndexTrack {
    transform() {
        return function (index) { return index; };
    }
};
IndexTrack = __decorate([
    Pipe({ name: 'indexTrack' })
], IndexTrack);
export { IndexTrack };
let Stringify = class Stringify {
    transform(input, spaces) {
        return JSON.stringify(input, null, spaces);
    }
};
Stringify = __decorate([
    Pipe({ name: 'stringify' })
], Stringify);
export { Stringify };
let ForceArray = class ForceArray {
    transform(input, repeat, repeatValue) {
        return pipes.array(input, repeat, repeatValue);
    }
};
ForceArray = __decorate([
    Pipe({ name: 'array' })
], ForceArray);
export { ForceArray };
let ArrayOfObjects = class ArrayOfObjects {
    transform(input, repeat, repeatValue) {
        return pipes.arrayOfObjects(input, repeat, repeatValue);
    }
};
ArrayOfObjects = __decorate([
    Pipe({ name: 'arrayOfObjects' })
], ArrayOfObjects);
export { ArrayOfObjects };
let SafeUrl = class SafeUrl {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(input);
    }
};
SafeUrl = __decorate([
    Pipe({ name: 'safeUrl' }),
    __metadata("design:paramtypes", [DomSanitizer])
], SafeUrl);
export { SafeUrl };
let NumberWord = class NumberWord {
    constructor() { }
    transform(input, number) {
        return input + (number && number == 1 ? '' : 's');
    }
};
NumberWord = __decorate([
    Pipe({ name: 'numberWord' }),
    __metadata("design:paramtypes", [])
], NumberWord);
export { NumberWord };
let EndNumberWord = class EndNumberWord {
    constructor() { }
    transform(input) {
        return input && input == 1 ? '' : 's';
    }
};
EndNumberWord = __decorate([
    Pipe({ name: 'endNumberWord' }),
    __metadata("design:paramtypes", [])
], EndNumberWord);
export { EndNumberWord };
let SafeHtml = class SafeHtml {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustHtml(input);
    }
};
SafeHtml = __decorate([
    Pipe({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [DomSanitizer])
], SafeHtml);
export { SafeHtml };
let SafeStyle = class SafeStyle {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustStyle(input);
    }
};
SafeStyle = __decorate([
    Pipe({ name: 'safeStyle' }),
    __metadata("design:paramtypes", [DomSanitizer])
], SafeStyle);
export { SafeStyle };
let Between = class Between {
    transform(input, a, b) { return pipes.between(input, a, b); }
};
Between = __decorate([
    Pipe({ name: 'between' })
], Between);
export { Between };
let TextDownload = class TextDownload {
    transform(input) { return pipes.textDownload(input); }
};
TextDownload = __decorate([
    Pipe({ name: 'textDownload' })
], TextDownload);
export { TextDownload };
let NumberToPhone = class NumberToPhone {
    transform(input) { return pipes.numberToPhone(input); }
};
NumberToPhone = __decorate([
    Pipe({ name: 'numberToPhone' })
], NumberToPhone);
export { NumberToPhone };
let toNumber = class toNumber {
    transform(input) { return pipes.toNumber(input); }
};
toNumber = __decorate([
    Pipe({ name: 'toNumber' })
], toNumber);
export { toNumber };
let NumberSuffix = class NumberSuffix {
    transform(input, rtnInput) { return pipes.numberSuffix(input, rtnInput); }
};
NumberSuffix = __decorate([
    Pipe({ name: 'numberSuffix' })
], NumberSuffix);
export { NumberSuffix };
let MarkdownAnchor = class MarkdownAnchor {
    transform(input) { return pipes.markdownAnchor(input); }
};
MarkdownAnchor = __decorate([
    Pipe({ name: 'markdownAnchor' })
], MarkdownAnchor);
export { MarkdownAnchor };
let Capitalize = class Capitalize {
    transform(input) { return pipes.capitalize(input); }
};
Capitalize = __decorate([
    Pipe({ name: 'capitalize' })
], Capitalize);
export { Capitalize };
let CapitalizeWords = class CapitalizeWords {
    transform(input) { return pipes.capitalizeWords(input); }
};
CapitalizeWords = __decorate([
    Pipe({ name: 'capitalizeWords' })
], CapitalizeWords);
export { CapitalizeWords };
let Yesno = class Yesno {
    transform(input) { return pipes.yesno(input); }
};
Yesno = __decorate([
    Pipe({ name: 'yesno' })
], Yesno);
export { Yesno };
let YesNo = class YesNo {
    transform(input) { return pipes.yesNo(input); }
};
YesNo = __decorate([
    Pipe({ name: 'YesNo' })
], YesNo);
export { YesNo };
let BooleanPipe = class BooleanPipe {
    transform(input) { return pipes.boolean(input); }
};
BooleanPipe = __decorate([
    Pipe({ name: 'boolean' })
], BooleanPipe);
export { BooleanPipe };
let Bit = class Bit {
    transform(input) { return pipes.bit(input); }
};
Bit = __decorate([
    Pipe({ name: 'bit' })
], Bit);
export { Bit };
let Numbers = class Numbers {
    transform(input) { return pipes.numbers(input); }
};
Numbers = __decorate([
    Pipe({ name: 'numbers' })
], Numbers);
export { Numbers };
let ADate = class ADate {
    transform(...args) { return pipes.aDate.apply(pipes.aDate, args); }
};
ADate = __decorate([
    Pipe({ name: 'aDate' })
], ADate);
export { ADate };
let AMath = class AMath {
    transform(...args) { return pipes.aMath.apply(pipes.aMath, args); }
};
AMath = __decorate([
    Pipe({ name: 'aMath' })
], AMath);
export { AMath };
let AString = class AString {
    transform(...args) { return pipes.aString.apply(pipes.aString, args); }
};
AString = __decorate([
    Pipe({ name: 'aString' })
], AString);
export { AString };
let ATime = class ATime {
    transform(...args) { return pipes.aTime.apply(pipes.aTime, args); }
};
ATime = __decorate([
    Pipe({ name: 'aTime' })
], ATime);
export { ATime };
let Ack = class Ack {
    transform(...args) { return pipes.ack.apply(pipes.ack, args); }
};
Ack = __decorate([
    Pipe({ name: 'ack' })
], Ack);
export { Ack };
let Keys = class Keys {
    transform(input) {
        const type = typeof (input) == 'object';
        const isOb = input && type;
        const isArray = isOb && input.constructor == Array;
        if (isArray) {
            return input.map((_value, index) => index);
        }
        return input ? Object.keys(input) : [];
    }
};
Keys = __decorate([
    Pipe({ name: 'keys' })
], Keys);
export { Keys };
let TypeofPipe = class TypeofPipe {
    transform(input) { return typeof (input); }
};
TypeofPipe = __decorate([
    Pipe({ name: 'typeof' })
], TypeofPipe);
export { TypeofPipe };
let ConsolePipe = class ConsolePipe {
    transform() { return console.log.apply(console, arguments); }
};
ConsolePipe = __decorate([
    Pipe({ name: 'console' })
], ConsolePipe);
export { ConsolePipe };
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
    Between
];
