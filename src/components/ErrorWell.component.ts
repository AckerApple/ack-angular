import {
  EventEmitter, Output, Input,
  ContentChild, Component, TemplateRef, ElementRef
} from "@angular/core"
import { animations } from "ack-angular-fx"
import { string as errorWell } from "./templates/error-well.pug"

@Component({
  selector:'error-well',
  template:errorWell,
  animations:animations
}) export class ErrorWell{
  errorClose

  @Input() moreDetails:boolean//show more details
  @Input() message:string = 'Unexpected Error Occured'
  @Input() error:Error
  @Input() cssClasses:string
  @Input() closable:boolean = true
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