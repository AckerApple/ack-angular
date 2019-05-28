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
}