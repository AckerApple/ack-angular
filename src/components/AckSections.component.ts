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
import { SectionProvider } from "../providers/AckSections.provider"
import { string } from "./templates/ack-sections.pug"

@Component({
  selector:'ack-sections',
  template:string,
  providers:[ SectionProvider ]
}) export class AckSections{
  @Input() mode:"calculate"|"clone"//default clone

  @Input() zIndex:number = 30

  @ContentChild("header") header:TemplateRef<any>
  @ContentChild("footer") footer:TemplateRef<any>

  constructor(
    public SectionProvider:SectionProvider,
    public ElementRef:ElementRef
  ){
    ElementRef.nativeElement.style.height='100%'
    ElementRef.nativeElement.style.display='block'
  }
}