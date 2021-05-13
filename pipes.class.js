"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipes = exports.ack = exports.aString = exports.aMath = exports.aTime = exports.aDate = exports.capitalizeOne = exports.capitalizeAfterSentence = exports.capitalize = exports.capitalizeWords = exports.numbers = exports.bit = exports.boolean = exports.yesNo = exports.yesno = exports.textDownload = exports.markdownAnchor = exports.arrayOfObjects = exports.array = exports.numberSuffix = exports.toNumber = exports.numberToPhone = exports.replaceMaxLength = exports.between = void 0;
var index_browser_1 = require("ack-x/js/index-browser");
function between(input, a, b) {
    if (a == null || b == null)
        return false;
    return (input >= a && input <= b) || (input <= a && input >= b) ? true : false;
}
exports.between = between;
function replaceMaxLength(input, max, replacement) {
    if (replacement === void 0) { replacement = '...'; }
    if ((input === null || input === void 0 ? void 0 : input.length) > max) {
        return input.slice(0, max) + replacement;
    }
    return input;
}
exports.replaceMaxLength = replaceMaxLength;
function numberToPhone(val) {
    if (val == null || !val) {
        return val;
    }
    val = String(val).replace(/[^0-9]/g, '');
    if (val.length == 0)
        return val;
    return '(' + val.substring(0, 3) + ') ' + val.substring(3, 6) + '-' + val.substring(6, 10);
}
exports.numberToPhone = numberToPhone;
function toNumber(val) {
    return Number(numbers(val, "."));
}
exports.toNumber = toNumber;
function numberSuffix(val, rtnVal) {
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
exports.numberSuffix = numberSuffix;
/** if input is array returned otherwise array created with  */
function array(input, repeat, repeatValue) {
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
exports.array = array;
function arrayOfObjects(input, repeat, repeatValue) {
    return array(input, repeat, repeatValue).map(function (v, i) { return ({ value: v, index: i }); });
}
exports.arrayOfObjects = arrayOfObjects;
function markdownAnchor(input) {
    input = input.toString().replace(/&/gi, 'amp'); //possibly unneeded
    input = input.toString().replace(/ /gi, '-');
    input = input.replace(/[^a-z0-9_-]/gi, '');
    return input.toLowerCase();
}
exports.markdownAnchor = markdownAnchor;
//use with bypassSecurityTrustResourceUrl for href
function textDownload(input) {
    if (input == null)
        return input;
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(input);
}
exports.textDownload = textDownload;
function yesno(input) {
    if (input == null)
        return input;
    return input ? 'yes' : 'no';
}
exports.yesno = yesno;
function yesNo(input) {
    if (input == null)
        return input;
    return input ? 'Yes' : 'No';
}
exports.yesNo = yesNo;
function boolean(input) {
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
exports.boolean = boolean;
function bit(input) {
    return boolean(input) ? 1 : 0;
}
exports.bit = bit;
function numbers(input, safeChars //upto 4 acceptable characters
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
exports.numbers = numbers;
function capitalizeWords(input) {
    var reg = /[^\W_]+[^\s-]* */g;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
}
exports.capitalizeWords = capitalizeWords;
/** each sentence word is capitalized */
function capitalize(input) {
    input = exports.pipes.capitalizeOne(input);
    var reg = /[.?!][\s\r\t]+\w/g;
    return (!!input) ? input.replace(reg, exports.pipes.capitalizeAfterSentence) : '';
}
exports.capitalize = capitalize;
function capitalizeAfterSentence(input) {
    var reg = /[\s\r\t]\w/g;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0) + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase(); }) : '';
}
exports.capitalizeAfterSentence = capitalizeAfterSentence;
function capitalizeOne(input) {
    var reg = /[^\W_]+[^\s-]*/;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
}
exports.capitalizeOne = capitalizeOne;
function a(name) {
    var av = new index_browser_1.ack();
    return invokeRotator_1.invokeRotator(av[name]);
}
var invokeRotator_1 = require("./invokeRotator");
exports.aDate = a('date');
exports.aTime = a('time');
exports.aMath = invokeRotator_1.invokeRotator(Math);
exports.aString = invokeRotator_1.invokeRotator(String);
exports.ack = invokeRotator_1.invokeRotator(index_browser_1.ack);
// maybe deprecated . Remove in future releases. Just an array ref of all pipes
exports.pipes = {
    ack: exports.ack,
    aDate: exports.aDate,
    aMath: exports.aMath,
    array: array,
    aString: exports.aString,
    aTime: exports.aTime,
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