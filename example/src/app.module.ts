window["strapTime"] = Date.now()
import { getServerTime } from "./functions"
import {
  Input,
  Component,
  NgModule
} from "@angular/core";
import { AckFxModule } from "ack-angular-fx"
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteWatchReporter } from "../../src/RouteWatchReporter"
import { RouteReporter } from "../../src/RouteReporter.directive"
import { AckModule } from "../../src"

import { NgxPageScrollModule } from "ngx-page-scroll"

import { ProviderExamples } from "./ProviderExamples.component"
import { AckAppStage } from "./AckAppStage.component"
import { declarations as states, routing } from "./states.object"
import { AnimationExamples } from "./AnimationExamples.component"
import { JjsWoz } from "./JjsWoz.component"
import { OverviewExamples } from "./OverviewExamples.component"
import { ComponentsExamples } from "./ComponentsExamples.component"
import { PipesExamples } from "./PipesExamples.component"

export const declarations = [
  AckAppStage
  ,RouteReporter
  ,AnimationExamples
  ,OverviewExamples
  ,ComponentsExamples
  ,PipesExamples
  ,ProviderExamples
  ,JjsWoz
  ,...states
]

import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports:[
    BrowserModule
    ,BrowserAnimationsModule
    ,FormsModule
    ,HttpClientModule
    ,routing
    ,NgxPageScrollModule
    ,AckModule
    ,AckFxModule
  ]
  ,declarations: declarations
  ,providers:[
    RouteWatchReporter
    //,UiRouteWatchReporter
  ]
  ,bootstrap: [ AckAppStage ]
  //,schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class AppModule {}

console.log("Ng Define Time", Date.now()-window["strapTime"]+"ms", "@", getServerTime())