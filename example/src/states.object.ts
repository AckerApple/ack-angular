//import { StateService } from "ui-router-ng2";
import { RouterModule } from '@angular/router';
import { Component} from '@angular/core';

@Component({template:''}) export class Overview{}
@Component({template:''}) export class Components{}
@Component({template:''}) export class Pipes{}
@Component({template:''}) export class Animations{}
@Component({template:''}) export class Providers{}

export const declarations = [
  Overview,
  Components,
  Pipes,
  Animations,
  Providers
]

export const routes = [
  {name: 'overview', path: 'overview',  component: Overview},
  {name: 'components', path: 'components',  component: Components},
  {name: 'pipes', path: 'pipes',  component: Pipes},
  {name: 'animations', path: 'animations',  component: Animations},
  {name: 'providers', path: 'providers',  component: Providers},
  {path: '',   redirectTo: 'overview', pathMatch: 'full' },//default route
  {path: '**',   redirectTo: 'overview' }//404
]

export const routeConfig = {useHash:true, initialNavigation:true, enableTracing:false}
export const routing = RouterModule.forRoot(routes, routeConfig)
