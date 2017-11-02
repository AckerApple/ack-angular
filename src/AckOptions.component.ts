import { array } from "./pipes.class"

import {
  ElementRef,
  ContentChildren,
  TemplateRef,
  Component,
  Input,
  Output,
  EventEmitter
} from "@angular/core"

import { string as ackOptions } from "./templates/ack-options.pug"
@Component({
  selector:'ack-options',
  template:ackOptions
}) export class AckOptions{
  @Input() array = []
  @Input() stylize = true
  @Input() multiple = false
  //@Input() modelIsArray = false//support array of options to model-array, that array only allows a length of one
  @Input() toggleable = false//multiple must be false

  templateRef:TemplateRef<any>
  @ContentChildren(TemplateRef) templateRefs:any//TemplateRef<any>[]
  @Input() inputTemplateRefs:any//TemplateRef<any>[]

  @Input() model
  @Output() modelChange = new EventEmitter()
  
  @Input() ref
  @Output() refChange = new EventEmitter()
  
  @Input() arrayKey:string
  @Input() modelKey:string
  @Input() arrayToModelKey:string

  constructor(public ElementRef:ElementRef){}

  ngOnInit(){
    setTimeout(()=>{
      //this.ref = Object.assign(this,this.ref)
      this.refChange.emit(this)
    }, 0)
  }

  ngAfterViewInit(){
    setTimeout(()=>this.applyTemplates(), 0)
  }

  applyTemplates(){
    const refs = this.inputTemplateRefs && this.inputTemplateRefs._results ? this.inputTemplateRefs : this.templateRefs

    for(let x=refs._results.length-1; x >= 0; --x){
      if( refs._results[x]._def.references.option ){
        this.templateRef = refs._results[x]
      }
    }
    
    if( !this.templateRef && refs.length ){
      this.templateRef = refs._results[ this.templateRefs.length-1 ]
    }
  }

  selectItem(item){
    const value = this.getArrayItemValue(item)

    if( this.multiple ){// || this.modelIsArray
      const modelIndex = this.modelIndex( item )
      if(modelIndex>=0){
        this.model.splice(modelIndex, 1)
      }else{
        this.model.push( this.getArrayItemModel(item) )
      }
    }else{
      if(this.toggleable && this.model==value){
        this.model = null
      }else{
        this.model = this.getArrayItemModel(item)
      }
    }

    this.emitChange()
  }

  emitChange(){
    this.modelChange.emit( this.model )

    const form = getParentByTagName(this.ElementRef.nativeElement,'form')
    if(form)this.fireFormEvents(form)
  }

  fireFormEvents(form){
    let event = document.createEvent("HTMLEvents");
    event.initEvent("input", true, true);
    form.dispatchEvent(event)

    event = document.createEvent("HTMLEvents");
    event.initEvent("change", true, true);
    form.dispatchEvent(event)
  }

  getArrayItemModel(item){
    if(this.arrayToModelKey!=null){
      if(this.arrayToModelKey==''){
        return item
      }
      
      const split = this.arrayToModelKey.split('.')
      var scope = item
      while(split.length){
        if(scope==null)return null
        let key = split.shift()
        scope = scope[ key ]
      }
      return scope
    }
    return this.getArrayItemValue( item )
  }

  getArrayItemValue(item){
    if(!this.arrayKey)return item

    let items = this.arrayKey.split('.')
    var scope = item
    while(items.length){
      if( scope==null )return null
      scope = scope[ items.shift() ]
    }

    return scope
  }

  getModelValueToArrayItem(modelValue){
    if(!this.modelKey)return modelValue

    let items = this.modelKey.split('.')
    var scope = modelValue
    while(items.length){
      if( scope==null )return null
      scope = scope[ items.shift() ]
    }

    return scope
  }

  modelIndex(item){
    this.model = array(this.model)
    for(let i=this.model.length-1; i >= 0; --i){
      let value = this.getArrayItemValue( item )
      let modelValue = this.getModelValueToArrayItem( this.model[i] )
      if( value == modelValue )return i
    }
    return -1
  }

  isItemSelected(item){
    return this.modelIndex(item)>=0
  }

  getItemClass(item):string{
    const selected = this.isItemSelected(item)
    let string = ''
    
    if(this.stylize){
      string += 'cursor-pointer pad-h pad-v-sm border-grey-6x border-bottom '
    }

    if(this.stylize && selected){
      string += 'bg-warning '
    }

    if(this.stylize && !selected){
      string += 'hover-bg-grey-5x '
    }

    return string

  }
}

export function getParentByTagName(node, tagname) {
  let parent;
  if (node === null || tagname === '') return;
  parent  = node.parentNode;
  tagname = tagname.toUpperCase();

  while (parent && parent.tagName !== "HTML") {
    if (parent.tagName === tagname) {
      return parent;
    }
    parent = parent.parentNode;
  }

  return;
}
