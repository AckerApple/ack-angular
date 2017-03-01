//import { Injectable } from "@angular/core"
import { StateManagerService } from "../services/StateManagerService.class"
//import injector from "../injector"
//const deps = ['StateManagerService','$state','$rootScope','$document', '$scope', '$timeout']

export class StateDocWatcher{
  public $document
  public isMouseOut : boolean
  public StateManagerService : StateManagerService
  static parameters = [[StateManagerService]]

  constructor(public StateManagerService:StateManagerService){
    //inject(arguments, this)
    this.StateManagerService = StateManagerService
    this.$document = document

    const isBackButton = ()=>{
      this.isMouseOut = true;this.StateManagerService.isOsAction=true
    }
    
    const isNotBackButton = ()=>{
      this.StateManagerService.isOsAction=false
    }
    
    const mouseover = ()=>{
      this.isMouseOut = false
    }
/*
    this.$rootScope.$on('$stateChangeStart', ()=>this.StateManagerService.stateChange())

    this.$rootScope.$on('$stateChangeSuccess', (event, toState, toParams)=>{
      this.$timeout(()=>{
        if(!this.isMouseOut){
          this.StateManagerService.isNextBackMode = false
          this.StateManagerService.isOsAction=true
        }

        this.onStateChange({
          state:toState,
          toState:toState,
          params:toParams,
          current:this.StateManagerService.$state.current
        })
      },1)//allow a digest to occur to ng-model population
    })
*/
    this.$document[0].addEventListener('mouseout',isBackButton)
    this.$document[0].addEventListener('mouseover',mouseover)
    this.$document[0].addEventListener('mousedown',isNotBackButton)

    this.$scope.$on('$destroy',()=>{
      this.$document[0].removeEventListener('mouseout',isBackButton)
      this.$document[0].removeEventListener('mouseover',isNotBackButton)
      this.$document[0].removeEventListener('mousedown',isNotBackButton)
    })

  }

  $onInit(){
    this.as = this.StateManagerService
    this.onLoad({
      state:this.StateManagerService.$state.current,
      params:this.StateManagerService.$state.params,
      current:this.StateManagerService.$state.current
    })
  }

  goBackTo(name, params){
    this.StateManagerService.goBackTo(name, params)
  }

  tryBack(name, params){
    this.StateManagerService.tryBack(name, params)
  }
}
/*
const inject = injector(StateDocWatcher, deps)

export default {
  bindings:{as:'=?', onStateChange:'&', onLoad:'&'}
  ,controller:StateDocWatcher
}*/