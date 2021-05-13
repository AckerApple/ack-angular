import {
  Directive, ElementRef,
  Input, Output, EventEmitter
} from "@angular/core"

@Directive({
  selector: "[pxFromHtmlTop]"
  ,exportAs:"PxFromHtmlTop"
}) export class PxFromHtmlTop{
  //public window
  onScroll?: any

  @Input("pxFromHtmlTop") number?: number
  @Output("pxFromHtmlTopChange") numberChange:EventEmitter<number> = new EventEmitter()
  @Input() watch:any//anytime it change we update

  constructor(public ElementRef:ElementRef){
    this.onScroll = ()=>{
      this.setter()
      this.emit()
    }

    window.addEventListener("resize", this.onScroll)
    window.addEventListener("scroll", this.onScroll)
  }

  emit(){
    this.numberChange.emit(this.number)
  }

  ngOnChanges(){
    Promise.resolve().then(()=>{
      this.setter()
      this.emit()
    })

    this.delayFire(250)
    this.delayFire(750)
    this.delayFire(1500)
  }

  setter(){
    const top = this.ElementRef.nativeElement.getBoundingClientRect().top
    this.number = top// || 0
    //this.number = getOffset( this.ElementRef.nativeElement ).top
  }

  ngAfterViewInit(){
    this.delayFire()
    this.delayFire(200)
  }

  delayFire( num:number=0 ){
    setTimeout(()=>{
      this.setter()
      this.emit()
    }, num)
  }

  ngOnDestroy(){
    window.removeEventListener("scroll", this.onScroll)
    window.removeEventListener("resize", this.onScroll)
  }
}

/*
export function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}*/