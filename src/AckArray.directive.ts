import {
  EventEmitter, Output, Input,
  ContentChildren, Directive
} from "@angular/core"
import { AckAggregate } from "./AckAggregate.directive"

export interface loop{
  index:number
  item:any
}

@Directive({
  selector:'ack-array'
}) export class AckArray {
  inited:boolean
  pushed:any = {}
  
  @Input() idKey
  
  @Input() ref
  @Output() refChange = new EventEmitter()
  
  @Input() pageAt:number = 0
  @Input() pages:any[]
  @Output() pagesChange = new EventEmitter()

  @Input() array:any[]
  @Output() arrayChange = new EventEmitter()

  //an system of creating an object by keys of array nodes
  @Input() keyMap:any = {}
  @Output() keyMapChange = new EventEmitter()

  loopStart:EventEmitter<void> = new EventEmitter()
  loopEach:EventEmitter<loop> = new EventEmitter()
  loopEnd:EventEmitter<void> = new EventEmitter()

  @ContentChildren(AckAggregate) AckAggregates:AckAggregate[]

  ngOnInit(){
    setTimeout(()=>{
      this.refChange.emit(this)
    }, 0)

    if( this.keyMapChange.observers.length ){
      this.pushCreateMap()
    }
  }

  ngAfterViewInit(){   
    if( this.AckAggregates ){
      this.pushAggregates( this.AckAggregates )
    }

    this.inited = true
    setTimeout(()=>this.loop(), 0)
  }

  ngOnChanges(changes){
    let loop = changes.array ? true : false

    if( changes.pageAt ){
      this.pushCreatePages()
      loop = true
    }
    
    if( this.inited && loop ){
      setTimeout(()=>this.loop(), 0)
    }
  }

  pushAggregates( aggs:AckAggregate[] ){
    aggs.forEach(agg=>{
      let memory
      switch( agg.type ){
        //default is to sum
        default:{
          this.loopStart.subscribe( ()=>memory=0 )

          this.loopEach.subscribe(loop=>{
            const value = this.getItemValueByKeys(loop.item, agg.keys)
            if( value ){
              memory = memory + value
            }
          })

          this.loopEnd.subscribe(()=>{
            agg.output = memory
            agg.outputChange.emit( memory )
          })
        }
      }
    })
  }

  getItemValueByKeys(item, keys:string[]){
    for(let  x=0;  x < keys.length; ++ x){
      let keyName = keys[x]
      item = item[keyName]
      if( item==null )return null
    }
    return item
  }

  loop(){
    this.loopStart.emit()

    const last = this.array.length
    for(let x=0; x < last; ++x){
      this.loopEach.emit({index:x, item:this.array[x]})
    }
    
    this.loopEnd.emit()
  }

  pushCreateMap(){
    if( this.pushed.createMap )return

    this.pushed.createMap = true
    
    this.loopStart.subscribe(()=>this.keyMap={})
    
    this.loopEach.subscribe(ob=>{
      let key = this.getItemId( ob.item )
      this.keyMap[ key ] = ob.item
    })
    
    this.loopEnd.subscribe(()=>this.keyMapChange.emit(this.keyMap))    
  }

  pushCreatePages(){
    if( this.pushed.createPages )return

    this.pushed.createPages = true

    let pos = 0
    let last = this.array.length

    this.loopStart.subscribe(()=>{
      pos = 0
      last = this.array.length
      this.pages = this.pages || []
      this.pages.length = 0//dont break binding if pages remembered
      this.pages.push([])
    })
    

    this.loopEach.subscribe(ob=>{
      this.pages[pos].push( ob.item )

      if( this.pages[pos].length==this.pageAt && ob.index<last-1 ){
        this.pages.push([])
        ++pos
      }
    })

    this.loopEnd.subscribe(()=>{
      this.pagesChange.emit( this.pages )
    })
  }

  //reduce array down to one item
  only(item){
    this.array.length = 0
    this.array.push(item)
    this.arrayChange.emit(this.array)
    this.loop()
  }

  //looks up id or the item itself is an ID
  getItemId(item, itemIndexName?:string):any{
    itemIndexName = itemIndexName || this.idKey
    return itemIndexName ? item[itemIndexName] : item
  }

  getCompareArray(){
    if(this.array && this.idKey){
      return this.array.map(item=>item[this.idKey])
    }

    return this.array || []
  }

  selected(item){
    return this.itemIndex(item) >= 0 ? true : false
  }

  itemIndex(item, itemIndexName?:string){
    const array = this.getCompareArray()
    const itemId = this.getItemId(item, itemIndexName)
    
    for(let x=array.length-1; x >= 0; --x){
      if(itemId==array[x]){
        return x
      }
    }

    return -1
  }

  toggle(item){
    const index = this.itemIndex(item)

    if(index>=0){
      return this.splice(index)
    }
    
    return this.push( item )
  }

  push(item){
    this.param().push(item)
    this.loop()
    return this
  }

  unshift(item){
    this.param().unshift(item)
    return this
  }

  splice(x:number, y=1){
    this.param().splice(x,y)
    this.loop()
    return this
  }

  param(){
    if(!this.array)this.arrayChange.emit( this.array=[] )
    return this.array
  }
}