"use strict";
/**
 * @coreapi
 * @module core
 */ /** */
var stateParams_1 = require("./params/stateParams");
var queue_1 = require("./common/queue");
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
        this.params = new stateParams_1.StateParams();
        /** @internalapi */
        this.transitionHistory = new queue_1.Queue([], 1);
        /** @internalapi */
        this.successfulTransitions = new queue_1.Queue([], 1);
    }
    return UIRouterGlobals;
}());
exports.UIRouterGlobals = UIRouterGlobals;
//# sourceMappingURL=globals.js.map