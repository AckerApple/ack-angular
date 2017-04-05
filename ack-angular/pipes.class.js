"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ack = require("ack-x/index-browser");
exports.pipes = {
    markdownAnchor: function markdownAnchor(input) {
        input = input.toString().replace(/ /gi, '-');
        input = input.toString().replace(/[^a-z0-9_-]/gi, '');
        return input.toLowerCase();
    },
    yesno: function yesno(input) {
        if (input == null)
            return input;
        return input ? 'yes' : 'no';
    },
    yesNo: function yesNo(input) {
        if (input == null)
            return input;
        return input ? 'Yes' : 'No';
    },
    numbers: function numbers(input) {
        return input ? String(input).replace(/[^0-9]/g, '') : input;
    },
    capitalizeWords: function capitalizeWords(input) {
        var reg = /[^\W_]+[^\s-]* */g;
        return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
    },
    /** each sentence word is capitalized */
    capitalize: function capitalize(input) {
        input = exports.pipes.capitalizeOne(input);
        var reg = /[.?!][\s\r\t]+\w/g;
        return (!!input) ? input.replace(reg, exports.pipes.capitalizeAfterSentence) : '';
    },
    capitalizeAfterSentence: function capitalizeAfterSentence(input) {
        var reg = /[\s\r\t]\w/g;
        return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0) + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase(); }) : '';
    },
    capitalizeOne: function capitalizeOne(input) {
        var reg = /[^\W_]+[^\s-]*/;
        return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
    },
    aDate: a('date'),
    aTime: a('time'),
    ack: invokeRotator(ack)
};
function a(name) {
    return invokeRotator(ack[name]);
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
//# sourceMappingURL=pipes.class.js.map