export const strapTime = Date.now()

import {
  Input,
  Component,
  NgModule
  //,CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { UiRouteWatchReporter } from "ack-angular/UiRouteWatchReporter"
//import { UiRouteReporter } from "ack-angular/UiRouteReporter.component"

import { RouteWatchReporter } from "ack-angular/RouteWatchReporter"
import { RouteReporter } from "ack-angular/RouteReporter.component"

//import { pipes, components as ackComponents } from "ack-angular"
import { AckModule } from "ack-angular"

import * as packJson from "ack-angular/package.json"

import * as ackFx from 'ack-angular-fx'
import { fxArray } from './prefx'

import {
  Ng2PageScrollModule,
  PageScrollService,
  PageScrollInstance
} from 'ng2-page-scroll'

import { ProviderExamples } from "./ProviderExamples.component"

import {string as ackAppStageTemplate} from './templates/ack-app-stage.pug'
import {string as animationExamples} from './templates/animation-examples.pug'
import {string as overviewExamples} from './templates/overview-examples.pug'
import {string as componentsExamples} from './templates/components-examples.pug'
import {string as pipesExamples} from './templates/pipes-examples.pug'
//import {string as servicesExamples} from './templates/services-examples.pug'

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
  selector: 'components-examples'
  ,template: componentsExamples
  ,animations:fxArray
}) export class ComponentsExamples {
  public error
  public contentArray = []

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
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:[
    BrowserModule
    ,BrowserAnimationsModule
    ,FormsModule
    ,HttpModule
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