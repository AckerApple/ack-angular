import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"

@Directive({selector:'[statusOfflineModel]'})
export class StatusOfflineModel{
  onChange
  @Input() statusOfflineModel
  @Output() statusOfflineModelChange = new EventEmitter()

  constructor(){
    this.onChange = ()=>{
      this.statusOfflineModel = !navigator.onLine
      this.statusOfflineModelChange.emit(this.statusOfflineModel)
    }

    window.addEventListener("offline", this.onChange)
    window.addEventListener("online", this.onChange)
    Promise.resolve().then(()=>this.onChange())
  }

  ngOnDestroy(){
    window.removeEventListener("offline", this.onChange)
    window.removeEventListener("online", this.onChange)
  }
}