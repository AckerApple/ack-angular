import {
  Directive,
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

import { string as ackModal } from "./templates/ack-modal.pug"
@Component({
  selector:'ack-modal',
  template:ackModal
}) export class AckModal{
  @Output() public onClose = new EventEmitter()
  //@Input() public size:string//'full' or null
  @Input() public wrapStyle
  @Input() public allowClose = true
  @Input() public backgroundColor
  @Output() public backgroundColorChange = new EventEmitter()
  @Input() private ref
  @Output() public refChange = new EventEmitter()

  constructor(public element:ElementRef){
    //after possible double click, close on outside content click
    setTimeout(()=>this.clickListenForClose(), 400)

    element.nativeElement.style.position = 'fixed'
    element.nativeElement.style.top = 0
    element.nativeElement.style.left = 0
    element.nativeElement.style.zIndex = 20;
    element.nativeElement.style.height = '100%';
    element.nativeElement.style.width = '100%'
    element.nativeElement.style.overflow = 'auto';
    element.nativeElement.style.display = 'block';
  }

  clickListenForClose(){
    this.element.nativeElement.addEventListener('click', event=>{
      if(!this.allowClose)return false

      var eTar = event.srcElement || event.toElement || event.target

      if(eTar == this.element.nativeElement.children[0]){
        this.close()
      }
    })
  }

  ngOnInit(){
    setTimeout(()=>{
      this.ref = Object.assign(this,this.ref)
      this.refChange.emit(this.ref)

      this.backgroundColor = this.backgroundColor || 'rgba(255,255,255,0.95)'
      this.backgroundColorChange.emit(this.backgroundColor)
    }, 0)
  }

  close(){
    this.onClose.emit(this)
  }
}