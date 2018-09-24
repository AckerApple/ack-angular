import {
  ContentChild,
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
import { AckApp } from "../providers/AckApp.provider"
import { string } from "./templates/ack-modal.pug"

@Component({
  selector:"ack-modal",
  template:string,
  exportAs:"AckModal"
  //,animations:fxArray
}) export class AckModal{
  @ContentChild('body') body:TemplateRef<any>
  @ViewChild('placeholder') layout: ElementRef

  //one way binds
  @Input() inline:boolean
  @Input() isModelMode:boolean
  @Input() allowClose:boolean = true
  @Input() zIndex:number = 20

  @Input() wrapStyle:any
  @Input() wrapCellStyle:any
  @Input() backgroundColor:string

  //two way binds
  @Input() showModel:boolean
  @Output() showModelChange:EventEmitter<boolean> = new EventEmitter()
  
  //one way expression binds
  @Output() close:EventEmitter<any> = new EventEmitter()

  constructor(
    public element:ElementRef,
    public AckApp:AckApp
  ){}

  ngOnInit(){
    this.determineStage()
  }

  determineStage():void{
    if(this.inline)return

    if( this.AckApp.fixedElementStage ){
      this.AckApp.registerModal(this)
    }else if( !this.AckApp.warnedFixElements ){
      this.AckApp.warnedFixElements = true
      console.warn('Please put the element tag <ack-fixed-element-stage> inside your app so <ack-modal> renders properly amongst other elements. OR set <ack-modal inline="true">')
    }
  }

  ngOnDestroy(){
    this.AckApp.unregisterModal(this)
  }
}