"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pipes = require("./pipes.class");
var platform_browser_1 = require("@angular/platform-browser");
/* ONLY THIS FILE */
var IndexTrack = (function () {
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
var Stringify = (function () {
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
var ForceArray = (function () {
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
    /** @nocollapse */
    SafeUrl.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer, },
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
    /** @nocollapse */
    SafeHtml.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer, },
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
    /** @nocollapse */
    SafeStyle.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    return SafeStyle;
}());
exports.SafeStyle = SafeStyle;
/* end: only this file */
//use with bypassSecurityTrustResourceUrl for href
var TextDownload = (function () {
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
var NumberToPhone = (function () {
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
var NumberSuffix = (function () {
    function NumberSuffix() {
    }
    NumberSuffix.prototype.transform = function (input) { return pipes.numberSuffix(input); };
    NumberSuffix.decorators = [
        { type: core_1.Pipe, args: [{ name: 'numberSuffix' },] },
    ];
    /** @nocollapse */
    NumberSuffix.ctorParameters = function () { return []; };
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
    /** @nocollapse */
    MarkdownAnchor.ctorParameters = function () { return []; };
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
    /** @nocollapse */
    Capitalize.ctorParameters = function () { return []; };
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
    /** @nocollapse */
    CapitalizeWords.ctorParameters = function () { return []; };
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
    /** @nocollapse */
    Yesno.ctorParameters = function () { return []; };
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
    /** @nocollapse */
    YesNo.ctorParameters = function () { return []; };
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
    /** @nocollapse */
    BooleanPipe.ctorParameters = function () { return []; };
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
    /** @nocollapse */
    Bit.ctorParameters = function () { return []; };
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
    /** @nocollapse */
    Numbers.ctorParameters = function () { return []; };
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
    /** @nocollapse */
    ADate.ctorParameters = function () { return []; };
    return ADate;
}());
exports.ADate = ADate;
var ATime = (function () {
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
var Ack = (function () {
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
var Keys = (function () {
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
var TypeofPipe = (function () {
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
var ConsolePipe = (function () {
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
    ATime,
    Ack,
    NumberToPhone,
    NumberSuffix,
    Bit,
    BooleanPipe
];
//# sourceMappingURL=pipes.js.map