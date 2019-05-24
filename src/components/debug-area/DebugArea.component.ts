import {
  TemplateRef, ElementRef,
  Input, ContentChildren, ContentChild,
  Directive, Component, QueryList
} from "@angular/core"
import { string as template } from "./debug-area.template"

@Directive({
  selector:"debug-item"
}) export class DebugItem{
  @Input() name:string
  @Input() value:any
  @Input() type:"array"|string
  @ContentChild("rowTitle") rowTitle:TemplateRef<ElementRef>
}

@Component({
  selector:"debug-area",
  template:template
}) export class DebugArea{
  editsMap:any = {}//map of debug edits
  debugItem:DebugItem
  
  @ContentChildren(DebugItem) DebugItems:QueryList<DebugItem>

  ngAfterViewInit(){
    if(this.DebugItems.length===1){
      Promise.resolve().then(()=>this.debugItem = this.DebugItems.first)
    }
  }

  //update data from debug area
  updateDataByJsonString(item:any, string:string){
    try{
      const json = JSON.parse(string)
      for(let x in item)delete item[x]
      Object.assign(item, json)
      //this.arrayChange.emit(this.array)
    }catch(e){
      console.error('invalid json string')
    }
  }

  apply(item:any, json:string){
    const ob = JSON.parse(json)
    Object.assign(item, ob)
  }
}

export const declarations = [
  DebugItem, DebugArea
]