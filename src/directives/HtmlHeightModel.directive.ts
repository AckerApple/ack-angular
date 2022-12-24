import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"

import {
  htmlSize, HtmlSizeService
} from "./HtmlSizeWatcher"

import { HtmlWidthModel } from "./HtmlWidthModel.directive"

@Directive({
  selector: '[htmlHeightModel]'
}) export class HtmlHeightModel extends HtmlWidthModel{
  @Input() htmlHeightModel!: number | null
  @Output() htmlHeightModelChange:EventEmitter<number |null> = new EventEmitter()

  constructor(
    public HtmlSizeService:HtmlSizeService
  ){
    super( HtmlSizeService )
  }

  hasChanged(){
    return this.htmlHeightModel !== window.document.documentElement.clientHeight
  }

  setModel( model:htmlSize ){
    this.htmlHeightModel = model.height
    this.htmlHeightModelChange.emit( this.htmlHeightModel )
  }
}