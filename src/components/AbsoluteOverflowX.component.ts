import {
  ElementRef, Component, Input
} from "@angular/core"
import { string } from "./templates/absolute-overflow-x.pug"

@Component({
  selector:'absolute-overflow-x',
  template:string
}) export class AbsoluteOverflowX{
  elementHeightModel:number
  @Input() scrollBars:boolean|any
  @Input() wrapClass
  @Input() active:boolean|any = true
  @Input() overflow:'auto'|'none'|'hidden'|'scroll' = 'auto'

  constructor(public ElementRef:ElementRef){}

  ngOnInit(){
    this.checkDisplay()
  }

  ngOnChanges( changes ){
    if( changes.active ){
      this.checkDisplay()
    }
  }

  ngAfterViewInit(){
    this.ElementRef.nativeElement.style.display = 'block'
  }
  
  checkDisplay(){
    this.ElementRef.nativeElement.style.position = this.active ? 'relative' : 'static'
  }
}