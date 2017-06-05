import { array } from "./pipes.class"

import {
  ContentChild,
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
  @Input() public array = []
  @Input() public stylize = true
  @Input() public multiple = false
  @Input() public toggleable = false//multiple must be false
  @Input() public model
  @Output() public modelChange = new EventEmitter()
  @ContentChild(TemplateRef) @Input() public templateRef:TemplateRef<any>
  @Input() private ref
  @Output() public refChange = new EventEmitter()
  @Input() public arrayKey:string

  ngOnInit(){
    setTimeout(()=>{
      this.ref = Object.assign(this,this.ref)
      this.refChange.emit(this.ref)
    }, 0)
  }

  selectItem(item){
    const value = this.getArrayValue(item)

    if(this.multiple){
      const modelIndex = this.modelIndex( item )
      if(modelIndex>=0){
        this.model.splice(modelIndex, 1)
      }else{
        this.model.push( value )
      }
    }else{
      if(this.toggleable && this.model==value){
        this.model = null
      }else{
        this.model = value
      }
    }
    this.modelChange.emit(this.model)
  }

  getArrayValue(item){
    if(!this.arrayKey)return item

    let items = this.arrayKey.split('.')
    var scope = item
    while(items.length){
      if( scope==null )return null
      scope = scope[ items.shift() ]
    }

    return scope
  }

  modelIndex(item){
    this.model = array(this.model)
    for(let i=this.model.length-1; i >= 0; --i){
      let value = this.getArrayValue( item )
      if( value==this.model[i] )return i
    }
    return -1
  }

  getItemClass(item){
    return {
      'cursor-pointer pad-h pad-v-sm border-grey-6x border-bottom' : this.stylize,
      'bg-warning' : this.stylize && this.modelIndex(item)>=0,
      'hover-bg-grey-5x' : this.stylize && this.modelIndex(item)<0
    }
  }
}
