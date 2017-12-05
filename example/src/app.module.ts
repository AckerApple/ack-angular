export const strapTime = Date.now()
import { getServerTime } from "./functions"
import {
  ElementRef,
  Input,
  Component,
  NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouteWatchReporter } from "./ack-angular/RouteWatchReporter"
import { RouteReporter } from "./ack-angular/RouteReporter.directive"

//import { pipes, components as ackComponents } from "ack-angular"
import { AckModule } from "./ack-angular"

//Angular4
//import * as packJson from "../../package.json"

//Angular5
import * as packJson from "../../../../package.json"

import * as ackFx from 'ack-angular-fx'
import { fxArray } from './prefx'

import {
  Ng2PageScrollModule,
  PageScrollService,
  PageScrollInstance
} from 'ng2-page-scroll'

import { ProviderExamples } from "./ProviderExamples.component"

import {string as ackAppStageTemplate} from './templates/ack-app-stage.pug'
import {string as overviewExamples} from './templates/overview-examples.pug'
//import {string as servicesExamples} from './templates/services-examples.pug'

import { declarations as states, routing } from "./states.object"

@Component({
  selector: 'ack-app-stage'
  ,template: ackAppStageTemplate
  ,animations:fxArray
  //,animations:[]
  //,template:'Hello World<router-outlet></router-outlet>'
  //,template:'Hello World<div *ngIf="show" [@500]="\'slideInRight\'">Inner Content</div>'
}) export class AppComponent {
  panelAnim = 'slideInRight'
  version = packJson['version']
  screenWidthModel
  routeReporter
  stateName
  isSwaping
  isBackMode

  ngAfterViewInit(){
    console.log('Total Wire Time:', Date.now()-strapTime+'ms')
    if( window['startAckTime'] ){
      console.log('Overall Load Time:', Date.now()-window['startAckTime']+'ms', '@', getServerTime())
    }
  }
}

import { AnimationExamples } from "./AnimationExamples.component"

import {string as jjsWoz} from './templates/jjs-woz.pug'
@Component({
  selector: 'jjs-woz'
  ,template: jjsWoz
  //,animations:fxArray
  //,animations:[]
}) export class JjsWoz {
  constructor(public ElementRef:ElementRef){}

  ngOnInit(){
    this.ElementRef.nativeElement.getElementsByTagName('audio')[0].play()
  }
}

@Component({
  selector: 'overview-examples'
  ,template: overviewExamples
}) export class OverviewExamples {}

import { ComponentsExamples } from "./ComponentsExamples.component"

import {string as pipesExamples} from './templates/pipes-examples.pug'
@Component({
  selector: 'pipes-examples'
  ,template: pipesExamples
  ,animations:fxArray
}) export class PipesExamples {
  views:any = {}
  simpleArray = ['a','b','c']

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
  ,JjsWoz
  ,...states
]

//const fxLoadTime = Date.now()
//ackFx.upgradeComponents(declarations)
//console.log('FX Load Time', Date.now()-fxLoadTime+'ms')
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:[
    BrowserModule
    ,BrowserAnimationsModule
    ,FormsModule
    ,HttpModule
    //,HttpClientModule
    //,UIRouterModule.forRoot(routeConfig)
    ,routing
    ,Ng2PageScrollModule.forRoot()
    ,AckModule//.forRoot()
    //,AckModule//.forRoot()
  ]
  ,declarations: declarations
  ,providers:[
    RouteWatchReporter
    //,UiRouteWatchReporter
  ]
  ,bootstrap: [ AppComponent ]
  //,schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class AppModule {}

console.log('Ng Define Time', Date.now()-strapTime+'ms', '@', getServerTime())