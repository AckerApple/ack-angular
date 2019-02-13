import { getServerTime } from "./functions"
import {
  PageScrollService, PageScrollInstance
} from "ngx-page-scroll"
import { Component } from "@angular/core";
import { animations } from "ack-angular-fx"
import { array as arrayOfObjects } from "./arrayOfObjects"
import {string as componentsExamples} from "./templates/components-examples.pug"

export interface selected{
  letter:string
  number:number
}

@Component({
  selector: "components-examples"
  ,template: componentsExamples
  ,animations:animations
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
  elementSizeModel:number
  viewScreenHeightModel:number
  viewScreenWidthModel:number
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

  constructor(public PageScrollService:PageScrollService){}
  
  causeError(){
    this.error = new Error( "An intended error was caused @ "+getServerTime() )
  }

  scrollToModuleImport(){
    setTimeout(()=>{
      const pageScrollInstance = PageScrollInstance.simpleInstance(document, "#Import AckModule");
      this.PageScrollService.start(pageScrollInstance);
    }, 600)
  }

  setModalWrapStyle(v){
    try{
      this.modalWrapStyle = JSON.parse(v)
    }catch(e){}
  }
}
