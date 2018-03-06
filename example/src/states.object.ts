//import { StateService } from "ui-router-ng2";
import { RouterModule } from '@angular/router';
import { Component} from '@angular/core';

@Component({template:''}) export class FakeComponent{}

export const declarations = [
  FakeComponent
]

export const routes = [
  {name: 'overview', path: 'overview',  component: FakeComponent},
  {name: 'components', path: 'components',  component: FakeComponent},
  {name: 'pipes', path: 'pipes',  component: FakeComponent},
  {name: 'animations', path: 'animations',  component: FakeComponent},
  {name: 'providers', path: 'providers',  component: FakeComponent},
  {name: 'jjswoz', path: 'jjswoz',  component: FakeComponent},
  {path: '',   redirectTo: 'overview', pathMatch: 'full' },//default route
  {path: '**',   redirectTo: 'overview' }//404
]

export const routeConfig = {useHash:true, initialNavigation:true, enableTracing:false}
export const routing = RouterModule.forRoot(routes, routeConfig)
