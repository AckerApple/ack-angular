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
  //ackModal
  ackOptions!: AckOptions

  //one way binds
  @Input() allowClose:boolean = true
  @Input() wrapStyle:any
  @Input() wrapCellStyle:any

  //one way expressions
  @Output() close:EventEmitter<any> = new EventEmitter()

  //two way binds
  @Input() backgroundColor:any
  @Output() backgroundColorChange:EventEmitter<any> = new EventEmitter()
  @Input() showModel:boolean = true
  @Output() showModelChange:EventEmitter<boolean> = new EventEmitter()

  fireModelChange(model: any){
    if(!this.multiple)this.close.emit()
    this.modelChange.emit(model)
  }
}
