import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

@Directive({
  selector: '[innerHtmlModel]'
}) export class InnerHtmlModel{
  public onChange
  public observer
  public timeout

  @Input() innerHtmlModel
  @Output() innerHtmlModelChange = new EventEmitter()

  constructor(public element:ElementRef){
    this.observer = new MutationObserver( ()=>this.setModel() )
    
    const config = {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    }
    this.observer.observe(this.element.nativeElement, config);

    //this.element.nativeElement.addEventListener("mouseup",()=>this.setModel())
    //this.element.nativeElement.addEventListener("keyup",()=>this.setModel())
  }

  ngOnChanges(){
    setTimeout(()=>this.setModel(), 0)
  }

  setModel(){
    this.innerHtmlModel = this.element.nativeElement.innerHTML
    this.innerHtmlModelChange.emit(this.innerHtmlModel)
  }

  ngOnDestroy(){
    this.observer.disconnect()
  }
}