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

  setModel(){
    this.elementSizeModel = this.elementSizeModel || {}
    this.inChange = true
    this.elementSizeModel.width = this.element.nativeElement.offsetWidth
    this.elementSizeModel.height = this.element.nativeElement.offsetHeight
    this.elementSizeModelChange.emit(this.elementSizeModel)
    
    setTimeout(()=>this.inChange=false, 0)
  }

  ngOnChanges(){
    setTimeout(()=>{
      if(!this.inChange){
        this.setModel()
      }
    }, 0)
  }

  ngOnDestroy(){
    this.observer.disconnect()
    window.removeEventListener('resize', this.onResize)
  }
}