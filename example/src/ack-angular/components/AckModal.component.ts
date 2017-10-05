import {
  Directive,
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

import { fxArray } from "../prefx"
import { string as ackModal } from "./templates/ack-modal.pug"

@Component({
  selector:'ack-modal',
  template:ackModal,
  animations:fxArray
}) export class AckModal{
  showModelMode = false
  @Output() onClose = new EventEmitter()
  //@Input() size:string//'full' or null
  @Input() wrapStyle
  @Input() wrapCellStyle
  @Input() allowClose = true
  @Input() backgroundColor
  @Output() backgroundColorChange = new EventEmitter()
  
  @Input() ref
  @Output() refChange = new EventEmitter()
  
  @Input() showModel
  @Output() showModelChange = new EventEmitter()

  constructor(public element:ElementRef){
    //after possible double click, close on outside content click
    setTimeout(()=>this.clickListenForClose(), 400)
  }

  clickListenForClose(){
    this.element.nativeElement.addEventListener('click', event=>{
      if(!this.allowClose)return false

      const eTar = event.srcElement || event.toElement || event.target
      const isDirectChild = eTar == this.element.nativeElement.children[0] || eTar == this.element.nativeElement.children[0].children[0]
      
      if( isDirectChild ){
        this.close()
      }

      return true
    })
  }

  ngOnInit(){
    setTimeout(()=>{
      this.refChange.emit( this )

      if(this.showModelChange.observers.length){
        this.showModelMode = true
        this.showModel = this.showModel ? true : false
        this.showModelChange.emit( this.showModel )
      }

      this.backgroundColor = this.backgroundColor || 'rgba(255,255,255,0.95)'
      this.backgroundColorChange.emit(this.backgroundColor)
    }, 0)
  }

  close(){
    this.showModelChange.emit( this.showModel=false )
    this.onClose.emit(this)
  }
}