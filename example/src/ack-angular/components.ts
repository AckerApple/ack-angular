import {
  Component,
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

import { AckModal } from "./components/AckModal.component"
import { AckArray } from "./AckArray.directive"
import { AckOptions } from "./components/AckOptions.component"
import { AckOptionsModal } from "./components/AckOptionsModal.component"

import { AbsoluteOverflowX } from "./components/AbsoluteOverflowX.component"
export { AbsoluteOverflowX } from "./components/AbsoluteOverflowX.component"

import { ShakeOn } from "./ShakeOn.directive"
export { ShakeOn } from "./ShakeOn.directive"

import { ErrorWell } from "./components/ErrorWell.component"
export { ErrorWell } from "./components/ErrorWell.component"

import { ReaderHeaderBody, ReaderHeader, ReaderBody } from "./components/ReaderHeaderBody.component"
//@Directive({selector:'component-header'}) export class ComponentHeader {}

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

@Directive({selector:'[enterKey]'})
export class EnterKey{
  @Output() enterKey:EventEmitter<Event> = new EventEmitter()
  constructor(public element:ElementRef){
    element.nativeElement.addEventListener('keydown', (event)=>{
      var yesNo = [13,10].indexOf(event.which||event.keyCode)>=0
      if(yesNo){
        this.enterKey.emit(event)
      }
    })
  }
}

@Directive({selector:'[escapeKey]'})
export class EscapeKey{
  @Output() escapeKey:EventEmitter<Event> = new EventEmitter()
  
  constructor(public element:ElementRef){
    element.nativeElement.addEventListener('keydown', (event)=>{
      const code = event.which||event.keyCode
      if(code==27){
        this.escapeKey.emit(event)
      }
    })
  }
}

/** Disallow keyboard access to the backspace key */
@Directive({selector:'[preventBackKey]'})
export class PreventBackKey {
  @Output() preventBackKey = new EventEmitter()
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
  @Output() preventEnterKey = new EventEmitter()
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
  @Input() hintStyle = {'font-size':'75%','color':'#BBB'}
}

@Directive({selector:'[statusOnlineModel]'})
export class StatusOnlineModel{
  public onChange
  @Input() statusOnlineModel
  @Output() statusOnlineModelChange = new EventEmitter()

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
  @Input() statusOfflineModel
  @Output() statusOfflineModelChange = new EventEmitter()

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

/** adds form element onchange listener via addEventListener('change') that calls formChanged scope argument */
@Directive({
  selector:'[formChanged]'//Also try : onFormAlter
}) export class FormChanged{
  //static parameters = [[ElementRef]]
  onChange

  @Output() formChanged = new EventEmitter()

  constructor(public element:ElementRef){
    this.onChange = function(event){
      this.formChanged.emit(event)
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

  @Output() onFormAlter = new EventEmitter()

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


@Directive({
  selector: '[innerHtmlModel]'
}) export class InnerHtmlModel{
  public onChange
  public observer
  public timeout

  @Input() innerHtmlModel
  @Output() innerHtmlModelChange = new EventEmitter()

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
  selector: '[elementSizeModel]'
}) export class ElementSizeModel{
  onResize
  observer
  timeout
  inChange

  @Input() elementSizeModel
  @Output() elementSizeModelChange = new EventEmitter()

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

  ngAfterViewInit(){
    setTimeout(()=>this.setModel(), 800)
  }

  setModel(){
    this.elementSizeModel = this.elementSizeModel || {}
    this.inChange = true
    this.elementSizeModel.width = this.element.nativeElement.offsetWidth
    this.elementSizeModel.height = this.element.nativeElement.offsetHeight
    this.elementSizeModelChange.emit(this.elementSizeModel)
    
    setTimeout(()=>this.inChange=false, 0)
  }

  ngOnChanges(){
    setTimeout(()=>{
      if(!this.inChange){
        this.setModel()
      }
    }, 0)
  }

  ngOnDestroy(){
    this.observer.disconnect()
    window.removeEventListener('resize', this.onResize)
  }
}

@Directive({
  selector: '[elementHeightModel]'
}) export class ElementHeightModel extends ElementSizeModel{
  @Input() elementHeightModel
  @Output() elementHeightModelChange = new EventEmitter()

  setModel(){
    this.elementHeightModel = this.element.nativeElement.offsetHeight
    this.elementHeightModelChange.emit(this.elementHeightModel)
  }
}

@Directive({
  selector: '[elementWidthModel]'
}) export class ElementWidthModel extends ElementSizeModel{
  @Input() elementWidthModel
  @Output() elementWidthModelChange = new EventEmitter()

  setModel(){
    this.elementWidthModel = this.element.nativeElement.offsetWidth
    this.elementWidthModelChange.emit(this.elementWidthModel)
  }
}

@Directive({
  selector: '[screenScrollHeightDiff]'
}) export class ScreenScrollHeightDiff{
  on
  @Input() screenScrollHeightDiff
  @Output() screenScrollHeightDiffChange = new EventEmitter()

  constructor(){
    this.on = function(){
      this.apply()
    }.bind(this)

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

@Directive({
  selector: '[screenScroll]'
}) export class ScreenScroll{
  //public window
  onScroll

  @Output() screenScroll = new EventEmitter()
  
  constructor(){
    this.onScroll = function(){
      this.screenScroll.emit({x:window['pageXOffset'], y:window['pageYOffset']})
    }.bind(this)
    this.onScroll()
    window.addEventListener("scroll", this.onScroll)
  }

  ngOnInit(){
    setTimeout(()=>this.onScroll(), 0)//two way bind often needs init override
  }

  ngOnDestroy(){
    window.removeEventListener("scroll", this.onScroll)
  }
}

@Directive({
  selector: '[screenScrollModelY]'
}) export class ScreenScrollModelY{
  //public window
  onScroll

  @Input() screenScrollModelY
  @Output() screenScrollModelYChange = new EventEmitter()
  
  constructor(){
    this.onScroll = function(){
      this.screenScrollModelY = window['pageYOffset']
      this.screenScrollModelYChange.emit(this.screenScrollModelY)
    }.bind(this)
    this.onScroll()
    window.addEventListener("scroll", this.onScroll)
  }

  ngOnInit(){
    setTimeout(()=>this.onScroll(), 0)//two way bind often needs init override
  }

  ngOnDestroy(){
    window.removeEventListener("scroll", this.onScroll)
  }
}

@Directive({
  selector: '[screenWidthModel]'
}) export class ScreenWidthModel{
  window
  onResize

  @Input() screenWidthModel
  @Output() screenWidthModelChange = new EventEmitter()

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
    window.removeEventListener('resize', this.onResize)
  }
}

@Directive({
  selector: '[screenHeightModel]'
}) export class ScreenHeightModel{
  onResize

  @Input() screenHeightModel
  @Output() screenHeightModelChange = new EventEmitter()

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
    window.removeEventListener('resize', this.onResize)
  }
}


@Directive({
  selector: '[htmlWidthModel]'
}) export class HtmlWidthModel{
  window
  onResize

  @Input() htmlWidthModel
  @Output() htmlWidthModelChange = new EventEmitter()

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
    window.removeEventListener('resize', this.onResize)
  }
}

@Directive({
  selector: '[htmlHeightModel]'
}) export class HtmlHeightModel{
  onResize

  @Input() htmlHeightModel
  @Output() htmlHeightModelChange = new EventEmitter()

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
    window.removeEventListener('resize', this.onResize)
  }
}

export const declarations = [
  //directives
  SelectOn,
  FocusOn,
  VarDirective,
  InnerHtmlModel,
  OnFormAlter,
  FormChanged,
  EnterKey,
  EscapeKey,
  PreventBackKey,
  PreventEnterKey,
  ScreenScrollModelY,
  ScreenWidthModel,
  ScreenHeightModel,
  ScreenScroll,
  ScreenScrollHeightDiff,
  HtmlWidthModel,
  HtmlHeightModel,
  ShakeOn,
  StatusOnlineModel,
  StatusOfflineModel,
  ElementSizeModel,
  ElementWidthModel,
  ElementHeightModel,

  //components
  ReaderHeaderBody,
  ReaderHeader,
  ReaderBody,
  ErrorWell,
  AbsoluteOverflowX,
  InputHint,
  AckOptions,
  AckOptionsModal,
  AckModal,
  AckArray
  //ComponentHeader
  //...AckModals
]