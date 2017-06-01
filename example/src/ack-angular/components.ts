import {
  ContentChild,
  TemplateRef,
  Component,
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

import { fxArray as prefx } from "./prefx"
import { array } from "./pipes.class"

import { string as readerHeaderBody } from "./templates/reader-header-body.pug"
import { string as errorWell } from "./templates/error-well.pug"
import { string as absoluteOverflowX } from "./templates/absolute-overflow-x.pug"

@Directive({
  selector:'[focusOn]'
}) export class FocusOn{
  @Input() focusOn
  @Input() focusOnDelay=0
  @Output() focusThen = new EventEmitter()

  constructor(public element:ElementRef){}

  ngOnChanges(changes){
    if(changes.focusOn && changes.focusOn.currentValue){
      setTimeout(()=>{
        this.element.nativeElement.focus();
        this.focusThen.emit();
      }, this.focusOnDelay);
    }
  }
}

@Directive({
  selector:'[selectOn]'
}) export class SelectOn{
  @Input() selectOn
  @Input() selectOnDelay=0
  @Output() selectThen = new EventEmitter()

  constructor(public element:ElementRef){}

  ngOnChanges(changes){
    if(changes.selectOn && changes.selectOn.currentValue){
      setTimeout(()=>{
        this.element.nativeElement.select();
        this.selectThen.emit();
      }, this.selectOnDelay);
    }
  }
}

@Directive({
  selector: '[var]',
  exportAs: 'var'
}) export class VarDirective {
  @Input() var:any;
}

import { string as ackModal } from "./templates/ack-modal.pug"
@Component({
  selector:'ack-modal',
  template:ackModal
}) export class AckModal{
  @Output() public onClose = new EventEmitter()
  //@Input() public size:string//'full' or null
  @Input() public wrapStyle
  @Input() public allowClose = true
  @Input() public backgroundColor
  @Output() public backgroundColorChange = new EventEmitter()
  @Input() private ref
  @Output() public refChange = new EventEmitter()

  constructor(public element:ElementRef){
    //after possible double click, close on outside content click
    setTimeout(()=>this.clickListenForClose(), 400)

    element.nativeElement.style.position = 'fixed'
    element.nativeElement.style.top=0
    element.nativeElement.style.left=0
    element.nativeElement.style.zIndex = 20;
    element.nativeElement.style.height = '100%';
    element.nativeElement.style.width = '100%'
    element.nativeElement.style.overflow = 'auto';
    element.nativeElement.style.display = 'block';
  }

  clickListenForClose(){
    this.element.nativeElement.addEventListener('click', event=>{
      if(!this.allowClose)return false

      var eTar = event.srcElement || event.toElement || event.target

      if(eTar == this.element.nativeElement.children[0]){
        this.close()
      }
    })
  }

  ngOnInit(){
    setTimeout(()=>{
      this.ref = Object.assign(this,this.ref)
      this.refChange.emit(this.ref)

      this.backgroundColor = this.backgroundColor || 'rgba(255,255,255,0.95)'
      this.backgroundColorChange.emit(this.backgroundColor)
    }, 0)
  }

  close(){
    this.onClose.emit(this)
  }
}

import { string as ackOptions } from "./templates/ack-options.pug"
@Component({
  selector:'ack-options',
  template:ackOptions
}) export class AckOptions{
  @Input() public array = []
  @Input() public stylize = true
  @Input() public multiple = false
  @Input() public toggleable = false//multiple must be false
  @Input() public model
  @Output() public modelChange = new EventEmitter()
  @ContentChild(TemplateRef) @Input() public templateRef:TemplateRef<any>
  @Input() private ref
  @Output() public refChange = new EventEmitter()

  ngOnInit(){
    setTimeout(()=>{
      this.ref = Object.assign(this,this.ref)
      this.refChange.emit(this.ref)
    }, 0)
  }

  selectItem(item){
    if(this.multiple){
      const modelIndex = this.modelIndex(item)
      if(modelIndex>=0){
        this.model.splice(modelIndex, 1)
      }else{
        this.model.push(item)
      }
    }else{
      if(this.toggleable && this.model==item){
        this.model=null
      }else{
        this.model=item
      }
    }
    this.modelChange.emit(this.model)
  }

  modelIndex(item){
    this.model = array(this.model)
    for(let i=this.model.length-1; i >= 0; --i){
      if(this.model[i]==item)return i
    }
    return -1
  }
}

import { string as ackOptionsModal } from "./templates/ack-options-modal.pug"
@Component({
  selector:'ack-options-modal',
  template:ackOptionsModal
}) export class AckOptionsModal extends AckOptions{
  public ackModal
  public ackOptions
  @Input() public allowClose = true
  @Output() public onClose = new EventEmitter()

  constructor(public element:ElementRef){
    super()

    element.nativeElement.style.position = 'fixed'
    element.nativeElement.style.top=0
    element.nativeElement.style.left=0
    element.nativeElement.style.zIndex = 20;
    element.nativeElement.style.height = '100%';
    element.nativeElement.style.width = '100%'
    element.nativeElement.style.overflow = 'auto';
    element.nativeElement.style.display = 'block';
  }

  ngAfterViewInit(){
    setTimeout(()=>{    
      this.ackOptions.modelChange.subscribe(model=>{
        if(model && !this.multiple && this.ackModal){
          this.ackModal.close()
        }

        this.modelChange.emit( this.model )
      })
    }, 0)
  }
}

@Directive({selector:'[onEnterKey]'})
export class OnEnterKey{
  @Output() public onEnterKey = new EventEmitter()
  constructor(public element:ElementRef){
    element.nativeElement.addEventListener('keydown', (event)=>{
      var yesNo = [13,10].indexOf(event.which||event.keyCode)>=0
      if(yesNo){
        this.onEnterKey.emit(event)
      }
    })
  }
}

@Directive({selector:'[onEscapeKey]'})
export class OnEscapeKey{
  @Output() public onEscapeKey = new EventEmitter()
  constructor(public element:ElementRef){
    element.nativeElement.addEventListener('keydown', (event)=>{
      const code = event.which||event.keyCode
      if(code==27){
        this.onEscapeKey.emit(event)
      }
    })
  }
}

/** Disallow keyboard access to the backspace key */
@Directive({selector:'[preventBackKey]'})
export class PreventBackKey {
  @Output() public preventBackKey = new EventEmitter()
  constructor(public element:ElementRef){
    element.nativeElement.addEventListener('keydown', (event)=>{
      var yesNo = [8].indexOf(event.which||event.keyCode)<0
      if(!yesNo){
        this.preventBackKey.emit(event)
        if(event.preventDefault){
          event.preventDefault()
        }
      }
      return yesNo
    })
  }
}

/** Disallow keyboard access to the enter keys */
@Directive({selector:'[preventEnterKey]'})
export class PreventEnterKey{
  @Output() public preventEnterKey = new EventEmitter()
  constructor(public element:ElementRef){
    element.nativeElement.addEventListener('keydown', (event)=>{
      var yesNo = [13,10].indexOf(event.which||event.keyCode)<0
      if(!yesNo){
        this.preventEnterKey.emit(event)
        if(event.preventDefault){
          event.preventDefault()
        }
      }
      return yesNo
    })
  }
}

@Component({
  selector:'input-hint',
  template:'<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
}) export class InputHint {
  @Input() public hintStyle = {'font-size':'75%','color':'#BBB'}
}

@Directive({selector:'[statusOnlineModel]'})
export class StatusOnlineModel{
  public onChange
  @Input() public statusOnlineModel
  @Output() public statusOnlineModelChange = new EventEmitter()

  constructor(){
    this.onChange = function(){
      this.statusOnlineModel = navigator.onLine
      this.statusOnlineModelChange.emit(this.statusOnlineModel)
    }.bind(this)

    window.addEventListener("online", this.onChange)
    window.addEventListener("offline", this.onChange)
    setTimeout(()=>this.onChange(), 0)
  }

  ngOnDestroy(){
    window.removeEventListener("online", this.onChange)
    window.removeEventListener("offline", this.onChange)
  }
}

@Directive({selector:'[statusOfflineModel]'})
export class StatusOfflineModel{
  public onChange
  @Input() public statusOfflineModel
  @Output() public statusOfflineModelChange = new EventEmitter()

  constructor(){
    this.onChange = function(){
      this.statusOfflineModel = !navigator.onLine
      this.statusOfflineModelChange.emit(this.statusOfflineModel)
    }.bind(this)

    window.addEventListener("offline", this.onChange)
    window.addEventListener("online", this.onChange)
    setTimeout(()=>this.onChange(), 0)
  }

  ngOnDestroy(){
    window.removeEventListener("offline", this.onChange)
    window.removeEventListener("online", this.onChange)
  }
}

/** adds form element onchange listener via addEventListener('change') that calls onFormChanged scope argument */
@Directive({
  selector:'[onFormChanged]'//Also try : onFormAlter
}) export class OnFormChanged{
  //static parameters = [[ElementRef]]
  public onChange

  @Output() public onFormChanged = new EventEmitter()

  constructor(public element:ElementRef){
    this.onChange = function(event){
      this.onFormChanged.emit(event)
    }.bind(this)

    element.nativeElement.addEventListener('change',this.onChange)
  }

  ngOnDestroy(){
    this.element.nativeElement.removeEventListener('change',this.onChange)
  }
}

@Directive({
  selector:'[onFormAlter]'
}) export class OnFormAlter{
  //-static parameters = [[ElementRef]]
  public onChange

  @Output() public onFormAlter = new EventEmitter()

  constructor(public element:ElementRef){
    this.onChange = function(event){
      this.onFormAlter.emit(event)
    }.bind(this)

    element.nativeElement.addEventListener('input',this.onChange)
    element.nativeElement.addEventListener('change',this.onChange)
  }

  ngOnDestroy(){
    this.element.nativeElement.removeEventListener('change',this.onChange)
    this.element.nativeElement.removeEventListener('input',this.onChange)
  }
}


@Component({
  selector:'reader-header-body',
  template:readerHeaderBody
}) export class ReaderHeaderBody {}

@Directive({
  selector:'reader-header'
}) export class ReaderHeader {}

@Directive({
  selector:"reader-body"
  //,parameters:[[ElementRef]]
}) export class ReaderBody {
  //-static parameters = [[ElementRef]]

  constructor(public element: ElementRef){
    element.nativeElement.style.height = '100%';
    element.nativeElement.style.display = 'block';
  }
}

@Directive({
  selector: '[innerHtmlModel]'
}) export class InnerHtmlModel{
  public onChange
  public observer
  public timeout

  @Input() public innerHtmlModel
  @Output() public innerHtmlModelChange = new EventEmitter()

  constructor(public element:ElementRef){
    this.observer = new MutationObserver( ()=>this.setModel() )
    
    const config = {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    }
    this.observer.observe(this.element.nativeElement, config);

    //this.element.nativeElement.addEventListener("mouseup",()=>this.setModel())
    //this.element.nativeElement.addEventListener("keyup",()=>this.setModel())
  }

  ngOnChanges(){
    setTimeout(()=>this.setModel(), 0)
  }

  setModel(){
    this.innerHtmlModel = this.element.nativeElement.innerHTML
    this.innerHtmlModelChange.emit(this.innerHtmlModel)
  }

  ngOnDestroy(){
    this.observer.disconnect()
  }
}

@Directive({
  selector: '[elementHeightModel]'
}) export class ElementHeightModel{
  public onResize
  public observer
  public timeout

  @Input() public elementHeightModel
  @Output() public elementHeightModelChange = new EventEmitter()

  constructor(public element:ElementRef){
    this.onResize = function(){
      this.setModel()
    }.bind(this)

    window.addEventListener('resize', this.onResize)
    setTimeout(()=>this.setModel(), 0)

    this.observer = new MutationObserver(()=>{
      this.setModel()
    })
    
    const config = {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    }
    this.observer.observe(this.element.nativeElement, config);
  }

  ngOnChanges(){
    setTimeout(()=>this.setModel(), 0)
  }

  setModel(){
    this.elementHeightModel = this.element.nativeElement.offsetHeight
    //this.element.nativeElement.style.border='1px solid red'
    this.elementHeightModelChange.emit(this.elementHeightModel)
  }

  ngOnDestroy(){
    this.observer.disconnect()
    window.removeEventListener(this.onResize)
  }
}

@Directive({
  selector: '[elementWidthModel]'
}) export class ElementWidthModel{
  public onResize
  public timeout

  @Input() public elementWidthModel
  @Output() public elementWidthModelChange = new EventEmitter()

  constructor(public element:ElementRef){
    this.onResize = function(){
      this.setModel()
    }.bind(this)

    window.addEventListener('resize', this.onResize)
    this.setModel()
  }

  ngOnChanges(){
    this.setModel()
  }

  setModel(){
    this.elementWidthModel = this.element.nativeElement.offsetWidth
    this.elementWidthModelChange.emit(this.elementWidthModel)
  }

  ngOnDestroy(){
    window.removeEventListener(this.onResize)
  }
}

@Directive({
  //inputs:['screen-height-model'],
  selector: '[screenScrollModelY]'
}) export class ScreenScrollModelY{
  //public window
  public onScroll

  @Input() public screenScrollModelY
  @Output() public screenScrollModelYChange = new EventEmitter()
  
  constructor(){
    this.onScroll = function(){
      this.screenScrollModelY = window['pageYOffset']
      this.screenScrollModelYChange.emit(this.screenScrollModelY)
    }.bind(this)
    this.onScroll()
    window['addEventListener']("scroll", this.onScroll)
  }

  ngOnInit(){
    setTimeout(()=>this.onScroll(), 0)//two way bind often needs init override
  }

  ngOnDestroy(){
    window['removeEventListener']("scroll", this.onScroll)
  }
}

@Directive({
  selector: '[screenWidthModel]'
}) export class ScreenWidthModel{
  public window
  public onResize

  @Input() public screenWidthModel
  @Output() public screenWidthModelChange = new EventEmitter()

  constructor(){
    this.onResize = function(){
      if(this.screenWidthModel !== window.innerWidth){
        this.setModel()
      }
    }.bind(this)

    window.addEventListener('resize', this.onResize)
    setTimeout(()=>this.setModel(), 0)
  }

  ngOnInit(){
    setTimeout(()=>this.onResize(), 0)//two way bind often needs init override
  }

  setModel(){
    this.screenWidthModel = window.innerWidth
    this.screenWidthModelChange.emit(this.screenWidthModel)
  }

  ngOnDestroy(){
    window.removeEventListener(this.onResize)
  }
}

@Directive({
  selector: '[screenHeightModel]'
}) export class ScreenHeightModel{
  public onResize

  @Input() public screenHeightModel
  @Output() public screenHeightModelChange = new EventEmitter()

  constructor(){
    this.onResize = function(){
      if(this.screenHeightModel !== window.innerHeight){
        this.setModel()
      }
    }.bind(this)

    window.addEventListener('resize', this.onResize)
    setTimeout(()=>this.onResize(), 0)
  }

  ngOnInit(){
    setTimeout(()=>this.onResize(), 0)//two way bind often needs init override
  }

  setModel(){
    this.screenHeightModel = window.innerHeight
    this.screenHeightModelChange.emit(this.screenHeightModel)
  }

  ngOnDestroy(){
    window.removeEventListener(this.onResize)
  }
}


@Directive({
  selector: '[htmlWidthModel]'
}) export class HtmlWidthModel{
  public window
  public onResize

  @Input() public htmlWidthModel
  @Output() public htmlWidthModelChange = new EventEmitter()

  constructor(){
    this.onResize = function(){
      if(this.htmlWidthModel !== window.document.documentElement.clientWidth){
        this.setModel()
      }
    }.bind(this)

    window.addEventListener('resize', this.onResize)
    setTimeout(()=>this.setModel(), 0)
  }

  ngOnInit(){
    setTimeout(()=>this.onResize(), 0)//two way bind often needs init override
  }

  setModel(){
    this.htmlWidthModel = window.document.documentElement.clientWidth
    this.htmlWidthModelChange.emit(this.htmlWidthModel)
  }

  ngOnDestroy(){
    window.removeEventListener(this.onResize)
  }
}

@Directive({
  selector: '[htmlHeightModel]'
}) export class HtmlHeightModel{
  public onResize

  @Input() public htmlHeightModel
  @Output() public htmlHeightModelChange = new EventEmitter()

  constructor(){
    this.onResize = function(){
      if(this.htmlHeightModel !== window.document.documentElement.clientHeight){
        this.setModel()
      }
    }.bind(this)

    window.addEventListener('resize', this.onResize)
    setTimeout(()=>this.onResize(), 0)
  }

  ngOnInit(){
    setTimeout(()=>this.onResize(), 0)//two way bind often needs init override
  }

  setModel(){
    this.htmlHeightModel = window.document.documentElement.clientHeight
    this.htmlHeightModelChange.emit(this.htmlHeightModel)
  }

  ngOnDestroy(){
    window.removeEventListener(this.onResize)
  }
}

@Component({
  selector:'absolute-overflow-x',
  template:absoluteOverflowX
}) export class AbsoluteOverflowX{
  @Input() public scrollBars
}

@Component({
  selector:'error-well',
  template:errorWell,
  animations:prefx
}) export class ErrorWell{
  @Input() message:string = 'Unexpected Error Occured'
  @Input() error
  @Input() cssClasses:string

  ngOnInit(){
    this.cssClasses = this.cssClasses || 'bg-danger border border-danger text-danger'
  }

  getErrorMessage(error){
    if(!error)return this.message
    
    if(typeof error=='string')return error

    return error.message || error.statusText || this.message
  }
}


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

export const declarations = [
  //directives
  SelectOn,
  FocusOn,
  VarDirective,
  InnerHtmlModel,
  OnFormAlter,
  OnFormChanged,
  OnEnterKey,
  OnEscapeKey,
  PreventBackKey,
  PreventEnterKey,
  ScreenScrollModelY,
  ScreenWidthModel,
  ScreenHeightModel,
  HtmlWidthModel,
  HtmlHeightModel,
  ShakeOn,
  StatusOnlineModel,
  StatusOfflineModel,
  ElementWidthModel,
  ElementHeightModel,

  //components
  ReaderHeaderBody,
  ReaderHeader,
  ReaderBody,
  ErrorWell,
  AbsoluteOverflowX,
  InputHint,
  AckModal,
  AckOptions,
  AckOptionsModal
]