//import 'rxjs/add/operator/toPromise';
import { Injectable, EventEmitter } from '@angular/core';

import { Http, Response, Request } from '@angular/http';
//Angular5
//import { HttpClient, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http'

import { AckCache } from './AckCache';
import { AckQue } from './AckQue';

export interface httpQueModel{
  name          : string
  maxTry?       : number
  expires?      : number
  maxAge?       : number
  allowExpired? : boolean
}

export interface offlineMeta{
  offlineId?   : number
  lastAttempt? : Date
  attempts?    : number
  maxTry?      : number
}

export interface httpOptions{
  url          : string
  method?      : 'GET'|'POST'|'PUT'|'PATCH'|'DELETE'|string
  headers?     : any
  timeout?     : number
  queModel?    : httpQueModel|string
  offlineMeta? : offlineMeta
  promise?     : 'response'|'all'|'data'//typically just the body data is promised. Anything but data returns response
}

export interface apiConfig{
  //promise? : 'all'|'data'//typically just the body data is promised
  baseUrl? : string
  //params?  : object//query vars
  $http?   : httpOptions
}

export function TimeOutError(message){
  Error["captureStackTrace"](this, this.constructor);
  this.name = this.constructor.name;
  this.status = 401;
  this.code = "credentials_required";
  this.message = message || "No authorization token was found";
}
TimeOutError.prototype = Object.create(Error.prototype)

/** Http util with offline config for request failures */
@Injectable() export class AckApi{
  //Angular5
  //response:EventEmitter<HttpResponse<HttpEvent<Event>>> = new EventEmitter()

  response:EventEmitter<Response> = new EventEmitter()
  AuthError:EventEmitter<Error> = new EventEmitter()
  ApiError:EventEmitter<Error> = new EventEmitter()
  AckCache
  AckQue
  config:apiConfig = <apiConfig>{
    baseUrl:'',
    $http:{
      method:'GET',
      headers:{},
      timeout: 6500//4000//8000
    }
  }

  constructor(public HttpClient:Http){
    this.AckCache = new AckCache()
    this.AckQue = new AckQue()
    this.paramConfig()
  }

  /** an empty function for inheritance to hook into */
  paramConfig(){}

  /** START HERE. Handlers must be registered before sending requests
    @options{maxTry:50}
  */
  registerHandler(name:string, handler?:(config:httpOptions)=>any, options?:offlineMeta){
    options = options || {maxTry:50}
    handler = handler || (config=>this.request(config))
    this.AckQue.registerHandler(name, handler)
    return this
  }

  getQue(name:string){
    return this.AckQue.get(name)
  }

  getCache(name:string){
    return this.AckCache.get(name)
  }

  /** when back online, run this function */
  processQue(name:string){
    this.AckQue.paramHandler(name,config=>this._fetch(config))
    return this.AckQue.processQue(name)
  }

  /** clears POST/PUT/PATCH/DELETE que */
  clearQue(name:string){
    return this.AckQue.clear(name)
    //.then( ()=>this.AckCache.clear(name) )
  }

  /** clears GET cache */
  clearCache(name){
    return this.AckCache.clear(name)
  }

  /** method all request transactions tunnel thru to instead try for cache first
    HINT: @config.queModel, when defined:
      - POST/PUT/PATCH requests goto que if they fail.
      - GET responses are cached with optional expires or maxAge option
  */
  request(config:httpOptions){
    const defaults:httpOptions = { ...this.config.$http }

    defaults.headers = { ...this.config.$http.headers }//cause a deeper clone and break memory ref with apiConfig.$http

    const request = Object.assign(defaults, (config||{}))
    request.url = this.config.baseUrl + request.url

    //removed 11/16/2017
    //Object.assign(request.headers, this.config.$http.headers)//enforced config/defaults . apiConfig act as an overwriter of headers

    //has cache instructions?
    if( request.queModel ){
      return this.requestQueModel(request)
    }

    return this._fetch(request)
  }

  getCacheByNamedRequest(request:httpOptions){
    const queModel = <httpQueModel>request.queModel
    return this.AckCache.get( queModel.name )
    .then(routes=>{
      routes = routes || {}
      return routes[request.url]
    })
    .then(cache=>this.processCacheGet(cache,request))
  }

  requestQueModel(request:httpOptions){
    let queModel = <httpQueModel>request.queModel
    if(queModel && queModel.constructor==String){
      request.queModel = queModel = <httpQueModel>{ name:request.queModel }
    }

    if (request.method === "GET") {
      return this.getCacheByNamedRequest(request)
    }

    this.AckQue.paramHandler(queModel.name,config=>this._fetch(config))

    //request is a PUT, POST, PATCH, or DELETE
    return this._fetch(request)
    .catch( e=>this.postRequestFail(e,request) )//if fail, save config for later
  }

  processCacheGet(cache, cfg:httpOptions){
    if(cache==null)return this._fetch(cfg)

    const queModel = <httpQueModel>cfg.queModel
    return this.AckCache.cacheToReturn(queModel.name, cache, queModel)
    .then(rtn=>{
      const willExpire = rtn && this.AckCache.optionsKillCache(cfg.queModel)

      if( !willExpire ){
        console.log('AckApi fetched cache that will never expire. Set queModel.expires=0 or queModel.maxAge=0 to avoid this message')
      }

      if( rtn!=null ){
        return rtn
      }

      return this._fetch(cfg)
    })
  }

  postRequestFail(e, request:httpOptions){
    const saveWorthy = e.status == 0 || e.status == -1 || e.status == 503

    if(!saveWorthy)return Promise.reject(e)

    request.offlineMeta = request.offlineMeta || <offlineMeta>{}
    request.offlineMeta.offlineId = Date.now()
    request.offlineMeta.lastAttempt = new Date()
    request.offlineMeta.attempts = request.offlineMeta.attempts==null ? 1 : ++request.offlineMeta.attempts
    request.offlineMeta.maxTry = request.offlineMeta.maxTry || 50
    const tryAgainLater = request.offlineMeta.maxTry && request.offlineMeta.attempts <= request.offlineMeta.maxTry

    e.offlineMeta = request.offlineMeta

    if(tryAgainLater){
      const requestSave = Object.assign({}, request)
      delete requestSave.queModel//only used for GET method
      const queModel = <httpQueModel>request.queModel
      return this.AckQue.set(queModel.name, requestSave)
      .then( ()=>Promise.reject(e) )
    }

    return Promise.reject(e)
  }

  /** master method for sending requests and caching responses using $http requests
    @cfg{
      catch:'data'//typically only error data is returned, but if catch!='data' then entire response is returned for a caught error
      promise:'data'//typically only data is returned, but if promise!='data' then entire response is returned
      headers:{}//when sending a file 'Content-Type':undefined so that no content-type header is sent
    }
  */
  //Angular 5 : Promise<HttpResponse<HttpEvent<Event>>>
  _fetch(cfg:httpOptions):Promise<Response> {
    upgradeConfig(cfg)

    const request = new Request( cfg )
    /*const request = new HttpRequest(
      cfg.method,
      cfg.url,
      cfg.body,
      cfg
    )*/

    return new Promise((resolve,reject)=>{
      const req = this.HttpClient.request( request ).subscribe(res=>resolve(res))

      if( cfg.timeout ){
        setTimeout(()=>{
          req.unsubscribe()
          const timeoutError = new TimeOutError('Request timed out. Server did NOT respond timely enough')
          timeoutError.timeout = cfg.timeout
          reject( timeoutError )
        }, cfg.timeout)
      }
    })

/*
    return 
    .toPromise()
    .then( response=>this.processFetchByConfig(response,cfg) )
    .catch( e=>this.httpFailByConfig(e,cfg) )
*/
  }

  processFetchByConfig(response:Response, request:httpOptions):Promise<any>{
    this.response.emit(response)//let subscribers of all responses know we got one
    
    const data = response['_body']//response['data'] || 
    const isJson = data && response.headers.get('Content-Type')=='application/json'

    if(isJson && !response['data']){
      try{
        response['data'] = JSON.parse( data )
      }catch(e){}
    }

    const isDataMode = !request.promise || request.promise=='data'
    const output = isDataMode ? (response['data']||data) : response

    if (request.method === "GET" && request.queModel) {
      return this.requestResponseToCache(request, output)
      .then( ()=>output )
    }

    return Promise.resolve( output )
  }

  httpFailByConfig(e,cfg){
    const isReduceData = cfg.catch==null||cfg.catch=='data'
    const isCatchData = isReduceData && e.data && e.data.error

    //find JSON error object and reduce to
    if(isCatchData){
      const newError = new Error()
      Object.assign(newError, e.data.error)
      e = newError
    }

    if(e.status==401){
      this.AuthError.emit(e)
    }else{
      this.ApiError.emit(e)
    }

    return Promise.reject(e)
  }

  requestResponseToCache(request, output){
    const cachename = request.queModel.name || request.queModel
    return this.AckCache.get(cachename)
    .then(routes=>{
      routes = routes || {}
      routes[ request.url ] = {cache:output}
      this.AckCache.dataOptionsCache(routes[ request.url ], request.queModel, output)
      return routes
    })
    .then(routes=>this.AckCache.set(cachename, routes))
  }
  
  /**
    @path:url
    @config:{
      params:{}//url parameters
    }
  */
  get(path, config?) {
    const cfg = Object.assign({}, config)
    cfg.method = "GET"
    cfg.url = path
    return this.request( cfg )
  }

  post(path, data, config?) {
    const cfg = Object.assign({}, config)
    cfg.method = "POST"
    //cfg.data = data
    cfg.body = data
    cfg.url = path
    return this.request( cfg )
  }

  delete(path, config?) {
    const cfg = Object.assign({}, config)
    cfg.method = "DELETE"
    cfg.url = path
    return this.request( cfg )
  }

  put(path, data, config?) {
    const cfg = Object.assign({}, config)
    cfg.method = "PUT"
    //cfg.data = data
    cfg.body = data
    cfg.url = path
    return this.request( cfg )
  }

  /** all process ques with be run with navigator.onLine */
  /*monitorOnlineStatus(){
    const onOnline = ()=>{
      this.AckQue.processAllQues()
    }

    window.addEventListener("online", onOnline)
  }*/
}

/** prevent angular1 from assuming the header to send is application/json */
function upgradeConfig(cfg){
  cfg.method = cfg.method || 'GET'

  cfg.reportProgress = cfg.reportProgress || false

  const isFormData = cfg.data && FormData && cfg.data.constructor==FormData
  if(isFormData){
    const preventAutoContentType =  !cfg.headers || Object.keys(cfg.headers).filter(h=>h.search(/content-type/i)<0)
    
    if(preventAutoContentType){
      cfg.headers['Content-Type'] = undefined//'multipart/form-data;'
    }
  }

  //cast url variables nulls to empty-string
  if(cfg.params){
    for(let key in cfg.params){
      if(cfg.params[key]==null){
        cfg.params[key]=''
      }
    }
  }

  return cfg
}