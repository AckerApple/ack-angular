var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
export { pipes } from "./pipes.class";
import { pipes } from "./pipes.class";
var Capitalize = (function () {
    function Capitalize() {
    }
    Capitalize.prototype.transform = function (input) {
        return pipes.capitalize(input);
    };
    return Capitalize;
}());
Capitalize = __decorate([
    Pipe({ name: 'capitalize' })
], Capitalize);
export { Capitalize };
var CapitalizeWords = (function () {
    function CapitalizeWords() {
    }
    CapitalizeWords.prototype.transform = function (input) {
        return pipes.capitalizeWords(input);
    };
    return CapitalizeWords;
}());
CapitalizeWords = __decorate([
    Pipe({ name: 'capitalizeWords' })
], CapitalizeWords);
export { CapitalizeWords };
var Yesno = (function () {
    function Yesno() {
    }
    Yesno.prototype.transform = function (input) {
        return pipes.yesno(input);
    };
    return Yesno;
}());
Yesno = __decorate([
    Pipe({ name: 'yesno' })
], Yesno);
export { Yesno };
var YesNo = (function () {
    function YesNo() {
    }
    YesNo.prototype.transform = function (input) {
        return pipes.yesNo(input);
    };
    return YesNo;
}());
YesNo = __decorate([
    Pipe({ name: 'YesNo' })
], YesNo);
export { YesNo };
var Numbers = (function () {
    function Numbers() {
    }
    Numbers.prototype.transform = function (input) {
        return pipes.numbers(input);
    };
    return Numbers;
}());
Numbers = __decorate([
    Pipe({ name: 'numbers' })
], Numbers);
export { Numbers };
var Keys = (function () {
    function Keys() {
    }
    Keys.prototype.transform = function (input) {
        if (input)
            return Object.keys(input);
    };
    return Keys;
}());
Keys = __decorate([
    Pipe({ name: 'keys' })
], Keys);
export { Keys };
var TypeofPipe = (function () {
    function TypeofPipe() {
    }
    TypeofPipe.prototype.transform = function (input) {
        return typeof (input);
    };
    return TypeofPipe;
}());
TypeofPipe = __decorate([
    Pipe({ name: 'typeof' })
], TypeofPipe);
export { TypeofPipe };
var ConsolePipe = (function () {
    function ConsolePipe() {
    }
    ConsolePipe.prototype.transform = function () {
        return console.log.apply(console, arguments);
    };
    return ConsolePipe;
}());
ConsolePipe = __decorate([
    Pipe({ name: 'console' })
], ConsolePipe);
export { ConsolePipe };
export var declarations = [
    Capitalize,
    CapitalizeWords,
    Yesno,
    YesNo,
    Numbers,
    Keys,
    TypeofPipe,
    ConsolePipe
];
export function getDeclarations() {
    return declarations;
}
//# sourceMappingURL=pipes.js.map