import {
  TemplateRef, Injectable
} from "@angular/core"

@Injectable() export class SectionProvider{
  //appTemplates:AckSectionTemplates[] = []
  headerTemplates:TemplateRef<any>[] = []
  footerTemplates:TemplateRef<any>[] = []

  unregisterHeaderTemplate( item:TemplateRef<any> ){
    for(let x=this.headerTemplates.length-1; x >= 0; --x){
      if( this.headerTemplates[x]===item ){
        this.headerTemplates.splice(x,1)
        break
      }
    }
  }

  unregisterFooterTemplate( item:TemplateRef<any> ){
    for(let x=this.footerTemplates.length-1; x >= 0; --x){
      if( this.footerTemplates[x]===item ){
        this.footerTemplates.splice(x,1)
        break
      }
    }
  }
}