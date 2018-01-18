import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"
import { HtmlSizeWatcher } from "./HtmlSizeWatcher"

@Directive({
  selector: '[htmlHeightModel]'
}) export class HtmlHeightModel extends HtmlSizeWatcher{
  @Input() htmlHeightModel
  @Output() htmlHeightModelChange = new EventEmitter()

  hasChanged(){
    return this.htmlHeightModel !== window.document.documentElement.clientHeight
  }

  setModel(){
    this.htmlHeightModel = window.document.documentElement.clientHeight
    this.htmlHeightModelChange.emit(this.htmlHeightModel)
  }
}
