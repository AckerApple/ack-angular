"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function invokeRotator(invoke) {
    var invoker = getInvokerBy(invoke);
    return getRotatorByInvoker(invoker);
}
exports.invokeRotator = invokeRotator;
function getRotatorByInvoker(invoker) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var rtn = invoker(arguments);
        args.shift();
        return objectInvoker(rtn, args);
    };
}
exports.getRotatorByInvoker = getRotatorByInvoker;
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
        return function (args) {
            return invoke(args[0]);
        };
    }
    return function (args) {
        var rtn = invoke[args[1]](args[0]);
        for (var x = 0; x < args.length; ++x) {
            if (x < 1) {
                delete args[x];
            }
            else {
                args[x - 1] = args[x];
            }
        }
        args.length = args.length - 2;
        return rtn;
    };
}
exports.getInvokerBy = getInvokerBy;
