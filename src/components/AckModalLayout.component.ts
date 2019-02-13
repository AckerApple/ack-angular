import {
  Directive,
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

import { AckApp } from "../providers/AckApp.provider"
import { animations } from "ack-angular-fx"
import { string } from "./templates/ack-modal-layout.pug"

@Component({
  selector:'ack-modal-layout',
  template:string,
  animations:animations
}) export class AckModalLayout{
  @Input() zIndex:number = 20
  @Output() close:EventEmitter<AckModalLayout> = new EventEmitter()
  @Input() allowClose:boolean = true

  @Input() wrapStyle:any
  @Input() wrapCellStyle:any
  @Input() backgroundColor:any
  
  @Input() isModelMode:boolean = false  
  @Input() showModel:boolean = true
  @Output() showModelChange:EventEmitter<boolean> = new EventEmitter()
  //@Input() template:ElementRef<any>

  constructor(
    public element:ElementRef,
    public AckApp:AckApp
  ){
    //after possible double click, close on outside content click
    setTimeout(()=>this.clickListenForClose(), 400)
  }

  clickListenForClose(){
    this.element.nativeElement.addEventListener('click', event=>{
      if(!this.allowClose)return false

      const eTar = event.srcElement || event.toElement || event.target
      const isDirectChild = eTar == this.element.nativeElement.children[0] || eTar == this.element.nativeElement.children[0].children[0]
      
      if( isDirectChild ){
        this.fireClose()
      }

      return true
    })
  }

  ngOnInit(){
    setTimeout(()=>{
      if( this.isModelMode || (this.isModelMode==null && this.showModelChange.observers.length) ){
        this.isModelMode = true
      }

      this.backgroundColor = this.backgroundColor || 'rgba(255,255,255,0.95)'
      //this.backgroundColorChange.emit(this.backgroundColor)
    }, 0)
  }

  fireClose(){
    this.showModelChange.emit( this.showModel=false )
    this.close.emit(this)
  }
}