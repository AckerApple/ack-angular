"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pipes_class_1 = require("./pipes.class");
var platform_browser_1 = require("@angular/platform-browser");
/* ONLY THIS FILE */
var Stringify = (function () {
    function Stringify() {
    }
    Stringify.prototype.transform = function (input, spaces) {
        return JSON.stringify(input, null, spaces);
    };
    return Stringify;
}());
Stringify.decorators = [
    { type: core_1.Pipe, args: [{ name: 'stringify' },] },
];
/** @nocollapse */
Stringify.ctorParameters = function () { return []; };
exports.Stringify = Stringify;
var ForceArray = (function () {
    function ForceArray() {
    }
    ForceArray.prototype.transform = function (input, repeat, repeatValue) {
        return pipes_class_1.pipes.array(input, repeat, repeatValue);
    };
    return ForceArray;
}());
ForceArray.decorators = [
    { type: core_1.Pipe, args: [{ name: 'array' },] },
];
/** @nocollapse */
ForceArray.ctorParameters = function () { return []; };
exports.ForceArray = ForceArray;
var SafeUrl = (function () {
    function SafeUrl(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeUrl.prototype.transform = function (input) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(input);
    };
    return SafeUrl;
}());
SafeUrl.decorators = [
    { type: core_1.Pipe, args: [{ name: 'safeUrl' },] },
];
/** @nocollapse */
SafeUrl.ctorParameters = function () { return [
    { type: platform_browser_1.DomSanitizer, },
]; };
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
SafeHtml.decorators = [
    { type: core_1.Pipe, args: [{ name: 'safeHtml' },] },
];
/** @nocollapse */
SafeHtml.ctorParameters = function () { return [
    { type: platform_browser_1.DomSanitizer, },
]; };
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
SafeStyle.decorators = [
    { type: core_1.Pipe, args: [{ name: 'safeStyle' },] },
];
/** @nocollapse */
SafeStyle.ctorParameters = function () { return [
    { type: platform_browser_1.DomSanitizer, },
]; };
exports.SafeStyle = SafeStyle;
/* end: only this file */
//use with bypassSecurityTrustResourceUrl for href
var TextDownload = (function () {
    function TextDownload() {
    }
    TextDownload.prototype.transform = function (input) { return pipes_class_1.pipes.textDownload(input); };
    return TextDownload;
}());
TextDownload.decorators = [
    { type: core_1.Pipe, args: [{ name: 'textDownload' },] },
];
/** @nocollapse */
TextDownload.ctorParameters = function () { return []; };
exports.TextDownload = TextDownload;
var MarkdownAnchor = (function () {
    function MarkdownAnchor() {
    }
    MarkdownAnchor.prototype.transform = function (input) { return pipes_class_1.pipes.markdownAnchor(input); };
    return MarkdownAnchor;
}());
MarkdownAnchor.decorators = [
    { type: core_1.Pipe, args: [{ name: 'markdownAnchor' },] },
];
/** @nocollapse */
MarkdownAnchor.ctorParameters = function () { return []; };
exports.MarkdownAnchor = MarkdownAnchor;
var Capitalize = (function () {
    function Capitalize() {
    }
    Capitalize.prototype.transform = function (input) { return pipes_class_1.pipes.capitalize(input); };
    return Capitalize;
}());
Capitalize.decorators = [
    { type: core_1.Pipe, args: [{ name: 'capitalize' },] },
];
/** @nocollapse */
Capitalize.ctorParameters = function () { return []; };
exports.Capitalize = Capitalize;
var CapitalizeWords = (function () {
    function CapitalizeWords() {
    }
    CapitalizeWords.prototype.transform = function (input) { return pipes_class_1.pipes.capitalizeWords(input); };
    return CapitalizeWords;
}());
CapitalizeWords.decorators = [
    { type: core_1.Pipe, args: [{ name: 'capitalizeWords' },] },
];
/** @nocollapse */
CapitalizeWords.ctorParameters = function () { return []; };
exports.CapitalizeWords = CapitalizeWords;
var Yesno = (function () {
    function Yesno() {
    }
    Yesno.prototype.transform = function (input) { return pipes_class_1.pipes.yesno(input); };
    return Yesno;
}());
Yesno.decorators = [
    { type: core_1.Pipe, args: [{ name: 'yesno' },] },
];
/** @nocollapse */
Yesno.ctorParameters = function () { return []; };
exports.Yesno = Yesno;
var YesNo = (function () {
    function YesNo() {
    }
    YesNo.prototype.transform = function (input) { return pipes_class_1.pipes.yesNo(input); };
    return YesNo;
}());
YesNo.decorators = [
    { type: core_1.Pipe, args: [{ name: 'YesNo' },] },
];
/** @nocollapse */
YesNo.ctorParameters = function () { return []; };
exports.YesNo = YesNo;
var Numbers = (function () {
    function Numbers() {
    }
    Numbers.prototype.transform = function (input) { return pipes_class_1.pipes.numbers(input); };
    return Numbers;
}());
Numbers.decorators = [
    { type: core_1.Pipe, args: [{ name: 'numbers' },] },
];
/** @nocollapse */
Numbers.ctorParameters = function () { return []; };
exports.Numbers = Numbers;
var ADate = (function () {
    function ADate() {
    }
    ADate.prototype.transform = function () { return pipes_class_1.pipes.aDate.apply(pipes_class_1.pipes.aDate, arguments); };
    return ADate;
}());
ADate.decorators = [
    { type: core_1.Pipe, args: [{ name: 'aDate' },] },
];
/** @nocollapse */
ADate.ctorParameters = function () { return []; };
exports.ADate = ADate;
var ATime = (function () {
    function ATime() {
    }
    ATime.prototype.transform = function () { return pipes_class_1.pipes.aTime.apply(pipes_class_1.pipes.aTime, arguments); };
    return ATime;
}());
ATime.decorators = [
    { type: core_1.Pipe, args: [{ name: 'aTime' },] },
];
/** @nocollapse */
ATime.ctorParameters = function () { return []; };
exports.ATime = ATime;
var Ack = (function () {
    function Ack() {
    }
    Ack.prototype.transform = function () { return pipes_class_1.pipes.ack.apply(pipes_class_1.pipes.ack, arguments); };
    return Ack;
}());
Ack.decorators = [
    { type: core_1.Pipe, args: [{ name: 'ack' },] },
];
/** @nocollapse */
Ack.ctorParameters = function () { return []; };
exports.Ack = Ack;
var Keys = (function () {
    function Keys() {
    }
    Keys.prototype.transform = function (input) {
        return input ? Object.keys(input) : [];
    };
    return Keys;
}());
Keys.decorators = [
    { type: core_1.Pipe, args: [{ name: 'keys' },] },
];
/** @nocollapse */
Keys.ctorParameters = function () { return []; };
exports.Keys = Keys;
var TypeofPipe = (function () {
    function TypeofPipe() {
    }
    TypeofPipe.prototype.transform = function (input) { return typeof (input); };
    return TypeofPipe;
}());
TypeofPipe.decorators = [
    { type: core_1.Pipe, args: [{ name: 'typeof' },] },
];
/** @nocollapse */
TypeofPipe.ctorParameters = function () { return []; };
exports.TypeofPipe = TypeofPipe;
var ConsolePipe = (function () {
    function ConsolePipe() {
    }
    ConsolePipe.prototype.transform = function () { return console.log.apply(console, arguments); };
    return ConsolePipe;
}());
ConsolePipe.decorators = [
    { type: core_1.Pipe, args: [{ name: 'console' },] },
];
/** @nocollapse */
ConsolePipe.ctorParameters = function () { return []; };
exports.ConsolePipe = ConsolePipe;
exports.declarations = [
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
    Ack
];
//# sourceMappingURL=pipes.js.map