import { Component, Input } from "@angular/core"
import { fxArray as prefx } from "../prefx"
import { string as errorWell } from "./templates/error-well.pug"

@Component({
  selector:'error-well',
  template:errorWell,
  animations:prefx
}) export class ErrorWell{
  errorClose
  @Input() message:string = 'Unexpected Error Occured'
  @Input() error
  @Input() cssClasses:string
  @Input() closable = true

  ngOnInit(){
    this.cssClasses = this.cssClasses || 'bg-danger border border-danger text-danger'
  }

  getErrorMessage(error){
    if(!error)return this.message
    
    if(typeof error=='string')return error

    return error.message || error.statusText || this.message
  }
}
