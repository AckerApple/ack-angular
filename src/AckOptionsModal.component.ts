import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"
import { AckOptions } from "./AckOptions.component"

import { string as ackOptionsModal } from "./templates/ack-options-modal.pug"
@Component({
  selector:'ack-options-modal',
  template:ackOptionsModal
}) export class AckOptionsModal extends AckOptions{
  public ackModal
  public ackOptions
  @Input() public allowClose = true
  @Output() public onClose = new EventEmitter()

  constructor(public element:ElementRef){
    super()

    element.nativeElement.style.position = 'fixed'
    element.nativeElement.style.top = 0
    element.nativeElement.style.left = 0
    element.nativeElement.style.zIndex = 20;
    element.nativeElement.style.height = '100%';
    element.nativeElement.style.width = '100%'
    element.nativeElement.style.overflow = 'auto';
    element.nativeElement.style.display = 'block';
  }

  ngAfterViewInit(){
    setTimeout(()=>{    
      this.ackOptions.modelChange.subscribe(model=>{
        if(model && !this.multiple && this.ackModal){
          this.ackModal.close()
        }

        this.modelChange.emit( this.model )
      })
    }, 0)
  }
}
