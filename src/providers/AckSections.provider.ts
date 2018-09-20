import {
  TemplateRef, Injectable, ElementRef
} from "@angular/core"

@Injectable() export class SectionProvider{
  //appTemplates:AckSectionTemplates[] = []
  headerTemplates:TemplateRef<ElementRef>[] = []
  footerTemplates:TemplateRef<ElementRef>[] = []
  
  leftBodyTemplates:TemplateRef<ElementRef>[] = []
  rightBodyTemplates:TemplateRef<ElementRef>[] = []

  unregisterHeaderTemplate( item:TemplateRef<ElementRef> ){
    this.unregisterTemplateFrom(item, this.headerTemplates)
  }

  unregisterFooterTemplate( item:TemplateRef<ElementRef> ){
    this.unregisterTemplateFrom(item, this.footerTemplates)
  }

  unregisterTemplateFrom(
    item:TemplateRef<ElementRef>,
    templates:TemplateRef<ElementRef>[]
  ){
    for(let x=templates.length-1; x >= 0; --x){
      if( templates[x]===item ){
        templates.splice(x,1)
        break
      }
    }    
  }

  unregisterTemplate( item:TemplateRef<ElementRef> ){
    this.unregisterTemplateFrom(item, this.headerTemplates)
    this.unregisterTemplateFrom(item, this.footerTemplates)
    this.unregisterTemplateFrom(item, this.leftBodyTemplates)
    this.unregisterTemplateFrom(item, this.rightBodyTemplates)
  }
}