import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule }   from '@angular/forms';
//import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { providers } from "./providers";
import { declarations as components } from "./components";
import { declarations as pipes } from "./pipes";

const declarations = [...components, ...pipes]


@NgModule({
  imports:[
    CommonModule
    //,AckOffline
    //,BrowserAnimationsModule
    //,FormsModule
    //,Ng2PageScrollModule.forRoot()
  ]
  ,declarations: declarations
  ,providers:providers,
  exports:[ ...declarations ]
}) export class AckModule {}

