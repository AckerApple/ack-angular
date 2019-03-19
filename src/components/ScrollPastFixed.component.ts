import {
  ViewChild, TemplateRef,
  ElementRef, Component
} from "@angular/core"
import { string } from "./templates/scroll-past-fixed.pug"

@Component({
  selector:'scroll-past-fixed',
  template:string
}) export class ScrollPastFixed{
  currentPosition:"fixed"
  fillHeight:number
  placeholder:number
  onScroll:()=>any

  @ViewChild('template') template:TemplateRef<any>

  constructor(public ElementRef:ElementRef){}

  getReadElement(){
    const children = this.ElementRef.nativeElement.children
    return children[ children.length-2 ]
  }

  init(){
    this.onScroll = ()=> this.check()
    window.addEventListener("scroll", this.onScroll)
    this.onScroll()
  }

  ngAfterViewInit(){
    Promise.resolve().then(()=>this.init())//prevent Expression has changed after it was checked error
  }

  check(){
    const scrollPos = window['pageYOffset']

    if( this.placeholder && this.placeholder <= scrollPos){
      return
    }

    const elm = this.getReadElement()
    const offsetTop = this.placeholder || getDistanceFromTop(elm)

    if( offsetTop <= scrollPos ){
      this.currentPosition = 'fixed'
      this.placeholder = offsetTop
      this.fillHeight = elm.offsetHeight
    }else{
      delete this.fillHeight
      delete this.placeholder
      delete this.currentPosition
    }
  }
}

export function getDistanceFromTop(element):number{
  let yPos = 0

  while(element) {
    yPos += (element.offsetTop)
    element = element.offsetParent
  }

  return yPos
}