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
  selector: '[screenHeightModel]'
  ,exportAs: 'ScreenHeightModel'
}) export class ScreenHeightModel{
  sub:Subscription

  @Input('screenHeightModel') model:number
  @Output('screenHeightModelChange') modelChange:EventEmitter<number> = new EventEmitter()

  constructor(
    public HtmlSizeService:HtmlSizeService
  ){
    this.sub = this.HtmlSizeService.change.subscribe(()=>this.changed())
    
    this.HtmlSizeService.checkWatchers()
  }

  ngAfterViewInit(){
    Promise.resolve().then(()=>
      this.setModel( this.HtmlSizeService.htmlSize )
    )
    this.delayCheck(250)
    this.delayCheck(1500)
  }

  delayCheck(num:number=0){
    setTimeout(()=>this.setModel( this.HtmlSizeService.htmlSize ), num)//two way bind often needs init override
  }

  changed(){
    if( !this.HtmlSizeService.htmlSize || !this.hasChanged() )return
    this.setModel( this.HtmlSizeService.htmlSize )
  }

  hasChanged(){
    return this.model !== window.innerHeight
  }

  setModel( model:htmlSize ){
    this.model = window.innerHeight
    this.modelChange.emit( this.model )
  }
}