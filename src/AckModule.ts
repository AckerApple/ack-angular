import {
  ModuleWithProviders, NgModule
} from "@angular/core"

//deprecate importing this
import { HttpClientModule } from "@angular/common/http"

import { CommonModule } from "@angular/common"
//import { FormsModule }   from "@angular/forms"

import { providers } from "./providers"
import { declarations as components } from "./declarations"
import { declarations as pipes } from "./pipes"

const declarations = [...components, ...pipes]

@NgModule({
  imports:[
    CommonModule,
    //FormsModule,

    //deprecate this dependency by seperating AckApi
    HttpClientModule
  ],
  declarations: declarations,
  //providers:providers,
  exports:[
    //FormsModule,
    
    //deprecate this
    HttpClientModule,
    
    ...declarations,
   ]
}) export class AckModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AckModule,
      providers: providers
    }
  }
}