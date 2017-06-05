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
