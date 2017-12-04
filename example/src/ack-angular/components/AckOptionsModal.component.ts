import {
  Component,
  Input,
  Output,
  EventEmitter
} from "@angular/core"
import { AckOptions } from "./AckOptions.component"

import { string as ackOptionsModal } from "./templates/ack-options-modal.pug"
@Component({
  selector:'ack-options-modal',
  template:ackOptionsModal
}) export class AckOptionsModal extends AckOptions{
  ackModal
  ackOptions
  
  @Input() allowClose = true
  @Output() close = new EventEmitter()
  @Input() wrapStyle
  @Input() wrapCellStyle
  @Input() backgroundColor
  @Output() backgroundColorChange = new EventEmitter()

  ngAfterViewInit(){
    super.ngAfterViewInit()

    this.ElementRef.nativeElement.style.position = 'fixed'
    this.ElementRef.nativeElement.style.top = 0
    this.ElementRef.nativeElement.style.left = 0
    this.ElementRef.nativeElement.style.zIndex = 20;
    this.ElementRef.nativeElement.style.height = '100%';
    this.ElementRef.nativeElement.style.width = '100%'
    this.ElementRef.nativeElement.style.overflow = 'auto';
    this.ElementRef.nativeElement.style.display = 'block';

    setTimeout(()=>this.subscribeModelChange(), 0)
  }

  subscribeModelChange(){
    this.ackOptions.modelChange.subscribe(model=>{
      if(model && !this.multiple && this.ackModal){
        this.ackModal.close()
      }

      this.modelChange.emit( this.model )
    })
  }
}
