import {
  ContentChild,
  //Directive,
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,

  TemplateRef,
  ViewChild,
} from "@angular/core"

import { AckApp } from "../providers/AckApp.provider"

@Component({
  selector:"ack-modal",
  templateUrl: './ack-modal.component.html',
}) export class AckModal{
  @ContentChild('body') body!:TemplateRef<any>
  @ViewChild('placeholder') layout!: TemplateRef<any>

  //one way binds
  @Input() inline?:boolean
  @Input() isModelMode?: boolean | number
  @Input() zIndex:number = 20
  
  @Input() valign: 'top' | 'center' | 'bottom' = 'top'
  @Input() wrapStyle: any
  @Input() wrapCellStyle: any
  @Input() wrapContentClass: any
  @Input() backgroundColor?: string
  
  @Input() allowClose:boolean = true

  //two way binds
  @Input() showModel?: boolean | number
  @Output() showModelChange:EventEmitter<boolean> = new EventEmitter()

  //one way expression binds
  @Output() close:EventEmitter<any> = new EventEmitter()

  constructor(
    public element:ElementRef,
    public AckApp:AckApp
  ){
    Promise.resolve().then(() => this.determineStage())
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
