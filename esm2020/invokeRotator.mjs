/** responsible for ack-angular pipe'in system into ackX */
export function invokeRotator(invoke //|(any[])=>any
) {
    return getInvokerBy(invoke);
}
export function objectInvoker(object, plan) {
    var rtn = object;
    var subargs;
    var item;
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
            newkey = key.shift(); // first arg is name of key, remove it from array
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2tlUm90YXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnZva2VSb3RhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJEQUEyRDtBQUMzRCxNQUFNLFVBQVUsYUFBYSxDQUMzQixNQUFVLENBQUEsZUFBZTs7SUFFekIsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDN0IsQ0FBQztBQUVELE1BQU0sVUFBVSxhQUFhLENBQzNCLE1BQVUsRUFDVixJQUFtQjtJQUVuQixJQUFJLEdBQUcsR0FBQyxNQUFNLENBQUE7SUFDZCxJQUFJLE9BQVksQ0FBQTtJQUNoQixJQUFJLElBQVMsQ0FBQTtJQUNiLElBQUksTUFBYSxDQUFBO0lBQ2pCLElBQUksR0FBbUIsQ0FBQTtJQUN2QixJQUFJLElBQVcsQ0FBQTtJQUVmLDZDQUE2QztJQUM3QyxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBQztRQUNoQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2IsT0FBTyxHQUFHLEVBQUUsQ0FBQTtRQUVaLHlCQUF5QjtRQUN6QixJQUFJLEdBQUcsSUFBRSxJQUFJLEVBQUU7WUFDYixJQUFJLEdBQUcsT0FBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLE1BQU0sR0FBRyxHQUFHLG1DQUFtQyxHQUFDLEdBQUcsR0FBQyxPQUFPLEdBQUUsSUFBSSxHQUFFLHlCQUF5QixHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEgsTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUFHLENBQUUsQ0FBQTtTQUN2QjtRQUVELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxXQUFXLElBQUUsS0FBSyxDQUFBO1FBRW5DLGlFQUFpRTtRQUNqRSxJQUFJLE1BQU0sRUFBRTtZQUNWLEdBQUcsR0FBRyxFQUFFLENBQUE7WUFDUixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQSxpREFBaUQ7WUFFN0UsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQVMsQ0FBQSxDQUFBLGlEQUFpRDtZQUM1RSxPQUFPLEdBQUcsR0FBRyxDQUFBLENBQUEsd0NBQXdDO1lBQ3JELEdBQUcsR0FBRyxNQUFNLENBQUEsQ0FBQSxlQUFlO1NBQzVCO1FBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBVSxHQUFHLENBQUUsQ0FBQTtRQUV6QixJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBRSxRQUFRLENBQUE7UUFFL0MsSUFBSSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBRyxJQUFJLElBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUcsUUFBUSxFQUFFO2dCQUM1QyxJQUFJLEdBQUcsT0FBTSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNuQixNQUFNLEdBQUcsR0FBRyxjQUFjLEdBQUMsR0FBRyxHQUFDLE9BQU8sR0FBRSxJQUFJLEdBQUUsMkNBQTJDLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDL0csTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUFHLENBQUUsQ0FBQTthQUN2QjtTQUNGO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDVixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUE7U0FDL0I7YUFBSTtZQUNILEdBQUcsR0FBRyxJQUFJLENBQUE7U0FDWDtLQUNGO0lBRUQsT0FBTyxHQUFHLENBQUE7QUFDWixDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FDMUIsTUFBVTtJQUVWLE1BQU0sR0FBRyxHQUFHLE9BQU8sTUFBTSxJQUFFLFVBQVUsQ0FBQTtJQUVyQyxJQUFJLEdBQUcsRUFBRTtRQUNQLE9BQU8sVUFBUyxHQUFHLElBQVM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNaLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUE7S0FDRjtJQUVELE9BQU8sVUFBUyxHQUFHLElBQVM7UUFDMUIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2pCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVYLE9BQU8sYUFBYSxDQUFDLE1BQU0sRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDckMsQ0FBQyxDQUFBO0lBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7TUFnQkU7QUFDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIHJlc3BvbnNpYmxlIGZvciBhY2stYW5ndWxhciBwaXBlJ2luIHN5c3RlbSBpbnRvIGFja1ggKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZva2VSb3RhdG9yKFxuICBpbnZva2U6YW55Ly98KGFueVtdKT0+YW55XG4pe1xuICByZXR1cm4gZ2V0SW52b2tlckJ5KGludm9rZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEludm9rZXIoXG4gIG9iamVjdDphbnksXG4gIHBsYW46KHN0cmluZ3xhbnkpW11cbil7XG4gIHZhciBydG49b2JqZWN0XG4gIHZhciBzdWJhcmdzOiBhbnlcbiAgdmFyIGl0ZW06IGFueVxuICBsZXQgbmV3a2V5OnN0cmluZ1xuICBsZXQga2V5OnN0cmluZ3xzdHJpbmdbXVxuICBsZXQgdHlwbzpzdHJpbmdcblxuICAvL2xvb3AgZXh0cmEgYXJndW1lbnRzIGFzIHByb3BlcnR5IGNvbGxlY3RvcnNcbiAgZm9yKGxldCB4PTA7IHggPCBwbGFuLmxlbmd0aDsgKyt4KXtcbiAgICBrZXkgPSBwbGFuW3hdXG4gICAgc3ViYXJncyA9IFtdXG5cbiAgICAvL3VuZGVmaW5lZCBlcnJvciBjYXRjaGVyXG4gICAgaWYoIHJ0bj09bnVsbCApe1xuICAgICAgdHlwbyA9IHR5cGVvZihydG4pXG4gICAgICBjb25zdCBtc2cgPSBcIlR5cGVFcnJvcjogQ2Fubm90IHJlYWQgcHJvcGVydHkgJ1wiK2tleStcIicgb2YgXCIrIHR5cG8gK1wiLiBJbnZva2UgaW5zdHJ1Y3Rpb25zOiBcIisgSlNPTi5zdHJpbmdpZnkocGxhbilcbiAgICAgIHRocm93IG5ldyBFcnJvciggbXNnIClcbiAgICB9XG5cbiAgICBsZXQgYXNGdW5jID0ga2V5LmNvbnN0cnVjdG9yPT1BcnJheVxuXG4gICAgLy9hcnJheSB3aGVyZSAxc3QgYXJnIGlzIG1ldGhvZCBhbmQgc3VicyBhcmUgcG9zaXRpb25hbCBhcmd1bWVudHNcbiAgICBpZiggYXNGdW5jICl7XG4gICAgICBrZXkgPSBbXVxuICAgICAga2V5LnB1c2guYXBwbHkoa2V5LCBwbGFuW3hdKS8vY2xvbmUgYXJyYXkgbWVtb3J5LCBkbyBub3QgdG91Y2ggb3JpZ2luYWwgYXJyYXlcblxuICAgICAgbmV3a2V5ID0ga2V5LnNoaWZ0KCkgYXMgYW55Ly8gZmlyc3QgYXJnIGlzIG5hbWUgb2Yga2V5LCByZW1vdmUgaXQgZnJvbSBhcnJheVxuICAgICAgc3ViYXJncyA9IGtleS8vd2hhdCBpcyBsZWZ0IGluIGFycmF5IGlzIHRoZSBhcmd1bWVudHNcbiAgICAgIGtleSA9IG5ld2tleS8va2V5IHRvIHN0cmluZ1xuICAgIH1cblxuICAgIGl0ZW0gPSBydG5bIDxzdHJpbmc+a2V5IF1cblxuICAgIGxldCBpc0Z1bmMgPSBpdGVtICYmIGl0ZW0uY29uc3RydWN0b3I9PUZ1bmN0aW9uXG5cbiAgICBpZiggYXNGdW5jICYmICFpc0Z1bmMgKXtcbiAgICAgIGlmKGl0ZW09PW51bGwgfHwgaXRlbS5jb25zdHJ1Y3RvciE9PUZ1bmN0aW9uICl7XG4gICAgICAgIHR5cG8gPSB0eXBlb2YoaXRlbSlcbiAgICAgICAgY29uc3QgbXNnID0gXCJUeXBlRXJyb3I6ICdcIitrZXkrXCInIG9mIFwiKyB0eXBvICtcIiBpcyBub3QgYSBmdW5jdGlvbi4gSW52b2tlIGluc3RydWN0aW9uczogXCIrIEpTT04uc3RyaW5naWZ5KHBsYW4pXG4gICAgICAgIHRocm93IG5ldyBFcnJvciggbXNnIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggaXNGdW5jICl7XG4gICAgICBydG4gPSBpdGVtLmFwcGx5KHJ0biwgc3ViYXJncylcbiAgICB9ZWxzZXtcbiAgICAgIHJ0biA9IGl0ZW1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcnRuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnZva2VyQnkoXG4gIGludm9rZTphbnlcbik6RnVuY3Rpb257XG4gIGNvbnN0IGlzRiA9IHR5cGVvZiBpbnZva2U9PSdmdW5jdGlvbidcblxuICBpZiggaXNGICl7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3M6IGFueSk6YW55e1xuICAgICAgdmFyIHggPSBpbnZva2UoYXJnc1swXSk7XG4gICAgICBhcmdzLnNoaWZ0KClcbiAgICAgIHJldHVybiBvYmplY3RJbnZva2VyKHgsIGFyZ3MpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLnBsYW46IGFueSl7XG4gICAgY29uc3QgYSA9IHBsYW5bMF1cbiAgICBwbGFuWzBdID0gcGxhblsxXVxuICAgIHBsYW5bMV0gPSBhXG5cbiAgICByZXR1cm4gb2JqZWN0SW52b2tlcihpbnZva2UsW3BsYW5dKVxuICB9XG5cbi8qXG4gIHJldHVybiBmdW5jdGlvbihhcmdzOmFueVtdKTphbnl7XG4gICAgY29uc3QgcnRuID0gaW52b2tlWyBhcmdzWzFdIF0oIGFyZ3NbMF0gKVxuXG4gICAgZm9yKGxldCB4PTA7IHg8YXJncy5sZW5ndGg7ICsreCl7XG4gICAgICBpZiggeDwxICl7XG4gICAgICAgIGRlbGV0ZSBhcmdzW3hdXG4gICAgICB9ZWxzZXtcbiAgICAgICAgYXJnc1sgeC0xIF0gPSBhcmdzW3hdXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXJncy5sZW5ndGggPSBhcmdzLmxlbmd0aCAtIDJcblxuICAgIHJldHVybiBydG5cbiAgfVxuKi9cbn0iXX0=