import { Subscription } from "rxjs"

import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"

import {
  //htmlSize,
  HtmlSizeService
} from "./HtmlSizeWatcher"

@Directive({
  selector: '[screenWidthModel]'
}) export class ScreenWidthModel{
  sub: Subscription

  @Input() screenWidthModel!: number
  @Output() screenWidthModelChange:EventEmitter<number> = new EventEmitter()

  constructor(
    public HtmlSizeService:HtmlSizeService
  ){
    this.sub = this.HtmlSizeService.change.subscribe(()=>this.changed())

    this.HtmlSizeService.checkWatchers()

    if( this.HtmlSizeService.htmlSize ){
      this.changed()
    }
  }

  changed(){
    if( !this.HtmlSizeService.htmlSize
    || !this.hasChanged()
    )return

    this.updateModel()
  }

  hasChanged(){
    return this.screenWidthModel !== window.innerWidth
  }

  updateModel(){
    this.screenWidthModel = window.innerWidth
    this.screenWidthModelChange.emit(this.screenWidthModel)
  }
}