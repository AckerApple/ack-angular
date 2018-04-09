import * as ackX from "ack-x/index-browser"

export function between(input, a, b) {
  if(a==null || b==null)return false
  return (input >= a && input <= b) || (input <= a && input >= b) ? true : false
}

export function numberToPhone(val){
    if (val == null || !val)return val
    
    val = String(val).replace(/[^0-9]/g, '')

    if ( val.length==0 )return val

    return '(' + val.substring(0, 3) + ') ' + val.substring(3, 6) + '-' + val.substring(6, 10)
}

export function toNumber(val){
    return Number( numbers(val, ".") )
}

export function numberSuffix(val, rtnVal=false){
  var rtn = rtnVal ? val : ''
  val = Number(val)

  if(!val || isNaN(val))return ''

  var j = val % 10,
      k = val % 100;
  if (j == 1 && k != 11) {
      return rtn+"st";
  }
  if (j == 2 && k != 12) {
      return rtn+"nd";
  }
  if (j == 3 && k != 13) {
      return rtn+"rd";
  }
  return rtn+"th";
}

/** if input is array returned otherwise array created with  */
export function array(input, repeat?:number, repeatValue?){
  const isArray = input!=null && input.constructor == Array
  let rtn = isArray ? input : []
  
  if(!repeat && !isArray && input!=null){
    rtn.push(input)
  }

  if( !isNaN(Number(repeat)) ){
    const val = typeof(repeatValue)==='undefined' ? input : repeatValue
    while(rtn.length<repeat){
      rtn.push( val )
    }
  }

  return rtn
}

export function arrayOfObjects(input, repeat?:number, repeatValue?){
  return array(input, repeat, repeatValue).map((v,i)=>({value:v, index:i}))
}

export function markdownAnchor(input:string){
  input = input.toString().replace(/&/gi, 'amp')//possibly unneeded
  input = input.toString().replace(/ /gi,'-')
  input = input.replace(/[^a-z0-9_-]/gi,'')
  return input.toLowerCase()
}

  //use with bypassSecurityTrustResourceUrl for href
export function textDownload(input:any){
  if(input==null)return input
  return 'data:text/plain;charset=utf-8,' + encodeURIComponent(input)
}

export function yesno(input:any){
  if(input==null)return input
  return input ? 'yes' : 'no';
}

export function yesNo(input:any){
  if(input==null)return input
  return input ? 'Yes' : 'No';
}

export function boolean(input:any){
  if(input==null)return false
  
  const num = Number(input)
  if(!isNaN(num)){
    return Boolean(num) ? true : false;
  }

  if(input.toLowerCase){
    if( input.toLowerCase()=='true' )return true
    if( input.toLowerCase()=='false' )return false
  }

  return Boolean(input) ? true : false;
}

export function bit(input:any){
  return boolean(input) ? 1 : 0;
}

export function numbers(
  input:any,
  safeChars?:string//upto 4 acceptable characters
){
  let xString = '[^0-9'
  
  if( safeChars ){
    if( safeChars.length>4 ){
      safeChars = safeChars.substring(0, 4)//do not allow safeChars to create a maliscous regx
    }

    xString += safeChars
  }

  xString += ']'
  const regX = new RegExp(xString, 'g')
  
  return input ? String(input).replace(regX,'') : input
}

export function capitalizeWords(input:any){
  var reg = /[^\W_]+[^\s-]* */g
  return (!!input) ? input.replace(reg, function(txt:any){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) : ''
}

/** each sentence word is capitalized */
export function capitalize(input:any){
  input = pipes.capitalizeOne(input)
  var reg = /[.?!][\s\r\t]+\w/g
  return (!!input) ? input.replace(reg, pipes.capitalizeAfterSentence) : ''
}

export function capitalizeAfterSentence(input:any){
  var reg = /[\s\r\t]\w/g
  return (!!input) ? input.replace(reg, function(txt:any){return txt.charAt(0) + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase()}) : ''
}

export function capitalizeOne(input:any) {
  var reg = /[^\W_]+[^\s-]*/
  return (!!input) ? input.replace(reg, function(txt:any){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) : ''
}

function a(name:string){
  return invokeRotator( ackX[name] )
}

/** responsible for ack-angular pipe'in system into ackX */
function invokeRotator(invoke:any){
  const isF = typeof invoke=='function'

  const invoker:Function = isF ? function(args:any[]){
    return invoke( args[0] )
  } : function(args:any[]){
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

  return function(v, call0?, call1?, call2?){
    var newkey, subargs, key, item
    var rtn = invoker(arguments)

    //loop extra arguments as property collectors
    for(var x=1; x < arguments.length; ++x){
      key = arguments[x]
      subargs = []

      //array where 1st arg is method and subs are positional arguments
      if(key.constructor==Array){
        key = []
        key.push.apply(key, arguments[x])//clone array memory, do not touch original array
        
        newkey = key.shift()//first arg is name of key, remove it from array
        subargs = key//what is left in array is the arguments
        key = newkey//now the key string is finalized
      }

      item = rtn[key]

      if(item && item.constructor==Function){
        rtn = item.apply(rtn,subargs)
      }else{
        rtn = item
      }
    }

    return rtn
  }
}

export const aDate = a('date')
export const aTime = a('time')
export const aMath = invokeRotator( Math )
export const ack = invokeRotator( ackX )

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
  aTime,
  ack,
  between
}