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
  onResize: any
  observer: any
  timeout: any
  inChange!: boolean

  @Input() elementSizeModelWatch:any//causes ngOnChanges to fire

  @Input() elementSizeModel: any
  @Output() elementSizeModelChange = new EventEmitter()

  constructor(public element:ElementRef){}

  ngAfterViewInit(){
    this.onResize = ()=>{
      this.setModel()
    }

    window.addEventListener('resize', this.onResize)
    Promise.resolve().then(()=>this.setModel())

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

    setTimeout(()=>this.setModel(), 800)
  }

  ngOnChanges(){
    Promise.resolve().then(()=>{
      if(!this.inChange){
        this.setModel()
      }
    })
  }

  setModel(){
    this.elementSizeModel = this.elementSizeModel || {}
    this.inChange = true
    this.elementSizeModel.width = this.element.nativeElement.offsetWidth
    this.elementSizeModel.height = this.element.nativeElement.offsetHeight
    this.elementSizeModelChange.emit(this.elementSizeModel)

    Promise.resolve().then(()=>{
      this.inChange=false
    })
  }

  ngOnDestroy(){
    this.observer.disconnect()
    window.removeEventListener('resize', this.onResize)
  }
}

@Directive({
  selector: '[elementHeightModel]'
}) export class ElementHeightModel extends ElementSizeModel{
  @Input() elementHeightModel: any
  @Output() elementHeightModelChange = new EventEmitter()

  constructor(public element:ElementRef){
    super( element )
  }

  setModel(){
    this.elementHeightModel = this.element.nativeElement.offsetHeight
    this.elementHeightModelChange.emit(this.elementHeightModel)
  }
}

@Directive({
  selector: '[elementWidthModel]',
  exportAs: 'ElementWidthModel'
}) export class ElementWidthModel extends ElementSizeModel{
  @Input() elementWidthModel: any
  @Output() elementWidthModelChange = new EventEmitter()

  constructor(public element:ElementRef){
    super( element )
  }

  setModel(){
    this.elementWidthModel = this.element.nativeElement.offsetWidth
    this.elementWidthModelChange.emit(this.elementWidthModel)
  }
}
