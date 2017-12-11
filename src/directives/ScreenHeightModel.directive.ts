import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"

@Directive({
  selector: '[screenHeightModel]'
}) export class ScreenHeightModel{
  onResize:()=>any

  @Input() screenHeightModel:number
  @Output() screenHeightModelChange:EventEmitter<number> = new EventEmitter()

  constructor(){
    this.onResize = function(){
      if(this.screenHeightModel !== window.innerHeight){
        this.setModel()
      }
    }.bind(this)

    window.addEventListener('resize', this.onResize)
    setTimeout(()=>this.onResize(), 0)
  }

  ngOnInit(){
    setTimeout(()=>this.onResize(), 0)//two way bind often needs init override
  }

  setModel(){
    this.screenHeightModel = window.innerHeight
    this.screenHeightModelChange.emit(this.screenHeightModel)
  }

  ngOnDestroy(){
    window.removeEventListener('resize', this.onResize)
  }
}