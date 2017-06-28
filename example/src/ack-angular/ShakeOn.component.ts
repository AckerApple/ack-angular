import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

/** runs shake instructions when condition returns a truthy value */
@Directive({
  selector:'[shakeOn]'
}) export class ShakeOn {
  public timeout

  @Input() public shakeConstant = false

  @Input() public shakeOn
  @Output() public shakeThen = new EventEmitter()

  @Input() public shakeForMs
  @Output() public shakeForMsChange = new EventEmitter()

  @Input() public shakeType
  @Output() public shakeTypeChange = new EventEmitter()
  
  @Input() public shakeRef
  @Output() public shakeRefChange = new EventEmitter()
  
  public shakeTypes = [
    'shake-slow','shake-hard','shake-little','shake-horizontal',
    'shake-vertical','shake-rotate','shake-opacity','shake-crazy',
    'shake-chunk'
  ]

  constructor(public element:ElementRef){
  }

  ngOnInit(){
    setTimeout(()=>this.update(), 0)
  }

  update(){
    this.shakeForMs = this.shakeForMs || 2000
    this.shakeRef = this
    this.shakeType = this.shakeType || 'shake-slow'
    
    this.shakeRefChange.emit( this.shakeRef )
    this.shakeTypeChange.emit( this.shakeType )
    this.shakeForMsChange.emit( this.shakeForMs )
  }

  ngOnChanges(changes){
    if (changes.shakeOn && changes.shakeOn.currentValue!=null && changes.shakeOn.currentValue!=changes.shakeOn.previousValue) {
      if(changes.shakeOn.currentValue){
        this.onTrue();
      }else{
        this.onFalse();
      }
    }

    if(changes.shakeType && changes.shakeType.currentValue!=changes.shakeType.previousValue){
      if(this.shakeOn){
        removeClass(this.element.nativeElement, changes.shakeType.previousValue)
        this.applyType()
      }else{
        this.removeType()        
      }
    }
  }

  onFalse(){
    removeClass(this.element.nativeElement, 'shake-constant')
    this.removeType()
    if(this.timeout){
      clearTimeout(this.timeout)
      this.timeout = null
    }
  }

  removeType(){
    removeClass(this.element.nativeElement, this.shakeType||'shake-slow')
  }

  applyType(){
    addClass(this.element.nativeElement, this.shakeType||'shake-slow')
  }

  onTrue(){
    addClass(this.element.nativeElement, 'shake-constant')
    this.applyType()

    if(!this.shakeConstant){
      this.timeout = setTimeout(()=>{
        //$scope.shakeOnController.shakeOn = false
        this.onFalse()
        this.shakeThen.emit(this)
      }, this.shakeForMs);
    }
  }
}

export function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

export function addClass(el, className) {
  if (el.classList){
    el.classList.add(className)
  }
  else if (!hasClass(el, className)) el.className += " " + className
}

export function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}