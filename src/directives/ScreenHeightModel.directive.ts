import { Subscription } from "rxjs"

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
  selector: '[screenHeightModel]'
}) export class ScreenHeightModel{
  sub:Subscription

  @Input() screenHeightModel:number
  @Output() screenHeightModelChange:EventEmitter<number> = new EventEmitter()

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
    return this.screenHeightModel !== window.innerHeight
  }

  setModel( model:htmlSize ){
    this.screenHeightModel = window.innerHeight
    this.screenHeightModelChange.emit( this.screenHeightModel )
  }
}