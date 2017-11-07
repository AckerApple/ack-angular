import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteWatchReporter } from "./RouteWatchReporter"
import { RouteReporter } from "./RouteReporter.directive"

@NgModule({
  imports:[CommonModule]
  ,declarations: [ RouteReporter ]
  ,providers:[ RouteWatchReporter ],
  exports:[ RouteReporter ]
}) export class AckRouteModule {}

