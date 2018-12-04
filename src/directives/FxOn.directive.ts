import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

/**
  Applies css class when condition returns a truthy value. Allows timed removal
  Html inline elms cannot be animated. They will be upgraded to display inline-block
*/
@Directive({
  selector:"[fxOn]"
  ,exportAs:"FxOn"
}) export class FxOn {
  @Input() fxOn:boolean
  @Input() fxClass:string
  @Input() fxForMs
  @Output() fxThen:EventEmitter<void> = new EventEmitter()

  inlineTreated:boolean
  timeout:number
  //an array to be used in #FxOn refs for fx selectable options (see examples)
  fxTypes:string[] = [
    "bounce","flash","pulse","rubberBand","shake","swing","tada","wobble","jello",
    "bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp"
  ]
  
  constructor(public element:ElementRef){}

  ngOnInit(){
    setTimeout(()=>this.update(), 0)
  }

  update(){
    if( this.fxOn ){
      this.onTrue()
    }else{
      this.onFalse()
    }
  }

  ngOnChanges(changes){
    if (changes.fxOn && changes.fxOn.currentValue!=null && changes.fxOn.currentValue!=changes.fxOn.previousValue) {
      this.update()
    }

    if(changes.fxClass && changes.fxClass.currentValue!=changes.fxClass.previousValue){
      if( this.fxOn ){
        removeClass(this.element.nativeElement, changes.fxClass.previousValue)
        this.applyType()
      }else{
        this.removeType()        
      }
    }
  }

  onFalse(){
    this.removeType()
    if(this.timeout){
      clearTimeout(this.timeout)
      delete this.timeout
    }
  }

  removeType(){
    const elm = this.element.nativeElement
    
    removeClass(elm, this.fxClass)

    if( this.inlineTreated ){
      elm.style.display = 'inline'
      this.inlineTreated = false
    }
  }

  applyType(){
    const elm = this.element.nativeElement
    
    if( elm.style && elm.style.display==='inline' || getElementDefaultDisplay(elm)==='inline' ){
      this.inlineTreated = true
      elm.style.display = 'inline-block'
    }

    addClass(elm, this.fxClass)
  }

  onTrue(){
    this.applyType()

    if( this.fxForMs ){
      this.timeout = setTimeout(()=>{
        this.onFalse()
        this.fxThen.emit()
      }, this.fxForMs);
    }
  }
}

export function hasClass(el, className:string) {
  const names = className.split(" ")

  for(let x=names.length-1; x >= 0; --x){
    if( el.classList ){
      if( el.classList.contains( names[x] ) ){
        continue
      }
    }else{
      if( el.className.match(new RegExp('(\\s|^)' + names[x] + '(\\s|$)')) ){
        continue
      }
    }

    return false
  }

  return true
}

export function addClass(el, className:string) {
  className.split(' ').forEach(className=>{
    if (el.classList){
      el.classList.add(className)
    }else if(!hasClass(el, className)){
      el.className += " " + className
    }
  })
}

export function removeClass(el, className:string) {
  className.split(' ').forEach(className=>{
    if (el.classList){
      el.classList.remove(className)
    }else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className=el.className.replace(reg, ' ')
    }
  })
}

function getElementDefaultDisplay(tag) {
  var cStyle,
      t = tag,
      gcs = "getComputedStyle" in window;

  cStyle = (gcs ? window.getComputedStyle(t, "") : t.currentStyle).display; 

  return cStyle;
}