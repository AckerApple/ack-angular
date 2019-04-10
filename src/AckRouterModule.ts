import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RouteWatchReporter } from "./RouteWatchReporter"
import { RouteReporter } from "./RouteReporter.directive"

@NgModule({
  imports:[
    CommonModule,
    RouterModule
  ]
  ,declarations: [ RouteReporter ]
  ,providers:[ RouteWatchReporter ],
  exports:[ RouteReporter, RouterModule ]
}) export class AckRouterModule {}

