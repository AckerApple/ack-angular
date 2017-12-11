import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"

@Directive({
  selector: '[htmlHeightModel]'
}) export class HtmlHeightModel{
  onResize

  @Input() htmlHeightModel
  @Output() htmlHeightModelChange = new EventEmitter()

  constructor(){
    this.onResize = function(){
      if(this.htmlHeightModel !== window.document.documentElement.clientHeight){
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
    this.htmlHeightModel = window.document.documentElement.clientHeight
    this.htmlHeightModelChange.emit(this.htmlHeightModel)
  }

  ngOnDestroy(){
    window.removeEventListener('resize', this.onResize)
  }
}
