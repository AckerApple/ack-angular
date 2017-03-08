import { UIRouter, UIRouterModule, StateService, TransitionService } from "ui-router-ng2";
import { Input, Component, NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouteWatcher } from "../../src/RouteWatcher.class"
import { RouteDocWatcher } from "../../src/RouteDocWatcher.component"
import { ackAnimations, delayArray, upgradeComponents } from '../../src/ackAnimations'
import * as pipes from "../../src/pipes.array"

import {version} from "../../package.json"
import rState from "./routerState.object";
import * as states from "./states.object";
import * as ackAppStageTemplate from './templates/ack-app-stage.pug'
import * as animationExamples from './templates/animation-examples.pug'

import { Ng2PageScrollModule } from 'ng2-page-scroll';

@Component({
  selector: 'ack-app-stage'
  ,template: ackAppStageTemplate()
//  ,animations: ackAnimations
}) class AppComponent {
  public version = version
}

@Component({
  selector: 'animation-examples'
  ,template: animationExamples()
}) class AnimationExamples {
  public list = ['abc','defg','hij','klm','opq','rst','uvx','yz']
  public delayArray = delayArray
}


const declarations = [
  RouteDocWatcher,
  AppComponent,
  AnimationExamples
]

upgradeComponents(declarations)

declarations.push.apply(declarations, states.declarations)
declarations.push.apply(declarations, pipes.declarations)

const ngModule = {
  imports:[
    BrowserModule
    ,FormsModule
    ,UIRouterModule.forRoot({
      states: states.states,
      useHash:true
      ,otherwise:'/overview'
    })
    ,Ng2PageScrollModule.forRoot()
  ],
  declarations: declarations,
  providers:[
    RouteWatcher
  ],
  bootstrap: [AppComponent]
}



@NgModule(ngModule) export class AppModule { }
