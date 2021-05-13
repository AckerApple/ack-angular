import {
  Component,
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

@Directive({selector:'[enterKey]'})
export class EnterKey{
  @Output() enterKey:EventEmitter<Event> = new EventEmitter()
  constructor(public element:ElementRef){
    element.nativeElement.addEventListener('keydown', (event: any)=>{
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
    element.nativeElement.addEventListener('keydown', (event: any)=>{
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
    element.nativeElement.addEventListener('keydown', (event: any)=>{
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
    element.nativeElement.addEventListener('keydown', (event: any)=>{
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


/** adds form element onchange listener via addEventListener('change') that calls formChanged scope argument */
@Directive({
  selector:'[formChanged]'//Also try : (formAlter) directive that watches the form "input" event
}) export class FormChanged{
  //static parameters = [[ElementRef]]
  onChange: any

  @Output() formChanged = new EventEmitter()

  constructor(public element:ElementRef){
    this.onChange = (event: Event)=>{
      this.formChanged.emit(event)
    }

    element.nativeElement.addEventListener('change',this.onChange)
  }

  ngOnDestroy(){
    this.element.nativeElement.removeEventListener('change',this.onChange)
  }
}

/** when ever change or input form event triggered, bindings are called */
@Directive({
  selector:'[formAlter]'
}) export class FormAlter{
  //-static parameters = [[ElementRef]]
  onChange: (Event: Event)=>void
  @Output() formAlter:EventEmitter<Event> = new EventEmitter()

  constructor(public element:ElementRef){
    this.onChange = (event:Event)=>{
      this.formAlter.emit(event)
    }

    element.nativeElement.addEventListener('input',this.onChange)
    element.nativeElement.addEventListener('change',this.onChange)
  }

  ngOnDestroy(){
    this.element.nativeElement.removeEventListener('change',this.onChange)
    this.element.nativeElement.removeEventListener('input',this.onChange)
  }
}