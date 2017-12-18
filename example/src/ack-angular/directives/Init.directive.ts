import {
  Directive,
  Output,
  EventEmitter
} from "@angular/core"

@Directive({
  selector:'[init]'
}) export class Init{
  @Output() init = new EventEmitter()

  ngOnInit(){
    this.init.emit()
  }
}
