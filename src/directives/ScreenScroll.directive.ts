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
    this.onScroll = ()=>
      this.screenScroll.emit({x:window['pageXOffset'], y:window['pageYOffset']})
    this.onScroll()
    window.addEventListener("scroll", this.onScroll)
  }

  ngOnInit(){
    Promise.resolve().then(()=>this.onScroll())//two way bind often needs init override
  }

  ngOnDestroy(){
    window.removeEventListener("scroll", this.onScroll)
  }
}
