import {
  Directive,
  Output,
  EventEmitter
} from "@angular/core"

@Directive({
  selector:'[init]'
}) export class InitDirective {
  @Output() init: EventEmitter<void> = new EventEmitter()

  ngOnInit(){
    this.init.emit()
  }
}
