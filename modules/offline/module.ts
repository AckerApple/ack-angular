import {
  ModuleWithProviders, NgModule
} from "@angular/core"

import { HttpClientModule } from "@angular/common/http"
import { CommonModule } from "@angular/common"
import { providers } from "./providers"


@NgModule({
  imports:[
    CommonModule,
    HttpClientModule
  ]
}) export class AckOfflineModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AckOfflineModule,
      providers: providers
    }
  }
}