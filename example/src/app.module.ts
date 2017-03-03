import { UIRouter, UIRouterModule, StateService, TransitionService } from "ui-router-ng2";
import { Injectable,Inject,forwardRef,Component,NgModule} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import * as states from "./states.object";
import rState from "./routerState.object";

import { StateManagerService } from "../../src/services/StateManagerService.class"
import { StateDocWatcher } from "../../src/components/StateDocWatcher.class"

//import * as pack from "../package.json"
//console.log('pack', pack)

import * as rjonAppStageTemplate from './templates/rjon-app-stage.pug'

import { animateDefaults, animateConfig } from 'ng2-animate';
animateDefaults.igniter = 'void';

@Component({
  selector: 'rjon-app-stage'
  ,template: rjonAppStageTemplate()
  ,animations:[
    animateConfig({duration:100, easing:'ease-in'}),
    animateConfig({
      easing:'linear', name:'stage',
      whileStyle:{position: 'absolute', width:'100%'}
    })
  ]
}) class AppComponent {
  static parameters = [[StateService],[TransitionService],[StateManagerService]]

  date = Date.now()
  list = ['abc','defg','hij','klm','opq','rst','uvx','yz']

  constructor(
    public stateService, public transitionService, public stateManagerService
    /*
    @Inject(forwardRef(() => StateService)) public stateService: StateService
    ,@Inject(forwardRef(() => TransitionService)) public transitionService: TransitionService
    */
  ){
    //this.stateManagerService = new StateManagerService(stateService, window)
    this.stateManagerService.test0 = 22
    transitionService.onSuccess({to:'*'}, transition=>{
      this.stateManagerService.recordStateChange(transition._targetState._definition, transition._targetState._params)
    })
  }

  checkState(){
    console.log('this.stateService', this.stateService)
    //console.log('this.stateRegistry', )
  }
}

const declarations = [
  StateDocWatcher,AppComponent
//  ,StateDocWatcher
]
declarations.push.apply(declarations, states.declarations)
const ngModule = {
  imports:[
    BrowserModule
    ,UIRouterModule.forRoot({
      states: states.states,
      useHash:true
      ,otherwise:'/building'
    })
  ],
  declarations: declarations,
  providers:[
    StateManagerService
  ],
  bootstrap: [AppComponent]
}



@NgModule(ngModule) export class AppModule { }
