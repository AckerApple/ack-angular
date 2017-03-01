/** A stateful connection to ui-router history
 - .stateChange() with arguments MUST be called at every state change
*/
export class StateManagerService{
  public stateHistory;
  public $state;
  public $window;
  public hisPos : number;
  public isNextBackMode : boolean
  public isNextBackHistory : boolean
  public isBackMode : boolean
  public isOsAction : boolean

  constructor($state, $window){
    this.$state = $state
    this.$window = $window || window

    //inject(arguments, this)
    this.stateHistory = []
    this.hisPos = 0
  }

  isBackHistory(toState, toParams){
    const isEven = this.stateHistory.length>this.hisPos
    const isNameMatch = isEven && toState && toState.name==this.stateHistory[this.hisPos].name
    return isNameMatch && this.isParamsMatch(toParams, this.stateHistory[this.hisPos].params)
  }

  isForwardHistory(toState, toParams){
    const isEven = !this.isNextBackMode && this.hisPos && this.stateHistory.length>this.hisPos
    const isNameMatch = isEven && toState && toState.name==this.stateHistory[this.hisPos-1].name
    return isNameMatch && this.isParamsMatch(toParams, this.stateHistory[this.hisPos-1].params)
  }

  isParamsMatch(toParams, otherParams){
    for(let x in toParams){
      if(toParams[x]!=otherParams[x]){
        return false
      }
    }
    return true
  }

  /**
    @event Object - not used
    @toState Object{name} - required
    @toParams Object{} - only recorded to history, not used otherwise
    @fromState Object{name} - not used
    @fromParams Object{} - not used
  */
  stateChange(event, toState, toParams, fromState, fromParams){
    this.recordStateChange(toState, toParams)
  }

  recordStateChange(toState, toParams){
    const isFowardHistory = this.isForwardHistory(toState, toParams)
    const isBackHistory = this.isNextBackHistory || this.isBackHistory(toState, toParams)
    this.isBackMode = this.isNextBackMode || (this.isOsAction && isBackHistory)

    if(isFowardHistory){
      this.isBackMode = false
      --this.hisPos
    }else if(this.isBackMode){
      ++this.hisPos
    }else{
      this.hisPos = 0
      this.stateHistory.unshift({
        name:this.$state.current.name,
        state:this.$state.current,
        params:this.$state.params
        //params:fromParams
      })
    }

    this.isNextBackHistory = false
  }

  goBackTo(name, params){
    this.isNextBackMode = true
    this.isNextBackHistory = true
    this.$state.go(name, params)
  }

  tryBack(name, params){
    if(this.stateHistory.length){
      this.isNextBackMode = true
      this.isNextBackHistory = true
      this.$window.history.back()
      /*
      console.log('go back', this.hisPos, this.stateHistory.length, this.stateHistory)
      this.$state.go(this.stateHistory[this.hisPos].name, this.stateHistory[this.hisPos].params)
      */
    }else{
      this.goBackTo(name, params)
    }
  }
}