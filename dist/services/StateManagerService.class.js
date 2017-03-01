"use strict";
exports.__esModule = true;
var ui_router_ng2_1 = require("ui-router-ng2");
/** A stateful connection to ui-router history
 - .stateChange() with arguments MUST be called at every state change
*/
var StateManagerService = (function () {
    //constructor($state, $window){
    function StateManagerService($state, $window) {
        this.$state = $state;
        this.$window = $window || window;
        //inject(arguments, this)
        this.stateHistory = [];
        this.hisPos = 0;
    }
    StateManagerService.prototype.isBackHistory = function (toState, toParams) {
        var isEven = this.stateHistory.length > this.hisPos;
        var isNameMatch = isEven && toState && toState.name == this.stateHistory[this.hisPos].name;
        return isNameMatch && this.isParamsMatch(toParams, this.stateHistory[this.hisPos].params);
    };
    StateManagerService.prototype.isForwardHistory = function (toState, toParams) {
        var isEven = !this.isNextBackMode && this.hisPos && this.stateHistory.length > this.hisPos;
        var isNameMatch = isEven && toState && toState.name == this.stateHistory[this.hisPos - 1].name;
        return isNameMatch && this.isParamsMatch(toParams, this.stateHistory[this.hisPos - 1].params);
    };
    StateManagerService.prototype.isParamsMatch = function (toParams, otherParams) {
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
    StateManagerService.prototype.stateChange = function (event, toState, toParams, fromState, fromParams) {
        this.recordStateChange(toState, toParams);
    };
    StateManagerService.prototype.recordStateChange = function (toState, toParams) {
        var isFowardHistory = this.isForwardHistory(toState, toParams);
        var isBackHistory = this.isNextBackHistory || this.isBackHistory(toState, toParams);
        this.isBackMode = this.isNextBackMode || (this.isOsAction && isBackHistory);
        if (isFowardHistory) {
            this.isBackMode = false;
            --this.hisPos;
        }
        else if (this.isBackMode) {
            ++this.hisPos;
        }
        else {
            this.hisPos = 0;
            this.stateHistory.unshift({
                name: this.$state.current.name,
                state: this.$state.current,
                params: this.$state.params
                //params:fromParams
            });
        }
        this.isNextBackHistory = false;
    };
    StateManagerService.prototype.goBackTo = function (name, params) {
        this.isNextBackMode = true;
        this.isNextBackHistory = true;
        this.$state.go(name, params);
    };
    StateManagerService.prototype.tryBack = function (name, params) {
        if (this.stateHistory.length) {
            this.isNextBackMode = true;
            this.isNextBackHistory = true;
            this.$window.history.back();
            /*
            console.log('go back', this.hisPos, this.stateHistory.length, this.stateHistory)
            this.$state.go(this.stateHistory[this.hisPos].name, this.stateHistory[this.hisPos].params)
            */
        }
        else {
            this.goBackTo(name, params);
        }
    };
    return StateManagerService;
}());
StateManagerService.parameters = [[ui_router_ng2_1.StateService]];
exports.StateManagerService = StateManagerService;
