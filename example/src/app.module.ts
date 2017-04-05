export const strapTime = Date.now()

import {
  Input,
  Component,
  NgModule
  //,CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { UiRouteWatchReporter } from "ack-angular/UiRouteWatchReporter"
//import { UiRouteReporter } from "ack-angular/UiRouteReporter.component"

import { RouteWatchReporter } from "ack-angular/RouteWatchReporter"
import { RouteReporter } from "ack-angular/RouteReporter.component"

//import { pipes, components as ackComponents } from "ack-angular"
import {
  AckModule,
  AckOffline,
  AckCache,
  AckQue,
  ErrorLog,
  Log
} from "ack-angular"

import * as packJson from "ack-angular/package.json"

import * as ackFx from 'ack-angular-fx'
import { fxArray } from './prefx'

import { Ng2PageScrollModule, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

import {string as ackAppStageTemplate} from './templates/ack-app-stage.pug'
import {string as animationExamples} from './templates/animation-examples.pug'
import {string as overviewExamples} from './templates/overview-examples.pug'
import {string as componentsExamples} from './templates/components-examples.pug'
import {string as pipesExamples} from './templates/pipes-examples.pug'
//import {string as servicesExamples} from './templates/services-examples.pug'
import {string as providerExamples} from './templates/provider-examples.pug'

import { declarations as states, routing } from "./states.object"

@Component({
  selector: 'ack-app-stage'
  ,template: ackAppStageTemplate
  ,animations:fxArray
  //,animations:[]
  //,template:'Hello World<router-outlet></router-outlet>'
  //,template:'Hello World<div *ngIf="show" [@500]="\'slideInLeft\'">Inner Content</div>'
}) export class AppComponent {
  public panelAnim = 'slideInLeft'
  public version = packJson['version']

  ngAfterViewInit(){
    console.log('Total Wire Time:', Date.now()-strapTime+'ms')
    if( window['startAckTime'] ){
      console.log('Overall Load Time:', Date.now()-window['startAckTime']+'ms', '@', getServerTime())
    }
  }
}

@Component({
  selector: 'animation-examples'
  ,template: animationExamples
  ,animations:fxArray
  //,animations:[]
}) export class AnimationExamples {
  public list = ['abc','defg','hij','klm','opq','rst','uvx','yz']
  public delayArray = ackFx.delayArray
}

@Component({
  selector: 'overview-examples'
  ,template: overviewExamples
}) export class OverviewExamples {}

@Component({
  selector: 'provider-examples'
  ,template: providerExamples
  ,animations:fxArray
}) export class ProviderExamples {
  public cache
  public error
  public offlineStorage
  public cacheStorage
  public queStorage
  public queArray = []
  public processQueResults = []
  public cacheSeconds:number = 20
  public backOnlineAt

  constructor(
    public AckOffline:AckOffline,
    public AckCache:AckCache,
    public AckQue:AckQue,
    public PageScrollService:PageScrollService,
    public ErrorLog:ErrorLog,
    public Log:Log,
  ){
    this.ErrorLog.monitorWindow()
  }

  ngOnInit(){
    this.AckQue.registerQueHandler('ackNgTest', item=>this.processQueItem(item))

    window.addEventListener('online',()=>{
      if(navigator.onLine){
        this.backOnlineAt = getServerTime()
        this.processQue()
      }
    })

    this.reloadData()
  }

  causeErrorLog(){
    this.ErrorLog.add("Error "+this.ErrorLog.log.length+" of "+this.ErrorLog.maxLog+" fired @ "+getServerTime())
  }

  causeLog(){
    this.Log.add("Log "+this.Log.log.length+" of "+this.Log.maxLog+" fired @ "+getServerTime())
  }

  scrollToModuleImport(){
    setTimeout(()=>{
      const pageScrollInstance = PageScrollInstance.simpleInstance(document, '#Import AckModule');
      this.PageScrollService.start(pageScrollInstance);
    }, 600)
  }

  reloadData(){
    return Promise.all([
      this.readOffline(),
      this.readQue(),
      this.readCache()
    ])
  }

  readOffline(){
    this.AckOffline.get('ack-angular')
    .then( data=>this.offlineStorage=data )
  }

  readQue(){
    return this.AckQue.getQue('ackNgTest')
    .then( que=>this.queArray=que )
  }

  readCache(){
    return this.AckCache.get('ackNgCacheTest')
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
    return this.AckOffline.get('ackNgCacheTest')
    .then(v=>{
      this.cache = v
      if(v){
        this.cache.seconds = (v['expires']-v['_timestamp']) / 1000
      }
    })
  }

  clearAllOffline(){
    this.AckOffline.clearAll()
    .then(()=>this.reloadData())
  }

  setCache(value, seconds){
    const expires = new Date( Date.now()+(seconds*1000) ).getTime()
    return this.AckCache.set('ackNgCacheTest', value, {expires:expires})
    .then(()=>this.readCache())
  }
  
  clearCache(){
    this.AckCache.clear('ackNgCacheTest')
    .then( ()=>this.readCache() )
  }

  clearOffline(){
    this.offlineStorage = ''
    this.AckOffline.clear('ack-angular')
    .then( ()=>this.readOffline() )
  }

  setOffline(string){
    this.offlineStorage = string
    this.AckOffline.set('ack-angular', string)
  }

  clearQue(){
    return this.AckQue.clear('ackNgTest')
    .then( ()=>this.readQue() )
  }

  que(itemData){
    this.queStorage = ''
    return this.AckQue.que('ackNgTest', itemData)
    .then( ()=>this.readQue() )
  }

  dequeByIndex(index){
    return this.AckQue.dequeByIndex('ackNgTest', index)
    .then( ()=>this.readQue() )
  }

  processQueItem(itemData){
    return getServerTime() +' : ack-touched-data : '+itemData
  }

  processQuedByIndex(index){
    return this.AckQue.processQuedByIndex('ackNgTest',index)
    .then( result=>this.processQueResults.push(result) )
    .then( ()=>this.readQue() )
  }

  processQue(){
    return this.AckQue.processQue()
    .then( results=>
      this.processQueResults.push.apply(this.processQueResults, results)
    )
    .then( ()=>this.readQue() )
    .catch( e=>this.error=e )
  }
}

@Component({
  selector: 'components-examples'
  ,template: componentsExamples
  ,animations:fxArray
}) export class ComponentsExamples {
  public error
  
  constructor(public PageScrollService:PageScrollService){}
  
  causeError(){
    this.error = new Error( 'An intended error was caused @ '+getServerTime() )
  }

  scrollToModuleImport(){
    setTimeout(()=>{
      const pageScrollInstance = PageScrollInstance.simpleInstance(document, '#Import AckModule');
      this.PageScrollService.start(pageScrollInstance);
    }, 600)
  }
}

@Component({
  selector: 'pipes-examples'
  ,template: pipesExamples
}) export class PipesExamples {

  constructor(public PageScrollService:PageScrollService){}

  scrollToModuleImport(){
    setTimeout(()=>{
      const pageScrollInstance = PageScrollInstance.simpleInstance(document, '#Import AckModule');
      this.PageScrollService.start(pageScrollInstance);
    }, 600)
  }
}

/*@Component({
  selector: 'services-examples'
  ,template: servicesExamples
}) export class ServicesExamples {}*/

export const declarations = [
  AppComponent
  //,UiRouteReporter
  ,RouteReporter
  ,AnimationExamples
  ,OverviewExamples
  ,ComponentsExamples
  ,PipesExamples
  //,ServicesExamples
  ,ProviderExamples
  ,...states
]

//const fxLoadTime = Date.now()
//ackFx.upgradeComponents(declarations)
//console.log('FX Load Time', Date.now()-fxLoadTime+'ms')

@NgModule({
  imports:[
    BrowserModule
    ,BrowserAnimationsModule
    ,FormsModule
    //,UIRouterModule.forRoot(routeConfig)
    ,routing
    ,Ng2PageScrollModule.forRoot()
    ,AckModule//.forRoot()
    //,AckModule//.forRoot()
  ]
  //,declarations: [ AppComponent ]
  ,declarations: declarations
  ,providers:[
    RouteWatchReporter
    //,UiRouteWatchReporter
  ]
  ,bootstrap: [ AppComponent ]
  //,schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class AppModule {}

console.log('Ng Define Time', Date.now()-strapTime+'ms', '@', getServerTime())

function getServerTime(d?){
  d = d || new Date()
  var h=d.getHours(),t='AM',m=d.getMinutes();m=m<10?'0'+m:m;h=h>=12?(t='PM',h-12||12):h==0?12:h;return ('0'+h).slice(-2)+':'+m+':'+('0'+d.getSeconds()).slice(-2)+'.'+d.getMilliseconds()+' '+t
}
