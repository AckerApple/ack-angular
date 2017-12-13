import {
  Directive,
  Output,
  EventEmitter
} from "@angular/core"

@Directive({
  selector: '[screenScroll]'
}) export class ScreenScroll{
  //public window
  onScroll

  @Output() screenScroll = new EventEmitter()
  
  constructor(){
    this.onScroll = function(){
      this.screenScroll.emit({x:window['pageXOffset'], y:window['pageYOffset']})
    }.bind(this)
    this.onScroll()
    window.addEventListener("scroll", this.onScroll)
  }

  ngOnInit(){
    setTimeout(()=>this.onScroll(), 0)//two way bind often needs init override
  }

  ngOnDestroy(){
    window.removeEventListener("scroll", this.onScroll)
  }
}
