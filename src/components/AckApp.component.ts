import {
  ContentChild,
  ContentChildren,

  Directive,
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  
  TemplateRef,
  ViewChild,
} from "@angular/core"
import { AckApp as AckAppProvider } from "../providers/AckApp.provider"
import { string } from "./templates/ack-app.pug"

@Component({
  selector:'ack-app',
  template:string
}) export class AckApp{
  @Input() mode:"calculate"|"clone"
  @ContentChild("header") header:TemplateRef<any>
  @ContentChild("footer") footer:TemplateRef<any>

  constructor(
    public AckApp:AckAppProvider,
    public ElementRef:ElementRef
  ){
    AckApp.Component = this
    ElementRef.nativeElement.style.height='100%'
    ElementRef.nativeElement.style.display='block'
  }
}