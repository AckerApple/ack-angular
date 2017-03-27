import { UIRouterModule } from "ui-router-ng2";

const routes: Routes = path: '',
    component: ApplicationlistComponent

export const routeConfig = {
  states: states.states,
  useHash:true,
  otherwise:'/overview'
}


export const routing = RouterModule.forRoot(routeConfig)