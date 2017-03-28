"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var states_object_1 = require("./states.object");
exports.declarations = states_object_1.declarations;
var states_object_2 = require("./states.object");
exports.routeConfig = { useHash: true, initialNavigation: true, enableTracing: false };
exports.routing = router_1.RouterModule.forRoot(states_object_2.routes, exports.routeConfig);
/*
import { UIRouterModule } from "ui-router-ng2";
import { states } from "./states.object";
export const routeConfig = {
  states: states,
  useHash:true,
  otherwise:'/overview'
}
export const routing = UIRouterModule.forRoot(routeConfig)
*/ 
//# sourceMappingURL=route-test.js.map