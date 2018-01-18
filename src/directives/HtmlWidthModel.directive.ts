import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"
import { HtmlSizeWatcher } from "./HtmlSizeWatcher"

@Directive({
  selector: '[htmlWidthModel]'
}) export class HtmlWidthModel extends HtmlSizeWatcher{
  @Input() htmlWidthModel
  @Output() htmlWidthModelChange = new EventEmitter()

  hasChanged(){
    return this.htmlWidthModel !== window.document.documentElement.clientWidth
  }

  setModel(){
    this.htmlWidthModel = window.document.documentElement.clientWidth
    this.htmlWidthModelChange.emit(this.htmlWidthModel)
  }
}
