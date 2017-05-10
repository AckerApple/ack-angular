"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ackX = require("ack-x/index-browser");
function numberToPhone(val) {
    if (!val)
        return val;
    val = String(val).replace(/[^0-9]/g, '');
    //if(!val.substring)return val
    return '(' + val.substring(0, 3) + ') ' + val.substring(3, 6) + '-' + val.substring(6, 10);
}
exports.numberToPhone = numberToPhone;
/** if input is array returned otherwise array created with  */
function array(input, repeat, repeatValue) {
    var isArray = input != null && input.constructor == Array;
    var rtn = isArray ? input : [];
    var useRepeat = repeatValue != null;
    if (!useRepeat && !isArray && input != null) {
        rtn.push(input);
    }
    if ((useRepeat || !isArray) && repeat && !isNaN(Number(repeat))) {
        var val = useRepeat ? repeatValue : input;
        while (rtn.length < repeat) {
            rtn.push(val);
        }
    }
    return rtn;
}
exports.array = array;
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
function numbers(input) {
    return input ? String(input).replace(/[^0-9]/g, '') : input;
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
    return invokeRotator(ackX[name]);
}
function invokeRotator(invoke) {
    return function (v, call0, call1, call2) {
        var newkey, subargs, key, item, rtn = invoke(v);
        //loop extra arguments as property collectors
        for (var x = 1; x < arguments.length; ++x) {
            key = arguments[x];
            subargs = [];
            //array where 1st arg is method and subs are positional arguments
            if (key.constructor == Array) {
                newkey = key.shift();
                subargs = key;
                key = newkey;
            }
            item = rtn[key];
            if (item && item.constructor == Function) {
                rtn = item.apply(rtn, subargs);
            }
            else {
                rtn = item;
            }
        }
        return rtn;
    };
}
exports.aDate = a('date');
exports.aTime = a('time');
exports.ack = invokeRotator(ackX);
// maybe deprecated . Remove in future releases
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
    numberToPhone: numberToPhone,
    aDate: exports.aDate,
    aTime: exports.aTime,
    ack: exports.ack
};
//# sourceMappingURL=pipes.class.js.map