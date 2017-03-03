import { TransitionService } from "ui-router-ng2";
import { Component,Input } from "@angular/core"
import { StateManagerService } from "../services/StateManagerService.class"
//import injector from "../injector"
//const deps = ['StateManagerService','$state','$rootScope','$document', '$scope', '$timeout']

@Component({
  selector: 'state-doc-watcher', template:''
}) export class StateDocWatcher{
  public $document
  public $scope
  public isMouseOut : boolean
  public StateManagerService : StateManagerService
  static parameters = [[StateManagerService],[TransitionService]]
  public isBackButton
  public isNotBackButton
  public mouseover

  @Input() public ref//variable reference
  @Input() public onStateChange
  @Input() public onLoad

  constructor(public stateManagerService, public transitionService
  ){
    //inject(arguments, this)
    //this.stateManagerService = stateManagerService
console.log('stateManagerService', this.stateManagerService)
    this.$document = document
console.log('transitionService', this.transitionService, transitionService)
    this.isBackButton = ()=>{
      this.isMouseOut = true;this.stateManagerService.isOsAction=true
    }
    
    this.isNotBackButton = ()=>{
      this.stateManagerService.isOsAction=false
    }
    
    this.mouseover = ()=>{
      this.isMouseOut = false
    }

    transitionService.onSuccess({to:'*'}, transition=>{
      this.stateManagerService.recordStateChange(transition._targetState._definition, transition._targetState._params)

      console.log('x334',this.stateManagerService)
    })
/*
    this.$rootScope.$on('$stateChangeStart', ()=>this.stateManagerService.stateChange())

    this.$rootScope.$on('$stateChangeSuccess', (event, toState, toParams)=>{
      this.$timeout(()=>{
        if(!this.isMouseOut){
          this.stateManagerService.isNextBackMode = false
          this.stateManagerService.isOsAction=true
        }

        this.onStateChange({
          state:toState,
          toState:toState,
          params:toParams,
          current:this.stateManagerService.$state.current
        })
      },1)//allow a digest to occur to ng-model population
    })
*/
    this.$document.addEventListener('mouseout', this.isBackButton)
    this.$document.addEventListener('mouseover', this.mouseover)
    this.$document.addEventListener('mousedown', this.isNotBackButton)
  }

  ngOnDestroy(){
    this.$document.removeEventListener('mouseout', this.isBackButton)
    this.$document.removeEventListener('mouseover', this.isNotBackButton)
    this.$document.removeEventListener('mousedown', this.isNotBackButton)
  }

  ngOnInit(){
    this.ref = this.stateManagerService
    
    if(this.onLoad){    
      this.onLoad({
        state:this.stateManagerService.$state.current,
        params:this.stateManagerService.$state.params,
        current:this.stateManagerService.$state.current
      })
    }
  }

  goBackTo(name, params){
    this.stateManagerService.goBackTo(name, params)
  }

  tryBack(name, params){
    this.stateManagerService.tryBack(name, params)
  }
}
/*
const inject = injector(StateDocWatcher, deps)

export default {
  bindings:{as:'=?', onStateChange:'&', onLoad:'&'}
  ,controller:StateDocWatcher
}*/