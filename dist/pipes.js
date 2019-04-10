"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const pipes = require("./pipes.class");
const platform_browser_1 = require("@angular/platform-browser");
let IndexTrack = class IndexTrack {
    transform() {
        return function (index) { return index; };
    }
};
IndexTrack = __decorate([
    core_1.Pipe({ name: 'indexTrack' })
], IndexTrack);
exports.IndexTrack = IndexTrack;
let Stringify = class Stringify {
    transform(input, spaces) {
        return JSON.stringify(input, null, spaces);
    }
};
Stringify = __decorate([
    core_1.Pipe({ name: 'stringify' })
], Stringify);
exports.Stringify = Stringify;
let ForceArray = class ForceArray {
    transform(input, repeat, repeatValue) {
        return pipes.array(input, repeat, repeatValue);
    }
};
ForceArray = __decorate([
    core_1.Pipe({ name: 'array' })
], ForceArray);
exports.ForceArray = ForceArray;
let ArrayOfObjects = class ArrayOfObjects {
    transform(input, repeat, repeatValue) {
        return pipes.arrayOfObjects(input, repeat, repeatValue);
    }
};
ArrayOfObjects = __decorate([
    core_1.Pipe({ name: 'arrayOfObjects' })
], ArrayOfObjects);
exports.ArrayOfObjects = ArrayOfObjects;
let SafeUrl = class SafeUrl {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(input);
    }
};
SafeUrl = __decorate([
    core_1.Pipe({ name: 'safeUrl' }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], SafeUrl);
exports.SafeUrl = SafeUrl;
let SafeHtml = class SafeHtml {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustHtml(input);
    }
};
SafeHtml = __decorate([
    core_1.Pipe({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], SafeHtml);
exports.SafeHtml = SafeHtml;
let SafeStyle = class SafeStyle {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(input) {
        return this.domSanitizer.bypassSecurityTrustStyle(input);
    }
};
SafeStyle = __decorate([
    core_1.Pipe({ name: 'safeStyle' }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], SafeStyle);
exports.SafeStyle = SafeStyle;
let Between = class Between {
    transform(input, a, b) { return pipes.between(input, a, b); }
};
Between = __decorate([
    core_1.Pipe({ name: 'between' })
], Between);
exports.Between = Between;
let TextDownload = class TextDownload {
    transform(input) { return pipes.textDownload(input); }
};
TextDownload = __decorate([
    core_1.Pipe({ name: 'textDownload' })
], TextDownload);
exports.TextDownload = TextDownload;
let NumberToPhone = class NumberToPhone {
    transform(input) { return pipes.numberToPhone(input); }
};
NumberToPhone = __decorate([
    core_1.Pipe({ name: 'numberToPhone' })
], NumberToPhone);
exports.NumberToPhone = NumberToPhone;
let toNumber = class toNumber {
    transform(input) { return pipes.toNumber(input); }
};
toNumber = __decorate([
    core_1.Pipe({ name: 'toNumber' })
], toNumber);
exports.toNumber = toNumber;
let NumberSuffix = class NumberSuffix {
    transform(input, rtnInput) { return pipes.numberSuffix(input, rtnInput); }
};
NumberSuffix = __decorate([
    core_1.Pipe({ name: 'numberSuffix' })
], NumberSuffix);
exports.NumberSuffix = NumberSuffix;
let MarkdownAnchor = class MarkdownAnchor {
    transform(input) { return pipes.markdownAnchor(input); }
};
MarkdownAnchor = __decorate([
    core_1.Pipe({ name: 'markdownAnchor' })
], MarkdownAnchor);
exports.MarkdownAnchor = MarkdownAnchor;
let Capitalize = class Capitalize {
    transform(input) { return pipes.capitalize(input); }
};
Capitalize = __decorate([
    core_1.Pipe({ name: 'capitalize' })
], Capitalize);
exports.Capitalize = Capitalize;
let CapitalizeWords = class CapitalizeWords {
    transform(input) { return pipes.capitalizeWords(input); }
};
CapitalizeWords = __decorate([
    core_1.Pipe({ name: 'capitalizeWords' })
], CapitalizeWords);
exports.CapitalizeWords = CapitalizeWords;
let Yesno = class Yesno {
    transform(input) { return pipes.yesno(input); }
};
Yesno = __decorate([
    core_1.Pipe({ name: 'yesno' })
], Yesno);
exports.Yesno = Yesno;
let YesNo = class YesNo {
    transform(input) { return pipes.yesNo(input); }
};
YesNo = __decorate([
    core_1.Pipe({ name: 'YesNo' })
], YesNo);
exports.YesNo = YesNo;
let BooleanPipe = class BooleanPipe {
    transform(input) { return pipes.boolean(input); }
};
BooleanPipe = __decorate([
    core_1.Pipe({ name: 'boolean' })
], BooleanPipe);
exports.BooleanPipe = BooleanPipe;
let Bit = class Bit {
    transform(input) { return pipes.bit(input); }
};
Bit = __decorate([
    core_1.Pipe({ name: 'bit' })
], Bit);
exports.Bit = Bit;
let Numbers = class Numbers {
    transform(input) { return pipes.numbers(input); }
};
Numbers = __decorate([
    core_1.Pipe({ name: 'numbers' })
], Numbers);
exports.Numbers = Numbers;
let ADate = class ADate {
    transform() { return pipes.aDate.apply(pipes.aDate, arguments); }
};
ADate = __decorate([
    core_1.Pipe({ name: 'aDate' })
], ADate);
exports.ADate = ADate;
let AMath = class AMath {
    transform() { return pipes.aMath.apply(pipes.aMath, arguments); }
};
AMath = __decorate([
    core_1.Pipe({ name: 'aMath' })
], AMath);
exports.AMath = AMath;
let AString = class AString {
    transform() { return pipes.aString.apply(pipes.aString, arguments); }
};
AString = __decorate([
    core_1.Pipe({ name: 'aString' })
], AString);
exports.AString = AString;
let ATime = class ATime {
    transform() { return pipes.aTime.apply(pipes.aTime, arguments); }
};
ATime = __decorate([
    core_1.Pipe({ name: 'aTime' })
], ATime);
exports.ATime = ATime;
let Ack = class Ack {
    transform() { return pipes.ack.apply(pipes.ack, arguments); }
};
Ack = __decorate([
    core_1.Pipe({ name: 'ack' })
], Ack);
exports.Ack = Ack;
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
    core_1.Pipe({ name: 'keys' })
], Keys);
exports.Keys = Keys;
let TypeofPipe = class TypeofPipe {
    transform(input) { return typeof (input); }
};
TypeofPipe = __decorate([
    core_1.Pipe({ name: 'typeof' })
], TypeofPipe);
exports.TypeofPipe = TypeofPipe;
let ConsolePipe = class ConsolePipe {
    transform() { return console.log.apply(console, arguments); }
};
ConsolePipe = __decorate([
    core_1.Pipe({ name: 'console' })
], ConsolePipe);
exports.ConsolePipe = ConsolePipe;
exports.declarations = [
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
    BooleanPipe,
    Between
];
