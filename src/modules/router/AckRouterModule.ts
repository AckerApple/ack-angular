import {
  ModuleWithProviders, NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RouteWatchReporter } from "./RouteWatchReporter"
import { RouteReporter } from "./RouteReporter.directive"

export const providers = [ RouteWatchReporter ]

@NgModule({
  imports:[
    CommonModule,
    RouterModule
  ],
  declarations: [ RouteReporter ],
  //providers:providers,
  exports:[
    RouteReporter,
    RouterModule
  ]
}) export class AckRouterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AckRouterModule,
      providers: providers
    }
  }
}

