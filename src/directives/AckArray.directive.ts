import {
  EventEmitter, Output, Input,
  ContentChildren, Directive,
  IterableDiffers, 
  IterableDiffer
} from "@angular/core"
import { AckAggregate } from "./AckAggregate.directive"

export interface sortDef{
  arrayKey : string | string[]
  asc      : boolean
}

export interface loop{
  index:number
  item:any
}

@Directive({
  selector:"ack-array",
  exportAs:"AckArray"
}) export class AckArray {
  iterableDiffer: IterableDiffer<any[]>;
  inited:boolean
  pushed:any = {}

  inSort:boolean = false
  sortArray:sortDef[] = []
  
  @Input() idKey
  
  @Input() ref:AckArray
  @Output() refChange:EventEmitter<AckArray> = new EventEmitter()
  

  @Input() pageAt:number = 0//when to page aka maxrows
  @Input() pages:any[]
  @Output() pagesChange = new EventEmitter()
  //a chance to know when current viewed page should be zero
  @Input() page:number = 0
  @Input() pageChange:EventEmitter<number> = new EventEmitter()

  @Input() array:any[]
  @Output() arrayChange = new EventEmitter()

  //an system of creating an object by keys of array nodes
  @Input() keyMap:any
  @Output() keyMapChange = new EventEmitter()

  loopStart:EventEmitter<void> = new EventEmitter()
  loopEach:EventEmitter<loop> = new EventEmitter()
  loopEnd:EventEmitter<void> = new EventEmitter()

  @ContentChildren(AckAggregate) AckAggregates:AckAggregate[]

  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit(){
    setTimeout(()=>{
      this.refChange.emit(this)
    }, 0)

    if( this.keyMapChange.observers.length ){
      if( !this.keyMap ){
        setTimeout(()=>{      
          this.keyMap = {}
          this.keyMapChange.emit(this.keyMap)
        }, 0)
      }

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

  ngDoCheck() {
    if(!this.inited)return 
    
    let changes = this.iterableDiffer.diff(this.array);
    if (changes) {
      setTimeout(()=>this.loop(), 0)
    }
  }

  ngOnChanges(changes){
    if( changes.pageAt ){
      this.pushCreatePages()
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

  loop() : void{
    if(!this.array)return

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

  /** adds to loop functionality how to create pages */
  pushCreatePages(){
    if( this.pushed.createPages )return

    this.pushed.createPages = true

    let pos = 0
    let last = 0
    
    this.pageChange.emit( this.page=0 )

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

  toggleSort(
    arrayKey:string|string[],
    sortType:"date"|"int"|string|number
  ){
    if(this.inSort)return false
    
    this.inSort = true
    let asc = false//most lists come pre sorted asc, our default should be desc
    
    if(this.sortArray.length && this.sortArray[0].arrayKey){
      asc = !this.sortArray[0].asc
      this.sortArray[0] = {
        arrayKey:arrayKey,
        asc:!this.sortArray[0].asc
       }
    }else{
      this.sortArray.unshift({
        arrayKey:arrayKey,
        asc:asc
     })
    }

    const toKey = function(a:any, index:number=0){
      const value = a[ arrayKey[index] ]
      if( value==null || index == arrayKey.length-1 ){
        return value
      }
      return toKey(value, index+1)
    }

    if( arrayKey.constructor!=Array ){
      arrayKey = [ <string>arrayKey ]
    }

    const numberSort = !isNaN(<number>sortType) && sortType==="int"

    if( !numberSort ){
      switch(sortType){
        case "date":
          if(asc){
            this.array.sort( (a,b)=>{
              a = new Date( toKey(a,0) )
              b = new Date( toKey(b,0) )
              return a=="Invalid Date" || a>b ? -1 : b=="Invalid Date" || a<b ? 1 : 0
            })
          }else{
            this.array.sort( (b,a)=>{
              a = new Date( toKey(a,0) )
              b = new Date( toKey(b,0) )
              return a=="Invalid Date" || a>b ? -1 : b=="Invalid Date" || a<b ? 1 : 0
            })
          }
          break;

        default://STRING BASED SORT
          if(asc){
            this.array.sort( (a,b)=>String(toKey(a)||"").toLowerCase()>String(toKey(b)||"").toLowerCase()?1:-1 )
          }else{
            this.array.sort( (b,a)=>String(toKey(a)||"").toLowerCase()>String(toKey(b)||"").toLowerCase()?1:-1 )
          }
      }
    }else{
      if(asc){
        this.array.sort( (a,b)=>Number(toKey(a)) - Number(toKey(b)) )
      }else{
        this.array.sort( (b,a)=>Number(toKey(a)) - Number(toKey(b)) )
      }
    }

    //cleanup
    if( this.sortArray.length>3 ){
      this.sortArray.pop()
    }

    this.inSort = false
    this.loop()//cause pages to be updated
  }
}
