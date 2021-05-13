import {
  //TemplateRef,
  Injectable,
  ElementRef
} from "@angular/core"
import { AckModal } from "../components/AckModal.component"
//import { AckSectionTemplates } from "../components/AckSectionTemplates.component"
//import { AckAppHeader } from "../components/AckAppHeader.component"
//import { AckAppFooter } from "../components/AckAppFooter.component"
import { AckFixedElement } from "../components/AckFixedElement.component"
import {
  //prompt,
  Prompts
} from "./Prompts"

@Injectable() export class AckApp{
  warnedFixElements: boolean = true
  fixedElementStage!: ElementRef

  fixedElms:AckFixedElement[] = []
  modals:AckModal[] = []

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
}