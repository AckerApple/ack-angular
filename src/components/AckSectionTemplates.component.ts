import { Directive, TemplateRef, ContentChild } from "@angular/core"
import { SectionProvider } from "../providers/AckSections.provider"

@Directive({
  selector:"ack-section-templates"
}) export class AckSectionTemplates{
  inited:boolean
  pushed:boolean
  
  @ContentChild('sectionHeader') header:TemplateRef<any>
  @ContentChild('sectionFooter') footer:TemplateRef<any>
  @ContentChild('sectionLeftBody') leftBody:TemplateRef<any>
  @ContentChild('sectionRightBody') rightBody:TemplateRef<any>
  
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
    
    if( this.header ){
      this.SectionProvider.headerTemplates.unshift( this.header )
    }
    
    if( this.footer ){
      this.SectionProvider.footerTemplates.unshift( this.footer )
    }
    
    if( this.leftBody ){
      this.SectionProvider.leftBodyTemplates.unshift( this.leftBody )
    }
    
    if( this.rightBody ){
      this.SectionProvider.rightBodyTemplates.unshift( this.rightBody )
    }
    
    this.pushed = true
  }

  ngOnDestroy(){
    setTimeout(()=>this.unregister(), 0)
  }

  unregister(){
    this.pushed = false
    this.SectionProvider.unregisterHeaderTemplate( this.header )
    this.SectionProvider.unregisterFooterTemplate( this.footer )
    this.SectionProvider.unregisterTemplate( this.leftBody )
    this.SectionProvider.unregisterTemplate( this.rightBody )
  }
}