import { ElementRef, Component,Input } from "@angular/core"

import { string as absoluteOverflowX } from "./templates/absolute-overflow-x.pug"
@Component({
  selector:'absolute-overflow-x',
  template:absoluteOverflowX
}) export class AbsoluteOverflowX{
  elementHeightModel:number
  @Input() scrollBars:boolean|any
  @Input() wrapClass
  @Input() active:boolean|any = true
  @Input() overflow:'auto'|'none'|'hidden'|'scroll' = 'auto'

  constructor(public ElementRef:ElementRef){}

  ngOnChanges(changes){
    this.ElementRef.nativeElement.style.position = this.active ? 'relative' : 'static'
  }
}
