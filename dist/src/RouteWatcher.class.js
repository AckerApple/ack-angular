"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_router_ng2_1 = require("ui-router-ng2");
/** A stateful connection to ui-router history
 - .stateChange() with arguments MUST be called at every state change
 - Has 99% accuracy of knowing if OS back or forward button has been used
   - Their is no web event for knowing if OS button is used.
*/
var RouteWatcher = (function () {
    function RouteWatcher(StateService, TransitionService) {
        var _this = this;
        this.StateService = StateService;
        this.TransitionService = TransitionService;
        this.historyPos = 0;
        this.isNextBackMode = false;
        this.isNextBackHistory = false;
        this.isBackMode = false;
        this.isOsAction = false;
        var stateHistory = [];
        this.$state = function () { return StateService; };
        this.$window = function () { return window; };
        //this.$history = ()=>stateHistory
        this.$history = stateHistory;
        TransitionService.onStart({ to: '*' }, function (transition) {
            _this.recordStateChange(transition.targetState().$state(), transition.targetState().params());
            //this.recordStateChange(transition._targetState._definition, transition._targetState._params)
        });
    }
    RouteWatcher.prototype.isTrapHistory = function (toState, toParams) {
        return this.isBackHistory(toState, toParams) && this.isForwardHistory(toState, toParams);
    };
    RouteWatcher.prototype.isBackHistory = function (toState, toParams) {
        //const $history = this.$history()
        var $history = this.$history;
        var isEven = $history.length > this.historyPos + 1;
        var isNameMatch = isEven && toState && toState.name == $history[this.historyPos + 1].name;
        return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos + 1].params);
    };
    RouteWatcher.prototype.isForwardHistory = function (toState, toParams) {
        //const $history = this.$history()
        var $history = this.$history;
        var isEven = !this.isNextBackMode && this.historyPos && $history.length > this.historyPos;
        var isNameMatch = isEven && toState && toState.name == $history[this.historyPos - 1].name;
        return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos - 1].params);
    };
    RouteWatcher.prototype.isParamsMatch = function (toParams, otherParams) {
        for (var x in toParams) {
            if (toParams[x] != otherParams[x]) {
                return false;
            }
        }
        return true;
    };
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
    RouteWatcher.prototype.recordStateChange = function (toState, toParams) {
        var isForward = this.isForwardHistory(toState, toParams);
        var isBackHistory = this.isNextBackHistory || this.isBackHistory(toState, toParams);
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
        var $history = this.$history;
        //if($history.length)this.last = $history[this.historyPos]
        if (isForward) {
            --this.historyPos;
        }
        else if (this.isBackMode) {
            ++this.historyPos;
        }
        else {
            var $state = this.$state();
            this.historyPos = 0;
            var hist = { name: toState.name, params: toParams };
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
    };
    RouteWatcher.prototype.goBackTo = function (name, params) {
        this.isNextBackMode = true;
        this.isNextBackHistory = true;
        this.$state().go(name, params);
    };
    RouteWatcher.prototype.tryBack = function (name, params) {
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
    };
    RouteWatcher.prototype.watchDocument = function ($document) {
        this.watchDocByCallbacks($document, this.getDocumentCallbacks());
    };
    RouteWatcher.prototype.getDocumentCallbacks = function () {
        var _this = this;
        var isBackButton = function () {
            _this.isOsAction = true;
        };
        var isNotBackButton = function () {
            _this.isOsAction = false;
        };
        return { isBackButton: isBackButton, isNotBackButton: isNotBackButton };
    };
    RouteWatcher.prototype.watchDocByCallbacks = function ($document, callbacks) {
        $document.addEventListener('mouseout', callbacks.isBackButton);
        //$document.addEventListener('mouseover', callbacks.mouseover)
        $document.addEventListener('mousedown', callbacks.isNotBackButton);
    };
    RouteWatcher.prototype.unwatchDocByCallbacks = function ($document, callbacks) {
        $document.removeEventListener('mouseout', callbacks.isBackButton);
        $document.removeEventListener('mouseover', callbacks.isNotBackButton);
        $document.removeEventListener('mousedown', callbacks.isNotBackButton);
    };
    return RouteWatcher;
}());
RouteWatcher.parameters = [[ui_router_ng2_1.StateService], [ui_router_ng2_1.TransitionService]];
exports.RouteWatcher = RouteWatcher;
//# sourceMappingURL=RouteWatcher.class.js.map