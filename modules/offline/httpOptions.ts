import { cacheModel } from "./AckCache"

//specific to failed POST/PUT
export interface sendFailMeta{
  offlineId?   : number|string
  lastAttempt? : Date
  attempts?    : number
  maxTry?      : number
}

export interface httpOptions{
  url?            : string
  params?         : any
  body?           : any
  method?         : "GET"|"POST"|"PUT"|"PATCH"|"DELETE"|string
  headers?        : any//{[index: string]: string | string[]}
  timeout?        : number
  offlineModel?   : cacheModel|string
  sendFailMeta?   : sendFailMeta
  promise?        : "response"|"all"|"data"|string//typically just the body data is promised. Anything but data returns response
  reportProgress? : boolean
  responseType?   : "text"|"json"//null===json

  catch?:"data"
}
