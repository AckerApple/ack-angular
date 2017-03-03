import {StateService} from "ui-router-ng2";
import {forwardRef, Inject, Component} from '@angular/core';
import rState from './routerState.object';

export const declarations = []

function state(name){
  @Component({
    template:'<h3>Hello {{routerState.current.name}} world!</h3>' 
  }) class building {
    public routerState

    constructor(@Inject(forwardRef(() => StateService)) public stateService: StateService){
      this.routerState = stateService
      this.routerState.current = {name:name}
    }
  }

  declarations.push(building)

  return {
    name: name, url: '/'+name,  component: building
  }
}

export const states = [
  state('building'),
  state('reviewing'),
  state('testing')
]
