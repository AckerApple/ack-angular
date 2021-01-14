/** responsible for ack-angular pipe'in system into ackX */
export function invokeRotator(invoke //|(any[])=>any
) {
    return getInvokerBy(invoke);
}
export function objectInvoker(object, plan) {
    var rtn = object;
    var subargs, item;
    let newkey;
    let key;
    let typo;
    //loop extra arguments as property collectors
    for (let x = 0; x < plan.length; ++x) {
        key = plan[x];
        subargs = [];
        //undefined error catcher
        if (rtn == null) {
            typo = typeof (rtn);
            const msg = "TypeError: Cannot read property '" + key + "' of " + typo + ". Invoke instructions: " + JSON.stringify(plan);
            throw new Error(msg);
        }
        let asFunc = key.constructor == Array;
        //array where 1st arg is method and subs are positional arguments
        if (asFunc) {
            key = [];
            key.push.apply(key, plan[x]); //clone array memory, do not touch original array
            newkey = key.shift(); //first arg is name of key, remove it from array
            subargs = key; //what is left in array is the arguments
            key = newkey; //key to string
        }
        item = rtn[key];
        let isFunc = item && item.constructor == Function;
        if (asFunc && !isFunc) {
            if (item == null || item.constructor !== Function) {
                typo = typeof (item);
                const msg = "TypeError: '" + key + "' of " + typo + " is not a function. Invoke instructions: " + JSON.stringify(plan);
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
    const isF = typeof invoke == 'function';
    if (isF) {
        return function (...args) {
            var x = invoke(args[0]);
            args.shift();
            return objectInvoker(x, args);
        };
    }
    return function (...plan) {
        const a = plan[0];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2tlUm90YXRvci5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9zcmMvIiwic291cmNlcyI6WyJpbnZva2VSb3RhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJEQUEyRDtBQUMzRCxNQUFNLFVBQVUsYUFBYSxDQUMzQixNQUFVLENBQUEsZUFBZTs7SUFFekIsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDN0IsQ0FBQztBQUVELE1BQU0sVUFBVSxhQUFhLENBQzNCLE1BQVUsRUFDVixJQUFtQjtJQUVuQixJQUFJLEdBQUcsR0FBQyxNQUFNLENBQUE7SUFDZCxJQUFJLE9BQU8sRUFBRSxJQUFJLENBQUE7SUFDakIsSUFBSSxNQUFhLENBQUE7SUFDakIsSUFBSSxHQUFtQixDQUFBO0lBQ3ZCLElBQUksSUFBVyxDQUFBO0lBRWYsNkNBQTZDO0lBQzdDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFDO1FBQ2hDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDYixPQUFPLEdBQUcsRUFBRSxDQUFBO1FBRVoseUJBQXlCO1FBQ3pCLElBQUksR0FBRyxJQUFFLElBQUksRUFBRTtZQUNiLElBQUksR0FBRyxPQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsTUFBTSxHQUFHLEdBQUcsbUNBQW1DLEdBQUMsR0FBRyxHQUFDLE9BQU8sR0FBRSxJQUFJLEdBQUUseUJBQXlCLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNsSCxNQUFNLElBQUksS0FBSyxDQUFFLEdBQUcsQ0FBRSxDQUFBO1NBQ3ZCO1FBRUQsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLFdBQVcsSUFBRSxLQUFLLENBQUE7UUFFbkMsaUVBQWlFO1FBQ2pFLElBQUksTUFBTSxFQUFFO1lBQ1YsR0FBRyxHQUFHLEVBQUUsQ0FBQTtZQUNSLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFBLGlEQUFpRDtZQUU3RSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBLENBQUEsZ0RBQWdEO1lBQ3BFLE9BQU8sR0FBRyxHQUFHLENBQUEsQ0FBQSx3Q0FBd0M7WUFDckQsR0FBRyxHQUFHLE1BQU0sQ0FBQSxDQUFBLGVBQWU7U0FDNUI7UUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFVLEdBQUcsQ0FBRSxDQUFBO1FBRXpCLElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFFLFFBQVEsQ0FBQTtRQUUvQyxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQixJQUFHLElBQUksSUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBRyxRQUFRLEVBQUU7Z0JBQzVDLElBQUksR0FBRyxPQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ25CLE1BQU0sR0FBRyxHQUFHLGNBQWMsR0FBQyxHQUFHLEdBQUMsT0FBTyxHQUFFLElBQUksR0FBRSwyQ0FBMkMsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMvRyxNQUFNLElBQUksS0FBSyxDQUFFLEdBQUcsQ0FBRSxDQUFBO2FBQ3ZCO1NBQ0Y7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxPQUFPLENBQUMsQ0FBQTtTQUM5QjthQUFJO1lBQ0gsR0FBRyxHQUFHLElBQUksQ0FBQTtTQUNYO0tBQ0Y7SUFFRCxPQUFPLEdBQUcsQ0FBQTtBQUNaLENBQUM7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUMxQixNQUFVO0lBRVYsTUFBTSxHQUFHLEdBQUcsT0FBTyxNQUFNLElBQUUsVUFBVSxDQUFBO0lBRXJDLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxVQUFTLEdBQUcsSUFBSTtZQUNyQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ1osT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQTtLQUNGO0lBRUQsT0FBTyxVQUFTLEdBQUcsSUFBSTtRQUNyQixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNqQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRVgsT0FBTyxhQUFhLENBQUMsTUFBTSxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUNyQyxDQUFDLENBQUE7SUFFSDs7Ozs7Ozs7Ozs7Ozs7OztNQWdCRTtBQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogcmVzcG9uc2libGUgZm9yIGFjay1hbmd1bGFyIHBpcGUnaW4gc3lzdGVtIGludG8gYWNrWCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludm9rZVJvdGF0b3IoXG4gIGludm9rZTphbnkvL3woYW55W10pPT5hbnlcbil7XG4gIHJldHVybiBnZXRJbnZva2VyQnkoaW52b2tlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0SW52b2tlcihcbiAgb2JqZWN0OmFueSxcbiAgcGxhbjooc3RyaW5nfGFueSlbXVxuKXtcbiAgdmFyIHJ0bj1vYmplY3RcbiAgdmFyIHN1YmFyZ3MsIGl0ZW1cbiAgbGV0IG5ld2tleTpzdHJpbmdcbiAgbGV0IGtleTpzdHJpbmd8c3RyaW5nW11cbiAgbGV0IHR5cG86c3RyaW5nXG5cbiAgLy9sb29wIGV4dHJhIGFyZ3VtZW50cyBhcyBwcm9wZXJ0eSBjb2xsZWN0b3JzXG4gIGZvcihsZXQgeD0wOyB4IDwgcGxhbi5sZW5ndGg7ICsreCl7XG4gICAga2V5ID0gcGxhblt4XVxuICAgIHN1YmFyZ3MgPSBbXVxuXG4gICAgLy91bmRlZmluZWQgZXJyb3IgY2F0Y2hlclxuICAgIGlmKCBydG49PW51bGwgKXtcbiAgICAgIHR5cG8gPSB0eXBlb2YocnRuKVxuICAgICAgY29uc3QgbXNnID0gXCJUeXBlRXJyb3I6IENhbm5vdCByZWFkIHByb3BlcnR5ICdcIitrZXkrXCInIG9mIFwiKyB0eXBvICtcIi4gSW52b2tlIGluc3RydWN0aW9uczogXCIrIEpTT04uc3RyaW5naWZ5KHBsYW4pXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoIG1zZyApXG4gICAgfVxuXG4gICAgbGV0IGFzRnVuYyA9IGtleS5jb25zdHJ1Y3Rvcj09QXJyYXlcblxuICAgIC8vYXJyYXkgd2hlcmUgMXN0IGFyZyBpcyBtZXRob2QgYW5kIHN1YnMgYXJlIHBvc2l0aW9uYWwgYXJndW1lbnRzXG4gICAgaWYoIGFzRnVuYyApe1xuICAgICAga2V5ID0gW11cbiAgICAgIGtleS5wdXNoLmFwcGx5KGtleSwgcGxhblt4XSkvL2Nsb25lIGFycmF5IG1lbW9yeSwgZG8gbm90IHRvdWNoIG9yaWdpbmFsIGFycmF5XG4gICAgICBcbiAgICAgIG5ld2tleSA9IGtleS5zaGlmdCgpLy9maXJzdCBhcmcgaXMgbmFtZSBvZiBrZXksIHJlbW92ZSBpdCBmcm9tIGFycmF5XG4gICAgICBzdWJhcmdzID0ga2V5Ly93aGF0IGlzIGxlZnQgaW4gYXJyYXkgaXMgdGhlIGFyZ3VtZW50c1xuICAgICAga2V5ID0gbmV3a2V5Ly9rZXkgdG8gc3RyaW5nXG4gICAgfVxuXG4gICAgaXRlbSA9IHJ0blsgPHN0cmluZz5rZXkgXVxuXG4gICAgbGV0IGlzRnVuYyA9IGl0ZW0gJiYgaXRlbS5jb25zdHJ1Y3Rvcj09RnVuY3Rpb25cblxuICAgIGlmKCBhc0Z1bmMgJiYgIWlzRnVuYyApe1xuICAgICAgaWYoaXRlbT09bnVsbCB8fCBpdGVtLmNvbnN0cnVjdG9yIT09RnVuY3Rpb24gKXtcbiAgICAgICAgdHlwbyA9IHR5cGVvZihpdGVtKVxuICAgICAgICBjb25zdCBtc2cgPSBcIlR5cGVFcnJvcjogJ1wiK2tleStcIicgb2YgXCIrIHR5cG8gK1wiIGlzIG5vdCBhIGZ1bmN0aW9uLiBJbnZva2UgaW5zdHJ1Y3Rpb25zOiBcIisgSlNPTi5zdHJpbmdpZnkocGxhbilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBtc2cgKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCBpc0Z1bmMgKXtcbiAgICAgIHJ0biA9IGl0ZW0uYXBwbHkocnRuLHN1YmFyZ3MpXG4gICAgfWVsc2V7XG4gICAgICBydG4gPSBpdGVtXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJ0blxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW52b2tlckJ5KFxuICBpbnZva2U6YW55XG4pOkZ1bmN0aW9ue1xuICBjb25zdCBpc0YgPSB0eXBlb2YgaW52b2tlPT0nZnVuY3Rpb24nXG5cbiAgaWYoIGlzRiApe1xuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKTphbnl7XG4gICAgICB2YXIgeCA9IGludm9rZShhcmdzWzBdKTtcbiAgICAgIGFyZ3Muc2hpZnQoKVxuICAgICAgcmV0dXJuIG9iamVjdEludm9rZXIoeCwgYXJncylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oLi4ucGxhbil7XG4gICAgY29uc3QgYSA9IHBsYW5bMF1cbiAgICBwbGFuWzBdID0gcGxhblsxXVxuICAgIHBsYW5bMV0gPSBhXG5cbiAgICByZXR1cm4gb2JqZWN0SW52b2tlcihpbnZva2UsW3BsYW5dKVxuICB9XG5cbi8qXG4gIHJldHVybiBmdW5jdGlvbihhcmdzOmFueVtdKTphbnl7XG4gICAgY29uc3QgcnRuID0gaW52b2tlWyBhcmdzWzFdIF0oIGFyZ3NbMF0gKVxuXG4gICAgZm9yKGxldCB4PTA7IHg8YXJncy5sZW5ndGg7ICsreCl7XG4gICAgICBpZiggeDwxICl7XG4gICAgICAgIGRlbGV0ZSBhcmdzW3hdICAgICAgICBcbiAgICAgIH1lbHNle1xuICAgICAgICBhcmdzWyB4LTEgXSA9IGFyZ3NbeF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcmdzLmxlbmd0aCA9IGFyZ3MubGVuZ3RoIC0gMlxuXG4gICAgcmV0dXJuIHJ0blxuICB9XG4qL1xufSJdfQ==