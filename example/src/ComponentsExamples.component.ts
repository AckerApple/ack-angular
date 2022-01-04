import { getServerTime } from "./functions"
import {
  PageScrollService
  //, PageScrollInstance
} from "ngx-page-scroll-core"
import { Component } from "@angular/core";
import { animations } from "ack-angular-fx"
import { array as arrayOfObjects } from "./arrayOfObjects"

export interface selected{
  letter:string
  number:number
}

@Component({
  selector: "components-examples",
  templateUrl: './components-examples.html',
  animations
}) export class ComponentsExamples { 
  fxClass:string = "bounce"
  fxForMs:number
  initArray = [{value:0},{value:1},{value:2}]
  views:any = {}

  absoluteOverflowX:number
  elementWidthModel:number
  elementHeightModel:number
  htmlWidthModel:number
  htmlHeightModel:number
  pxFromHtmlTop:number
  screenScrollModelY:number
  screenScrollHeightDiff:number
  screenWidthModel:number
  screenHeightModel:number
  innerHtmlModel:any
  
  shakeOn:boolean
  shakeForMs: number
  shakeConstant: any
  shakeOnType: any
  fxOn: any
  fxConstant: any
  selectOnDelay: any
  selectOn: any
  focusOn: any
  focusOnDelay: any
  preventEnterCount: any
  backspaceCount: any
  enterCountKey: any
  formAlters: any
  formChanges: any
  showAckOptionsObjectModal: any
  showAckOptionsStringModal: any
  ackOptionStringModal: any
  showAckModal: any
  showAckModalModel: any
  ackOptionString: any
  sumNumber: any
  arrayPages: any
  arrayMap: any

  elementSizeModel: {height:number, width:number}
  viewScreenHeightModel: number | boolean
  viewScreenWidthModel: number | boolean
  screenScrollCount:number = 0

  viewShakeOn:boolean

  viewSelectOn
  statusOnlineModel:boolean
  statusOfflineModel:boolean
  escapeCountKey:number
  error:Error
  contentArray = []
  modalBackgroundColor:string = "rgba(255,255,255,0.95)"
  modalWrapStyle
  ackOptionArray = []
  ackOptionArrayModal = [{key:"b"}]
  pageAt:number = 2
  arrayOfObjects = arrayOfObjects
  selectedArray:selected[] = [
    arrayOfObjects[2],
    arrayOfObjects[4],
    arrayOfObjects[6],
    arrayOfObjects[8]
  ]
  absoluteOverflowXActive = true//control the absolute-overflow-x example
  contentModel = 'This is some demo content being displayed'
  query: any
  cssClasses: any

  constructor(public PageScrollService:PageScrollService){}

  causeError(){
    this.error = new Error( "An intended error was caused @ "+getServerTime() )
  }

  scrollToModuleImport(){
    setTimeout(()=>{
      this.PageScrollService.scroll({document:document, scrollTarget:"#Import AckModule"})
    }, 600)
  }

  setModalWrapStyle(v){
    try{
      this.modalWrapStyle = JSON.parse(v)
    }catch(e){}
  }
}
