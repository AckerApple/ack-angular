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
    this.onResize = ()=>{
      if(this.screenHeightModel !== window.innerHeight){
        this.setModel()
      }
    }

    window.addEventListener('resize', this.onResize)
    setTimeout(()=>this.onResize(), 0)
  }

  ngDoCheck(){
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