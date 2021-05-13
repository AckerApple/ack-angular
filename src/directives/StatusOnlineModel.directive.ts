import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"

@Directive({selector:'[statusOnlineModel]'})
export class StatusOnlineModel{
  onChange: any
  @Input() statusOnlineModel: any
  @Output() statusOnlineModelChange = new EventEmitter()

  constructor(){
    this.onChange = ()=>{
      this.statusOnlineModel = navigator.onLine
      this.statusOnlineModelChange.emit(this.statusOnlineModel)
    }

    window.addEventListener("online", this.onChange)
    window.addEventListener("offline", this.onChange)

    Promise.resolve().then(()=>this.onChange())
  }

  ngOnDestroy(){
    window.removeEventListener("online", this.onChange)
    window.removeEventListener("offline", this.onChange)
  }
}