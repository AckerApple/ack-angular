import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

@Directive({
  selector:'[focusOn]'
}) export class FocusOn{
  @Input() focusOn
  @Input() focusOnDelay=0
  @Output() focusThen = new EventEmitter()

  constructor(public element:ElementRef){}

  ngOnChanges(changes){
    if(changes.focusOn && changes.focusOn.currentValue){
      setTimeout(()=>{
        this.element.nativeElement.focus();
        this.focusThen.emit();
      }, this.focusOnDelay);
    }
  }
}
