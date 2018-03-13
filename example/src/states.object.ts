//import { StateService } from "ui-router-ng2";
import { RouterModule } from '@angular/router';
import { Component} from '@angular/core';
import { ComponentsExamples } from './ComponentsExamples.component';
import { OverviewExamples } from './OverviewExamples.component';
import { PipesExamples } from './PipesExamples.component';
import { ProviderExamples } from './ProviderExamples.component';
import { AnimationExamples } from './AnimationExamples.component';
import { JjsWoz } from './JjsWoz.component';

@Component({template:''}) export class FakeComponent{}

export const declarations = [
  FakeComponent
]

export const routes = [
  {
  	name: 'overview',
  	path: 'overview',
  	component: OverviewExamples
  },{
  	name: 'components',
  	path: 'components',
  	component: ComponentsExamples
  },{
    name: 'pipes',
    path: 'pipes',
    component: PipesExamples
  },{
    name: 'animations',
    path: 'animations',
    component: AnimationExamples
  },{
    name: 'providers',
    path: 'providers',
    component: ProviderExamples
  },{
    name: 'jjswoz',
    path: 'jjswoz',
    component: JjsWoz
  },
  {path: '',   redirectTo: 'overview', pathMatch: 'full' },//default route
  {path: '**',   redirectTo: 'overview' }//404
]

export const routeConfig = {useHash:true, initialNavigation:true, enableTracing:false}
export const routing = RouterModule.forRoot(routes, routeConfig)
