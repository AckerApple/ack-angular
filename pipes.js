"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declarations = exports.ConsolePipe = exports.TypeofPipe = exports.Keys = exports.Ack = exports.ATime = exports.AString = exports.AMath = exports.ADate = exports.Numbers = exports.Bit = exports.BooleanPipe = exports.YesNo = exports.Yesno = exports.CapitalizeWords = exports.Capitalize = exports.MarkdownAnchor = exports.NumberSuffix = exports.toNumber = exports.NumberToPhone = exports.TextDownload = exports.ReplaceMaxLength = exports.Between = exports.SafeStyle = exports.SafeHtml = exports.EndNumberWord = exports.NumberWord = exports.SafeUrl = exports.ArrayOfObjects = exports.ForceArray = exports.Stringify = exports.IndexTrack = void 0;
var core_1 = require("@angular/core");
var pipes = require("./pipes.class");
var platform_browser_1 = require("@angular/platform-browser");
/* ONLY THIS FILE */
var IndexTrack = /** @class */ (function () {
    function IndexTrack() {
    }
    IndexTrack.prototype.transform = function () {
        return function (index) { return index; };
    };
    IndexTrack.decorators = [
        { type: core_1.Pipe, args: [{ name: 'indexTrack' },] }
    ];
    return IndexTrack;
}());
exports.IndexTrack = IndexTrack;
var Stringify = /** @class */ (function () {
    function Stringify() {
    }
    Stringify.prototype.transform = function (input, spaces) {
        return JSON.stringify(input, null, spaces);
    };
    Stringify.decorators = [
        { type: core_1.Pipe, args: [{ name: 'stringify' },] }
    ];
    return Stringify;
}());
exports.Stringify = Stringify;
var ForceArray = /** @class */ (function () {
    function ForceArray() {
    }
    ForceArray.prototype.transform = function (input, repeat, repeatValue) {
        return pipes.array(input, repeat, repeatValue);
    };
    ForceArray.decorators = [
        { type: core_1.Pipe, args: [{ name: 'array' },] }
    ];
    return ForceArray;
}());
exports.ForceArray = ForceArray;
var ArrayOfObjects = /** @class */ (function () {
    function ArrayOfObjects() {
    }
    ArrayOfObjects.prototype.transform = function (input, repeat, repeatValue) {
        return pipes.arrayOfObjects(input, repeat, repeatValue);
    };
    ArrayOfObjects.decorators = [
        { type: core_1.Pipe, args: [{ name: 'arrayOfObjects' },] }
    ];
    return ArrayOfObjects;
}());
exports.ArrayOfObjects = ArrayOfObjects;
var SafeUrl = /** @class */ (function () {
    function SafeUrl(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeUrl.prototype.transform = function (input) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(input);
    };
    SafeUrl.decorators = [
        { type: core_1.Pipe, args: [{ name: 'safeUrl' },] }
    ];
    SafeUrl.ctorParameters = function () { return [
        { type: 
            //SafeHtml as SafeHtmler,//must be exported for AOT
            //SafeStyle as SafeStyler,//must be exported for AOT
            //SafeResourceUrl,
            platform_browser_1.DomSanitizer }
    ]; };
    return SafeUrl;
}());
exports.SafeUrl = SafeUrl;
var NumberWord = /** @class */ (function () {
    function NumberWord() {
    }
    NumberWord.prototype.transform = function (input, number) {
        return input + (number && number == 1 ? '' : 's');
    };
    NumberWord.decorators = [
        { type: core_1.Pipe, args: [{ name: 'numberWord' },] }
    ];
    NumberWord.ctorParameters = function () { return []; };
    return NumberWord;
}());
exports.NumberWord = NumberWord;
var EndNumberWord = /** @class */ (function () {
    function EndNumberWord() {
    }
    EndNumberWord.prototype.transform = function (input) {
        return input && input == 1 ? '' : 's';
    };
    EndNumberWord.decorators = [
        { type: core_1.Pipe, args: [{ name: 'endNumberWord' },] }
    ];
    EndNumberWord.ctorParameters = function () { return []; };
    return EndNumberWord;
}());
exports.EndNumberWord = EndNumberWord;
var SafeHtml = /** @class */ (function () {
    function SafeHtml(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeHtml.prototype.transform = function (input) {
        return this.domSanitizer.bypassSecurityTrustHtml(input);
    };
    SafeHtml.decorators = [
        { type: core_1.Pipe, args: [{ name: 'safeHtml' },] }
    ];
    SafeHtml.ctorParameters = function () { return [
        { type: 
            //SafeHtml as SafeHtmler,//must be exported for AOT
            //SafeStyle as SafeStyler,//must be exported for AOT
            //SafeResourceUrl,
            platform_browser_1.DomSanitizer }
    ]; };
    return SafeHtml;
}());
exports.SafeHtml = SafeHtml;
var SafeStyle = /** @class */ (function () {
    function SafeStyle(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeStyle.prototype.transform = function (input) {
        return this.domSanitizer.bypassSecurityTrustStyle(input);
    };
    SafeStyle.decorators = [
        { type: core_1.Pipe, args: [{ name: 'safeStyle' },] }
    ];
    SafeStyle.ctorParameters = function () { return [
        { type: 
            //SafeHtml as SafeHtmler,//must be exported for AOT
            //SafeStyle as SafeStyler,//must be exported for AOT
            //SafeResourceUrl,
            platform_browser_1.DomSanitizer }
    ]; };
    return SafeStyle;
}());
exports.SafeStyle = SafeStyle;
/* end: only this file */
/** (input>=a && input<=b) || (input>=b && input<=a) */
var Between = /** @class */ (function () {
    function Between() {
    }
    Between.prototype.transform = function (input, a, b) {
        return pipes.between(input, a, b);
    };
    Between.decorators = [
        { type: core_1.Pipe, args: [{ name: 'between' },] }
    ];
    return Between;
}());
exports.Between = Between;
var ReplaceMaxLength = /** @class */ (function () {
    function ReplaceMaxLength() {
    }
    ReplaceMaxLength.prototype.transform = function (input, max, replacement) {
        return pipes.replaceMaxLength(input, max, replacement);
    };
    ReplaceMaxLength.decorators = [
        { type: core_1.Pipe, args: [{ name: 'replaceMaxLength' },] }
    ];
    return ReplaceMaxLength;
}());
exports.ReplaceMaxLength = ReplaceMaxLength;
/** use with bypassSecurityTrustResourceUrl for href */
var TextDownload = /** @class */ (function () {
    function TextDownload() {
    }
    TextDownload.prototype.transform = function (input) { return pipes.textDownload(input); };
    TextDownload.decorators = [
        { type: core_1.Pipe, args: [{ name: 'textDownload' },] }
    ];
    return TextDownload;
}());
exports.TextDownload = TextDownload;
var NumberToPhone = /** @class */ (function () {
    function NumberToPhone() {
    }
    NumberToPhone.prototype.transform = function (input) { return pipes.numberToPhone(input); };
    NumberToPhone.decorators = [
        { type: core_1.Pipe, args: [{ name: 'numberToPhone' },] }
    ];
    return NumberToPhone;
}());
exports.NumberToPhone = NumberToPhone;
var toNumber = /** @class */ (function () {
    function toNumber() {
    }
    toNumber.prototype.transform = function (input) { return pipes.toNumber(input); };
    toNumber.decorators = [
        { type: core_1.Pipe, args: [{ name: 'toNumber' },] }
    ];
    return toNumber;
}());
exports.toNumber = toNumber;
var NumberSuffix = /** @class */ (function () {
    function NumberSuffix() {
    }
    NumberSuffix.prototype.transform = function (input, rtnInput) { return pipes.numberSuffix(input, rtnInput); };
    NumberSuffix.decorators = [
        { type: core_1.Pipe, args: [{ name: 'numberSuffix' },] }
    ];
    return NumberSuffix;
}());
exports.NumberSuffix = NumberSuffix;
var MarkdownAnchor = /** @class */ (function () {
    function MarkdownAnchor() {
    }
    MarkdownAnchor.prototype.transform = function (input) { return pipes.markdownAnchor(input); };
    MarkdownAnchor.decorators = [
        { type: core_1.Pipe, args: [{ name: 'markdownAnchor' },] }
    ];
    return MarkdownAnchor;
}());
exports.MarkdownAnchor = MarkdownAnchor;
var Capitalize = /** @class */ (function () {
    function Capitalize() {
    }
    Capitalize.prototype.transform = function (input) { return pipes.capitalize(input); };
    Capitalize.decorators = [
        { type: core_1.Pipe, args: [{ name: 'capitalize' },] }
    ];
    return Capitalize;
}());
exports.Capitalize = Capitalize;
var CapitalizeWords = /** @class */ (function () {
    function CapitalizeWords() {
    }
    CapitalizeWords.prototype.transform = function (input) { return pipes.capitalizeWords(input); };
    CapitalizeWords.decorators = [
        { type: core_1.Pipe, args: [{ name: 'capitalizeWords' },] }
    ];
    return CapitalizeWords;
}());
exports.CapitalizeWords = CapitalizeWords;
var Yesno = /** @class */ (function () {
    function Yesno() {
    }
    Yesno.prototype.transform = function (input) { return pipes.yesno(input); };
    Yesno.decorators = [
        { type: core_1.Pipe, args: [{ name: 'yesno' },] }
    ];
    return Yesno;
}());
exports.Yesno = Yesno;
var YesNo = /** @class */ (function () {
    function YesNo() {
    }
    YesNo.prototype.transform = function (input) { return pipes.yesNo(input); };
    YesNo.decorators = [
        { type: core_1.Pipe, args: [{ name: 'YesNo' },] }
    ];
    return YesNo;
}());
exports.YesNo = YesNo;
var BooleanPipe = /** @class */ (function () {
    function BooleanPipe() {
    }
    BooleanPipe.prototype.transform = function (input) { return pipes.boolean(input); };
    BooleanPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'boolean' },] }
    ];
    return BooleanPipe;
}());
exports.BooleanPipe = BooleanPipe;
var Bit = /** @class */ (function () {
    function Bit() {
    }
    Bit.prototype.transform = function (input) { return pipes.bit(input); };
    Bit.decorators = [
        { type: core_1.Pipe, args: [{ name: 'bit' },] }
    ];
    return Bit;
}());
exports.Bit = Bit;
//get and return all numbers inside a string
var Numbers = /** @class */ (function () {
    function Numbers() {
    }
    Numbers.prototype.transform = function (input) { return pipes.numbers(input); };
    Numbers.decorators = [
        { type: core_1.Pipe, args: [{ name: 'numbers' },] }
    ];
    return Numbers;
}());
exports.Numbers = Numbers;
var ADate = /** @class */ (function () {
    function ADate() {
    }
    ADate.prototype.transform = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return pipes.aDate.apply(pipes.aDate, args);
    };
    ADate.decorators = [
        { type: core_1.Pipe, args: [{ name: 'aDate' },] }
    ];
    return ADate;
}());
exports.ADate = ADate;
var AMath = /** @class */ (function () {
    function AMath() {
    }
    AMath.prototype.transform = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return pipes.aMath.apply(pipes.aMath, args);
    };
    AMath.decorators = [
        { type: core_1.Pipe, args: [{ name: 'aMath' },] }
    ];
    return AMath;
}());
exports.AMath = AMath;
var AString = /** @class */ (function () {
    function AString() {
    }
    AString.prototype.transform = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return pipes.aString.apply(pipes.aString, args);
    };
    AString.decorators = [
        { type: core_1.Pipe, args: [{ name: 'aString' },] }
    ];
    return AString;
}());
exports.AString = AString;
var ATime = /** @class */ (function () {
    function ATime() {
    }
    ATime.prototype.transform = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return pipes.aTime.apply(pipes.aTime, args);
    };
    ATime.decorators = [
        { type: core_1.Pipe, args: [{ name: 'aTime' },] }
    ];
    return ATime;
}());
exports.ATime = ATime;
var Ack = /** @class */ (function () {
    function Ack() {
    }
    Ack.prototype.transform = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return pipes.ack.apply(pipes.ack, args);
    };
    Ack.decorators = [
        { type: core_1.Pipe, args: [{ name: 'ack' },] }
    ];
    return Ack;
}());
exports.Ack = Ack;
var Keys = /** @class */ (function () {
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
    Keys.decorators = [
        { type: core_1.Pipe, args: [{ name: 'keys' },] }
    ];
    return Keys;
}());
exports.Keys = Keys;
var TypeofPipe = /** @class */ (function () {
    function TypeofPipe() {
    }
    TypeofPipe.prototype.transform = function (input) { return typeof (input); };
    TypeofPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'typeof' },] }
    ];
    return TypeofPipe;
}());
exports.TypeofPipe = TypeofPipe;
var ConsolePipe = /** @class */ (function () {
    function ConsolePipe() {
    }
    ConsolePipe.prototype.transform = function () {
        return console.log.apply(console, arguments);
    };
    ConsolePipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'console' },] }
    ];
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
    Between,
    ReplaceMaxLength,
];
//# sourceMappingURL=pipes.js.map