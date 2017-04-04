import { Injectable } from '@angular/core';
import { AckOffline } from './AckOffline';

//const supportsNav = typeof(navigator)!='undefined'

/** Que data based processes by associating name based handlers */
@Injectable() export class AckQue extends AckOffline{
  public handlers = []
  
  /** processes with associated that are typically awaiting internet access to complete processing */
  get(name) {
    return super.get(name)
    .then(data => data && data['que'] ? data['que'] : [])
  }

  /** aka get */
  getQue(name){
    return this.get(name)
  }

  /** aka set */
  setQue(name, que){
    return this.set(name, que)
  }

  /** clears data-process based que of tasks */
  /*clearQue(name) {
    return super.clear(name)
    .then(data => {
      data['que'] = []
      super.set(name, data)
    })
  }*/

  /** add to qued data. Typically when offline, add post/put requests here and process them when back online */
  que(name, queData) {
    /*if(supportsNav && navigator.onLine) {
      const registration = this.handlers.find( handler=>handler.name===name )
      if(registration){
        return Promise.resolve( registration.handler(queData) )
      }
    }*/

    return super.get(name)
    .then(data => {
      data = data || {}
      data['que'] = data['que'] || []
      
      if(queData.forEach){
        queData.forEach(x=>{
          data['que'].push( x )
        })
      }else{
        data['que'].push( queData )
      }
      return super.set(name, data)
    })
  }

  /** merge new que data overtop of existing que
    @name:string
    @que
  */
  set(name, queData) {
    return this.que(name, queData)
  }

  dequeByIndex(name, index){
    return this.getQue(name)
    .then(array=>array.splice(index, 1) && array)
    .then( array=>this.setQue(name, array) )
  }

  processQuedByIndex(name, index){
    const handler = this.getQueHandlerByName(name)
    const mem = {item:null, array:null, result:null}

    return this.getQue(name)
    .then(array=>{
      mem.item = array.splice(index, 1)
      mem.array = array
    })
    .then( ()=>this.handleQued(name, mem.item, handler))
    .then( result=>mem.result=result )
    .then( ()=>this.setQue(name, mem.array) )
    .then( ()=>mem.result )
  }

  /** Most important. When a que of data-tasks is being processed, the approperiate handler must be registered here */
  registerQueHandler(name, handler) {
    //handler = handler || this.getQueHandler.bind(this)
    this.handlers.push({name, handler})
    return this
  }

  /** return functions */
  getQueHandlerByName(name){
    for(let i=this.handlers.length-1; i >= 0; --i){
      if(this.handlers[i].name==name)return this.handlers[i].handler
    }
  }

  handleQued(name, qued, handler){
    return Promise.resolve( handler(qued) )
  }

  processQuedHandler(hand){
    const results = []
    const eachHandle = this.eachHandler(hand.name, hand.handler)

    return this.get(hand.name)
    .then( que => que.map(eachHandle) )
    .then( r=>results.push.apply(results,r) )
    .then( ()=>this.clear(hand.name) )
    .then( ()=>results )
  }

  eachHandler(name, handler){
    return data=>this.handleQued(name, data, handler)
  }

  /** call manually in app when back online */
  processQue(){
    const results = [], promises = []

    this.handlers.forEach(hand=>
      promises.push( this.processQuedHandler(hand) )
    )

    return Promise.all(promises)
    .then(proms=>{
      const results = []
      proms.forEach( subArray=>results.push.apply(results, subArray) )
      return Promise.all( results )//array of arrays is now one array
    })
  }

  /*getQueHandler(item) {
    return this.$http(item)
  }*/

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
    return this.registerQueHandler(name, trans=>{
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
}


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