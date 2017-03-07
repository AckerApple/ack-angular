import { StateService } from "ui-router-ng2";
import {forwardRef, Inject, Component} from '@angular/core';
import rState from './routerState.object';

export const declarations = []

function state(name){
  @Component({
    template:''//<h3>Hello {{routerState.current.name}} world!</h3>' 
  }) class StateDef {
    public routerState
    public parameters [[StateService]]

    constructor(public stateService: StateService){
      this.routerState = stateService
      this.routerState.current = {name:name}
    }
  }

  declarations.push(StateDef)

  return {
    name: name, url: '/'+name,  component: StateDef
  }
}

export const states = [
  state('overview'),
  state('components'),
  state('pipes'),
  state('services'),
  state('animations')
]
