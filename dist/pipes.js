"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pipes_class_1 = require("./pipes.class");
var Capitalize = (function () {
    function Capitalize() {
    }
    Capitalize.prototype.transform = function (input) {
        return pipes_class_1.pipes.capitalize(input);
    };
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
    CapitalizeWords.prototype.transform = function (input) {
        return pipes_class_1.pipes.capitalizeWords(input);
    };
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
    Yesno.prototype.transform = function (input) {
        return pipes_class_1.pipes.yesno(input);
    };
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
    YesNo.prototype.transform = function (input) {
        return pipes_class_1.pipes.yesNo(input);
    };
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
    Numbers.prototype.transform = function (input) {
        return pipes_class_1.pipes.numbers(input);
    };
    return Numbers;
}());
Numbers.decorators = [
    { type: core_1.Pipe, args: [{ name: 'numbers' },] },
];
/** @nocollapse */
Numbers.ctorParameters = function () { return []; };
exports.Numbers = Numbers;
var Keys = (function () {
    function Keys() {
    }
    Keys.prototype.transform = function (input) {
        if (input)
            return Object.keys(input);
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
    TypeofPipe.prototype.transform = function (input) {
        return typeof (input);
    };
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
    ConsolePipe.prototype.transform = function () {
        return console.log.apply(console, arguments);
    };
    return ConsolePipe;
}());
ConsolePipe.decorators = [
    { type: core_1.Pipe, args: [{ name: 'console' },] },
];
/** @nocollapse */
ConsolePipe.ctorParameters = function () { return []; };
exports.ConsolePipe = ConsolePipe;
exports.declarations = [
    Capitalize,
    CapitalizeWords,
    Yesno,
    YesNo,
    Numbers,
    Keys,
    TypeofPipe,
    ConsolePipe
];
//# sourceMappingURL=pipes.js.map