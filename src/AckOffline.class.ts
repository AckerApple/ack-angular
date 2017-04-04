//import localForage from "localforage/dist/localforage.js"
import localForage from "localforage"
//import localForage from "./localforage-build"
//import localForage from "./localforage-build"

const supportsNav = typeof(navigator)!='undefined'

export class AckOffline{
  public prefix:string
  public handlers

  constructor(){
    this.prefix = "offline"
    this.handlers = []
  }


  remove(name){
    return localForage.removeItem(this.prefix+'-'+name)
  }

  get(name) {
    return localForage.getItem(this.prefix+'-'+name)
  }

  set(name, data) {
    return localForage.setItem(this.prefix+'-'+name, data)
  }

  validate(data, config) {
    const exists = data !== null && typeof data.cache !== "undefined"
    return exists && !this.expired(data._timestamp, config.expires)
  }

  expired(stamp, expires){
    const diff = Date.now() - expires
    const expired = stamp<=diff
    return expires && expired ? true : false
  }

  /**
    Creates que handler. Returns self. Most likely, use newQueModel
    @options - {
      handler : dataArray=> - overrides $http posting for que processing
      onData : data=> - callback fired everytime data is retrieved
      expires: Number - how many milisecs can a saved transmission live in cache
    }
  */
  /*newQueModel(name,options={}){
    options.name = name
    this.addQueModel(name, options)
    return new QueModel(this, options)
  }*/

  /**
    Creates que handler. Returns self. Most likely, use newQueModel
    @options - {
      handler : dataArray=> - overrides $http posting for que processing
      onData : data=> - callback fired everytime data is retrieved
    }
  */
  /*addQueModel(name,options={}){
    return this.registerQueueHandler(name, trans=>{
      let prom = this.$http(trans)

      if(options.onData){
        prom = prom.then(response=>{
          if(response.data){
            options.onData(response.data)
          }
        })
      }

      return prom.catch(e=>this.ErrorHandler.record(e))
    })
  }*/

  paramCache(name, options){
    options = options || {}
    options.param = options.param || []
    return this.getCache(name, options)
  }

  paramSaveCache(name, options){
    return this.paramCache(name, options)
    .then(items=>this.setCache(name,items))
  }

  getCache(name, options){
    options = options || {}
    return this.get(name)
    .then(data=>{
      if( this.validate(data, options) ){
        return data['cache']
      }

      if(data){
        if(data['cache']==null && data['_timestamp']==null){
          return data
        }
        
        if(!options.expires){
          return data['cache']
        }

        const isCheckExpired = data && data['_timestamp'] && options.allowExpired
        const expired = data && data['_timestamp'] && this.expired(data['_timestamp'], options.expires)
        const isAllowExpired = isCheckExpired && expired
        if(isAllowExpired){
          return data['cache']
        }

        if(expired){
          const err = new Error('Cache expired for '+name)
          err['code'] = 401
        }
      }

      if(options.param)return options.param

      var err = new Error('No valid cache found for '+name)
      err['code'] = 404

      return new Promise((res,rej)=>{
        rej(err)
      })
    })
  }

  setCache(name, cache) {
    const newCache = {
      _timestamp: Date.now()//,cache: response.data
    }

    return this.get(name)
    .then( data=>{
      data = data && data.constructor!=String ? data : {}

      Object.assign(data, newCache)
      if(cache && cache.constructor==String){
        data['cache'] = cache
      }else if(data['cache'] && data['cache'].constructor!=String){
        Object.assign(data['cache'], cache)
      }else{
        data['cache'] = cache
      }

      return data
    })//paste cache over cache, leave all else alone
    .then( data=>this.set(name, data) )
  }

  cacheResponse(name, response) {
    return this.setCache(name, response.data)
  }

  getQueue(name) {
    return this.get(name)
    .then(data => data && data['queue'] ? data['queue'] : [])
  }

  setQueue(name, queue) {
    return this.get(name)
    .then(data => Object.assign({}, data, {queue}))
    .then(data => this.set(name, data))
  }

  clearQueue(name) {
    return this.get(name)
    .then(data => {
      data['queue'] = []
      this.set(name, data)
    })
  }

  /** post/put que */
  enqueue(name, queueData) {
    if(supportsNav && navigator.onLine) {
      const handler = this.handlers.find(handler => handler.name === name)
      if(handler)return handler(queueData)
    }

    return this.get(name)
    .then(data => {
      data = data || {}
      data['queue'] = data['queue'] || []
      
      if(queueData.forEach){
        queueData.forEach(x=>{
          data['queue'].push( x )
        })
      }else{
        data['queue'].push( queueData )
      }
      return this.set(name, data)
    })
  }

  registerQueueHandler(name, handler) {
    //handler = handler || this.getQueHandler.bind(this)
    this.handlers.push({name, handler})
    return this
  }

  processQueues(){
    let x=this.handlers.length-1, promises = []

    for(; x >= 0; --x){
      let hand = this.handlers[x]

      let prom = this.getQueue(hand.name)
      .then(queue => queue.forEach(x => hand.handler(x)))
      .then(() => this.clearQueue(hand.name))

      promises.push(prom)
    }

    return Promise.all(promises)
  }
  
  /*getQueHandler(item) {
    return this.$http(item)
  }*/

  /*promiseNameArray(){
    let keys = []
    return localForage.iterate((_, k) => {
      if (k.startsWith(this.prefix)) {
        keys.push( k.substring(this.prefix.length+1, k.length) )
      }
    })
    .then(()=>keys)
  }

  clear() {
    this.promiseNameArray().then((keys) => keys.forEach(name=>this.remove(name)))
  }*/
}

//AckOffline.$inject = ["$http"]


/**
  @config {expires, allowExpired, name}
*/
/*
class QueModel{
  constructor(AckOffline, config){
    this.AckOffline = AckOffline
    this.config = config
  }

  mergeConfig(config){
    Object.assign(config, this.config)
    this.config = config
    return this
  }

  get(){
    return this.AckOffline.get(this.config.name)
  }

  set(data){
    return this.AckOffline.set(this.config.name, data)
  }
}*/