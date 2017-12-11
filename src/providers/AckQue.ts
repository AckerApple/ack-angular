import { Injectable } from '@angular/core';
import { AckOffline } from './AckOffline';

export interface handlerConfig{
  name:string
  handler:(qued:any)=>any
}

/** Que data based processes by associating name based handlers */
@Injectable() export class AckQue extends AckOffline{
  prefix:string="offline-que"
  handlers = []
  
  /** processes with associated that are typically awaiting internet access to complete processing */
  get(name) {
    return super.get(name)
    .then( data => data && data['que'] ? data['que'] : [])
  }

  /** aka get */
  getQue(name:string){
    return this.get(name)
  }

  /** aka set */
  setQue(name:string, que){
    return this.set(name, que)
  }

  /* deprecated : clearQue(name)... Call clear(name) */

  /** add to qued data. Typically when offline, add post/put requests here and process them when back online */
  que(name:string, queData) {
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
  set(name:string, queData) {
    return this.que(name, queData)
  }

  dequeByIndex(name:string, index:number){
    return this.getQue(name)
    .then(array=>{
      array.splice(index, 1)
      return array
    })
    .then( array=>this.setQue(name, array) )
  }

  processQuedByIndex(name:string, index:number){
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
  registerHandler(name:string, handler:(qued:any)=>any){
    this.handlers.push({name, handler})
    return this
  }

  /** aka registerHandler */
  registerQueHandler(name:string, handler:(qued:any)=>any){
    return this.registerHandler(name, handler)
  }

  paramHandler(name:string, handler:(qued:any)=>any) {
    for(let x=this.handlers.length-1; x >= 0; --x){
      if(this.handlers[x].name==name){
        return this
      }
    }
    this.handlers.push({name, handler})
    return this
  }

  getQueHandDefByName(name:string){
    for(let i=this.handlers.length-1; i >= 0; --i){
      if(this.handlers[i].name==name)return this.handlers[i]
    }
  }

  /** return functions */
  getQueHandlerByName(name){
    const hand = this.getQueHandDefByName(name)
    if(hand)return hand.handler
  }

  handleQued(name:string, qued:any, handler:(qued:any)=>any){
    return Promise.resolve( handler(qued) )
  }

  /** gets array of qued data and processes all and then clears que */
  processQuedHandler( hand:handlerConfig ) : Promise<any>{
    const results = []
    const mem = {que:[]}
    const eachHandle = this.eachHandler(hand.name, hand.handler)

    return this.get( hand.name )
    .then( que=>mem.que=que )
    .then( ()=>this.clear(hand.name) )
    .then(()=>{
      var promise:Promise<any> = Promise.resolve()
      
      mem.que.forEach((v,i)=>{
        promise = promise
        .then( ()=>eachHandle(v) )
        .catch( e=>e )
        .then( r=>results.push(r) )
      })
      return promise
    })
    .then( ()=>results )
  }

  eachHandler(name:string, handler:(qued:any)=>any){
    return data=>this.handleQued(name, data, handler)
  }

  /** call manually in app when back online */
  processQue(name:string){
    const handler = this.getQueHandDefByName(name)
    return handler ? this.processQuedHandler(handler) : Promise.resolve()
  }

  /** call manually in app when back online and sure you want to process all ques */
  processAllQues(){
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
}