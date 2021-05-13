window["strapTime"] = Date.now()
import { getServerTime } from "./functions"
import { NgModule } from "@angular/core";
import { AckFxModule } from "ack-angular-fx"
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AckRouterModule } from "../../src/modules/router/AckRouterModule"
import { AckOfflineModule } from "../../modules/offline/module";

import { AckModule } from "../../src"

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core'
import { NgxPageScrollModule } from "ngx-page-scroll"

import { ProviderExamples } from "./ProviderExamples.component"
import { AckAppStage } from "./AckAppStage.component"
import {
  declarations as states, routing
} from "./states.object"
import { AnimationExamples } from "./AnimationExamples.component"
import { JjsWoz } from "./JjsWoz.component"
import { OverviewExamples } from "./OverviewExamples.component"
import { ComponentsExamples } from "./ComponentsExamples.component"
import { PipesExamples } from "./PipesExamples.component"

export const declarations = [
  AckAppStage,
  AnimationExamples,
  OverviewExamples,
  ComponentsExamples,
  PipesExamples,
  ProviderExamples,
  JjsWoz,
  ...states
]

import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

export const imports = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  routing,
  NgxPageScrollCoreModule.forRoot({}),
  NgxPageScrollModule,
  AckRouterModule.forRoot(),
  AckModule.forRoot(),
  AckOfflineModule.forRoot(),
  AckFxModule
]

console.log("declarations",declarations)

@NgModule({
  imports:imports
  ,declarations: declarations
  ,providers:[]
  ,bootstrap: [ AckAppStage ]
  //,schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class AppModule {}

console.log("Ng Define Time", Date.now()-window["strapTime"]+"ms", "@", getServerTime())