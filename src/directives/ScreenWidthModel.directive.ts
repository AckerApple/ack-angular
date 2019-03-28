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

@Directive({
  selector: '[screenWidthModel]'
}) export class ScreenWidthModel{
  sub:Subscription

  @Input() screenWidthModel:number
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
    if( !this.HtmlSizeService.htmlSize || !this.hasChanged() )return
    this.setModel( this.HtmlSizeService.htmlSize )
  }

  hasChanged(){
    return this.screenWidthModel !== window.innerWidth
  }

  setModel( model:htmlSize ){
    this.screenWidthModel = window.innerWidth
    this.screenWidthModelChange.emit(this.screenWidthModel)
  }
}