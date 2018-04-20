import { Directive, TemplateRef, ContentChild } from "@angular/core"
import { SectionProvider } from "../providers/AckSections.provider"

@Directive({
  selector:"ack-section-templates"
}) export class AckSectionTemplates{
  inited:boolean
  pushed:boolean
  
  @ContentChild('sectionHeader') header:TemplateRef<any>
  @ContentChild('sectionFooter') footer:TemplateRef<any>
  
  constructor(
    public SectionProvider:SectionProvider
  ){}

  ngAfterViewInit(){
    setTimeout(()=>{
      this.check()
      this.inited = true
    }, 0)
  }

  ngOnChanges( changes ){
    if( this.inited ){
      this.check()
    }
  }

  check(){
    if( this.pushed )return
    this.SectionProvider.headerTemplates.unshift( this.header )
    this.SectionProvider.footerTemplates.unshift( this.footer )
    this.pushed = true
  }

  ngOnDestroy(){
    this.unregister()
  }

  unregister(){
    this.pushed = false
    this.SectionProvider.unregisterHeaderTemplate( this.header )
    this.SectionProvider.unregisterFooterTemplate( this.footer )
  }
}