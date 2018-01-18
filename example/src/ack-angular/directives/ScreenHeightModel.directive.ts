import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"
import { HtmlSizeWatcher } from "./HtmlSizeWatcher"

@Directive({
  selector: '[screenHeightModel]'
}) export class ScreenHeightModel extends HtmlSizeWatcher{
  @Input() screenHeightModel:number
  @Output() screenHeightModelChange:EventEmitter<number> = new EventEmitter()

  hasChanged(){
    return this.screenHeightModel !== window.innerHeight
  }

  setModel(){
    this.screenHeightModel = window.innerHeight
    this.screenHeightModelChange.emit(this.screenHeightModel)
  }
}