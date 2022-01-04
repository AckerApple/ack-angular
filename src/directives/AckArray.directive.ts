import { BehaviorSubject, Subscription } from "rxjs"
import {
  EventEmitter, Output, Input,
  ContentChildren, Directive, IterableDiffers, IterableDiffer
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
}) export class AckArray{
  array$sub?: Subscription
  iterableDiffer: IterableDiffer<any[]>//change detection
  inited?: boolean
  pushed:any = {}

  inSort:boolean = false
  sortArray:sortDef[] = []


  @Input() pageAt:number = 0//when to page aka maxrows
  @Input() pages!: any
  @Output() pagesChange: BehaviorSubject<any> = new BehaviorSubject(null)
  //@Output() pagesChange:EventEmitter<any[][]> = new EventEmitter()

  //a chance to know when current viewed page should be zero
  @Input() page:number = 0
  @Output() pageChange:EventEmitter<number> = new EventEmitter()

  //describes unique fields of an object
  @Input() keyMap:any
  @Output() keyMapChange = new EventEmitter()

  loopStart:EventEmitter<boolean> = new EventEmitter()
  loopEach:EventEmitter<loop> = new EventEmitter()
  loopEnd:EventEmitter<void> = new EventEmitter()

  @ContentChildren(AckAggregate) AckAggregates?: AckAggregate[]
  //@ContentChildren(AckArrayJoin) AckArrayJoins:AckArrayJoin[]

  @Input() idKeys!: string[]
  @Input() merge?: boolean//new arrays will merge with original

  @Input() array!: any[]//-deprecated use array$
  @Output() arrayChange = new EventEmitter()

  @Input() array$?: EventEmitter<any[]>

  constructor(
    private _iterableDiffers: IterableDiffers
  ){
    //super()
    //watch deep changes
    const f = this._iterableDiffers.find([])
    this.iterableDiffer = f.create();
  }

  ngOnDestroy(){
    if( this.array$sub ){
      this.array$sub.unsubscribe()
    }
  }

  ngOnInit(){
    if( this.keyMapChange.observers.length ){
      if( !this.keyMap ){
        Promise.resolve().then(()=>{
          this.keyMap = {}
          this.keyMapChange.emit(this.keyMap)
        })
      }

      this.pushCreateMap()
    }
  }

  ngAfterViewInit(){
    if( this.AckAggregates ){
      this.pushAggregates( this.AckAggregates )
    }

    this.inited = true
    Promise.resolve().then(()=>
      this.loop( true )
    )
  }

  //watch array deep changes
  ngDoCheck() {
    if( !this.inited )return

    let changes = this.iterableDiffer.diff( this.array );
    if (changes) {
      Promise.resolve().then(()=>
        this.loop( false )
      )
    }
  }

  ngOnChanges(changes: any){
    if( changes.array$ ){
      if( this.array$sub ){
        this.array$sub.unsubscribe()
        delete this.array$sub
      }

      if( this.array$ ){
        this.array$sub = this.array$.subscribe(array=>{
          if( this.merge ){
            mergeArrays(this.array as any, array, this.idKeys as any)
          }else{
            const reset = this.array != array
            this.array = array
            this.loop( reset )
          }
        })
      }
    }

    let loop = changes.array ? true : false

    if( changes.pageAt ){
      this.pushCreatePages()
      loop = true
    }

    if( this.inited && loop ){
      Promise.resolve().then(()=>
        this.loop( true )
      )
    }
  }

  pushAggregates( aggs:AckAggregate[] ){
    aggs.forEach(agg=>{
      let memory: any

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

  getItemValueByKeys(item: any, keys:string[]){
    for(let  x=0;  x < keys.length; ++ x){
      let keyName = keys[x]
      item = item[keyName]
      if( item==null )return null
    }
    return item
  }

  loop( reset:boolean ) : void{
    //super.loop( reset )

    if(!this.array){
      this.array = []
    }

    this.loopStart.emit( reset )

    const last = this.array.length
    for(let x=0; x < last; ++x){
      this.loopEach.emit({index:x, item:this.array[x]})
    }

    //this.performJoins()

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

    this.loopStart.subscribe(reset=>{
      pos = 0
      last = this.array.length

      if( reset ){
        this.pageChange.emit( this.page=0 )
      }

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
      if(this.page && this.page >= this.pages.length) {
        this.pageChange.emit(this.page = 0)
      }

      //this.pagesChange.emit( this.pages )
      this.pagesChange.next( this.pages )
    })
  }

  //reduce array down to one item
  only(item: any){
    this.array.length = 0
    this.array.push(item)
    this.arrayChange.emit(this.array)
    this.loop( true )
  }

  //looks up id or the item itself is an ID
  getItemId(item: any):any{
    return this.idKeys && this.idKeys[0] && item[ this.idKeys[0] ]
  }

  getCompareArray():(string|number)[]{
    if(this.array && this.idKeys && this.idKeys.length){
      const idKey = this.idKeys[0]
      return this.array.map(item=>item[idKey])
    }

    return this.array || []
  }

  selected(item: any): boolean {
    return this.itemIndex(item) >= 0 ? true : false
  }

  itemIndex(item: any):number {
    const array = this.getCompareArray()

    for(let x=array.length-1; x >= 0; --x){
      if( dataKeysMatch(array[x], item, this.idKeys) ){
        return x
      }
    }

    return -1
  }

  toggle(item: any){
    const index = this.itemIndex(item)

    if(index>=0){
      return this.splice(index)
    }

    return this.push( item )
  }

  push(item: any){
    this.param().push(item)
    this.loop( false )
    return this
  }

  unshift(item: any){
    this.param().unshift(item)
    return this
  }

  splice(x:number, y=1){
    this.param().splice(x,y)
    this.loop( false )
    return this
  }

  param(){
    if(!this.array)this.arrayChange.emit( this.array=[] )
    return this.array
  }

  toggleSort(
    arrayKey: string|string[],
    sortType?: "date"|"time"|"datetime"|"int"|"number"|string|number
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

    const toKey: any = function(a:any, index:number=0){
      const value = a[ arrayKey[index] ]
      if( value==null || index == arrayKey.length-1 ){
        return value
      }
      return toKey(value, index+1)
    }

    if( arrayKey.constructor!=Array ){
      arrayKey = [ <string>arrayKey ]
    }

    const numberSort = !isNaN(<number>sortType) || ["int","number"].indexOf(<string>sortType)>=0

    if( numberSort ){
      if(asc){
        this.array.sort( (a,b)=>Number(toKey(a)) - Number(toKey(b)) )
      }else{
        this.array.sort( (b,a)=>Number(toKey(a)) - Number(toKey(b)) )
      }
    }else{
      switch(sortType){
        case "date":
        case "time":
        case "datetime":
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
    }

    //cleanup
    if( this.sortArray.length>3 ){
      this.sortArray.pop()
    }

    this.inSort = false
    this.loop( true )//cause pages to be updated
  }
}


export function dataKeysMatch(ao: any, an: any, idKeys: string[]):boolean{
  for(let x=idKeys.length-1; x >= 0; --x){
    let idKey = idKeys[x]
    if(ao[idKey]!=null && ao[idKey] !== an[idKey] ){
      return false
    }
  }
  return true
}

export function mergeArrays(
  arrayOriginal:any[],
  arrayNew:any[],
  idKeys:string[]
){

  //removals
  for(let x=arrayOriginal.length-1; x >= 0; --x){
    let ao = arrayOriginal[x]
    let an = arrayNew[x]

    //quick match
    if(an && dataKeysMatch(ao,an,idKeys) ){
      continue
    }

    let found = false
    for(let xx=arrayNew.length-1; xx >= 0; --xx){
      if( dataKeysMatch(ao, arrayNew[xx], idKeys)){
        found = true
        break
      }
    }

    if(found)continue

    arrayOriginal.splice(x,1)
  }

  //merge and add
  for(let x=0; x < arrayNew.length; ++x){
    let ao = arrayOriginal[x]
    let an = arrayNew[x]
    let found = false

    //try by index match first, may to near identical arrays
    if(ao && dataKeysMatch(ao,an,idKeys)){
      mergeObjects(ao, an)
      continue
    }

    //try to match by loop against loop
    for(let xx=arrayOriginal.length-1; xx >= 0; --xx){
      ao = arrayOriginal[xx]
      if( dataKeysMatch(ao,an,idKeys) ){
        mergeObjects(ao, an)
        found = true
        continue
      }
    }

    if( found ){
      continue
    }

    //not found, add to array
    //arrayOriginal.unshift(an)
    arrayOriginal.splice(x,0,an)
  }
}


function mergeObjects(ao:object, an:object){
  for(let x in ao){
    delete ao[x]
  }
  Object.assign(ao, an)
}