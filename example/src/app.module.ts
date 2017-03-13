import { UIRouter, UIRouterModule, StateService, TransitionService } from "ui-router-ng2";
import { Input, Component, NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouteWatcher } from "../../src/RouteWatcher.class"
import { RouteDocWatcher } from "../../src/RouteDocWatcher.component"
import * as ackFx from 'ack-angular-fx'
import * as pipes from "../../src/pipes"

import {version} from "../../package.json"
import rState from "./routerState.object";
import * as states from "./states.object";
import * as ackAppStageTemplate from './templates/ack-app-stage.pug'
import * as animationExamples from './templates/animation-examples.pug'
import * as overviewExamples from './templates/overview-examples.pug'
import * as componentsExamples from './templates/components-examples.pug'
import * as pipesExamples from './templates/pipes-examples.pug'
import * as servicesExamples from './templates/services-examples.pug'

import { Ng2PageScrollModule } from 'ng2-page-scroll';

@Component({
  selector: 'ack-app-stage'
  ,template: ackAppStageTemplate()
}) class AppComponent {
  public version = version
}

@Component({
  selector: 'animation-examples'
  ,template: animationExamples()
}) class AnimationExamples {
  public list = ['abc','defg','hij','klm','opq','rst','uvx','yz']
  public delayArray = ackFx.delayArray
}

@Component({
  selector: 'overview-examples'
  ,template: overviewExamples()
}) class OverviewExamples {}

@Component({
  selector: 'components-examples'
  ,template: componentsExamples()
}) class ComponentsExamples {}

@Component({
  selector: 'pipes-examples'
  ,template: pipesExamples()
}) class PipesExamples {}

@Component({
  selector: 'services-examples'
  ,template: servicesExamples()
}) class ServicesExamples {}

let declarations = [
  RouteDocWatcher,
  AppComponent,
  AnimationExamples,
  OverviewExamples,
  ComponentsExamples,
  PipesExamples,
  ServicesExamples
]

ackFx.upgradeComponents(declarations)

declarations = declarations.concat(states.declarations)
declarations = declarations.concat(pipes.declarations)

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
