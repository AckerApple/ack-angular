import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"

@Directive({
  selector: '[screenScrollHeightDiff]'
}) export class ScreenScrollHeightDiff{
  on: any
  @Input() screenScrollHeightDiff: any
  @Output() screenScrollHeightDiffChange = new EventEmitter()

  constructor(){
    this.on = ()=>{
      this.apply()
    }

    window.addEventListener("scroll", this.on)
    window.addEventListener("resize", this.on)
  }

  apply(){
    this.screenScrollHeightDiff = document.body.scrollHeight - window.innerHeight
    if(this.screenScrollHeightDiff<0)this.screenScrollHeightDiff=0
    this.screenScrollHeightDiffChange.emit( this.screenScrollHeightDiff )
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.on)
    window.removeEventListener("resize", this.on)
  }
}
