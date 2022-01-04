import { Subscription } from "rxjs"
import {
  Component//, EventEmitter
} from "@angular/core"
import {
  PageScrollService
  //, PageScrollInstance
} from "ngx-page-scroll-core"

import {
  Log,
  ErrorLog,
  Prompts,
} from "../../src"

import { httpOptions } from "../../modules/offline/httpOptions"
import {
  AckApi, AckOffline, AckCache, AckQue
} from "../../modules/offline"

import { animations } from "ack-angular-fx"

const pathing = window.location.pathname.split("/").slice(0,-1).join("/")
const defaultUrl = window.location.origin+pathing+"/test.json"

@Component({
  selector: "provider-examples",
  templateUrl: './provider-examples.html',
  animations
}) export class ProviderExamples {
  newOfflineStorage: any
  views:any = {}
  statusOnlineModel:boolean
  queArray:any[] = []
  processQueResults:any[] = []
  httpQueArray:any[] = []
  httpCache = {}
  cache
  error:Error
  offlineStorage:any
  cacheStorage:any
  queStorage
  cacheSeconds:number = 20
  backOnlineAt
  viewHttpSub
  httpResponse
  httpError
  httpHeaderConfigArray=[]
  httpConfig:httpOptions={
    offlineModel:{
      name:"ackHttpTests", maxAge:15000
    },
    promise:"response",
    method:"GET",
    url:defaultUrl,
    headers:{
      "Content-Type":"text/plain"
    }
  }

  constructor(
    public Log:Log,
    public ErrorLog:ErrorLog,
    public PageScrollService:PageScrollService,
    public AckOffline:AckOffline,
    public AckCache:AckCache,
    public AckQue:AckQue,
    public AckApi:AckApi,
    public Prompts:Prompts
  ){
    this.ErrorLog.monitorWindow()
    this.AckQue.registerHandler("ackNgQueTest", item=>this.processQueItem(item))
    //this.AckApi.clearQue()
    //this.AckApi.registerHandler("ackHttpTests")
  }

  ngOnInit(){
    window.addEventListener("online",()=>{
      if(navigator.onLine){
        this.backOnlineAt = getServerTime()
        this.processQue()
        this.processHttpQue()
      }
    })

    this.loadHttpHeaderConfigArray()
    this.reloadData()
  }

  clearHttpQue(){
    return this.AckApi.clearQue("ackHttpTests").then(()=>this.readHttpQueArray(false))
  }

  clearHttpCache(){
    return this.AckApi.clearCache("ackHttpTests").then(()=>this.readHttpCache())
  }

  sendHttp(){
    delete this.httpError
    delete this.httpResponse
    this.viewHttpSub = false
    let promise = Promise.resolve();

    //NEVER USE BELOW. This is just for this demo so that localhost requests do not complete
    if(!navigator.onLine && this.httpConfig.method!="GET"){
      this.httpError = new Error("Offline mode detected. Request qued")
      promise = this.AckApi.AckQue.set("ackHttpTests", this.httpConfig)
    }else{
      promise = this.AckApi.request( this.httpConfig )
      .then(res=>{
        this.httpResponse = res
        delete this.httpError
      })
      .catch(e=>{
        this.httpError = e
        delete this.httpResponse
      })
    }

    return promise
    .then( ()=>this.readHttpQueArray(false) )
    .then( ()=>this.readHttpCache() )
  }

  readHttpHeaderConfigArray(){
    for(let x=0; x < this.httpHeaderConfigArray.length; ++x){
      let headDef = this.httpHeaderConfigArray[x]
      this.httpConfig.headers[ headDef.name ] = headDef.value
    }
  }

  readHttpQueArray(process?){
    return this.AckApi.getQue("ackHttpTests")
    .then(que=>{
      this.httpQueArray = que
      const doProcess = process||process==null && que.length && navigator.onLine
      if(doProcess){
        return this.processHttpQue()
      }
    })
  }

  readHttpCache(){
    return this.AckApi.getCache("ackHttpTests")
    .then( cache=>this.httpCache=cache)
  }

  processHttpQue(){
    return this.AckApi.processQue("ackHttpTests")
    .then( ()=>this.readHttpQueArray(false) )
    //.catch( e=>this.error=e )
  }

  loadHttpHeaderConfigArray(){
    const rtn = []
    for(let name in this.httpConfig.headers){
      if(!name.length)continue
      rtn.push({ name, value:this.httpConfig.headers[name] })
    }
    this.httpHeaderConfigArray.length = 0
    this.httpHeaderConfigArray.push.apply(this.httpHeaderConfigArray, rtn)
  }

  causeErrorLog(){
    this.ErrorLog.add("Error "+this.ErrorLog.log.length+" of "+this.ErrorLog.maxLog+" fired @ "+getServerTime())
  }

  causeLog(){
    this.Log.add("Log "+this.Log.log.length+" of "+this.Log.maxLog+" fired @ "+getServerTime())
  }

  scrollToModuleImport(){
    setTimeout(()=>{
      this.PageScrollService.scroll({document:document, scrollTarget:"#Import AckModule"})
    }, 600)
  }

  reloadData(){
    return Promise.all([
      this.readOffline(),
      this.readQue(),
      this.readCache(),
      this.readHttpQueArray(),
      this.readHttpCache()
    ])
  }

  readOffline(){
    this.AckOffline.get("ack-angular")
    .then( data=>this.offlineStorage=data )
  }

  readQue(){
    return this.AckQue.getQue("ackNgQueTest")
    .then( que=>this.queArray=que )
  }

  readCache(){
    return this.AckCache.get("ackNgCacheTest")
    .then( cache=>this.cacheStorage=cache )
    .then( ()=>this.readCacheObject() )
    .catch(e=>{

      if(e.code && e.code==401){
        return
      }

      return Promise.reject(e)
    })
  }

  readCacheObject(){
    //use Offline to get raw cache
    return this.AckOffline.get("ackNgCacheTest")
    .then(v=>{
      this.cache = v
      if(v){
        this.cache.seconds = (v["expires"]-v["_timestamp"]) / 1000
      }
    })
  }

  clearAllOffline(){
    this.AckOffline.clearAll()
    .then(()=>this.reloadData())
  }

  setCache(value:any, seconds:number){
    const expires = new Date( Date.now()+(seconds*1000) ).getTime()
    return this.AckCache.set("ackNgCacheTest", value, {expires:expires})
    .then(()=>this.readCache())
  }

  clearCache(){
    this.AckCache.clear("ackNgCacheTest")
    .then( ()=>this.readCache() )
  }

  clearOffline(){
    this.offlineStorage = ""
    this.AckOffline.clear("ack-angular")
    .then( ()=>this.readOffline() )
  }

  setOffline(string){
    this.offlineStorage = string
    this.AckOffline.set("ack-angular", string)
  }

  clearQue(){
    return this.AckQue.clear("ackNgQueTest")
    .then( ()=>this.readQue() )
  }

  que(itemData){
    this.queStorage = ""
    return this.AckQue.que("ackNgQueTest", itemData)
    .then( ()=>this.readQue() )
  }

  dequeByIndex(index){
    return this.AckQue.dequeByIndex("ackNgQueTest", index)
    .then( ()=>this.readQue() )
  }

  processQueItem(itemData){
    return getServerTime() +" : ack-touched-data : "+itemData
  }

  processQuedByIndex(index){
    return this.AckQue.processQuedByIndex("ackNgQueTest",index)
    .then( result=>this.processQueResults.push(result) )
    .then( ()=>this.readQue() )
  }

  processQue(){
    return this.AckQue.processQue("ackNgQueTest")
    .then( results=>this.processQueResults.push.apply(this.processQueResults, results))
    .then( ()=>this.readQue() )
    .catch( e=>this.error=e )
  }

  runConfirm():Subscription{
    return this.Prompts.confirm(
      "This is a confirm example"
    )
    .subscribe(result=>
      console.log("result of confirm:" +result)
    )
  }

  runAlert():Subscription{
    return this.Prompts.alert("This is an alert example")
    .subscribe(()=>
      console.log("alert prompt closed")
    )
  }
}

function getServerTime(d?){
  d = d || new Date()
  var h=d.getHours(),t="AM",m=d.getMinutes();m=m<10?"0"+m:m;h=h>=12?(t="PM",h-12||12):h==0?12:h;return ("0"+h).slice(-2)+":"+m+":"+("0"+d.getSeconds()).slice(-2)+"."+d.getMilliseconds()+" "+t
}