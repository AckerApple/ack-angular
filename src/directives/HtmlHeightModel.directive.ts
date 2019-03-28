import { Subscription } from "rxjs/internal/Subscription"

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
  @Input() htmlHeightModel:number
  @Output() htmlHeightModelChange:EventEmitter<number> = new EventEmitter()

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
