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
  selector: '[htmlHeightModel]'
}) export class HtmlHeightModel{
  sub:Subscription

  @Input() htmlHeightModel:number
  @Output() htmlHeightModelChange:EventEmitter<number> = new EventEmitter()

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
    return this.htmlHeightModel !== window.document.documentElement.clientHeight
  }

  setModel( model:htmlSize ){
    this.htmlHeightModel = model.height
    this.htmlHeightModelChange.emit( this.htmlHeightModel )
  }
}
