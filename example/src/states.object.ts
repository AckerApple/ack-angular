//import { StateService } from "ui-router-ng2";
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
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

export const menu = [
  {
    name: 'overview',
    path: 'overview',
    component: OverviewExamples,
    data:{
      title:"Overview"
    },
  },{
    name: 'components',
    path: 'components',
    component: ComponentsExamples,
    data:{
      title:"Components"
    }
  },{
    name: 'pipes',
    path: 'pipes',
    component: PipesExamples,
    data:{
      title:"Pipes"
    }
  },{
    name: 'animations',
    path: 'animations',
    component: AnimationExamples,
    data:{
      title:"Animations"
    }
  },{
    name: 'providers',
    path: 'providers',
    component: ProviderExamples,
    data:{
      title:"Providers"
    }
  },{
    name: 'jjswoz',
    path: 'jjswoz',
    component: JjsWoz,
    data:{
      title:"JJ's WoZ"
    }
  }
]

export const routes: Routes = [
  ...menu,
  {path: '',   redirectTo: 'overview', pathMatch: 'full' },//default route
  {path: '**',   redirectTo: 'overview' }//404
]

export const routeConfig: ExtraOptions = {
  useHash:true,
  initialNavigation: 'enabledNonBlocking',
  enableTracing:false
}
export const routing = RouterModule.forRoot(routes, routeConfig)
