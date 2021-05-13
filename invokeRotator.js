/** responsible for ack-angular pipe'in system into ackX */
export function invokeRotator(invoke //|(any[])=>any
) {
    return getInvokerBy(invoke);
}
export function objectInvoker(object, plan) {
    var rtn = object;
    var subargs;
    var item;
    var newkey;
    var key;
    var typo;
    //loop extra arguments as property collectors
    for (var x = 0; x < plan.length; ++x) {
        key = plan[x];
        subargs = [];
        //undefined error catcher
        if (rtn == null) {
            typo = typeof (rtn);
            var msg = "TypeError: Cannot read property '" + key + "' of " + typo + ". Invoke instructions: " + JSON.stringify(plan);
            throw new Error(msg);
        }
        var asFunc = key.constructor == Array;
        //array where 1st arg is method and subs are positional arguments
        if (asFunc) {
            key = [];
            key.push.apply(key, plan[x]); //clone array memory, do not touch original array
            newkey = key.shift(); // first arg is name of key, remove it from array
            subargs = key; //what is left in array is the arguments
            key = newkey; //key to string
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
export function getInvokerBy(invoke) {
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
    /*
      return function(args:any[]):any{
        const rtn = invoke[ args[1] ]( args[0] )
    
        for(let x=0; x<args.length; ++x){
          if( x<1 ){
            delete args[x]
          }else{
            args[ x-1 ] = args[x]
          }
        }
    
        args.length = args.length - 2
    
        return rtn
      }
    */
}
//# sourceMappingURL=invokeRotator.js.map