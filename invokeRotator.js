"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function invokeRotator(invoke) {
    return getInvokerBy(invoke);
}
exports.invokeRotator = invokeRotator;
function objectInvoker(object, plan) {
    var rtn = object;
    var subargs, item;
    var newkey;
    var key;
    var typo;
    for (var x = 0; x < plan.length; ++x) {
        key = plan[x];
        subargs = [];
        if (rtn == null) {
            typo = typeof (rtn);
            var msg = "TypeError: Cannot read property '" + key + "' of " + typo + ". Invoke instructions: " + JSON.stringify(plan);
            throw new Error(msg);
        }
        var asFunc = key.constructor == Array;
        if (asFunc) {
            key = [];
            key.push.apply(key, plan[x]);
            newkey = key.shift();
            subargs = key;
            key = newkey;
        }
        item = rtn[key];
        var isFunc = item && item.constructor == Function;
        if (asFunc && !isFunc) {
            if (item == null || item.constructor !== Function) {
                typo = typeof (item);
                var msg = "TypeError: '" + key + "' of " + typo + " is not a function. Invoke instructions: " + JSON.stringify(plan);
                throw new Error(msg);
            }
        }
        if (isFunc) {
            rtn = item.apply(rtn, subargs);
        }
        else {
            rtn = item;
        }
    }
    return rtn;
}
exports.objectInvoker = objectInvoker;
function getInvokerBy(invoke) {
    var isF = typeof invoke == 'function';
    if (isF) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var x = invoke(args[0]);
            args.shift();
            return objectInvoker(x, args);
        };
    }
    return function () {
        var plan = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            plan[_i] = arguments[_i];
        }
        var a = plan[0];
        plan[0] = plan[1];
        plan[1] = a;
        return objectInvoker(invoke, [plan]);
    };
}
exports.getInvokerBy = getInvokerBy;
