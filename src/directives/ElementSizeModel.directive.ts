import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

@Directive({
  selector: '[elementSizeModel]'
}) export class ElementSizeModel{
  onResize
  observer
  timeout
  inChange

  @Input() elementSizeModelWatch:any//causes ngOnChanges to fire

  @Input() elementSizeModel
  @Output() elementSizeModelChange = new EventEmitter()

  constructor(public element:ElementRef){
    this.onResize = function(){
      this.setModel()
    }.bind(this)

    window.addEventListener('resize', this.onResize)
    setTimeout(()=>this.setModel(), 0)

    this.observer = new MutationObserver(()=>{
      this.setModel()
    })
    
    const config = {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    }
    this.observer.observe(this.element.nativeElement, config);
  }

  ngAfterViewInit(){
    setTimeout(()=>this.setModel(), 800)
  }

  ngOnChanges(){
    setTimeout(()=>{
      if(!this.inChange){
        this.setModel()
      }
    }, 0)
  }

  setModel(){
    this.elementSizeModel = this.elementSizeModel || {}
    this.inChange = true
    this.elementSizeModel.width = this.element.nativeElement.offsetWidth
    this.elementSizeModel.height = this.element.nativeElement.offsetHeight
    this.elementSizeModelChange.emit(this.elementSizeModel)
    
    setTimeout(()=>this.inChange=false, 0)
  }

  ngOnDestroy(){
    this.observer.disconnect()
    window.removeEventListener('resize', this.onResize)
  }
}

@Directive({
  selector: '[elementHeightModel]'
}) export class ElementHeightModel extends ElementSizeModel{
  @Input() elementHeightModel
  @Output() elementHeightModelChange = new EventEmitter()

  setModel(){
    this.elementHeightModel = this.element.nativeElement.offsetHeight
    this.elementHeightModelChange.emit(this.elementHeightModel)
  }
}

@Directive({
  selector: '[elementWidthModel]'
}) export class ElementWidthModel extends ElementSizeModel{
  @Input() elementWidthModel
  @Output() elementWidthModelChange = new EventEmitter()

  setModel(){
    this.elementWidthModel = this.element.nativeElement.offsetWidth
    this.elementWidthModelChange.emit(this.elementWidthModel)
  }
}
