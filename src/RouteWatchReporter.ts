//import { StateService,TransitionService,Transition } from "ui-router-ng2";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';


/** A stateful connection to ui-router history
 - .stateChange() with arguments MUST be called at every state change
 - Has 99% accuracy of knowing if OS back or forward button has been used
   - Their is no web event for knowing if OS button is used. 
*/
@Injectable() export class RouteWatchReporter{
  public current : any = {}
  public $history : any
  public $state : any
  public $window : any
  
  public historyPos : number = 0
  public isNextBackMode : boolean = false
  public isNextBackHistory : boolean = false
  public isBackMode : boolean = false
  public isOsAction : boolean = false
  //public stateService : StateService
  //public activatedRoute : ActivatedRoute
  //static parameters = [[Router, ActivatedRoute]]

  constructor(public router:Router, public activatedRoute:ActivatedRoute){
    this.activatedRoute = activatedRoute
    this.$window = ()=>window
    this.$history = []

    router.events.subscribe(event=>{
      if(event.constructor==NavigationEnd){
        const params = {}//COMING REALLY SOON
        const current = this.getCurrent()
        this.recordStateChange(current.config, current.params)
      }
    })

    this.current = this.getCurrent()
  }

  getCurrent():any{
    let target = this.activatedRoute
    while(target.firstChild)target=target.firstChild
    return {
      config:target.routeConfig,
      params:target.snapshot.params
      //...target.routeConfig//may want to do away with this
    }
  }

  getCurrentConfig():any{
    let target = this.activatedRoute
    while(target.firstChild)target=target.firstChild
    return target.routeConfig
  }

  getCurrentParams():any{
    let target = this.activatedRoute
    while(target.firstChild)target=target.firstChild
    return target.snapshot.params
  }

  isTrapHistory(toState, toParams){
    return this.isBackHistory(toState, toParams) && this.isForwardHistory(toState, toParams)
  }

  isBackHistory(toState, toParams){
    const $history = this.$history
    const isEven = $history.length > this.historyPos+1
    const isNameMatch = isEven && toState && toState.name==$history[this.historyPos+1].name
    return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos+1].params)
  }

  isForwardHistory(toState, toParams){
    const $history = this.$history
    const isEven = !this.isNextBackMode && this.historyPos && $history.length>this.historyPos
    const isNameMatch = isEven && toState && toState.name==$history[this.historyPos-1].name
    return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos-1].params)
  }

  isParamsMatch(toParams, otherParams){
    if( !toParams || !otherParams ){    
      return false
    }

    for(let x in toParams){
      if(toParams[x]!=otherParams[x]){
        return false
      }
    }

    return true
  }

  recordStateChange(toState, toParams){
    this.current = { params:toParams, config:toState }
    let isForward = this.isForwardHistory(toState, toParams)
    let isBackHistory = this.isNextBackHistory || this.isBackHistory(toState, toParams)

    if(this.isOsAction && this.isTrapHistory(toState, toParams)){
      if(this.isBackMode){
        isForward = false
      }else{
        isBackHistory = false
      }
    }else{
      this.isBackMode = this.isNextBackMode || (this.isOsAction && isBackHistory)
    }

    const $history = this.$history

    if(isForward){
      --this.historyPos
    }else if(this.isBackMode){
      ++this.historyPos
    }else{
      //const $state = this.$state()
      this.historyPos = 0
      const hist = {name:toState.name, params:toParams}

      if( !Object.keys(toParams).length ){
        delete hist.params
      }

      $history.unshift(hist)
    }

    this.isNextBackHistory = false
  }

  goBackTo(name, params){
    this.isNextBackMode = true
    this.isNextBackHistory = true
    this.$state().go(name, params)
  }

  tryBack(name, params){
    if(this.$history.length){
      this.isNextBackMode = true
      this.isNextBackHistory = true
      this.$window().history.back()
    }else{
      this.goBackTo(name, params)
    }
  }

  watchDocument($document){
    this.watchDocByCallbacks($document, this.getDocumentCallbacks())
  }

  getDocumentCallbacks(){
    const isBackButton = ()=>{
      this.isOsAction = true
    }
    
    const isNotBackButton = ()=>{
      this.isOsAction = false
    }

    return {isBackButton:isBackButton, isNotBackButton:isNotBackButton}
  }

  watchDocByCallbacks($document, callbacks){
    $document.addEventListener('mouseout', callbacks.isBackButton)
    //$document.addEventListener('mouseover', callbacks.mouseover)
    $document.addEventListener('mousedown', callbacks.isNotBackButton)
  }

  unwatchDocByCallbacks($document, callbacks){
    $document.removeEventListener('mouseout', callbacks.isBackButton)
    $document.removeEventListener('mouseover', callbacks.isNotBackButton)
    $document.removeEventListener('mousedown', callbacks.isNotBackButton)    
  }
}