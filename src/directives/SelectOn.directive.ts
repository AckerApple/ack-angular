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
      setTimeout(()=>{
        this.element.nativeElement.select();
        this.selectThen.emit();
      }, this.selectOnDelay);
    }
  }
}
