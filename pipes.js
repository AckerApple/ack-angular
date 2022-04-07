import { DomSanitizer } from '@angular/platform-browser';
import { KeysPipe } from './pipes/keys.pipe';
import * as pipesUtils from "./pipes.class";
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export { KeysPipe } from './pipes/keys.pipe';
/* ONLY THIS FILE */
var IndexTrack = /** @class */ (function () {
    function IndexTrack() {
    }
    IndexTrack.prototype.transform = function (_x) {
        return function (index) { return index; };
    };
    IndexTrack.ɵfac = function IndexTrack_Factory(t) { return new (t || IndexTrack)(); };
    IndexTrack.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "indexTrack", type: IndexTrack, pure: true });
    return IndexTrack;
}());
export { IndexTrack };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IndexTrack, [{
        type: Pipe,
        args: [{ name: 'indexTrack' }]
    }], null, null); })();
var Stringify = /** @class */ (function () {
    function Stringify() {
    }
    Stringify.prototype.transform = function (input, spaces) {
        if (spaces === void 0) { spaces = 0; }
        return JSON.stringify(input, null, spaces);
    };
    Stringify.ɵfac = function Stringify_Factory(t) { return new (t || Stringify)(); };
    Stringify.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "stringify", type: Stringify, pure: true });
    return Stringify;
}());
export { Stringify };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Stringify, [{
        type: Pipe,
        args: [{ name: 'stringify' }]
    }], null, null); })();
var ForceArray = /** @class */ (function () {
    function ForceArray() {
    }
    ForceArray.prototype.transform = function (input, repeat, repeatValue) {
        return pipesUtils.array(input, repeat, repeatValue);
    };
    ForceArray.ɵfac = function ForceArray_Factory(t) { return new (t || ForceArray)(); };
    ForceArray.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "array", type: ForceArray, pure: true });
    return ForceArray;
}());
export { ForceArray };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForceArray, [{
        type: Pipe,
        args: [{ name: 'array' }]
    }], null, null); })();
var ArrayOfObjects = /** @class */ (function () {
    function ArrayOfObjects() {
    }
    ArrayOfObjects.prototype.transform = function (input, repeat, repeatValue) {
        return pipesUtils.arrayOfObjects(input, repeat, repeatValue);
    };
    ArrayOfObjects.ɵfac = function ArrayOfObjects_Factory(t) { return new (t || ArrayOfObjects)(); };
    ArrayOfObjects.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "arrayOfObjects", type: ArrayOfObjects, pure: true });
    return ArrayOfObjects;
}());
export { ArrayOfObjects };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ArrayOfObjects, [{
        type: Pipe,
        args: [{ name: 'arrayOfObjects' }]
    }], null, null); })();
var SafeUrl = /** @class */ (function () {
    function SafeUrl(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeUrl.prototype.transform = function (input) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(input);
    };
    SafeUrl.ɵfac = function SafeUrl_Factory(t) { return new (t || SafeUrl)(i0.ɵɵdirectiveInject(i1.DomSanitizer, 16)); };
    SafeUrl.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "safeUrl", type: SafeUrl, pure: true });
    return SafeUrl;
}());
export { SafeUrl };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeUrl, [{
        type: Pipe,
        args: [{ name: 'safeUrl' }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
var NumberWord = /** @class */ (function () {
    function NumberWord() {
    }
    NumberWord.prototype.transform = function (input, number) {
        return input + (number && number == 1 ? '' : 's');
    };
    NumberWord.ɵfac = function NumberWord_Factory(t) { return new (t || NumberWord)(); };
    NumberWord.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "numberWord", type: NumberWord, pure: true });
    return NumberWord;
}());
export { NumberWord };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberWord, [{
        type: Pipe,
        args: [{ name: 'numberWord' }]
    }], function () { return []; }, null); })();
var EndNumberWord = /** @class */ (function () {
    function EndNumberWord() {
    }
    EndNumberWord.prototype.transform = function (input) {
        return input && input == 1 ? '' : 's';
    };
    EndNumberWord.ɵfac = function EndNumberWord_Factory(t) { return new (t || EndNumberWord)(); };
    EndNumberWord.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "endNumberWord", type: EndNumberWord, pure: true });
    return EndNumberWord;
}());
export { EndNumberWord };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EndNumberWord, [{
        type: Pipe,
        args: [{ name: 'endNumberWord' }]
    }], function () { return []; }, null); })();
var SafeHtml = /** @class */ (function () {
    function SafeHtml(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeHtml.prototype.transform = function (input) {
        return this.domSanitizer.bypassSecurityTrustHtml(input);
    };
    SafeHtml.ɵfac = function SafeHtml_Factory(t) { return new (t || SafeHtml)(i0.ɵɵdirectiveInject(i1.DomSanitizer, 16)); };
    SafeHtml.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "safeHtml", type: SafeHtml, pure: true });
    return SafeHtml;
}());
export { SafeHtml };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeHtml, [{
        type: Pipe,
        args: [{ name: 'safeHtml' }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
var SafeStyle = /** @class */ (function () {
    function SafeStyle(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeStyle.prototype.transform = function (input) {
        return this.domSanitizer.bypassSecurityTrustStyle(input);
    };
    SafeStyle.ɵfac = function SafeStyle_Factory(t) { return new (t || SafeStyle)(i0.ɵɵdirectiveInject(i1.DomSanitizer, 16)); };
    SafeStyle.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "safeStyle", type: SafeStyle, pure: true });
    return SafeStyle;
}());
export { SafeStyle };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeStyle, [{
        type: Pipe,
        args: [{ name: 'safeStyle' }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
/* end: only this file */
/** (input>=a && input<=b) || (input>=b && input<=a) */
var Between = /** @class */ (function () {
    function Between() {
    }
    Between.prototype.transform = function (input, a, b) {
        return pipesUtils.between(input, a, b);
    };
    Between.ɵfac = function Between_Factory(t) { return new (t || Between)(); };
    Between.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "between", type: Between, pure: true });
    return Between;
}());
export { Between };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Between, [{
        type: Pipe,
        args: [{ name: 'between' }]
    }], null, null); })();
var ReplaceMaxLength = /** @class */ (function () {
    function ReplaceMaxLength() {
    }
    ReplaceMaxLength.prototype.transform = function (input, max, replacement) {
        return pipesUtils.replaceMaxLength(input, max, replacement);
    };
    ReplaceMaxLength.ɵfac = function ReplaceMaxLength_Factory(t) { return new (t || ReplaceMaxLength)(); };
    ReplaceMaxLength.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "replaceMaxLength", type: ReplaceMaxLength, pure: true });
    return ReplaceMaxLength;
}());
export { ReplaceMaxLength };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReplaceMaxLength, [{
        type: Pipe,
        args: [{ name: 'replaceMaxLength' }]
    }], null, null); })();
/** use with bypassSecurityTrustResourceUrl for href */
var TextDownload = /** @class */ (function () {
    function TextDownload() {
    }
    TextDownload.prototype.transform = function (input) { return pipesUtils.textDownload(input); };
    TextDownload.ɵfac = function TextDownload_Factory(t) { return new (t || TextDownload)(); };
    TextDownload.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "textDownload", type: TextDownload, pure: true });
    return TextDownload;
}());
export { TextDownload };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextDownload, [{
        type: Pipe,
        args: [{ name: 'textDownload' }]
    }], null, null); })();
var NumberToPhone = /** @class */ (function () {
    function NumberToPhone() {
    }
    NumberToPhone.prototype.transform = function (input) {
        return pipesUtils.numberToPhone(input);
    };
    NumberToPhone.ɵfac = function NumberToPhone_Factory(t) { return new (t || NumberToPhone)(); };
    NumberToPhone.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "numberToPhone", type: NumberToPhone, pure: true });
    return NumberToPhone;
}());
export { NumberToPhone };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberToPhone, [{
        type: Pipe,
        args: [{ name: 'numberToPhone' }]
    }], null, null); })();
var toNumber = /** @class */ (function () {
    function toNumber() {
    }
    toNumber.prototype.transform = function (input) { return pipesUtils.toNumber(input); };
    toNumber.ɵfac = function toNumber_Factory(t) { return new (t || toNumber)(); };
    toNumber.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "toNumber", type: toNumber, pure: true });
    return toNumber;
}());
export { toNumber };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(toNumber, [{
        type: Pipe,
        args: [{ name: 'toNumber' }]
    }], null, null); })();
var NumberSuffix = /** @class */ (function () {
    function NumberSuffix() {
    }
    NumberSuffix.prototype.transform = function (input, rtnInput) {
        return pipesUtils.numberSuffix(input, rtnInput);
    };
    NumberSuffix.ɵfac = function NumberSuffix_Factory(t) { return new (t || NumberSuffix)(); };
    NumberSuffix.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "numberSuffix", type: NumberSuffix, pure: true });
    return NumberSuffix;
}());
export { NumberSuffix };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberSuffix, [{
        type: Pipe,
        args: [{ name: 'numberSuffix' }]
    }], null, null); })();
var MarkdownAnchor = /** @class */ (function () {
    function MarkdownAnchor() {
    }
    MarkdownAnchor.prototype.transform = function (input) { return pipesUtils.markdownAnchor(input); };
    MarkdownAnchor.ɵfac = function MarkdownAnchor_Factory(t) { return new (t || MarkdownAnchor)(); };
    MarkdownAnchor.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "markdownAnchor", type: MarkdownAnchor, pure: true });
    return MarkdownAnchor;
}());
export { MarkdownAnchor };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MarkdownAnchor, [{
        type: Pipe,
        args: [{ name: 'markdownAnchor' }]
    }], null, null); })();
var Capitalize = /** @class */ (function () {
    function Capitalize() {
    }
    Capitalize.prototype.transform = function (input) { return pipesUtils.capitalize(input); };
    Capitalize.ɵfac = function Capitalize_Factory(t) { return new (t || Capitalize)(); };
    Capitalize.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "capitalize", type: Capitalize, pure: true });
    return Capitalize;
}());
export { Capitalize };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Capitalize, [{
        type: Pipe,
        args: [{ name: 'capitalize' }]
    }], null, null); })();
var CapitalizeWords = /** @class */ (function () {
    function CapitalizeWords() {
    }
    CapitalizeWords.prototype.transform = function (input) { return pipesUtils.capitalizeWords(input); };
    CapitalizeWords.ɵfac = function CapitalizeWords_Factory(t) { return new (t || CapitalizeWords)(); };
    CapitalizeWords.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "capitalizeWords", type: CapitalizeWords, pure: true });
    return CapitalizeWords;
}());
export { CapitalizeWords };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CapitalizeWords, [{
        type: Pipe,
        args: [{ name: 'capitalizeWords' }]
    }], null, null); })();
var Yesno = /** @class */ (function () {
    function Yesno() {
    }
    Yesno.prototype.transform = function (input) { return pipesUtils.yesno(input); };
    Yesno.ɵfac = function Yesno_Factory(t) { return new (t || Yesno)(); };
    Yesno.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "yesno", type: Yesno, pure: true });
    return Yesno;
}());
export { Yesno };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Yesno, [{
        type: Pipe,
        args: [{ name: 'yesno' }]
    }], null, null); })();
var YesNo = /** @class */ (function () {
    function YesNo() {
    }
    YesNo.prototype.transform = function (input) { return pipesUtils.yesNo(input); };
    YesNo.ɵfac = function YesNo_Factory(t) { return new (t || YesNo)(); };
    YesNo.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "YesNo", type: YesNo, pure: true });
    return YesNo;
}());
export { YesNo };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YesNo, [{
        type: Pipe,
        args: [{ name: 'YesNo' }]
    }], null, null); })();
var BooleanPipe = /** @class */ (function () {
    function BooleanPipe() {
    }
    BooleanPipe.prototype.transform = function (input) { return pipesUtils.boolean(input); };
    BooleanPipe.ɵfac = function BooleanPipe_Factory(t) { return new (t || BooleanPipe)(); };
    BooleanPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "boolean", type: BooleanPipe, pure: true });
    return BooleanPipe;
}());
export { BooleanPipe };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BooleanPipe, [{
        type: Pipe,
        args: [{ name: 'boolean' }]
    }], null, null); })();
var Bit = /** @class */ (function () {
    function Bit() {
    }
    Bit.prototype.transform = function (input) { return pipesUtils.bit(input); };
    Bit.ɵfac = function Bit_Factory(t) { return new (t || Bit)(); };
    Bit.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "bit", type: Bit, pure: true });
    return Bit;
}());
export { Bit };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Bit, [{
        type: Pipe,
        args: [{ name: 'bit' }]
    }], null, null); })();
//get and return all numbers inside a string
var Numbers = /** @class */ (function () {
    function Numbers() {
    }
    Numbers.prototype.transform = function (input) { return pipesUtils.numbers(input); };
    Numbers.ɵfac = function Numbers_Factory(t) { return new (t || Numbers)(); };
    Numbers.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "numbers", type: Numbers, pure: true });
    return Numbers;
}());
export { Numbers };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Numbers, [{
        type: Pipe,
        args: [{ name: 'numbers' }]
    }], null, null); })();
var ADate = /** @class */ (function () {
    function ADate() {
    }
    ADate.prototype.transform = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return pipesUtils.aDate.apply(pipesUtils.aDate, args);
    };
    ADate.ɵfac = function ADate_Factory(t) { return new (t || ADate)(); };
    ADate.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "aDate", type: ADate, pure: true });
    return ADate;
}());
export { ADate };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ADate, [{
        type: Pipe,
        args: [{ name: 'aDate' }]
    }], null, null); })();
var AMath = /** @class */ (function () {
    function AMath() {
    }
    AMath.prototype.transform = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return pipesUtils.aMath.apply(pipesUtils.aMath, args);
    };
    AMath.ɵfac = function AMath_Factory(t) { return new (t || AMath)(); };
    AMath.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "aMath", type: AMath, pure: true });
    return AMath;
}());
export { AMath };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AMath, [{
        type: Pipe,
        args: [{ name: 'aMath' }]
    }], null, null); })();
var AString = /** @class */ (function () {
    function AString() {
    }
    AString.prototype.transform = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return pipesUtils.aString.apply(pipesUtils.aString, args);
    };
    AString.ɵfac = function AString_Factory(t) { return new (t || AString)(); };
    AString.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "aString", type: AString, pure: true });
    return AString;
}());
export { AString };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AString, [{
        type: Pipe,
        args: [{ name: 'aString' }]
    }], null, null); })();
var ATime = /** @class */ (function () {
    function ATime() {
    }
    ATime.prototype.transform = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return pipesUtils.aTime.apply(pipesUtils.aTime, args);
    };
    ATime.ɵfac = function ATime_Factory(t) { return new (t || ATime)(); };
    ATime.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "aTime", type: ATime, pure: true });
    return ATime;
}());
export { ATime };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ATime, [{
        type: Pipe,
        args: [{ name: 'aTime' }]
    }], null, null); })();
var Ack = /** @class */ (function () {
    function Ack() {
    }
    Ack.prototype.transform = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return pipesUtils.ack.apply(pipesUtils.ack, args);
    };
    Ack.ɵfac = function Ack_Factory(t) { return new (t || Ack)(); };
    Ack.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "ack", type: Ack, pure: true });
    return Ack;
}());
export { Ack };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ack, [{
        type: Pipe,
        args: [{ name: 'ack' }]
    }], null, null); })();
var TypeofPipe = /** @class */ (function () {
    function TypeofPipe() {
    }
    TypeofPipe.prototype.transform = function (input) { return typeof (input); };
    TypeofPipe.ɵfac = function TypeofPipe_Factory(t) { return new (t || TypeofPipe)(); };
    TypeofPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "typeof", type: TypeofPipe, pure: true });
    return TypeofPipe;
}());
export { TypeofPipe };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TypeofPipe, [{
        type: Pipe,
        args: [{ name: 'typeof' }]
    }], null, null); })();
var ConsolePipe = /** @class */ (function () {
    function ConsolePipe() {
    }
    ConsolePipe.prototype.transform = function () {
        return console.log.apply(console, arguments);
    };
    ConsolePipe.ɵfac = function ConsolePipe_Factory(t) { return new (t || ConsolePipe)(); };
    ConsolePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "console", type: ConsolePipe, pure: true });
    return ConsolePipe;
}());
export { ConsolePipe };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConsolePipe, [{
        type: Pipe,
        args: [{ name: 'console' }]
    }], null, null); })();
export var pipes = [
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
//# sourceMappingURL=pipes.js.map