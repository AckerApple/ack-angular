import {
  Output, EventEmitter, TemplateRef, ElementRef,
  Input, ContentChildren, ContentChild,
  Directive, Component, QueryList
} from "@angular/core"

@Directive({
  selector: "debug-item"
}) export class DebugItem{
  @Input() name!: string
  @Input() value: any
  @Input() type!: "array"|string
  @ContentChild("rowTitle") rowTitle!: TemplateRef<ElementRef>
  @Output() save:EventEmitter<any> = new EventEmitter()
}

@Component({
  selector:"debug-area",
  templateUrl: './debug-area.template.html',
}) export class DebugArea{
  edit!:boolean
  dataString!: string
  editsMap?: any = {}//map of debug edits
  debugItem!:DebugItem

  @ContentChildren(DebugItem) DebugItems!: QueryList<DebugItem>

  ngAfterViewInit(){
    if(this.DebugItems.length===1){
      Promise.resolve().then(()=>this.debugItem = this.DebugItems.first)
    }
  }

  //update data from debug area
  updateDataByJsonString(item:any, string:string, debugItem: DebugItem){
    try{
      const json = JSON.parse(string)
      for(let x in item)delete item[x]
      Object.assign(item, json)
      //this.arrayChange.emit(this.array)
      debugItem.save.emit(item);
    }catch(e){
      console.error('invalid json string')
    }
  }

  apply(item:any, json:string, debugItem: DebugItem){
    const ob = JSON.parse(json)
    Object.assign(item, ob)
    debugItem.save.emit(item);
  }
}

export const debugDeclarations = [
  DebugItem, DebugArea
]