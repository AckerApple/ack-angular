import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"

@Directive({
  selector: '[htmlWidthModel]'
}) export class HtmlWidthModel{
  window
  onResize

  @Input() htmlWidthModel
  @Output() htmlWidthModelChange = new EventEmitter()

  constructor(){
    this.onResize = ()=>{
      if(this.htmlWidthModel !== window.document.documentElement.clientWidth){
        this.setModel()
      }
    }

    window.addEventListener('resize', this.onResize)
    setTimeout(()=>this.setModel(), 0)
  }

  ngDoCheck(){
    setTimeout(()=>this.onResize(), 0)//two way bind often needs init override
  }

  setModel(){
    this.htmlWidthModel = window.document.documentElement.clientWidth
    this.htmlWidthModelChange.emit(this.htmlWidthModel)
  }

  ngOnDestroy(){
    window.removeEventListener('resize', this.onResize)
  }
}
