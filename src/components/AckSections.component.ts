import {
  ContentChild,

  Component,
  Input,
  ElementRef,
  
  TemplateRef
} from "@angular/core"

import { SectionProvider } from "../providers/AckSections.provider"
import { string } from "./templates/ack-sections.pug"

@Component({
  selector:'ack-sections',
  template:string,
  providers:[ SectionProvider ]
  //,exportAs:"AckSections"
}) export class AckSections{
  //clone is more performant in most cases but things duplicate like requests and timers may result
  @Input() mode:"calculate"|"clone" = "calculate"

  @Input() zIndex:number = 19
  
  @ContentChild("table") table:TemplateRef<any>
  @ContentChild("headerWrap") headerWrap:TemplateRef<any>
  
  @ContentChild("bodyCell") bodyCell:TemplateRef<any>
  
  @ContentChild("leftBodyWrap") leftBodyWrap:TemplateRef<any>

  @ContentChild("rightBodyWrap") rightBodyWrap:TemplateRef<any>

  //@ContentChild("header") header:TemplateRef<any>
  //@ContentChild("footer") footer:TemplateRef<any>
  //@ContentChild("leftBody") leftBody:TemplateRef<any>
  //@ContentChild("rightBody") rightBody:TemplateRef<any>

  htmlHeightModel:number

  headerHeight: number
  leftBodyWidth: number
  footerHeight: number
  rightBodyWidth: number

  constructor(
    public SectionProvider:SectionProvider,
    public ElementRef:ElementRef
  ){
    const elmStyle = ElementRef.nativeElement.style
    
    elmStyle.height  = "100%"
    elmStyle.display = "block"
  }
}