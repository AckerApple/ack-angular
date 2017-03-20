export const strapTime = Date.now()

import { Component, NgModule } from '@angular/core';
import { UIRouterModule } from "ui-router-ng2";
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//import { RouteDocWatcher } from "../../src/RouteDocWatcher.component"
import { RouteDocWatcher } from "./ack-angular/RouteDocWatcher.component"
//import { RouteWatcher } from "../../src/RouteWatcher.class"
import { RouteWatcher } from "./ack-angular/RouteWatcher.class"

import * as pipes from "../../src/pipes"
//import {version} from "../../package.json"



//import {version} from "../../package.json"
export const version = '0.0.4'

import * as ackFx from 'ack-angular-fx'
//import * as ackFx from './prefx'
import { fxArray } from './prefx'
//import { fxArray } from 'ack-angular-fx/prefx'
//console.log('array', JSON.stringify(array))
import * as states from "./states.object";

import { Ng2PageScrollModule } from 'ng2-page-scroll';


import * as ackAppStageTemplate from './templates/ack-app-stage.pug'
import * as animationExamples from './templates/animation-examples.pug'
import * as overviewExamples from './templates/overview-examples.pug'
import * as componentsExamples from './templates/components-examples.pug'
import * as pipesExamples from './templates/pipes-examples.pug'
import * as servicesExamples from './templates/services-examples.pug'

@Component({
  selector: 'ack-app-stage'
  //,template: 'hello world'//ackAppStageTemplate()
  //,template: ackAppStageTemplate()
  ,template: ackAppStageTemplate.string
  ,animations:fxArray
  //,animations:[{"name":"absoluteSwap","definitions":[{"stateNameExpr":"fadeOut","styles":{"styles":[{"display":"none"}],"offset":null}}]}]
}) export class AppComponent {
  public version = version
  //static parameters:any = [[window]]

  ngAfterViewInit(){
    console.log('Total Wire Time:', Date.now()-strapTime+'ms')
    if( window['startAckTime'] ){
      console.log('Total Script Load Time:', Date.now()-window['startAckTime']+'ms')
    }
  }
}

@Component({
  selector: 'animation-examples'
  //,template: 'hello world'//animationExamples()
  ,template: animationExamples.string
  ,animations:fxArray
}) export class AnimationExamples {
  public list = ['abc','defg','hij','klm','opq','rst','uvx','yz']
  //public delayArray = ackFx.delayArray
}

@Component({
  selector: 'overview-examples'
  //,template: 'hello world'//overviewExamples()
  ,template: overviewExamples.string
}) export class OverviewExamples {}

@Component({
  selector: 'components-examples'
  //,template: 'hello world'//componentsExamples()
  ,template: componentsExamples.string
  ,animations:fxArray
}) export class ComponentsExamples {}

@Component({
  selector: 'pipes-examples'
  //,template: 'hello world'//pipesExamples()
  ,template: pipesExamples.string
}) export class PipesExamples {}

@Component({
  selector: 'services-examples'
  //,template: 'hello world'//servicesExamples()
  ,template: servicesExamples.string
}) export class ServicesExamples {}

let declarations = [
  AppComponent,
  RouteDocWatcher,
  AnimationExamples,
  OverviewExamples,
  ComponentsExamples,
  PipesExamples,
  ServicesExamples,
  ...pipes.declarations,
  ...states.declarations
]

//const fxLoadTime = Date.now()
//ackFx.upgradeComponents(declarations, fxArray)
//console.log('FX Load Time', Date.now()-fxLoadTime+'ms')

const routeConfig = {
  states: states.states,
  useHash:true,
  otherwise:'/overview'
}

@NgModule({
  imports:[
    BrowserModule
    ,FormsModule
    ,UIRouterModule.forRoot(routeConfig)
    ,Ng2PageScrollModule.forRoot()
  ],
  declarations: declarations,
  providers:[RouteWatcher],
  bootstrap: [AppComponent]
}) export class AppModule {}

console.log('Ng Define Time', Date.now()-strapTime+'ms')