//import { StateService } from "ui-router-ng2";
import { RouterModule } from '@angular/router';
import { Component} from '@angular/core';

@Component({template:''}) export class Overview{}
@Component({template:''}) export class Components{}
@Component({template:''}) export class Pipes{}
@Component({template:''}) export class Animations{}

export const declarations = [
  Overview,
  Components,
  Pipes,
  Animations
]

//deprecated : ui-router-ng2
export const states = [
  {name: 'overview', url: '/overview',  component: Overview},
  {name: 'components', url: '/components',  component: Components},
  {name: 'pipes', url: '/pipes',  component: Pipes},
  {name: 'animations', url: '/animations',  component: Animations}
]

export const routes = [
  {name: 'overview', path: 'overview',  component: Overview},
  {name: 'components', path: 'components',  component: Components},
  {name: 'pipes', path: 'pipes',  component: Pipes},
  {name: 'animations', path: 'animations',  component: Animations},
  {path: '',   redirectTo: 'overview', pathMatch: 'full' },//default route
  {path: '**',   redirectTo: 'overview' }//404
]

export const routeConfig = {useHash:true, initialNavigation:true, enableTracing:false}
export const routing = RouterModule.forRoot(routes, routeConfig)
