import {
  ModuleWithProviders,
  NgModule
} from "@angular/core"

import { CommonModule } from "@angular/common"
export { CommonModule } from "@angular/common"
//import { FormsModule }   from "@angular/forms"

import { providers } from "./providers"
import { declarations as components } from "./declarations"
import { pipes } from "./pipes"

const declarations = [...components, ...pipes]

@NgModule({
  imports:[
    CommonModule
  ],
  declarations, providers,
  exports: declarations
}) export class AckModule {
  static forRoot(): ModuleWithProviders<AckModule> {
    return {
      ngModule: AckModule, providers,
    }
  }
}

// export default AckModule