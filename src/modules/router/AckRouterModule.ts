import {
  ModuleWithProviders, NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RouteWatchReporter } from "./RouteWatchReporter"
import { RouteHistory } from "./RouteHistory.provider"
import { RouteReporter } from "./RouteReporter.directive"

export { RouteReporter } from "./RouteReporter.directive"

const providers = [ RouteWatchReporter, RouteHistory ]

@NgModule({
  imports:[
    CommonModule,
    RouterModule
  ],
  declarations: [ RouteReporter ],
  providers: providers,
  exports:[
    RouteReporter,
    RouterModule
  ]
}) export class AckRouterModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AckRouterModule,
      providers: providers
    }
  }
}

