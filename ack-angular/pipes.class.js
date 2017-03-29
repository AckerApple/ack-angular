"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipes = {
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
    }
};
//# sourceMappingURL=pipes.class.js.map