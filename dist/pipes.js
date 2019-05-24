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
var core_1 = require("@angular/core");
var pipes = require("./pipes.class");
var platform_browser_1 = require("@angular/platform-browser");
var IndexTrack = (function () {
    function IndexTrack() {
    }
    IndexTrack.prototype.transform = function () {
        return function (index) { return index; };
    };
    IndexTrack = __decorate([
        core_1.Pipe({ name: 'indexTrack' })
    ], IndexTrack);
    return IndexTrack;
}());
exports.IndexTrack = IndexTrack;
var Stringify = (function () {
    function Stringify() {
    }
    Stringify.prototype.transform = function (input, spaces) {
        return JSON.stringify(input, null, spaces);
    };
    Stringify = __decorate([
        core_1.Pipe({ name: 'stringify' })
    ], Stringify);
    return Stringify;
}());
exports.Stringify = Stringify;
var ForceArray = (function () {
    function ForceArray() {
    }
    ForceArray.prototype.transform = function (input, repeat, repeatValue) {
        return pipes.array(input, repeat, repeatValue);
    };
    ForceArray = __decorate([
        core_1.Pipe({ name: 'array' })
    ], ForceArray);
    return ForceArray;
}());
exports.ForceArray = ForceArray;
var ArrayOfObjects = (function () {
    function ArrayOfObjects() {
    }
    ArrayOfObjects.prototype.transform = function (input, repeat, repeatValue) {
        return pipes.arrayOfObjects(input, repeat, repeatValue);
    };
    ArrayOfObjects = __decorate([
        core_1.Pipe({ name: 'arrayOfObjects' })
    ], ArrayOfObjects);
    return ArrayOfObjects;
}());
exports.ArrayOfObjects = ArrayOfObjects;
var SafeUrl = (function () {
    function SafeUrl(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeUrl.prototype.transform = function (input) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(input);
    };
    SafeUrl = __decorate([
        core_1.Pipe({ name: 'safeUrl' }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], SafeUrl);
    return SafeUrl;
}());
exports.SafeUrl = SafeUrl;
var NumberWord = (function () {
    function NumberWord() {
    }
    NumberWord.prototype.transform = function (input, number) {
        return input + (number && number == 1 ? '' : 's');
    };
    NumberWord = __decorate([
        core_1.Pipe({ name: 'numberWord' }),
        __metadata("design:paramtypes", [])
    ], NumberWord);
    return NumberWord;
}());
exports.NumberWord = NumberWord;
var EndNumberWord = (function () {
    function EndNumberWord() {
    }
    EndNumberWord.prototype.transform = function (input) {
        return input && input == 1 ? '' : 's';
    };
    EndNumberWord = __decorate([
        core_1.Pipe({ name: 'endNumberWord' }),
        __metadata("design:paramtypes", [])
    ], EndNumberWord);
    return EndNumberWord;
}());
exports.EndNumberWord = EndNumberWord;
var SafeHtml = (function () {
    function SafeHtml(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeHtml.prototype.transform = function (input) {
        return this.domSanitizer.bypassSecurityTrustHtml(input);
    };
    SafeHtml = __decorate([
        core_1.Pipe({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], SafeHtml);
    return SafeHtml;
}());
exports.SafeHtml = SafeHtml;
var SafeStyle = (function () {
    function SafeStyle(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeStyle.prototype.transform = function (input) {
        return this.domSanitizer.bypassSecurityTrustStyle(input);
    };
    SafeStyle = __decorate([
        core_1.Pipe({ name: 'safeStyle' }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], SafeStyle);
    return SafeStyle;
}());
exports.SafeStyle = SafeStyle;
var Between = (function () {
    function Between() {
    }
    Between.prototype.transform = function (input, a, b) { return pipes.between(input, a, b); };
    Between = __decorate([
        core_1.Pipe({ name: 'between' })
    ], Between);
    return Between;
}());
exports.Between = Between;
var TextDownload = (function () {
    function TextDownload() {
    }
    TextDownload.prototype.transform = function (input) { return pipes.textDownload(input); };
    TextDownload = __decorate([
        core_1.Pipe({ name: 'textDownload' })
    ], TextDownload);
    return TextDownload;
}());
exports.TextDownload = TextDownload;
var NumberToPhone = (function () {
    function NumberToPhone() {
    }
    NumberToPhone.prototype.transform = function (input) { return pipes.numberToPhone(input); };
    NumberToPhone = __decorate([
        core_1.Pipe({ name: 'numberToPhone' })
    ], NumberToPhone);
    return NumberToPhone;
}());
exports.NumberToPhone = NumberToPhone;
var toNumber = (function () {
    function toNumber() {
    }
    toNumber.prototype.transform = function (input) { return pipes.toNumber(input); };
    toNumber = __decorate([
        core_1.Pipe({ name: 'toNumber' })
    ], toNumber);
    return toNumber;
}());
exports.toNumber = toNumber;
var NumberSuffix = (function () {
    function NumberSuffix() {
    }
    NumberSuffix.prototype.transform = function (input, rtnInput) { return pipes.numberSuffix(input, rtnInput); };
    NumberSuffix = __decorate([
        core_1.Pipe({ name: 'numberSuffix' })
    ], NumberSuffix);
    return NumberSuffix;
}());
exports.NumberSuffix = NumberSuffix;
var MarkdownAnchor = (function () {
    function MarkdownAnchor() {
    }
    MarkdownAnchor.prototype.transform = function (input) { return pipes.markdownAnchor(input); };
    MarkdownAnchor = __decorate([
        core_1.Pipe({ name: 'markdownAnchor' })
    ], MarkdownAnchor);
    return MarkdownAnchor;
}());
exports.MarkdownAnchor = MarkdownAnchor;
var Capitalize = (function () {
    function Capitalize() {
    }
    Capitalize.prototype.transform = function (input) { return pipes.capitalize(input); };
    Capitalize = __decorate([
        core_1.Pipe({ name: 'capitalize' })
    ], Capitalize);
    return Capitalize;
}());
exports.Capitalize = Capitalize;
var CapitalizeWords = (function () {
    function CapitalizeWords() {
    }
    CapitalizeWords.prototype.transform = function (input) { return pipes.capitalizeWords(input); };
    CapitalizeWords = __decorate([
        core_1.Pipe({ name: 'capitalizeWords' })
    ], CapitalizeWords);
    return CapitalizeWords;
}());
exports.CapitalizeWords = CapitalizeWords;
var Yesno = (function () {
    function Yesno() {
    }
    Yesno.prototype.transform = function (input) { return pipes.yesno(input); };
    Yesno = __decorate([
        core_1.Pipe({ name: 'yesno' })
    ], Yesno);
    return Yesno;
}());
exports.Yesno = Yesno;
var YesNo = (function () {
    function YesNo() {
    }
    YesNo.prototype.transform = function (input) { return pipes.yesNo(input); };
    YesNo = __decorate([
        core_1.Pipe({ name: 'YesNo' })
    ], YesNo);
    return YesNo;
}());
exports.YesNo = YesNo;
var BooleanPipe = (function () {
    function BooleanPipe() {
    }
    BooleanPipe.prototype.transform = function (input) { return pipes.boolean(input); };
    BooleanPipe = __decorate([
        core_1.Pipe({ name: 'boolean' })
    ], BooleanPipe);
    return BooleanPipe;
}());
exports.BooleanPipe = BooleanPipe;
var Bit = (function () {
    function Bit() {
    }
    Bit.prototype.transform = function (input) { return pipes.bit(input); };
    Bit = __decorate([
        core_1.Pipe({ name: 'bit' })
    ], Bit);
    return Bit;
}());
exports.Bit = Bit;
var Numbers = (function () {
    function Numbers() {
    }
    Numbers.prototype.transform = function (input) { return pipes.numbers(input); };
    Numbers = __decorate([
        core_1.Pipe({ name: 'numbers' })
    ], Numbers);
    return Numbers;
}());
exports.Numbers = Numbers;
var ADate = (function () {
    function ADate() {
    }
    ADate.prototype.transform = function () { return pipes.aDate.apply(pipes.aDate, arguments); };
    ADate = __decorate([
        core_1.Pipe({ name: 'aDate' })
    ], ADate);
    return ADate;
}());
exports.ADate = ADate;
var AMath = (function () {
    function AMath() {
    }
    AMath.prototype.transform = function () { return pipes.aMath.apply(pipes.aMath, arguments); };
    AMath = __decorate([
        core_1.Pipe({ name: 'aMath' })
    ], AMath);
    return AMath;
}());
exports.AMath = AMath;
var AString = (function () {
    function AString() {
    }
    AString.prototype.transform = function () { return pipes.aString.apply(pipes.aString, arguments); };
    AString = __decorate([
        core_1.Pipe({ name: 'aString' })
    ], AString);
    return AString;
}());
exports.AString = AString;
var ATime = (function () {
    function ATime() {
    }
    ATime.prototype.transform = function () { return pipes.aTime.apply(pipes.aTime, arguments); };
    ATime = __decorate([
        core_1.Pipe({ name: 'aTime' })
    ], ATime);
    return ATime;
}());
exports.ATime = ATime;
var Ack = (function () {
    function Ack() {
    }
    Ack.prototype.transform = function () { return pipes.ack.apply(pipes.ack, arguments); };
    Ack = __decorate([
        core_1.Pipe({ name: 'ack' })
    ], Ack);
    return Ack;
}());
exports.Ack = Ack;
var Keys = (function () {
    function Keys() {
    }
    Keys.prototype.transform = function (input) {
        var type = typeof (input) == 'object';
        var isOb = input && type;
        var isArray = isOb && input.constructor == Array;
        if (isArray) {
            return input.map(function (_value, index) { return index; });
        }
        return input ? Object.keys(input) : [];
    };
    Keys = __decorate([
        core_1.Pipe({ name: 'keys' })
    ], Keys);
    return Keys;
}());
exports.Keys = Keys;
var TypeofPipe = (function () {
    function TypeofPipe() {
    }
    TypeofPipe.prototype.transform = function (input) { return typeof (input); };
    TypeofPipe = __decorate([
        core_1.Pipe({ name: 'typeof' })
    ], TypeofPipe);
    return TypeofPipe;
}());
exports.TypeofPipe = TypeofPipe;
var ConsolePipe = (function () {
    function ConsolePipe() {
    }
    ConsolePipe.prototype.transform = function () { return console.log.apply(console, arguments); };
    ConsolePipe = __decorate([
        core_1.Pipe({ name: 'console' })
    ], ConsolePipe);
    return ConsolePipe;
}());
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
    NumberWord,
    EndNumberWord,
    BooleanPipe,
    Between
];
