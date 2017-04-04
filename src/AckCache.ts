import { Injectable } from '@angular/core';
import { AckOffline } from './AckOffline';

/** Cache logic that provides timestamping and timingout using AckOffline as storage */
@Injectable() export class AckCache extends AckOffline{
  validate(data, config) {
    const exists = data !== null && typeof data.cache !== "undefined"
    return exists && !this.hasExpired(data._timestamp, data.expires||config.expires)
  }

  hasMaxAged(stamp, maxAge){
    const diff = Date.now() - maxAge
    const expired = stamp<=diff
    return maxAge && expired ? true : false
  }

  hasExpired(stamp, expires){
    const expired = Date.now() >= new Date(expires).getTime()
    return expires && expired ? true : false
  }

  param(name, options){
    options = options || {}
    options.param = options.param || []
    return this.getCache(name, options)
  }

  /** aka param */
  paramCache(name, options){
    return this.param(name, options)    
  }

  paramSave(name, options){
    return this.paramCache(name, options)
    .then(items=>this.setCache(name,items))
  }

  /** aka paramSave */
  paramSaveCache(name, options){
    return this.paramSave(name, options)
  }

  /**
    @options{
      expires:Date||number - Exact date of expiration
      maxAge:number - 
    }
  */
  cacheToReturn(name, data, options){
    if(data['cache']==null && data['_timestamp']==null){
      return Promise.resolve( data )//bad data catch
    }

    const expires = data['expires'] || options.expires
    const maxAge = data['maxAge'] || options.maxAge
    
    if(options.allowExpired || (!expires && !maxAge)){
      return Promise.resolve( data['cache'] )
    }

    const expired = expires && this.hasExpired(data['_timestamp'], expires)
    const isMaxed = maxAge && this.hasMaxAged(data['_timestamp'], maxAge)

    if(expired || isMaxed){
      return this.selfDestructData(name,data)
      .then(()=>{
        if(options.param)return Promise.resolve( options.param )

        const err = new Error('Cache expired for '+name)
        err['code'] = 401
        return Promise.reject( err )
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

  get(name, options?){
    options = options || {expires:null}
    
    return super.get(name)
    .then(data=>{
      if(data){
        return this.cacheToReturn(name, data, options)
      }

      if(options.param)return options.param

      return Promise.resolve()
    })
  }

  /** aka get */
  getCache(name, options){
    return this.get(name, options)
  }

  set(name, cache, options?) {
    options = options || {}
    const newOptions = Object.assign({}, options)

    newOptions._timestamp = Date.now()

    return super.get(name)
    .then( data=>{
      data = data && data.constructor!=String ? data : {}

      Object.assign(data, newOptions)
      if(cache && cache.constructor==String){
        data['cache'] = cache
      }else if(data['cache'] && data['cache'].constructor!=String){
        Object.assign(data['cache'], cache)
      }else{
        data['cache'] = cache
      }

      return data
    })//paste cache over cache, leave all else alone
    .then( data=>super.set(name, data) )
  }

  /** aka set */
  setCache(name, cache, options?){
    return this.set(name, options)
  }
}