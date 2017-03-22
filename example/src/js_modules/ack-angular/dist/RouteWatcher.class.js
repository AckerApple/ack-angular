import { StateService, TransitionService } from "ui-router-ng2";
/** A stateful connection to ui-router history
 - .stateChange() with arguments MUST be called at every state change
 - Has 99% accuracy of knowing if OS back or forward button has been used
   - Their is no web event for knowing if OS button is used.
*/
export class RouteWatcher {
    constructor(StateService, TransitionService) {
        this.StateService = StateService;
        this.TransitionService = TransitionService;
        this.historyPos = 0;
        this.isNextBackMode = false;
        this.isNextBackHistory = false;
        this.isBackMode = false;
        this.isOsAction = false;
        const stateHistory = [];
        this.$state = () => StateService;
        this.$window = () => window;
        //this.$history = ()=>stateHistory
        this.$history = stateHistory;
        TransitionService.onStart({ to: '*' }, (transition) => {
            this.recordStateChange(transition.targetState().$state(), transition.targetState().params());
            //this.recordStateChange(transition._targetState._definition, transition._targetState._params)
        });
    }
    isTrapHistory(toState, toParams) {
        return this.isBackHistory(toState, toParams) && this.isForwardHistory(toState, toParams);
    }
    isBackHistory(toState, toParams) {
        //const $history = this.$history()
        const $history = this.$history;
        const isEven = $history.length > this.historyPos + 1;
        const isNameMatch = isEven && toState && toState.name == $history[this.historyPos + 1].name;
        return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos + 1].params);
    }
    isForwardHistory(toState, toParams) {
        //const $history = this.$history()
        const $history = this.$history;
        const isEven = !this.isNextBackMode && this.historyPos && $history.length > this.historyPos;
        const isNameMatch = isEven && toState && toState.name == $history[this.historyPos - 1].name;
        return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos - 1].params);
    }
    isParamsMatch(toParams, otherParams) {
        for (let x in toParams) {
            if (toParams[x] != otherParams[x]) {
                return false;
            }
        }
        return true;
    }
    /**
      @event Object - not used
      @toState Object{name} - required
      @toParams Object{} - only recorded to history, not used otherwise
      @fromState Object{name} - not used
      @fromParams Object{} - not used
    */
    /*
    stateChange(event, toState, toParams, fromState, fromParams){
      this.recordStateChange(toState, toParams)
    }*/
    recordStateChange(toState, toParams) {
        let isForward = this.isForwardHistory(toState, toParams);
        let isBackHistory = this.isNextBackHistory || this.isBackHistory(toState, toParams);
        if (this.isOsAction && this.isTrapHistory(toState, toParams)) {
            if (this.isBackMode) {
                isForward = false;
            }
            else {
                isBackHistory = false;
            }
        }
        else {
            this.isBackMode = this.isNextBackMode || (this.isOsAction && isBackHistory);
        }
        //console.log('this.isOsAction',this.isNextBackMode,isBackHistory,this.isOsAction,this.isBackMode)
        //const $history = this.$history()
        const $history = this.$history;
        //if($history.length)this.last = $history[this.historyPos]
        if (isForward) {
            --this.historyPos;
        }
        else if (this.isBackMode) {
            ++this.historyPos;
        }
        else {
            const $state = this.$state();
            this.historyPos = 0;
            const hist = { name: toState.name, params: toParams };
            if (!Object.keys(toParams).length) {
                delete hist.params;
            }
            $history.unshift(hist);
        }
        /*if($history.length > this.historyPos+1){
          this.back = $history[this.historyPos+1]
        }*/
        this.isNextBackHistory = false;
        //console.log('this.isOsAction',isBackHistory,this.isOsAction,this.isBackMode)
    }
    goBackTo(name, params) {
        this.isNextBackMode = true;
        this.isNextBackHistory = true;
        this.$state().go(name, params);
    }
    tryBack(name, params) {
        if (this.$history.length) {
            this.isNextBackMode = true;
            this.isNextBackHistory = true;
            this.$window().history.back();
            /*
            console.log('go back', this.historyPos, this.stateHistory.length, this.stateHistory)
            this.$state.go(this.stateHistory[this.historyPos].name, this.stateHistory[this.historyPos].params)
            */
        }
        else {
            this.goBackTo(name, params);
        }
    }
    watchDocument($document) {
        this.watchDocByCallbacks($document, this.getDocumentCallbacks());
    }
    getDocumentCallbacks() {
        const isBackButton = () => {
            this.isOsAction = true;
        };
        const isNotBackButton = () => {
            this.isOsAction = false;
        };
        return { isBackButton: isBackButton, isNotBackButton: isNotBackButton };
    }
    watchDocByCallbacks($document, callbacks) {
        $document.addEventListener('mouseout', callbacks.isBackButton);
        //$document.addEventListener('mouseover', callbacks.mouseover)
        $document.addEventListener('mousedown', callbacks.isNotBackButton);
    }
    unwatchDocByCallbacks($document, callbacks) {
        $document.removeEventListener('mouseout', callbacks.isBackButton);
        $document.removeEventListener('mouseover', callbacks.isNotBackButton);
        $document.removeEventListener('mousedown', callbacks.isNotBackButton);
    }
}
RouteWatcher.parameters = [[StateService], [TransitionService]];
//# sourceMappingURL=RouteWatcher.class.js.map