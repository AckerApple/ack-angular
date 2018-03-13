window['strapTime'] = Date.now()
import { getServerTime } from "./functions"
import {
  Input,
  Component,
  NgModule
} from '@angular/core';
import { AckFxModule } from "ack-angular-fx"
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteWatchReporter } from "../../src/RouteWatchReporter"
import { RouteReporter } from "../../src/RouteReporter.directive"
import { AckModule } from "../../src"

import {
  Ng2PageScrollModule,
  PageScrollService,
  PageScrollInstance
} from 'ng2-page-scroll'

import { ProviderExamples } from "./ProviderExamples.component"
import { AppComponent } from "./AppComponent.component"
import { declarations as states, routing } from "./states.object"
import { AnimationExamples } from "./AnimationExamples.component"
import { JjsWoz } from "./JjsWoz.component"
import { OverviewExamples } from "./OverviewExamples.component"
import { ComponentsExamples } from "./ComponentsExamples.component"
import { PipesExamples } from "./PipesExamples.component"

export const declarations = [
  AppComponent
  ,RouteReporter
  ,AnimationExamples
  ,OverviewExamples
  ,ComponentsExamples
  ,PipesExamples
  ,ProviderExamples
  ,JjsWoz
  ,...states
]

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

@NgModule({
  imports:[
    BrowserModule
    ,BrowserAnimationsModule
    ,FormsModule
    ,HttpModule
    ,routing
    ,Ng2PageScrollModule.forRoot()
    ,AckModule
    ,AckFxModule
  ]
  ,declarations: declarations
  ,providers:[
    RouteWatchReporter
    //,UiRouteWatchReporter
  ]
  ,bootstrap: [ AppComponent ]
  //,schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class AppModule {}

console.log('Ng Define Time', Date.now()-window['strapTime']+'ms', '@', getServerTime())