"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pipes = require("./pipes.class");
var platform_browser_1 = require("@angular/platform-browser");
/* ONLY THIS FILE */
var IndexTrack = /** @class */ (function () {
    function IndexTrack() {
    }
    IndexTrack.prototype.transform = function () {
        return function (index, ob) { return index; };
    };
    IndexTrack.decorators = [
        { type: core_1.Pipe, args: [{ name: 'indexTrack' },] },
    ];
    /** @nocollapse */
    IndexTrack.ctorParameters = function () { return []; };
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
        { type: core_1.Pipe, args: [{ name: 'stringify' },] },
    ];
    /** @nocollapse */
    Stringify.ctorParameters = function () { return []; };
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
        { type: core_1.Pipe, args: [{ name: 'array' },] },
    ];
    /** @nocollapse */
    ForceArray.ctorParameters = function () { return []; };
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
        { type: core_1.Pipe, args: [{ name: 'arrayOfObjects' },] },
    ];
    /** @nocollapse */
    ArrayOfObjects.ctorParameters = function () { return []; };
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
        { type: core_1.Pipe, args: [{ name: 'safeUrl' },] },
    ];
    /** @nocollapse */
    SafeUrl.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    return SafeUrl;
}());
exports.SafeUrl = SafeUrl;
var SafeHtml = /** @class */ (function () {
    function SafeHtml(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeHtml.prototype.transform = function (input) {
        return this.domSanitizer.bypassSecurityTrustHtml(input);
    };
    SafeHtml.decorators = [
        { type: core_1.Pipe, args: [{ name: 'safeHtml' },] },
    ];
    /** @nocollapse */
    SafeHtml.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer, },
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
        { type: core_1.Pipe, args: [{ name: 'safeStyle' },] },
    ];
    /** @nocollapse */
    SafeStyle.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    return SafeStyle;
}());
exports.SafeStyle = SafeStyle;
/* end: only this file */
/** (input>=a && input<=b) || (input>=b && input<=a) */
var Between = /** @class */ (function () {
    function Between() {
    }
    Between.prototype.transform = function (input, a, b) { return pipes.between(input, a, b); };
    Between.decorators = [
        { type: core_1.Pipe, args: [{ name: 'between' },] },
    ];
    /** @nocollapse */
    Between.ctorParameters = function () { return []; };
    return Between;
}());
exports.Between = Between;
/** use with bypassSecurityTrustResourceUrl for href */
var TextDownload = /** @class */ (function () {
    function TextDownload() {
    }
    TextDownload.prototype.transform = function (input) { return pipes.textDownload(input); };
    TextDownload.decorators = [
        { type: core_1.Pipe, args: [{ name: 'textDownload' },] },
    ];
    /** @nocollapse */
    TextDownload.ctorParameters = function () { return []; };
    return TextDownload;
}());
exports.TextDownload = TextDownload;
var NumberToPhone = /** @class */ (function () {
    function NumberToPhone() {
    }
    NumberToPhone.prototype.transform = function (input) { return pipes.numberToPhone(input); };
    NumberToPhone.decorators = [
        { type: core_1.Pipe, args: [{ name: 'numberToPhone' },] },
    ];
    /** @nocollapse */
    NumberToPhone.ctorParameters = function () { return []; };
    return NumberToPhone;
}());
exports.NumberToPhone = NumberToPhone;
var NumberSuffix = /** @class */ (function () {
    function NumberSuffix() {
    }
    NumberSuffix.prototype.transform = function (input, rtnInput) { return pipes.numberSuffix(input, rtnInput); };
    NumberSuffix.decorators = [
        { type: core_1.Pipe, args: [{ name: 'numberSuffix' },] },
    ];
    /** @nocollapse */
    NumberSuffix.ctorParameters = function () { return []; };
    return NumberSuffix;
}());
exports.NumberSuffix = NumberSuffix;
var MarkdownAnchor = /** @class */ (function () {
    function MarkdownAnchor() {
    }
    MarkdownAnchor.prototype.transform = function (input) { return pipes.markdownAnchor(input); };
    MarkdownAnchor.decorators = [
        { type: core_1.Pipe, args: [{ name: 'markdownAnchor' },] },
    ];
    /** @nocollapse */
    MarkdownAnchor.ctorParameters = function () { return []; };
    return MarkdownAnchor;
}());
exports.MarkdownAnchor = MarkdownAnchor;
var Capitalize = /** @class */ (function () {
    function Capitalize() {
    }
    Capitalize.prototype.transform = function (input) { return pipes.capitalize(input); };
    Capitalize.decorators = [
        { type: core_1.Pipe, args: [{ name: 'capitalize' },] },
    ];
    /** @nocollapse */
    Capitalize.ctorParameters = function () { return []; };
    return Capitalize;
}());
exports.Capitalize = Capitalize;
var CapitalizeWords = /** @class */ (function () {
    function CapitalizeWords() {
    }
    CapitalizeWords.prototype.transform = function (input) { return pipes.capitalizeWords(input); };
    CapitalizeWords.decorators = [
        { type: core_1.Pipe, args: [{ name: 'capitalizeWords' },] },
    ];
    /** @nocollapse */
    CapitalizeWords.ctorParameters = function () { return []; };
    return CapitalizeWords;
}());
exports.CapitalizeWords = CapitalizeWords;
var Yesno = /** @class */ (function () {
    function Yesno() {
    }
    Yesno.prototype.transform = function (input) { return pipes.yesno(input); };
    Yesno.decorators = [
        { type: core_1.Pipe, args: [{ name: 'yesno' },] },
    ];
    /** @nocollapse */
    Yesno.ctorParameters = function () { return []; };
    return Yesno;
}());
exports.Yesno = Yesno;
var YesNo = /** @class */ (function () {
    function YesNo() {
    }
    YesNo.prototype.transform = function (input) { return pipes.yesNo(input); };
    YesNo.decorators = [
        { type: core_1.Pipe, args: [{ name: 'YesNo' },] },
    ];
    /** @nocollapse */
    YesNo.ctorParameters = function () { return []; };
    return YesNo;
}());
exports.YesNo = YesNo;
var BooleanPipe = /** @class */ (function () {
    function BooleanPipe() {
    }
    BooleanPipe.prototype.transform = function (input) { return pipes.boolean(input); };
    BooleanPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'boolean' },] },
    ];
    /** @nocollapse */
    BooleanPipe.ctorParameters = function () { return []; };
    return BooleanPipe;
}());
exports.BooleanPipe = BooleanPipe;
var Bit = /** @class */ (function () {
    function Bit() {
    }
    Bit.prototype.transform = function (input) { return pipes.bit(input); };
    Bit.decorators = [
        { type: core_1.Pipe, args: [{ name: 'bit' },] },
    ];
    /** @nocollapse */
    Bit.ctorParameters = function () { return []; };
    return Bit;
}());
exports.Bit = Bit;
var Numbers = /** @class */ (function () {
    function Numbers() {
    }
    Numbers.prototype.transform = function (input) { return pipes.numbers(input); };
    Numbers.decorators = [
        { type: core_1.Pipe, args: [{ name: 'numbers' },] },
    ];
    /** @nocollapse */
    Numbers.ctorParameters = function () { return []; };
    return Numbers;
}());
exports.Numbers = Numbers;
var ADate = /** @class */ (function () {
    function ADate() {
    }
    ADate.prototype.transform = function () { return pipes.aDate.apply(pipes.aDate, arguments); };
    ADate.decorators = [
        { type: core_1.Pipe, args: [{ name: 'aDate' },] },
    ];
    /** @nocollapse */
    ADate.ctorParameters = function () { return []; };
    return ADate;
}());
exports.ADate = ADate;
var AMath = /** @class */ (function () {
    function AMath() {
    }
    AMath.prototype.transform = function () { return pipes.aMath.apply(pipes.aMath, arguments); };
    AMath.decorators = [
        { type: core_1.Pipe, args: [{ name: 'aMath' },] },
    ];
    /** @nocollapse */
    AMath.ctorParameters = function () { return []; };
    return AMath;
}());
exports.AMath = AMath;
var ATime = /** @class */ (function () {
    function ATime() {
    }
    ATime.prototype.transform = function () { return pipes.aTime.apply(pipes.aTime, arguments); };
    ATime.decorators = [
        { type: core_1.Pipe, args: [{ name: 'aTime' },] },
    ];
    /** @nocollapse */
    ATime.ctorParameters = function () { return []; };
    return ATime;
}());
exports.ATime = ATime;
var Ack = /** @class */ (function () {
    function Ack() {
    }
    Ack.prototype.transform = function () { return pipes.ack.apply(pipes.ack, arguments); };
    Ack.decorators = [
        { type: core_1.Pipe, args: [{ name: 'ack' },] },
    ];
    /** @nocollapse */
    Ack.ctorParameters = function () { return []; };
    return Ack;
}());
exports.Ack = Ack;
var Keys = /** @class */ (function () {
    function Keys() {
    }
    Keys.prototype.transform = function (input) {
        return input ? Object.keys(input) : [];
    };
    Keys.decorators = [
        { type: core_1.Pipe, args: [{ name: 'keys' },] },
    ];
    /** @nocollapse */
    Keys.ctorParameters = function () { return []; };
    return Keys;
}());
exports.Keys = Keys;
var TypeofPipe = /** @class */ (function () {
    function TypeofPipe() {
    }
    TypeofPipe.prototype.transform = function (input) { return typeof (input); };
    TypeofPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'typeof' },] },
    ];
    /** @nocollapse */
    TypeofPipe.ctorParameters = function () { return []; };
    return TypeofPipe;
}());
exports.TypeofPipe = TypeofPipe;
var ConsolePipe = /** @class */ (function () {
    function ConsolePipe() {
    }
    ConsolePipe.prototype.transform = function () { return console.log.apply(console, arguments); };
    ConsolePipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'console' },] },
    ];
    /** @nocollapse */
    ConsolePipe.ctorParameters = function () { return []; };
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
