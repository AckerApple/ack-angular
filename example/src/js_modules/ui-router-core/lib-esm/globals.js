/**
 * @coreapi
 * @module core
 */ /** */
import { StateParams } from "./params/stateParams";
import { Queue } from "./common/queue";
/**
 * Global router state
 *
 * This is where we hold the global mutable state such as current state, current
 * params, current transition, etc.
 */
var UIRouterGlobals = (function () {
    function UIRouterGlobals() {
        /**
         * Current parameter values
         *
         * The parameter values from the latest successful transition
         */
        this.params = new StateParams();
        /** @internalapi */
        this.transitionHistory = new Queue([], 1);
        /** @internalapi */
        this.successfulTransitions = new Queue([], 1);
    }
    return UIRouterGlobals;
}());
export { UIRouterGlobals };
//# sourceMappingURL=globals.js.map