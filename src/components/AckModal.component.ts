import {
  //NgContent,
  Directive,
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  
  TemplateRef,
  ViewChild,
} from "@angular/core"

import { AckModalLayout } from "./AckModalLayout.component"
import { AckApp } from "../providers/AckApp"
import { string } from "./templates/ack-modal.pug"

@Component({
  selector:'ack-modal',
  template:string
  //,animations:fxArray
}) export class AckModal{
  @ViewChild(TemplateRef) layout: ElementRef

  //one way binds
  @Input() isModelMode:boolean
  @Input() wrapStyle:any
  @Input() wrapCellStyle:any
  @Input() allowClose:boolean = true
  @Input() backgroundColor:string

  //two way binds
  @Input() showModel:boolean
  @Output() showModelChange = new EventEmitter()
  
  //one way expression binds
  @Output() close = new EventEmitter()

  constructor( public element:ElementRef, public AckApp:AckApp ){}

  ngOnInit(){
    if( this.AckApp.fixedElementStage ){
      this.AckApp.registerModal(this)
    }else if( !this.AckApp.warnedFixElements ){
      this.AckApp.warnedFixElements = true
      console.warn('Please put the element tag <ack-fixed-element-stage> inside your app so <ack-modal> renders properly amongst other elements')
    }
  }

  ngOnDestroy(){
    this.AckApp.unregisterModal(this)
  }
}