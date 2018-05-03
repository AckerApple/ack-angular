import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { providers } from "./providers";
import { declarations as components } from "./declarations";
import { declarations as pipes } from "./pipes";

const declarations = [...components, ...pipes]


@NgModule({
  imports:[
    CommonModule
    ,FormsModule
    ,HttpModule
    //,HttpClientModule
    //,AckOffline
    //,BrowserAnimationsModule
    //,Ng2PageScrollModule.forRoot()
  ]
  ,declarations: declarations
  ,providers:providers,
  exports:[
    FormsModule,
    HttpModule,
    //HttpClientModule,
    ...declarations,
   ]
}) export class AckModule {}

