import { Injectable } from '@angular/core';
import { AckOffline } from './AckOffline';

export interface cacheModel{
  name?         : string
  maxTry?       : number
  expires?      : number//exact date of expiration
  maxAge?       : number//how old until expiration
  allowExpired? : boolean
  param?        : object//when cache not defined, use this
}


/** Cache logic that provides timestamping and timingout using AckOffline as storage */
@Injectable() export class AckCache extends AckOffline{
  prefix:string="offline-cache"
  
  validate(data, config) {
    const exists = data !== null && typeof data.cache !== "undefined"
    return exists && !this.hasExpired(data._timestamp, data.expires||config.expires)
  }

  optionsKillCache(options:cacheModel){
    return options.maxAge==null && options.expires==null ? false : true
  }

  hasMaxAged(stamp:number, maxAge:number){
    const diff = Date.now() - maxAge
    const expired = stamp<=diff
    return maxAge && expired ? true : false
  }

  hasExpired(
    _stamp:number,
    expires:number
  ){
    const expired = Date.now() >= new Date(expires).getTime()
    return expires && expired ? true : false
  }

  param(name:string, options:cacheModel=<cacheModel>{}){
    options.param = options.param || []//good idea? Assumption data returned is an array
    return this.getCache(name, options)
  }

  /** aka param */
  paramCache(name:string, options:cacheModel){
    return this.param(name, options)    
  }

  paramSave(name:string, options:cacheModel){
    return this.paramCache(name, options)
    .then(items=>this.setCache(name,items))
  }

  /** aka paramSave */
  paramSaveCache(name:string, options:cacheModel){
    return this.paramSave(name, options)
  }

  /**
    @options{
      expires:Date||number - Exact date of expiration
      maxAge:number - 
    }
  */
  cacheToReturn(
    name:string,
    data:any,
    options:cacheModel
  ):any{
    if(data.cache==null && data._timestamp==null){
      return Promise.resolve( data )//bad data catch
    }

    const expires = data.expires || options.expires
    const maxAge = data.maxAge || options.maxAge
    
    if(options.allowExpired || (!expires && !maxAge)){
      return Promise.resolve( data.cache )
    }

    const expired = expires && this.hasExpired(data._timestamp, expires)
    const isMaxed = maxAge && this.hasMaxAged(data._timestamp, maxAge)

    if(expired || isMaxed){
      return this.selfDestructData(name,data)
      .then(()=>{
        if(options.param)return Promise.resolve( options.param )

        /*const err = new Error('Cache expired for '+name)
        err['code'] = 401
        return Promise.reject( err )*/
      })
    }

    return Promise.resolve( data['cache'] )
  }

  selfDestructData(name,data){
    if( this.dataDestructReady(data) )return this.clear(name)
    return Promise.resolve()
  }

  dataDestructReady(data){
    const isMemMaxed = data['maxAge'] && this.hasMaxAged(data['_timestamp'], data['maxAge'])
    const isMemExpired = data['expires'] && this.hasExpired(data['_timestamp'], data['expires'])
    return isMemMaxed || isMemExpired
  }

  get(
    name:string,
    options:cacheModel=<cacheModel>{expires:null}
  ){
    return super.get(name)
    .then(data=>{
      if(data){
        return this.cacheToReturn(name, data, options)
      }

      if(options.param)return options.param

      return
    })
  }

  /** aka get */
  getCache(name:string, options?:cacheModel){
    return this.get(name, options)
  }

  /** paste cache over cache, leave all else alone */
  dataOptionsCache(allCache, options:cacheModel=<cacheModel>{}, cache:any){
    const newOptions:any = {}
    
    newOptions._timestamp = Date.now()
    if(options.expires)newOptions.expires = options.expires
    if(options.maxAge)newOptions.maxAge = options.maxAge
    
    allCache = allCache && allCache.constructor!=String ? allCache : {}

    Object.assign(allCache, newOptions)
    if(cache && cache.constructor==String){
      allCache.cache = cache
    }else if(allCache.cache && allCache.cache.constructor!=String){
      Object.assign(allCache.cache, cache)      
    }else{
      allCache.cache = cache
    }

    return allCache
  }

  set(
    name:string,
    cache:any,
    options:cacheModel=<cacheModel>{}
  ) {
    options.name = options.name || name
    return super.get(name)
    .then( allCache=>this.dataOptionsCache(allCache, options, cache) )
    .then( data=>super.set(name, data) )
  }

  /** aka set */
  setCache(
    name:string,
    cache:any,
    options?:cacheModel
  ){
    return this.set(name, cache, options)
  }
}