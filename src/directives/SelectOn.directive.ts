import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

@Directive({
  selector:'[selectOn]'
}) export class SelectOn{
  @Input() selectOn
  @Input() selectOnDelay=0
  @Output() selectThen = new EventEmitter()

  constructor(public element:ElementRef){}

  ngOnChanges(changes){
    if(changes.selectOn && changes.selectOn.currentValue){
      if( this.selectOnDelay===0 ){
        Promise.resolve().then(()=>this.update())
      }
      setTimeout(()=>this.update(), this.selectOnDelay);
    }
  }

  update(){
    this.element.nativeElement.select();
    this.selectThen.emit();    
  }
}
