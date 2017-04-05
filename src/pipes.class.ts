import * as ack from "ack-x/index-browser"

export const pipes = {
  markdownAnchor:function markdownAnchor(input:string){
    input = input.toString().replace(/ /gi,'-')
    input = input.replace(/[^a-z0-9_-]/gi,'')
    return input.toLowerCase()
  },

  yesno:function yesno(input:any){
    if(input==null)return input
    return input ? 'yes' : 'no';
  },

  yesNo:function yesNo(input:any){
    if(input==null)return input
    return input ? 'Yes' : 'No';
  },

  numbers:function numbers(input:any){
    return input ? String(input).replace(/[^0-9]/g,'') : input
  },

  capitalizeWords:function capitalizeWords(input:any){
    var reg = /[^\W_]+[^\s-]* */g
    return (!!input) ? input.replace(reg, function(txt:any){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) : ''
  },

  /** each sentence word is capitalized */
  capitalize:function capitalize(input:any){
    input = pipes.capitalizeOne(input)
    var reg = /[.?!][\s\r\t]+\w/g
    return (!!input) ? input.replace(reg, pipes.capitalizeAfterSentence) : ''
  },

  capitalizeAfterSentence:function capitalizeAfterSentence(input:any){
    var reg = /[\s\r\t]\w/g
    return (!!input) ? input.replace(reg, function(txt:any){return txt.charAt(0) + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase()}) : ''
  },

  capitalizeOne:function capitalizeOne(input:any) {
    var reg = /[^\W_]+[^\s-]*/
    return (!!input) ? input.replace(reg, function(txt:any){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) : ''
  },

  aDate:a('date'),
  aTime:a('time'),
  ack:invokeRotator( ack )
}


function a(name){
  return invokeRotator( ack[name] )
}

function invokeRotator(invoke){
  return function(v,call0,call1,call2){
    var newkey, subargs, key, item, rtn = invoke(v)

    //loop extra arguments as property collectors
    for(var x=1; x < arguments.length; ++x){
      key = arguments[x]
      subargs = []

      //array where 1st arg is method and subs are positional arguments
      if(key.constructor==Array){
        newkey = key.shift()
        subargs = key
        key = newkey
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