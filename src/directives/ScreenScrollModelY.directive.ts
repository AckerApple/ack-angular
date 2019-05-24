import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"

@Directive({
  selector: '[screenScrollModelY]',
  exportAs: 'ScreenScrollModelY'
}) export class ScreenScrollModelY{
  onScroll

  @Input() screenScrollModelY
  @Output() screenScrollModelYChange = new EventEmitter()
  
  constructor(){
    this.onScroll = ()=>{
      this.screenScrollModelY = window['pageYOffset']
      this.screenScrollModelYChange.emit(this.screenScrollModelY)
    }
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