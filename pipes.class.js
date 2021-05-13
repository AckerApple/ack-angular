import { ack as ackX } from "ack-x/es/index-browser";
export function between(input, a, b) {
    if (a == null || b == null)
        return false;
    return (input >= a && input <= b) || (input <= a && input >= b) ? true : false;
}
export function replaceMaxLength(input, max, replacement) {
    if (replacement === void 0) { replacement = '...'; }
    if ((input === null || input === void 0 ? void 0 : input.length) > max) {
        return input.slice(0, max) + replacement;
    }
    return input;
}
export function numberToPhone(val) {
    if (val == null || !val) {
        return val;
    }
    val = String(val).replace(/[^0-9]/g, '');
    if (val.length == 0)
        return val;
    return '(' + val.substring(0, 3) + ') ' + val.substring(3, 6) + '-' + val.substring(6, 10);
}
export function toNumber(val) {
    return Number(numbers(val, "."));
}
export function numberSuffix(val, rtnVal) {
    if (rtnVal === void 0) { rtnVal = false; }
    var rtn = rtnVal ? val : '';
    val = Number(val);
    if (!val || isNaN(val))
        return '';
    var j = val % 10, k = val % 100;
    if (j == 1 && k != 11) {
        return rtn + "st";
    }
    if (j == 2 && k != 12) {
        return rtn + "nd";
    }
    if (j == 3 && k != 13) {
        return rtn + "rd";
    }
    return rtn + "th";
}
/** if input is array returned otherwise array created with  */
export function array(input, repeat, repeatValue) {
    var isArray = input != null && input.constructor == Array;
    var rtn = isArray ? input : [];
    if (!repeat && !isArray && input != null) {
        rtn.push(input);
    }
    if (repeat && !isNaN(Number(repeat))) {
        var val = typeof (repeatValue) === 'undefined' ? input : repeatValue;
        while (rtn.length < repeat) {
            rtn.push(val);
        }
    }
    return rtn;
}
export function arrayOfObjects(input, repeat, repeatValue) {
    return array(input, repeat, repeatValue).map(function (v, i) { return ({ value: v, index: i }); });
}
export function markdownAnchor(input) {
    input = input.toString().replace(/&/gi, 'amp'); //possibly unneeded
    input = input.toString().replace(/ /gi, '-');
    input = input.replace(/[^a-z0-9_-]/gi, '');
    return input.toLowerCase();
}
//use with bypassSecurityTrustResourceUrl for href
export function textDownload(input) {
    if (input == null)
        return input;
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(input);
}
export function yesno(input) {
    if (input == null)
        return input;
    return input ? 'yes' : 'no';
}
export function yesNo(input) {
    if (input == null)
        return input;
    return input ? 'Yes' : 'No';
}
export function boolean(input) {
    if (input == null)
        return false;
    var num = Number(input);
    if (!isNaN(num)) {
        return Boolean(num) ? true : false;
    }
    if (input.toLowerCase) {
        if (input.toLowerCase() == 'true')
            return true;
        if (input.toLowerCase() == 'false')
            return false;
    }
    return Boolean(input) ? true : false;
}
export function bit(input) {
    return boolean(input) ? 1 : 0;
}
export function numbers(input, safeChars //upto 4 acceptable characters
) {
    var xString = '[^0-9';
    if (safeChars) {
        if (safeChars.length > 4) {
            safeChars = safeChars.substring(0, 4); //do not allow safeChars to create a maliscous regx
        }
        xString += safeChars;
    }
    xString += ']';
    var regX = new RegExp(xString, 'g');
    return input ? String(input).replace(regX, '') : input;
}
export function capitalizeWords(input) {
    var reg = /[^\W_]+[^\s-]* */g;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
}
/** each sentence word is capitalized */
export function capitalize(input) {
    input = pipes.capitalizeOne(input);
    var reg = /[.?!][\s\r\t]+\w/g;
    return (!!input) ? input.replace(reg, pipes.capitalizeAfterSentence) : '';
}
export function capitalizeAfterSentence(input) {
    var reg = /[\s\r\t]\w/g;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0) + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase(); }) : '';
}
export function capitalizeOne(input) {
    var reg = /[^\W_]+[^\s-]*/;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
}
function a(name) {
    var av = new ackX();
    return invokeRotator(av[name]);
}
import { invokeRotator } from "./invokeRotator";
export var aDate = a('date');
export var aTime = a('time');
export var aMath = invokeRotator(Math);
export var aString = invokeRotator(String);
export var ack = invokeRotator(ackX);
// maybe deprecated . Remove in future releases. Just an array ref of all pipes
export var pipes = {
    ack: ack,
    aDate: aDate,
    aMath: aMath,
    array: array,
    aString: aString,
    aTime: aTime,
    between: between,
    capitalize: capitalize,
    capitalizeAfterSentence: capitalizeAfterSentence,
    capitalizeOne: capitalizeOne,
    capitalizeWords: capitalizeWords,
    numbers: numbers,
    numberSuffix: numberSuffix,
    numberToPhone: numberToPhone,
    markdownAnchor: markdownAnchor,
    replaceMaxLength: replaceMaxLength,
    textDownload: textDownload,
    toNumber: toNumber,
    yesno: yesno,
    yesNo: yesNo,
};
//# sourceMappingURL=pipes.class.js.map