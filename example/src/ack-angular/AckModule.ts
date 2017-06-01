import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import{ HttpModule } from '@angular/http';
//import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { providers } from "./providers";
import { declarations as components } from "./components";
import { declarations as pipes } from "./pipes";

const declarations = [...components, ...pipes]


@NgModule({
  imports:[
    CommonModule
    ,FormsModule
    ,HttpModule
    //,AckOffline
    //,BrowserAnimationsModule
    //,Ng2PageScrollModule.forRoot()
  ]
  ,declarations: declarations
  ,providers:providers,
  exports:[FormsModule, HttpModule, ...declarations]
}) export class AckModule {}

