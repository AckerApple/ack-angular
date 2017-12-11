import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"

@Directive({
  selector: '[screenWidthModel]'
}) export class ScreenWidthModel{
  window:any
  onResize:()=>any

  @Input() screenWidthModel:number
  @Output() screenWidthModelChange:EventEmitter<number> = new EventEmitter()

  constructor(){
    this.onResize = function(){
      if(this.screenWidthModel !== window.innerWidth){
        this.setModel()
      }
    }.bind(this)

    window.addEventListener('resize', this.onResize)
    setTimeout(()=>this.setModel(), 0)
  }

  ngOnInit(){
    setTimeout(()=>this.onResize(), 0)//two way bind often needs init override
  }

  setModel(){
    this.screenWidthModel = window.innerWidth
    this.screenWidthModelChange.emit(this.screenWidthModel)
  }

  ngOnDestroy(){
    window.removeEventListener('resize', this.onResize)
  }
}