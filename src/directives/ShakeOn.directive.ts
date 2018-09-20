import {
  hasClass,
  addClass,
  removeClass
} from "./FxOn.directive"

import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

/** runs shake instructions when condition returns a truthy value */
@Directive({
  selector:"[shakeOn]",
  exportAs:"ShakeOn"
}) export class ShakeOn {
  @Input() shakeConstant = false
  @Input() shakeOn
  @Input() shakeForMs
  @Input() shakeType
  @Output() shakeThen = new EventEmitter()
  
  timeout:number
  
  //an array to be used in #ShakeOn refs for fx selectable options (see examples)
  shakeTypes:string[] = [
    'shake-slow','shake-hard','shake-little','shake-horizontal',
    'shake-vertical','shake-rotate','shake-opacity','shake-crazy',
    'shake-chunk'
  ]

  constructor(public element:ElementRef){}

  ngOnInit(){
    setTimeout(()=>this.update(), 0)
  }

  update(){
    this.shakeForMs = this.shakeForMs || 2000
    this.shakeType = this.shakeType || 'shake-slow'
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
      delete this.timeout
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

    if( !this.shakeConstant ){
      this.timeout = setTimeout(()=>{
        //$scope.shakeOnController.shakeOn = false
        this.onFalse()
        this.shakeThen.emit(this)
      }, this.shakeForMs);
    }
  }
}