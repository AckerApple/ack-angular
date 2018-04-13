import { Directive, TemplateRef, ContentChild } from "@angular/core"
import { AckApp as AckAppProvider } from "../providers/AckApp.provider"

@Directive({
  selector:"ack-app-templates"
}) export class AckAppTemplates{
  inited:boolean
  pushed:boolean
  
  @ContentChild('header') header:TemplateRef<any>
  @ContentChild('footer') footer:TemplateRef<any>
  
  constructor(
    public AckApp:AckAppProvider
  ){}

  ngAfterViewInit(){
    this.check()
    this.inited = true
  }

  ngOnChanges( changes ){
    if( this.inited ){
      this.check()
    }
  }

  check(){
    if( this.pushed )return
    this.AckApp.appHeaderTemplates.unshift( this.header )
    this.AckApp.appFooterTemplates.unshift( this.footer )
    this.pushed = true
  }

  ngOnDestroy(){
    this.unregister()
  }

  unregister(){
    this.pushed = false
    this.AckApp.unregisterAppHeaderTemplate( this.header )
    this.AckApp.unregisterAppFooterTemplate( this.footer )
  }
}