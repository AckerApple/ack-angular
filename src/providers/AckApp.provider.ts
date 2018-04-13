import {
  TemplateRef, Injectable,
  ElementRef
} from "@angular/core"
import { AckModal } from "../components/AckModal.component"
import { AckApp as AckAppComponent } from "../components/AckApp.component"
//import { AckAppTemplates } from "../components/AckAppTemplates.component"
//import { AckAppHeader } from "../components/AckAppHeader.component"
//import { AckAppFooter } from "../components/AckAppFooter.component"
import { prompt, Prompts } from "./Prompts"

@Injectable() export class AckApp{
  warnedFixElements:boolean = true
  fixedElementStage:ElementRef
  
  Component:AckAppComponent

  modals:AckModal[] = []

  //appTemplates:AckAppTemplates[] = []
  appHeaderTemplates:TemplateRef<any>[] = []
  appFooterTemplates:TemplateRef<any>[] = []

  constructor( public prompts:Prompts ){}

  registerModal( item:AckModal ):AckApp{
    this.modals.push(item)
    return this
  }

  unregisterModal( item:AckModal ){
    for(let index=this.modals.length-1; index >= 0; --index){
      if(this.modals[index]==item){
        this.modals.splice(index,1)
        break
      }
    }
    return this
  }

  unregisterAppHeaderTemplate( item:TemplateRef<any> ){
    for(let x=this.appHeaderTemplates.length-1; x >= 0; --x){
      if( this.appHeaderTemplates[x]==item ){
        this.appHeaderTemplates.splice(x,1)
        break
      }
    }
  }

  unregisterAppFooterTemplate( item:TemplateRef<any> ){
    for(let x=this.appFooterTemplates.length-1; x >= 0; --x){
      if( this.appFooterTemplates[x]==item ){
        this.appFooterTemplates.splice(x,1)
        break
      }
    }
  }
}