import { UIRouterModule } from "ui-router-ng2";
/*
const routes: Routes = path: '',
    component: ApplicationlistComponent
*/
//export { declarations } from "./states.object"
import { states } from "./states.object";

export const routeConfig = {
  states: states,
  useHash:true,
  otherwise:'/overview'
}

export const routing = UIRouterModule.forRoot(routeConfig)