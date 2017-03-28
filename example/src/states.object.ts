//import { StateService } from "ui-router-ng2";
import { Component} from '@angular/core';

export class StateDef {
  //public routerState:any
  //public parameters:any = [[StateService]]

  //constructor(public stateService: StateService){
  constructor(){
    //this.routerState = stateService
    //this.routerState.current = {name:name}
  }
}

@Component({template:''}) export class Overview extends StateDef {}
@Component({template:''}) export class Components extends StateDef {}
@Component({template:''}) export class Pipes extends StateDef {}
@Component({template:''}) export class Services extends StateDef {}
@Component({template:''}) export class Animations extends StateDef {}

export const declarations = [
  Overview,
  Components,
  Pipes,
  Services,
  Animations
]


//ui-router-ng2
export const states = [
  //{name: 'overview', url: '/overview',  component: Overview},
  //{name: 'components', url: '/components',  component: Components},
  //{name: 'pipes', url: '/pipes',  component: Pipes},
  //{name: 'services', url: '/services',  component: Services},
  //{name: 'animations', url: '/animations',  component: Animations}
]

export const routes = [
  {name: 'overview', path: 'overview',  component: Overview},
  {name: 'components', path: 'components',  component: Components},
  {name: 'pipes', path: 'pipes',  component: Pipes},
  {name: 'services', path: 'services',  component: Services},
  {name: 'animations', path: 'animations',  component: Animations},
  {path: '',   redirectTo: 'overview', pathMatch: 'full' },
  {path: '**',   redirectTo: '' }
]