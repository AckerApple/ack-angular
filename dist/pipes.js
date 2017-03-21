var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
export { pipes } from "./pipes.class";
import { pipes } from "./pipes.class";
let Capitalize = class Capitalize {
    transform(input) {
        return pipes.capitalize(input);
    }
};
Capitalize = __decorate([
    Pipe({ name: 'capitalize' })
], Capitalize);
export { Capitalize };
let CapitalizeWords = class CapitalizeWords {
    transform(input) {
        return pipes.capitalizeWords(input);
    }
};
CapitalizeWords = __decorate([
    Pipe({ name: 'capitalizeWords' })
], CapitalizeWords);
export { CapitalizeWords };
let Yesno = class Yesno {
    transform(input) {
        return pipes.yesno(input);
    }
};
Yesno = __decorate([
    Pipe({ name: 'yesno' })
], Yesno);
export { Yesno };
let YesNo = class YesNo {
    transform(input) {
        return pipes.yesNo(input);
    }
};
YesNo = __decorate([
    Pipe({ name: 'YesNo' })
], YesNo);
export { YesNo };
let Numbers = class Numbers {
    transform(input) {
        return pipes.numbers(input);
    }
};
Numbers = __decorate([
    Pipe({ name: 'numbers' })
], Numbers);
export { Numbers };
let Keys = class Keys {
    transform(input) {
        if (input)
            return Object.keys(input);
    }
};
Keys = __decorate([
    Pipe({ name: 'keys' })
], Keys);
export { Keys };
let TypeofPipe = class TypeofPipe {
    transform(input) {
        return typeof (input);
    }
};
TypeofPipe = __decorate([
    Pipe({ name: 'typeof' })
], TypeofPipe);
export { TypeofPipe };
let ConsolePipe = class ConsolePipe {
    transform() {
        return console.log.apply(console, arguments);
    }
};
ConsolePipe = __decorate([
    Pipe({ name: 'console' })
], ConsolePipe);
export { ConsolePipe };
export const declarations = [
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