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
    return IndexTrack;
}());
exports.IndexTrack = IndexTrack;
var Stringify = (function () {
    function Stringify() {
    }
    Stringify.prototype.transform = function (input, spaces) {
        return JSON.stringify(input, null, spaces);
    };
    return Stringify;
}());
exports.Stringify = Stringify;
var ForceArray = (function () {
    function ForceArray() {
    }
    ForceArray.prototype.transform = function (input, repeat, repeatValue) {
        return pipes.array(input, repeat, repeatValue);
    };
    return ForceArray;
}());
exports.ForceArray = ForceArray;
var ArrayOfObjects = (function () {
    function ArrayOfObjects() {
    }
    ArrayOfObjects.prototype.transform = function (input, repeat, repeatValue) {
        return pipes.arrayOfObjects(input, repeat, repeatValue);
    };
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
    return SafeStyle;
}());
exports.SafeStyle = SafeStyle;
var Between = (function () {
    function Between() {
    }
    Between.prototype.transform = function (input, a, b) { return pipes.between(input, a, b); };
    return Between;
}());
exports.Between = Between;
var TextDownload = (function () {
    function TextDownload() {
    }
    TextDownload.prototype.transform = function (input) { return pipes.textDownload(input); };
    return TextDownload;
}());
exports.TextDownload = TextDownload;
var NumberToPhone = (function () {
    function NumberToPhone() {
    }
    NumberToPhone.prototype.transform = function (input) { return pipes.numberToPhone(input); };
    return NumberToPhone;
}());
exports.NumberToPhone = NumberToPhone;
var NumberSuffix = (function () {
    function NumberSuffix() {
    }
    NumberSuffix.prototype.transform = function (input, rtnInput) { return pipes.numberSuffix(input, rtnInput); };
    return NumberSuffix;
}());
exports.NumberSuffix = NumberSuffix;
var MarkdownAnchor = (function () {
    function MarkdownAnchor() {
    }
    MarkdownAnchor.prototype.transform = function (input) { return pipes.markdownAnchor(input); };
    return MarkdownAnchor;
}());
exports.MarkdownAnchor = MarkdownAnchor;
var Capitalize = (function () {
    function Capitalize() {
    }
    Capitalize.prototype.transform = function (input) { return pipes.capitalize(input); };
    return Capitalize;
}());
exports.Capitalize = Capitalize;
var CapitalizeWords = (function () {
    function CapitalizeWords() {
    }
    CapitalizeWords.prototype.transform = function (input) { return pipes.capitalizeWords(input); };
    return CapitalizeWords;
}());
exports.CapitalizeWords = CapitalizeWords;
var Yesno = (function () {
    function Yesno() {
    }
    Yesno.prototype.transform = function (input) { return pipes.yesno(input); };
    return Yesno;
}());
exports.Yesno = Yesno;
var YesNo = (function () {
    function YesNo() {
    }
    YesNo.prototype.transform = function (input) { return pipes.yesNo(input); };
    return YesNo;
}());
exports.YesNo = YesNo;
var BooleanPipe = (function () {
    function BooleanPipe() {
    }
    BooleanPipe.prototype.transform = function (input) { return pipes.boolean(input); };
    return BooleanPipe;
}());
exports.BooleanPipe = BooleanPipe;
var Bit = (function () {
    function Bit() {
    }
    Bit.prototype.transform = function (input) { return pipes.bit(input); };
    return Bit;
}());
exports.Bit = Bit;
var Numbers = (function () {
    function Numbers() {
    }
    Numbers.prototype.transform = function (input) { return pipes.numbers(input); };
    return Numbers;
}());
exports.Numbers = Numbers;
var ADate = (function () {
    function ADate() {
    }
    ADate.prototype.transform = function () { return pipes.aDate.apply(pipes.aDate, arguments); };
    return ADate;
}());
exports.ADate = ADate;
var AMath = (function () {
    function AMath() {
    }
    AMath.prototype.transform = function () { return pipes.aMath.apply(pipes.aMath, arguments); };
    return AMath;
}());
exports.AMath = AMath;
var ATime = (function () {
    function ATime() {
    }
    ATime.prototype.transform = function () { return pipes.aTime.apply(pipes.aTime, arguments); };
    return ATime;
}());
exports.ATime = ATime;
var Ack = (function () {
    function Ack() {
    }
    Ack.prototype.transform = function () { return pipes.ack.apply(pipes.ack, arguments); };
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
    return Keys;
}());
exports.Keys = Keys;
var TypeofPipe = (function () {
    function TypeofPipe() {
    }
    TypeofPipe.prototype.transform = function (input) { return typeof (input); };
    return TypeofPipe;
}());
exports.TypeofPipe = TypeofPipe;
var ConsolePipe = (function () {
    function ConsolePipe() {
    }
    ConsolePipe.prototype.transform = function () { return console.log.apply(console, arguments); };
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
    Numbers,
    Keys,
    TypeofPipe,
    ConsolePipe,
    ADate,
    AMath,
    ATime,
    Ack,
    NumberToPhone,
    NumberSuffix,
    Bit,
    BooleanPipe,
    Between
];
