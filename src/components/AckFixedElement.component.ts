import {
  TemplateRef, ViewChild, ElementRef,
  Component
} from "@angular/core"
import { AckApp } from "../providers/AckApp.provider"

@Component({
  selector:'ack-fixed-element',
  template:'<ng-template #content><ng-content></ng-content></ng-template>'
}) export class AckFixedElement{
  @ViewChild('content') content:TemplateRef<ElementRef>
  
  constructor(
    public AckApp:AckApp
  ){
    this.AckApp.fixedElms.push(this)
  }

  ngOnDestroy(){
    for(let x=this.AckApp.fixedElms.length-1; x >= 0; --x){
      const iClass = this.AckApp.fixedElms[x]
      if( iClass === this ){
        this.AckApp.fixedElms.splice(x,1)
        break
      }
    }
  }
}