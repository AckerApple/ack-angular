import { StateService } from "ui-router-ng2";
/** A stateful connection to ui-router history
 - .stateChange() with arguments MUST be called at every state change
*/
export declare class StateManagerService {
    stateHistory: any;
    $state: any;
    $window: any;
    hisPos: number;
    isNextBackMode: boolean;
    isNextBackHistory: boolean;
    isBackMode: boolean;
    isOsAction: boolean;
    stateService: StateService;
    static parameters: typeof StateService[][];
    constructor($state: any, $window: any);
    isBackHistory(toState: any, toParams: any): boolean;
    isForwardHistory(toState: any, toParams: any): boolean;
    isParamsMatch(toParams: any, otherParams: any): boolean;
    /**
      @event Object - not used
      @toState Object{name} - required
      @toParams Object{} - only recorded to history, not used otherwise
      @fromState Object{name} - not used
      @fromParams Object{} - not used
    */
    stateChange(event: any, toState: any, toParams: any, fromState: any, fromParams: any): void;
    recordStateChange(toState: any, toParams: any): void;
    goBackTo(name: any, params: any): void;
    tryBack(name: any, params: any): void;
}
