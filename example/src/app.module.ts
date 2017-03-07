import { UIRouter, UIRouterModule, StateService, TransitionService } from "ui-router-ng2";
import { Input, Component, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import * as states from "./states.object";
import rState from "./routerState.object";

import { RouteWatcher } from "../../src/RouteWatcher.class"
import { RouteDocWatcher } from "../../src/RouteDocWatcher.component"

import {version} from "../../package.json"
import * as ackAppStageTemplate from './templates/ack-app-stage.pug'

import { animateDefaults, animateConfig } from 'ng2-animate';
animateDefaults.igniter = 'void';

import * as pipes from "../../src/pipes.array"

@Component({
  selector: 'ack-app-stage'
  ,template: ackAppStageTemplate()
  ,animations:[
    animateConfig({duration:100, easing:'ease-in'}),
    animateConfig({
      easing:'linear', name:'stage',
      whileStyle:{
        position: 'absolute', width:'100%', 'overflow':'hidden'
      }
    })
  ]
}) class AppComponent {
  public version = version
  public list = ['abc','defg','hij','klm','opq','rst','uvx','yz']
}

const declarations = [
  RouteDocWatcher,AppComponent
//  ,RouteDocWatcher
]

declarations.push.apply(declarations, states.declarations)
declarations.push.apply(declarations, pipes.declarations)

const ngModule = {
  imports:[
    BrowserModule
    ,UIRouterModule.forRoot({
      states: states.states,
      useHash:true
      ,otherwise:'/overview'
    })
  ],
  declarations: declarations,
  providers:[
    RouteWatcher
  ],
  bootstrap: [AppComponent]
}



@NgModule(ngModule) export class AppModule { }
