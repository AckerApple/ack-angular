import {
  ViewChild, TemplateRef,
  ElementRef, Component
} from "@angular/core"
import { string } from "./templates/scroll-past-fixed.pug"

@Component({
  selector:'scroll-past-fixed',
  template:string
}) export class ScrollPastFixed{
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
    this.onScroll()
    window.addEventListener("scroll", this.onScroll)
    const elm = this.getReadElement()
  }

  ngAfterViewInit(){
    this.init()
    this.check()
  }

  check(){
    const scrollPos = window['pageYOffset']

    if( this.placeholder && this.placeholder <= scrollPos){
      return
    }

    const elm = this.getReadElement()
    const offsetTop = this.placeholder || getDistanceFromTop(elm)
    let position =  'static'

    if( offsetTop <= scrollPos ){
      position = 'fixed'
      this.placeholder = offsetTop
      this.fillHeight = elm.offsetHeight
    }else{
      this.fillHeight = null
      delete this.placeholder
    }

    elm.style.position = position
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