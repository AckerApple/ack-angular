import {
  EventEmitter, Output, Input,
  ContentChild, Component, TemplateRef, ElementRef
} from "@angular/core"
import { fxArray } from "ack-angular-fx"
import { string as errorWell } from "./templates/error-well.pug"

@Component({
  selector:'error-well',
  template:errorWell,
  animations:fxArray
}) export class ErrorWell{
  errorClose
  @Input() message:string = 'Unexpected Error Occured'
  @Input() error
  @Input() cssClasses:string
  @Input() closable = true
  @Input() allowDetails:boolean = true
  @Output() close:EventEmitter<void> = new EventEmitter()
  @ContentChild("titleFooter") titleFooter:TemplateRef<ElementRef>

  ngOnInit(){
    this.cssClasses = this.cssClasses || 'bg-danger border border-danger text-danger'
  }

  getErrorMessage( error:Error ){
    if(!error)return this.message
    
    if(typeof error=='string')return error

    return error.message || error["statusText"] || this.message
  }
}
