import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"

@Directive({selector:'[statusOnlineModel]'})
export class StatusOnlineModel{
  onChange
  @Input() statusOnlineModel
  @Output() statusOnlineModelChange = new EventEmitter()

  constructor(){
    this.onChange = ()=>{
      this.statusOnlineModel = navigator.onLine
      this.statusOnlineModelChange.emit(this.statusOnlineModel)
    }

    window.addEventListener("online", this.onChange)
    window.addEventListener("offline", this.onChange)
    setTimeout(()=>this.onChange(), 0)
  }

  ngOnDestroy(){
    window.removeEventListener("online", this.onChange)
    window.removeEventListener("offline", this.onChange)
  }
}