import { Injectable, ElementRef, EventEmitter } from "@angular/core";
import { AckModal } from "../components/AckModal.component";
import { prompt, Prompts } from "./Prompts";

@Injectable() export class AckApp{
  warnedFixElements:boolean = true
  fixedElementStage:ElementRef
  modals:AckModal[] = []

  constructor(public prompts:Prompts){}

  registerModal(modal:AckModal):AckApp{
    this.modals.push(modal)
    return this
  }

  unregisterModal(modal:AckModal){
    for(let index=this.modals.length-1; index >= 0; --index){
      if(this.modals[index]==modal){
        this.modals.splice(index,1)
        break
      }
    }
    return this
  }
}