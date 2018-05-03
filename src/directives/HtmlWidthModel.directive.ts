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
  selector: '[htmlWidthModel]'
}) export class HtmlWidthModel{
  sub:Subscription
  
  @Input() htmlWidthModel:number
  @Output() htmlWidthModelChange:EventEmitter<number> = new EventEmitter()

  constructor(
    public HtmlSizeService:HtmlSizeService
  ){
    this.sub = this.HtmlSizeService.change.subscribe(()=>this.changed())
    
    this.HtmlSizeService.checkWatchers()

    if( this.HtmlSizeService.htmlSize ){
      this.changed()
    }
  }

  ngAfterViewInit(){
    //content may grow
    setTimeout(()=>this.changed(), 200)//two way bind often needs init override
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
    this.HtmlSizeService.checkWatchers()
  }

  changed(){
    if( !this.HtmlSizeService.htmlSize || !this.hasChanged() )return
    this.setModel( this.HtmlSizeService.htmlSize )
  }

  hasChanged(){
    return this.htmlWidthModel !== window.document.documentElement.clientWidth
  }

  setModel( htmlSize:htmlSize ){
    this.htmlWidthModel = htmlSize.width
    this.htmlWidthModelChange.emit( this.htmlWidthModel )
  }
}
