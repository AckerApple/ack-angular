import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

// import { AckApp } from "../providers/AckApp.provider"
import { animations } from "ack-angular-fx"

@Component({
  selector:'ack-modal-layout',
  templateUrl: './ack-modal-layout.component.html',
  animations
}) export class AckModalLayout {
  @Input() zIndex: number | string = 20
  @Output() close: EventEmitter<AckModalLayout> = new EventEmitter()
  @Input() allowClose: boolean | number = true

  @Input() wrapStyle: any
  @Input() wrapCellStyle: any
  @Input() backgroundColor: any
  @Input() valign: 'top' | 'center' | 'bottom' = 'top'
  
  @Input() isModelMode: boolean | number = false
  @Input() showModel: boolean = true // when using, do not allow to be undefined
  @Output() showModelChange: EventEmitter<boolean> = new EventEmitter()
  //@Input() template:ElementRef<any>

  constructor(
    public element:ElementRef,
    // public AckApp:AckApp
  ){
    //after possible double click, close on outside content click
    setTimeout(()=>this.clickListenForClose(), 400)
  }

  clickListenForClose(){
    this.element.nativeElement.addEventListener('click', (event: any)=>{
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
    return Promise.resolve().then(()=>{
      if( this.showModel!==undefined && this.showModelChange.observers.length ){
        this.isModelMode = true
      }
    })
  }

  fireClose(){
    this.showModelChange.emit( this.showModel=false )
    this.close.emit(this)
  }
}
