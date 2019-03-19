/** responsible for ack-angular pipe'in system into ackX */
export function invokeRotator(
  invoke:any//|(any[])=>any
){
  const invoker:Function = getInvokerBy( invoke )

  return getRotatorByInvoker( invoker )
}

export function getRotatorByInvoker(
  invoker:Function
):Function{
  return function( ...args ){
    var rtn = invoker(arguments)
    args.shift()//remove first arg as its an object
    return objectInvoker(rtn,args)
  }
}

export function objectInvoker(
  object:any,
  plan:(string|any)[]
){
  var rtn=object
  var subargs, item
  let newkey:string
  let key:string|string[]

  //loop extra arguments as property collectors
  for(let x=0; x < plan.length; ++x){
    key = plan[x]
    subargs = []

    //array where 1st arg is method and subs are positional arguments
    if(key.constructor==Array){
      key = []
      key.push.apply(key, plan[x])//clone array memory, do not touch original array
      
      newkey = key.shift()//first arg is name of key, remove it from array
      subargs = key//what is left in array is the arguments
      key = newkey//key to string
    }

    //undefined error catcher
    if( rtn==null ){
      const typo = typeof(rtn)
      const msg = "ERROR TypeError: Cannot read property '"+key+"' of "+ typo +". Invoke instructions: "+ JSON.stringify(plan)
      throw new Error( msg )
    }

    item = rtn[ <string>key ]

    if(item && item.constructor==Function){
      rtn = item.apply(rtn,subargs)
    }else{
      rtn = item
    }
  }

  return rtn
}

export function getInvokerBy(
  invoke:any
):Function{
  const isF = typeof invoke=='function'

  if( isF ){
    return function(args:any[]):any{
      return invoke( args[0] )
    }
  }
  
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
}