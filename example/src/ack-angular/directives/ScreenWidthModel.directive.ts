import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"
import { HtmlSizeWatcher } from "./HtmlSizeWatcher"

@Directive({
  selector: '[screenWidthModel]'
}) export class ScreenWidthModel extends HtmlSizeWatcher{
  @Input() screenWidthModel:number
  @Output() screenWidthModelChange:EventEmitter<number> = new EventEmitter()

  hasChanged(){
    return this.screenWidthModel !== window.innerWidth
  }

  setModel(){
    this.screenWidthModel = window.innerWidth
    this.screenWidthModelChange.emit(this.screenWidthModel)
  }
}