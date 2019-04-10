//import { StateService,TransitionService,Transition } from "ui-router-ng2";
import {
  Route, Router, NavigationEnd,
  ActivatedRoute, ActivatedRouteSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';

export interface currentRoute{
  ActivatedRoute : ActivatedRoute
  config  : Route//|ActivatedRoute
  params  : any
  parent? : currentRoute//|ActivatedRoute
}

/** A stateful connection to ui-router history
 - .stateChange() with arguments MUST be called at every state change
 - Has 99% accuracy of knowing if OS back or forward button has been used
   - Their is no web event for knowing if OS button is used. 
*/
@Injectable() export class RouteWatchReporter{
  current  : any = {}
  $history : any
  $state   : any
  $window  : any
  
  historyPos : number = 0
  isBackMode : boolean = false
  isOsAction : boolean = false
  isNextBackMode : boolean = false
  isNextBackHistory : boolean = false

  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute
  ){
    this.activatedRoute = activatedRoute
    this.$window = ()=>window
    this.$history = []

    router.events.subscribe(event=>{
      if(event.constructor==NavigationEnd){
        //const params = {}//COMING REALLY SOON
        const current = this.getCurrent()
        this.recordStateChange(
          current.config,
          current.params
         )
      }
    })

    this.current = this.getCurrent()
  }

  getCurrent():currentRoute{
    let parent = this.activatedRoute
    let target = this.activatedRoute
    while(target.firstChild){
      parent = target
      target = target.firstChild
    }

    const snapshot = target.snapshot || <ActivatedRouteSnapshot>{}
    const parentSnap = parent.snapshot || <ActivatedRouteSnapshot>{}

    return {
      ActivatedRoute:target,
      config:<Route>(target.routeConfig || target),
      params:snapshot.params,
      parent:{
        ActivatedRoute:parent,
        config:<Route>(parent.routeConfig || parent),
        params:parentSnap.params
      }
      //...target.routeConfig//may want to do away with this
    }
  }

  getCurrentConfig():Route{
    let target = this.activatedRoute
    while(target.firstChild)target=target.firstChild
    return <Route>(target.routeConfig || target)
  }

  getCurrentParams():any{
    let target = this.activatedRoute
    while(target.firstChild)target=target.firstChild
    return target.snapshot.params
  }

  isTrapHistory(toState, toParams):boolean{
    return this.isBackHistory(toState, toParams) && this.isForwardHistory(toState, toParams)
  }

  isBackHistory(toState, toParams):boolean{
    const $history = this.$history
    const isEven = $history.length > this.historyPos+1
    const isNameMatch = isEven && toState && toState.name==$history[this.historyPos+1].name
    return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos+1].params)
  }

  isForwardHistory(toState, toParams):boolean{
    const $history = this.$history
    const isEven = !this.isNextBackMode && this.historyPos && $history.length>this.historyPos
    const isNameMatch = isEven && toState && toState.name==$history[this.historyPos-1].name
    return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos-1].params)
  }

  isParamsMatch(toParams, otherParams):boolean{
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

    if(!toState)return

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

    return {
      isBackButton    : isBackButton,
      isNotBackButton : isNotBackButton
    }
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