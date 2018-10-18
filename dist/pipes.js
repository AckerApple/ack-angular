"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pipes = require("./pipes.class");
var platform_browser_1 = require("@angular/platform-browser");
var IndexTrack = (function () {
    function IndexTrack() {
    }
    IndexTrack.prototype.transform = function () {
        return function (index, ob) { return index; };
    };
    IndexTrack.decorators = [
        { type: core_1.Pipe, args: [{ name: 'indexTrack' },] },
    ];
    return IndexTrack;
}());
exports.IndexTrack = IndexTrack;
var Stringify = (function () {
    function Stringify() {
    }
    Stringify.prototype.transform = function (input, spaces) {
        return JSON.stringify(input, null, spaces);
    };
    Stringify.decorators = [
        { type: core_1.Pipe, args: [{ name: 'stringify' },] },
    ];
    return Stringify;
}());
exports.Stringify = Stringify;
var ForceArray = (function () {
    function ForceArray() {
    }
    ForceArray.prototype.transform = function (input, repeat, repeatValue) {
        return pipes.array(input, repeat, repeatValue);
    };
    ForceArray.decorators = [
        { type: core_1.Pipe, args: [{ name: 'array' },] },
    ];
    return ForceArray;
}());
exports.ForceArray = ForceArray;
var ArrayOfObjects = (function () {
    function ArrayOfObjects() {
    }
    ArrayOfObjects.prototype.transform = function (input, repeat, repeatValue) {
        return pipes.arrayOfObjects(input, repeat, repeatValue);
    };
    ArrayOfObjects.decorators = [
        { type: core_1.Pipe, args: [{ name: 'arrayOfObjects' },] },
    ];
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
    SafeUrl.decorators = [
        { type: core_1.Pipe, args: [{ name: 'safeUrl' },] },
    ];
    SafeUrl.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer }
    ]; };
    return SafeUrl;
}());
exports.SafeUrl = SafeUrl;
var SafeHtml = (function () {
    function SafeHtml(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeHtml.prototype.transform = function (input) {
        return this.domSanitizer.bypassSecurityTrustHtml(input);
    };
    SafeHtml.decorators = [
        { type: core_1.Pipe, args: [{ name: 'safeHtml' },] },
    ];
    SafeHtml.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer }
    ]; };
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
    SafeStyle.decorators = [
        { type: core_1.Pipe, args: [{ name: 'safeStyle' },] },
    ];
    SafeStyle.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer }
    ]; };
    return SafeStyle;
}());
exports.SafeStyle = SafeStyle;
var Between = (function () {
    function Between() {
    }
    Between.prototype.transform = function (input, a, b) { return pipes.between(input, a, b); };
    Between.decorators = [
        { type: core_1.Pipe, args: [{ name: 'between' },] },
    ];
    return Between;
}());
exports.Between = Between;
var TextDownload = (function () {
    function TextDownload() {
    }
    TextDownload.prototype.transform = function (input) { return pipes.textDownload(input); };
    TextDownload.decorators = [
        { type: core_1.Pipe, args: [{ name: 'textDownload' },] },
    ];
    return TextDownload;
}());
exports.TextDownload = TextDownload;
var NumberToPhone = (function () {
    function NumberToPhone() {
    }
    NumberToPhone.prototype.transform = function (input) { return pipes.numberToPhone(input); };
    NumberToPhone.decorators = [
        { type: core_1.Pipe, args: [{ name: 'numberToPhone' },] },
    ];
    return NumberToPhone;
}());
exports.NumberToPhone = NumberToPhone;
var toNumber = (function () {
    function toNumber() {
    }
    toNumber.prototype.transform = function (input) { return pipes.toNumber(input); };
    toNumber.decorators = [
        { type: core_1.Pipe, args: [{ name: 'toNumber' },] },
    ];
    return toNumber;
}());
exports.toNumber = toNumber;
var NumberSuffix = (function () {
    function NumberSuffix() {
    }
    NumberSuffix.prototype.transform = function (input, rtnInput) { return pipes.numberSuffix(input, rtnInput); };
    NumberSuffix.decorators = [
        { type: core_1.Pipe, args: [{ name: 'numberSuffix' },] },
    ];
    return NumberSuffix;
}());
exports.NumberSuffix = NumberSuffix;
var MarkdownAnchor = (function () {
    function MarkdownAnchor() {
    }
    MarkdownAnchor.prototype.transform = function (input) { return pipes.markdownAnchor(input); };
    MarkdownAnchor.decorators = [
        { type: core_1.Pipe, args: [{ name: 'markdownAnchor' },] },
    ];
    return MarkdownAnchor;
}());
exports.MarkdownAnchor = MarkdownAnchor;
var Capitalize = (function () {
    function Capitalize() {
    }
    Capitalize.prototype.transform = function (input) { return pipes.capitalize(input); };
    Capitalize.decorators = [
        { type: core_1.Pipe, args: [{ name: 'capitalize' },] },
    ];
    return Capitalize;
}());
exports.Capitalize = Capitalize;
var CapitalizeWords = (function () {
    function CapitalizeWords() {
    }
    CapitalizeWords.prototype.transform = function (input) { return pipes.capitalizeWords(input); };
    CapitalizeWords.decorators = [
        { type: core_1.Pipe, args: [{ name: 'capitalizeWords' },] },
    ];
    return CapitalizeWords;
}());
exports.CapitalizeWords = CapitalizeWords;
var Yesno = (function () {
    function Yesno() {
    }
    Yesno.prototype.transform = function (input) { return pipes.yesno(input); };
    Yesno.decorators = [
        { type: core_1.Pipe, args: [{ name: 'yesno' },] },
    ];
    return Yesno;
}());
exports.Yesno = Yesno;
var YesNo = (function () {
    function YesNo() {
    }
    YesNo.prototype.transform = function (input) { return pipes.yesNo(input); };
    YesNo.decorators = [
        { type: core_1.Pipe, args: [{ name: 'YesNo' },] },
    ];
    return YesNo;
}());
exports.YesNo = YesNo;
var BooleanPipe = (function () {
    function BooleanPipe() {
    }
    BooleanPipe.prototype.transform = function (input) { return pipes.boolean(input); };
    BooleanPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'boolean' },] },
    ];
    return BooleanPipe;
}());
exports.BooleanPipe = BooleanPipe;
var Bit = (function () {
    function Bit() {
    }
    Bit.prototype.transform = function (input) { return pipes.bit(input); };
    Bit.decorators = [
        { type: core_1.Pipe, args: [{ name: 'bit' },] },
    ];
    return Bit;
}());
exports.Bit = Bit;
var Numbers = (function () {
    function Numbers() {
    }
    Numbers.prototype.transform = function (input) { return pipes.numbers(input); };
    Numbers.decorators = [
        { type: core_1.Pipe, args: [{ name: 'numbers' },] },
    ];
    return Numbers;
}());
exports.Numbers = Numbers;
var ADate = (function () {
    function ADate() {
    }
    ADate.prototype.transform = function () { return pipes.aDate.apply(pipes.aDate, arguments); };
    ADate.decorators = [
        { type: core_1.Pipe, args: [{ name: 'aDate' },] },
    ];
    return ADate;
}());
exports.ADate = ADate;
var AMath = (function () {
    function AMath() {
    }
    AMath.prototype.transform = function () { return pipes.aMath.apply(pipes.aMath, arguments); };
    AMath.decorators = [
        { type: core_1.Pipe, args: [{ name: 'aMath' },] },
    ];
    return AMath;
}());
exports.AMath = AMath;
var ATime = (function () {
    function ATime() {
    }
    ATime.prototype.transform = function () { return pipes.aTime.apply(pipes.aTime, arguments); };
    ATime.decorators = [
        { type: core_1.Pipe, args: [{ name: 'aTime' },] },
    ];
    return ATime;
}());
exports.ATime = ATime;
var Ack = (function () {
    function Ack() {
    }
    Ack.prototype.transform = function () { return pipes.ack.apply(pipes.ack, arguments); };
    Ack.decorators = [
        { type: core_1.Pipe, args: [{ name: 'ack' },] },
    ];
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
            return input.map(function (value, index) { return index; });
        }
        return input ? Object.keys(input) : [];
    };
    Keys.decorators = [
        { type: core_1.Pipe, args: [{ name: 'keys' },] },
    ];
    return Keys;
}());
exports.Keys = Keys;
var TypeofPipe = (function () {
    function TypeofPipe() {
    }
    TypeofPipe.prototype.transform = function (input) { return typeof (input); };
    TypeofPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'typeof' },] },
    ];
    return TypeofPipe;
}());
exports.TypeofPipe = TypeofPipe;
var ConsolePipe = (function () {
    function ConsolePipe() {
    }
    ConsolePipe.prototype.transform = function () { return console.log.apply(console, arguments); };
    ConsolePipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'console' },] },
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
