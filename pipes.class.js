"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = require("ack-x/browser");
function between(input, a, b) {
    if (a == null || b == null)
        return false;
    return (input >= a && input <= b) || (input <= a && input >= b) ? true : false;
}
exports.between = between;
function numberToPhone(val) {
    if (val == null || !val)
        return val;
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
    input = input.toString().replace(/&/gi, 'amp');
    input = input.toString().replace(/ /gi, '-');
    input = input.replace(/[^a-z0-9_-]/gi, '');
    return input.toLowerCase();
}
exports.markdownAnchor = markdownAnchor;
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
function numbers(input, safeChars) {
    var xString = '[^0-9';
    if (safeChars) {
        if (safeChars.length > 4) {
            safeChars = safeChars.substring(0, 4);
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
    var av = new browser_1.ack();
    return invokeRotator_1.invokeRotator(av[name]);
}
var invokeRotator_1 = require("./invokeRotator");
exports.aDate = a('date');
exports.aTime = a('time');
exports.aMath = invokeRotator_1.invokeRotator(Math);
exports.aString = invokeRotator_1.invokeRotator(String);
exports.ack = invokeRotator_1.invokeRotator(browser_1.ack);
exports.pipes = {
    array: array,
    markdownAnchor: markdownAnchor,
    textDownload: textDownload,
    yesno: yesno,
    yesNo: yesNo,
    numbers: numbers,
    capitalizeWords: capitalizeWords,
    capitalize: capitalize,
    capitalizeAfterSentence: capitalizeAfterSentence,
    capitalizeOne: capitalizeOne,
    toNumber: toNumber,
    numberToPhone: numberToPhone,
    numberSuffix: numberSuffix,
    aDate: exports.aDate,
    aMath: exports.aMath,
    aString: exports.aString,
    aTime: exports.aTime,
    ack: exports.ack,
    between: between
};
