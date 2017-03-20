import { StateService } from "ui-router-ng2";
import { Component} from '@angular/core';

export function getDeclarations(){
  return declarations
}

export class StateDef {
  public routerState:any
  public parameters:any = [[StateService]]

  constructor(public stateService: StateService){
    this.routerState = stateService
    this.routerState.current = {name:name}
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

export const states = [
  {name: 'overview', url: '/overview',  component: Overview},
  {name: 'components', url: '/components',  component: Components},
  {name: 'pipes', url: '/pipes',  component: Pipes},
  {name: 'services', url: '/services',  component: Services},
  {name: 'animations', url: '/animations',  component: Animations}
]