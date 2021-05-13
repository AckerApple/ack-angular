//import { Subscription } from "rxjs/internal/Subscription"

import {
  Injectable, Output, EventEmitter
} from "@angular/core"

export interface htmlSize{
  width: number | null
  height: number | null
}

@Injectable() export class HtmlSizeService {
  private onResize:()=>void
  htmlSize:htmlSize

  @Output() change:EventEmitter<void> = new EventEmitter()

  constructor(){
    this.htmlSize = {width:null, height:null}

    this.onResize = ()=>{
      this.htmlSize.width = window.document.documentElement.clientWidth
      this.htmlSize.height = window.document.documentElement.clientHeight
      this.change.emit()
    }

    this.checkWatchers()
    this.onResize()
  }

  checkWatchers(){
    if( this.change.observers.length ){
      window.addEventListener('resize', this.onResize)
      //window.addEventListener('scroll', this.onResize)
    }else{
      window.removeEventListener('resize', this.onResize)
      //window.removeEventListener('scroll', this.onResize)
    }
  }
}