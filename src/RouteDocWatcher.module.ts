import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouteDocWatcher } from './RouteDocWatcher.component';
import { RouteWatcher } from './RouteWatcher.class';

@NgModule({
  declarations: [RouteDocWatcher],
  exports: [RouteWatcher,RouteDocWatcher]
}) export class RouteDocWatcherClass {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: RouteDocWatcherClass, providers: []}
  }
}