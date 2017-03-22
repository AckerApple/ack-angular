import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouteDocWatcher } from './RouteDocWatcher.component';
import { RouteWatcher } from './RouteWatcher.class';

@NgModule({
  imports: [CommonModule],
  providers: [ RouteWatcher ],
  declarations: [ RouteDocWatcher ]
}) export class RouteDocWatcherClass {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: RouteDocWatcherClass, providers: [RouteWatcher]}
  }
}