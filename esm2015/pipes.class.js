import { ack as ackX } from "ack-x/browser";
export function between(input, a, b) {
    if (a == null || b == null)
        return false;
    return (input >= a && input <= b) || (input <= a && input >= b) ? true : false;
}
export function numberToPhone(val) {
    if (val == null || !val)
        return val;
    val = String(val).replace(/[^0-9]/g, '');
    if (val.length == 0)
        return val;
    return '(' + val.substring(0, 3) + ') ' + val.substring(3, 6) + '-' + val.substring(6, 10);
}
export function toNumber(val) {
    return Number(numbers(val, "."));
}
export function numberSuffix(val, rtnVal = false) {
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
    const isArray = input != null && input.constructor == Array;
    let rtn = isArray ? input : [];
    if (!repeat && !isArray && input != null) {
        rtn.push(input);
    }
    if (repeat && !isNaN(Number(repeat))) {
        const val = typeof (repeatValue) === 'undefined' ? input : repeatValue;
        while (rtn.length < repeat) {
            rtn.push(val);
        }
    }
    return rtn;
}
export function arrayOfObjects(input, repeat, repeatValue) {
    return array(input, repeat, repeatValue).map((v, i) => ({ value: v, index: i }));
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
    const num = Number(input);
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
    let xString = '[^0-9';
    if (safeChars) {
        if (safeChars.length > 4) {
            safeChars = safeChars.substring(0, 4); //do not allow safeChars to create a maliscous regx
        }
        xString += safeChars;
    }
    xString += ']';
    const regX = new RegExp(xString, 'g');
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
    const av = new ackX();
    return invokeRotator(av[name]);
}
import { invokeRotator } from "./invokeRotator";
export const aDate = a('date');
export const aTime = a('time');
export const aMath = invokeRotator(Math);
export const aString = invokeRotator(String);
export const ack = invokeRotator(ackX);
// maybe deprecated . Remove in future releases. Just an array ref of all pipes
export const pipes = {
    array,
    markdownAnchor,
    textDownload,
    yesno,
    yesNo,
    numbers,
    capitalizeWords,
    capitalize,
    capitalizeAfterSentence,
    capitalizeOne,
    toNumber,
    numberToPhone,
    numberSuffix,
    aDate,
    aMath,
    aString,
    aTime,
    ack,
    between
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vc3JjLyIsInNvdXJjZXMiOlsicGlwZXMuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFM0MsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDakMsSUFBRyxDQUFDLElBQUUsSUFBSSxJQUFJLENBQUMsSUFBRSxJQUFJO1FBQUMsT0FBTyxLQUFLLENBQUE7SUFDbEMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0FBQ2hGLENBQUM7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEdBQUc7SUFDN0IsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRztRQUFDLE9BQU8sR0FBRyxDQUFBO0lBRWxDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUV4QyxJQUFLLEdBQUcsQ0FBQyxNQUFNLElBQUUsQ0FBQztRQUFFLE9BQU8sR0FBRyxDQUFBO0lBRTlCLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDOUYsQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsR0FBRztJQUN4QixPQUFPLE1BQU0s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QUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO0FBQ2pJLENBQUM7QUFFRCxTQUFTLENBQUMsQ0FBQyxJQUFXO0lBQ3BCLE1BQU0sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7SUFDckIsT0FBTyxhQUFhLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUE7QUFDbEMsQ0FBQztBQUVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUUvQyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzlCLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDOUIsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBRSxJQUFJLENBQUUsQ0FBQTtBQUMxQyxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFFLE1BQU0sQ0FBRSxDQUFBO0FBQzlDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxhQUFhLENBQUUsSUFBSSxDQUFFLENBQUE7QUFFeEMsK0VBQStFO0FBQy9FLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRztJQUNuQixLQUFLO0lBQ0wsY0FBYztJQUNkLFlBQVk7SUFDWixLQUFLO0lBQ0wsS0FBSztJQUNMLE9BQU87SUFDUCxlQUFlO0lBQ2YsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsUUFBUTtJQUNSLGFBQWE7SUFDYixZQUFZO0lBQ1osS0FBSztJQUNMLEtBQUs7SUFDTCxPQUFPO0lBQ1AsS0FBSztJQUNMLEdBQUc7SUFDSCxPQUFPO0NBQ1IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjayBhcyBhY2tYIH0gZnJvbSBcImFjay14L2Jyb3dzZXJcIlxuXG5leHBvcnQgZnVuY3Rpb24gYmV0d2VlbihpbnB1dCwgYSwgYikge1xuICBpZihhPT1udWxsIHx8IGI9PW51bGwpcmV0dXJuIGZhbHNlXG4gIHJldHVybiAoaW5wdXQgPj0gYSAmJiBpbnB1dCA8PSBiKSB8fCAoaW5wdXQgPD0gYSAmJiBpbnB1dCA+PSBiKSA/IHRydWUgOiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyVG9QaG9uZSh2YWwpe1xuICAgIGlmICh2YWwgPT0gbnVsbCB8fCAhdmFsKXJldHVybiB2YWxcbiAgICBcbiAgICB2YWwgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpXG5cbiAgICBpZiAoIHZhbC5sZW5ndGg9PTAgKXJldHVybiB2YWxcblxuICAgIHJldHVybiAnKCcgKyB2YWwuc3Vic3RyaW5nKDAsIDMpICsgJykgJyArIHZhbC5zdWJzdHJpbmcoMywgNikgKyAnLScgKyB2YWwuc3Vic3RyaW5nKDYsIDEwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsKXtcbiAgICByZXR1cm4gTnVtYmVyKCBudW1iZXJzKHZhbCwgXCIuXCIpIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclN1ZmZpeCh2YWwsIHJ0blZhbD1mYWxzZSl7XG4gIHZhciBydG4gPSBydG5WYWwgPyB2YWwgOiAnJ1xuICB2YWwgPSBOdW1iZXIodmFsKVxuXG4gIGlmKCF2YWwgfHwgaXNOYU4odmFsKSlyZXR1cm4gJydcblxuICB2YXIgaiA9IHZhbCAlIDEwLFxuICAgICAgayA9IHZhbCAlIDEwMDtcbiAgaWYgKGogPT0gMSAmJiBrICE9IDExKSB7XG4gICAgICByZXR1cm4gcnRuK1wic3RcIjtcbiAgfVxuICBpZiAoaiA9PSAyICYmIGsgIT0gMTIpIHtcbiAgICAgIHJldHVybiBydG4rXCJuZFwiO1xuICB9XG4gIGlmIChqID09IDMgJiYgayAhPSAxMykge1xuICAgICAgcmV0dXJuIHJ0bitcInJkXCI7XG4gIH1cbiAgcmV0dXJuIHJ0bitcInRoXCI7XG59XG5cbi8qKiBpZiBpbnB1dCBpcyBhcnJheSByZXR1cm5lZCBvdGhlcndpc2UgYXJyYXkgY3JlYXRlZCB3aXRoICAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFycmF5KFxuICBpbnB1dCxcbiAgcmVwZWF0PzpudW1iZXIsXG4gIHJlcGVhdFZhbHVlP1xuKTphbnlbXXtcbiAgY29uc3QgaXNBcnJheSA9IGlucHV0IT1udWxsICYmIGlucHV0LmNvbnN0cnVjdG9yID09IEFycmF5XG4gIGxldCBydG4gPSBpc0FycmF5ID8gaW5wdXQgOiBbXVxuICBcbiAgaWYoIXJlcGVhdCAmJiAhaXNBcnJheSAmJiBpbnB1dCE9bnVsbCl7XG4gICAgcnRuLnB1c2goaW5wdXQpXG4gIH1cblxuICBpZiggcmVwZWF0ICYmICFpc05hTihOdW1iZXIocmVwZWF0KSkgKXtcbiAgICBjb25zdCB2YWwgPSB0eXBlb2YocmVwZWF0VmFsdWUpPT09J3VuZGVmaW5lZCcgPyBpbnB1dCA6IHJlcGVhdFZhbHVlXG4gICAgd2hpbGUoIHJ0bi5sZW5ndGggPCByZXBlYXQgKXtcbiAgICAgIHJ0bi5wdXNoKCB2YWwgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBydG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5T2ZPYmplY3RzKGlucHV0LCByZXBlYXQ/Om51bWJlciwgcmVwZWF0VmFsdWU/KXtcbiAgcmV0dXJuIGFycmF5KGlucHV0LCByZXBlYXQsIHJlcGVhdFZhbHVlKS5tYXAoKHYsaSk9Pih7dmFsdWU6diwgaW5kZXg6aX0pKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya2Rvd25BbmNob3IoaW5wdXQ6c3RyaW5nKXtcbiAgaW5wdXQgPSBpbnB1dC50b1N0cmluZygpLnJlcGxhY2UoLyYvZ2ksICdhbXAnKS8vcG9zc2libHkgdW5uZWVkZWRcbiAgaW5wdXQgPSBpbnB1dC50b1N0cmluZygpLnJlcGxhY2UoLyAvZ2ksJy0nKVxuICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teYS16MC05Xy1dL2dpLCcnKVxuICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKVxufVxuXG4gIC8vdXNlIHdpdGggYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsIGZvciBocmVmXG5leHBvcnQgZnVuY3Rpb24gdGV4dERvd25sb2FkKGlucHV0OmFueSl7XG4gIGlmKGlucHV0PT1udWxsKXJldHVybiBpbnB1dFxuICByZXR1cm4gJ2RhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5ZXNubyhpbnB1dDphbnkpe1xuICBpZihpbnB1dD09bnVsbClyZXR1cm4gaW5wdXRcbiAgcmV0dXJuIGlucHV0ID8gJ3llcycgOiAnbm8nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geWVzTm8oaW5wdXQ6YW55KXtcbiAgaWYoaW5wdXQ9PW51bGwpcmV0dXJuIGlucHV0XG4gIHJldHVybiBpbnB1dCA/ICdZZXMnIDogJ05vJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb2xlYW4oaW5wdXQ6YW55KXtcbiAgaWYoaW5wdXQ9PW51bGwpcmV0dXJuIGZhbHNlXG4gIFxuICBjb25zdCBudW0gPSBOdW1iZXIoaW5wdXQpXG4gIGlmKCFpc05hTihudW0pKXtcbiAgICByZXR1cm4gQm9vbGVhbihudW0pID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgaWYoaW5wdXQudG9Mb3dlckNhc2Upe1xuICAgIGlmKCBpbnB1dC50b0xvd2VyQ2FzZSgpPT0ndHJ1ZScgKXJldHVybiB0cnVlXG4gICAgaWYoIGlucHV0LnRvTG93ZXJDYXNlKCk9PSdmYWxzZScgKXJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIEJvb2xlYW4oaW5wdXQpID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYml0KGlucHV0OmFueSl7XG4gIHJldHVybiBib29sZWFuKGlucHV0KSA/IDEgOiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVycyhcbiAgaW5wdXQ6YW55LFxuICBzYWZlQ2hhcnM/OnN0cmluZy8vdXB0byA0IGFjY2VwdGFibGUgY2hhcmFjdGVyc1xuKXtcbiAgbGV0IHhTdHJpbmcgPSAnW14wLTknXG4gIFxuICBpZiggc2FmZUNoYXJzICl7XG4gICAgaWYoIHNhZmVDaGFycy5sZW5ndGg+NCApe1xuICAgICAgc2FmZUNoYXJzID0gc2FmZUNoYXJzLnN1YnN0cmluZygwLCA0KS8vZG8gbm90IGFsbG93IHNhZmVDaGFycyB0byBjcmVhdGUgYSBtYWxpc2NvdXMgcmVneFxuICAgIH1cblxuICAgIHhTdHJpbmcgKz0gc2FmZUNoYXJzXG4gIH1cblxuICB4U3RyaW5nICs9ICddJ1xuICBjb25zdCByZWdYID0gbmV3IFJlZ0V4cCh4U3RyaW5nLCAnZycpXG4gIFxuICByZXR1cm4gaW5wdXQgPyBTdHJpbmcoaW5wdXQpLnJlcGxhY2UocmVnWCwnJykgOiBpbnB1dFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZVdvcmRzKGlucHV0OmFueSl7XG4gIHZhciByZWcgPSAvW15cXFdfXStbXlxccy1dKiAqL2dcbiAgcmV0dXJuICghIWlucHV0KSA/IGlucHV0LnJlcGxhY2UocmVnLCBmdW5jdGlvbih0eHQ6YW55KXtyZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpfSkgOiAnJ1xufVxuXG4vKiogZWFjaCBzZW50ZW5jZSB3b3JkIGlzIGNhcGl0YWxpemVkICovXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZShpbnB1dDphbnkpe1xuICBpbnB1dCA9IHBpcGVzLmNhcGl0YWxpemVPbmUoaW5wdXQpXG4gIHZhciByZWcgPSAvWy4/IV1bXFxzXFxyXFx0XStcXHcvZ1xuICByZXR1cm4gKCEhaW5wdXQpID8gaW5wdXQucmVwbGFjZShyZWcsIHBpcGVzLmNhcGl0YWxpemVBZnRlclNlbnRlbmNlKSA6ICcnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplQWZ0ZXJTZW50ZW5jZShpbnB1dDphbnkpe1xuICB2YXIgcmVnID0gL1tcXHNcXHJcXHRdXFx3L2dcbiAgcmV0dXJuICghIWlucHV0KSA/IGlucHV0LnJlcGxhY2UocmVnLCBmdW5jdGlvbih0eHQ6YW55KXtyZXR1cm4gdHh0LmNoYXJBdCgwKSArIHR4dC5jaGFyQXQoMSkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMikudG9Mb3dlckNhc2UoKX0pIDogJydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVPbmUoaW5wdXQ6YW55KSB7XG4gIHZhciByZWcgPSAvW15cXFdfXStbXlxccy1dKi9cbiAgcmV0dXJuICghIWlucHV0KSA/IGlucHV0LnJlcGxhY2UocmVnLCBmdW5jdGlvbih0eHQ6YW55KXtyZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpfSkgOiAnJ1xufVxuXG5mdW5jdGlvbiBhKG5hbWU6c3RyaW5nKXtcbiAgY29uc3QgYXYgPSBuZXcgYWNrWCgpXG4gIHJldHVybiBpbnZva2VSb3RhdG9yKCBhdltuYW1lXSApXG59XG5cbmltcG9ydCB7IGludm9rZVJvdGF0b3IgfSBmcm9tIFwiLi9pbnZva2VSb3RhdG9yXCJcblxuZXhwb3J0IGNvbnN0IGFEYXRlID0gYSgnZGF0ZScpXG5leHBvcnQgY29uc3QgYVRpbWUgPSBhKCd0aW1lJylcbmV4cG9ydCBjb25zdCBhTWF0aCA9IGludm9rZVJvdGF0b3IoIE1hdGggKVxuZXhwb3J0IGNvbnN0IGFTdHJpbmcgPSBpbnZva2VSb3RhdG9yKCBTdHJpbmcgKVxuZXhwb3J0IGNvbnN0IGFjayA9IGludm9rZVJvdGF0b3IoIGFja1ggKVxuXG4vLyBtYXliZSBkZXByZWNhdGVkIC4gUmVtb3ZlIGluIGZ1dHVyZSByZWxlYXNlcy4gSnVzdCBhbiBhcnJheSByZWYgb2YgYWxsIHBpcGVzXG5leHBvcnQgY29uc3QgcGlwZXMgPSB7XG4gIGFycmF5LFxuICBtYXJrZG93bkFuY2hvcixcbiAgdGV4dERvd25sb2FkLFxuICB5ZXNubyxcbiAgeWVzTm8sXG4gIG51bWJlcnMsXG4gIGNhcGl0YWxpemVXb3JkcyxcbiAgY2FwaXRhbGl6ZSxcbiAgY2FwaXRhbGl6ZUFmdGVyU2VudGVuY2UsXG4gIGNhcGl0YWxpemVPbmUsXG4gIHRvTnVtYmVyLFxuICBudW1iZXJUb1Bob25lLFxuICBudW1iZXJTdWZmaXgsXG4gIGFEYXRlLFxuICBhTWF0aCxcbiAgYVN0cmluZyxcbiAgYVRpbWUsXG4gIGFjayxcbiAgYmV0d2VlblxufSJdfQ==