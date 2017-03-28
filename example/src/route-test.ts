import { RouterModule } from '@angular/router';

export { declarations } from "./states.object";
import { routes } from "./states.object";
export const routeConfig = {useHash:true, initialNavigation:true, enableTracing:false}
export const routing = RouterModule.forRoot(routes, routeConfig)

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